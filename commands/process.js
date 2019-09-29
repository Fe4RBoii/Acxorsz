module.exports.run = async (client, message, cont) => {

    const moment = require("moment");
    const NowTime = (`${moment().format("YYYY-MM-DD HH:mm:ss")}`);

    let totalSeconds = process.uptime();
    let realTotalSecs = Math.floor(totalSeconds % 60);
    let days = Math.floor((totalSeconds % 31536000) / 86400);
    let hours = Math.floor((totalSeconds / 3600) % 24);
    let mins = Math.floor((totalSeconds / 60) % 60);

    const Discord = require('discord.js')
    const webhooksend = require("quick.hook")

    const embed = new Discord.RichEmbed()
    .setTitle("Process")
    .setColor('#36393E')
    .setDescription(`Process: **${totalSeconds}**`)
    .setFooter("© 2018 Overloaded | All Rights Reserved")
    .setTimestamp()
  message.channel.send({embed});
  }
  
  module.exports.config = {
    command: "process"
  }
  