exports.run = async (client, message, args, color, prefix) => {
    const config = require("../botsettings.json");
    const Discord = require('discord.js');
    const moment = require("moment");
    require("moment-duration-format");

    const tijd = moment.duration(client.uptime).format("D [days], H [hrs], m [mins], s [secs]")
    const memory = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`
    const statsbericht = new Discord.RichEmbed()
    .addField(`Servers:`, `${client.guilds.size}\n`)
    .addField(`Channels:`, `${client.channels.size}\n`)
    .addField(`Users:`, `${client.users.size}\n`)
    .addField(`Uptime:`, `${tijd}\n`)
    .addField(`Memory:`, `${memory}\n`)
	.setColor('RANDOM')
    message.channel.send(statsbericht)
}	  
module.exports.config = {
  command: "stats"
}