module.exports.run = async (client, message, cont) => {
  const Discord = require("discord.js");
  const sconfig = require('../botsettings.json');
  const db = require("quick.db");

  const modRole = message.guild.roles.find("name", "Staff");
  if (!modRole){
    console.error("Staff role don't exist!")
    message.channel.send("Staff role don't exist!")
  }
  if (!message.member.roles.has(modRole.id))
    return message.reply("Sorry, you don't have permissions to use this! :no_entry_sign: ");

  db.set(`lastkill_${message.author.id}`, null);
  db.set(`lastdaily_${message.author.id}`, null);
}
module.exports.config = {
  command: "skip"
}
