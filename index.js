const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const moment = require("moment");
const db = require('quick.hook');
const weather = require("weather-js");
const ms = require("ms");
const request = require("request");
const NowTime = (`${moment().format("YYYY-MM-DD HH:mm:ss")}`);
const botsettings = require('./botsettings.json');
const https = ["https://", "www.", ".net", ".nl", ".org", ".com"];
const Linter = require('eslint').Linter;
const linter = new Linter();
const newUsers = [];

client.commands = new Discord.Collection();

const package = require("./package.json");

client.commands = new Discord.Collection();

client.on("ready", () => {
    client.user.setStatus('dnd', 'Made by KwinkyWolf') 
      setInterval(game, 2500);
      function game() {
          var random = Math.floor((Math.random() * 4) + 1);
          if (random === 1) client.user.setActivity(`Use ${botsettings.prefix}help`);
      }
  });

  const serverStats = {
      memberCountID: '626144523445075969'
  }

  client.on('guildMemberAdd', member => {
     
        if (member.guild.id !== serverStats.memberCountID) return;

        client.channels.get(serverStats.memberCountID).setName(`🌞Total Members • ${member.guild.members.filter(m => !m.user.bot).size}`);
  });

  client.on('guildMemberRemove', member => {
     
    if (member.guild.id !== serverStats.memberCountID) return;

    client.channels.get(serverStats.memberCountID).setName(`🌞Total Members • ${member.guild.members.filter(m => !m.user.bot).size}`);
});


fs.readdir('./commands/', (err, files) => {
    if(err) console.log(err);

    var jsfiles = files.filter(f => f.split('.').pop() === 'js');
    if (jsfiles.length <= 0) { return console.log('No commands found...')}
    else { console.log(jsfiles.length + ' commands found.') }

    jsfiles.forEach((f, i) => {
        var cmds = require(`./commands/${f}`);
        console.log(`Command ${f} loading...`);
        client.commands.set(cmds.config.command, cmds);
    })



})

client.on("guildMemberAdd", (member) => {
	const role = member.guild.roles.find("name", "Gebruiker");
	member.addRole(role);
});

client.on('message', async message => {
    var sender = message.author;
    var msg = message.content.toUpperCase();

    var cont = message.content.slice(botsettings.prefix.length).split(" ");
    var args = cont.slice(1);

    if (!message.content.startsWith(botsettings.prefix)) return;

    var cmd = client.commands.get(cont[0])
    if (cmd) cmd.run(client, message, args);

    if (message.channel.type != 'text') return message.channel.send('Please use commands in the server!');

    if (msg === botsettings.prefix + 'RELOAD') {
        message.channel.send({embed:{description:"All Commands Reloaded"}})
        message.channel.send('All Commands Reloaded')
    }
    var lol = require("./botsettings.json").prefix;

if (message.channel.type === "dm") { //if the channel is a DM channel
    var args = message.content.split(" ").slice(0)
    var args = args.slice(0).join(" ") //create the args

    if (message.content.startsWith(lol)) return message.channel.send(":x: Please use commands in real server! :x:") //if the message is a command
    message.channel.send("This message has been send to the staff! :incoming_envelope:");
    if (message.content.startsWith(lol)) return
    if (args.length > 256) return message.reply("Your message content too many characters :/") //if the message contnt more than 256 character, what fields do not allow
    var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle("New request in DM!")
        .addField(args, "Send by: " + message.author.username + " with the ID: " + message.author.id)
    bot.guilds.get("501782299885436938").channels.get("503137283063545858").send(embed) //send the embed in a specific channel
}


if (message.content.startsWith(lol + "reply")) {
    if (message.author.id !== "405391811222437890") return message.reply('You cannot use that!')
    var args = message.content.split(" ").slice(0)
    var Rargs = message.content.split(" ").slice(2).join(" ")
    var userID = args[1]
    if (isNaN(args[1])) return message.reply("This is not an ID!") //if args is Not A Number!
    var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle("the staff answered you!")
        .setDescription(Rargs)
        .setFooter("this message was sent to you by: " + message.author.username + " !")
    bot.users.get(userID).send(embed)
    message.channel.send("Send!").catch(console.error) //send the message
    //it may be that if the user has blocked your bot that it does not work
}
});

client.login(process.env.TOKEN);
