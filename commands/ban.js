module.exports.run = async (client, message, args) => {
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

if (message.mentions.members.size === 0)
return message.reply("Please mention a user to ban");

if (!message.guild.me.hasPermission("BAN_MEMBERS"))
return message.send("You don't have the permission to ban!");

let banMember = message.mentions.members.first();

const embed = new Discord.RichEmbed()
  .setColor('#36393E')
  .setTitle("Banned user")
  .setDescription(banMember + " has been banned from the Discord server!")
  .setFooter("Banned by: " + message.author.tag)
webhooksend(message.channel), embed, {
  name: 'Moderation',
  icon: 'https://i.imgur.com/X9eAmHm.png'
}

const logEmbed = new Discord.RichEmbed()
  .setColor('#36393E')
  .setTitle("Banned user")
  .setDescription(banMember + " has been kicked from the Discord server!")
  .setFooter("Banned by: " + message.author.tag)
webhooksend(message.guild.channels.get(sconfig.modLog), logEmbed, {
  name: "Logs",
  icon: "https://gamemaster2030.github.io/Logs.png"
})

banMember.ban();


    warnMember.send("<:alert:430032794043809792> You've have been banned in **Electry Development** for: " + reason);
}

module.exports.config = {
  command: "ban"
}
