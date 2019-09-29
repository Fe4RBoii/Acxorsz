module.exports.run = async (client, message, cont) => {
  const sconfig = require('../botsettings.json');
  const Discord = require('discord.js')
  const webhooksend = require("quick.hook")
  let infoText = `This bot is officialy made for: **Overloaded** \nThis bot is made by: \n**SmikkelBeertjes#8158** \nOverloaded: **https://discord.gg/GdGWWMz**`
  const embed = new Discord.RichEmbed()
  .setTitle("<:info:465470472914731008> Info")
  .setColor('#36393E')
  .setDescription(infoText)
  .setFooter("© 2018 Overloaded | All Rights Reserved", "https://cdn.discordapp.com/avatars/464862397669048322/5030ff3a5637759e620c9f65a5701311.png")
  .setTimestamp()
message.channel.send(embed)
//message.guild.channels.get(message.channel).send({embed});
}

module.exports.config = {
  command: "info"
}
