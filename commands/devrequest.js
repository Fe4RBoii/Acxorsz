exports.run = (client, message, cont) => {
  const Discord = require("discord.js");
  const webhook = require("../webhook/index.js")

  if(message.channel.id !== "468076306463064065") return;

  let botid = cont[0];
  let prefix = cont[1];
  const emoji = message.guild.emojis.find("name", "loading")

  message.delete()
  let bot = client.fetchUser(botid)
    .then((bot) => {
      const embed = new Discord.RichEmbed()
        .setTitle(`Hello ${message.author.username},`)
        .setDescription(`Thanks for inviting your bot! It will be tested shortly. When you're bot is approved you will get the Developer role!`)
        .addField("Bot Name", bot.username, true)
        .addField("Bot ID", `${botid}`, true)
        .addField("Bot Owner", message.author, true)
        .addField("Bot Prefix", `${prefix}`, true)
        .setFooter("Thank you, your bot will be tested shortly!")
        .setTimestamp()
        .setThumbnail(bot.avatarURL)
      message.channel.send(embed).then((msg) => {
        msg.react(emoji)
      })
    })

}

module.exports.config = {
  command: "devrequest"
}
