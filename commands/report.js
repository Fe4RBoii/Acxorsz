module.exports.run = async (client, message, args) => {
  const sconfig = require('../botsettings.json');
  const Discord = require('discord.js')
  const webhooksend = require("quick.hook")
  let reportedUser = message.mentions.members.first();
  if(reportedUser == null)
    return message.channel.send("Usage: " + sconfig.prefix + "report `@User` `Reason`!")
  if(!reportedUser)
    return message.reply("please mention an user!");
  let reportMessage = args.slice(1).join(" ");
  if(!reportMessage)
    return message.reply("please give up a reason!")
  const embed = new Discord.RichEmbed()
    .setTitle("Report")
    .setColor('#36393E')
    .addField("Message:", reportMessage, true)
    .addField("User:", "<@" + reportedUser.id + ">", true)
    .setFooter("Report created by: " + message.author.tag, "https://cdn.discordapp.com/avatars/464862397669048322/5030ff3a5637759e620c9f65a5701311.png")
    .setTimestamp()
  message.channel.send("Report created!")
  message.guild.channels.get(sconfig.modLog).send({embed});
}

module.exports.config = {
  command: "report"
}
