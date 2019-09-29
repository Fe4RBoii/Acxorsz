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
    return message.reply("Please mention a user to warn");

  let reason = args.slice(1).join(" ");

  let warnMember = message.mentions.members.first();

    const logEmbed = new Discord.RichEmbed()
      .setColor('#36393E')
      .setTitle("Warned user")
      .setDescription(warnMember + " has been warned!")
      .addField("Warned by: ", message.author.tag)
      .addField("Reason: ", reason)
    webhooksend(message.guild.channels.get(sconfig.modLog), logEmbed, {
      name: "Logs",
      icon: "https://gamemaster2030.github.io/Logs.png"
    })


    warnMember.send(":warning: You've have been warned in **Overloaded** for: " + reason);
}

module.exports.config = {
  command: "warn"
}
