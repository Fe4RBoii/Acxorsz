module.exports.run = async (client, message, cont) => {
  const sconfig = require('../botsettings.json');
  const Discord = require('discord.js')
  const webhooksend = require("quick.hook")

  const modRole = message.guild.roles.find("name", "Staff");
if (!modRole){
  console.error("Staff role don't exist in: " + message.guild.name + "!")
  message.channel.send("Staff role don't exist!")
}
if (!message.member.roles.has(modRole.id))
return message.reply("Sorry, you don't have permissions to use this! :no_entry_sign: ");

  let alertTekst = cont.join(" ");
  const embed = new Discord.RichEmbed()
  .setTitle("Alerts created by: " + `${message.author.tag}`)
  .setColor("#36393E")
  .setDescription(alertTekst)
  .setFooter("Alert created by: " + message.author.tag)
  .setTimestamp()
message.reply("I have created your alert in the channel: " + "<#" + sconfig.alertChannel + ">!")
message.guild.channels.get(sconfig.alertChannel).send({embed})
message.guild.channels.get(sconfig.alertChannel).send("@everyone")
}

module.exports.config = {
  command: "alert"
}
