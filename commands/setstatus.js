module.exports.run = (client, message, args, e, error) => {
    const Discord = require('discord.js');
    const config = require('../botsettings.json');
    const perms = new Discord.RichEmbed()
    .setTitle('**⚠️ ERROR**')
    .setDescription(`\n\n**No permissions!\n\n ` + `Only the owner of the bot can use this command!**`)
    .setColor('#ff8000')

    const use = new Discord.RichEmbed()
    .setTitle('**⚠️ ERROR**')
    .setDescription(`\n\nUse: **${config.prefix}playing <playing, watching, listening, streaming> <text>**`)
    .setColor('#ff8000')
    if(message.author.id != '405391811222437890') return message.channel.send(perms);
    if (args[0] === undefined) return message.channel.send(use);
    switch(args[0]){
        case 'playing': //setting activity to "playing"
        if(message.author.id != '405391811222437890') return message.channel.send(perms)
        client.user.setActivity(args.splice(1).join(' '), {type: 'playing'});
        message.channel.send('**Playing** status ready');
        break;
        case 'watching': //setting activity to "watching"
        if(message.author.id != '405391811222437890') return message.channel.send(perms)
        client.user.setActivity(args.splice(1).join(' '), {type: 'watching'});
        message.channel.send('**Wathcing** status ready')
        break;
        case 'listening': //setting activity to "listening"
        if(message.author.id != '405391811222437890') return message.channel.send(perms)
        client.user.setActivity(args.splice(1).join(' '), {type: 'listening'});
        message.channel.send('**Listening** status ready');
        break;
        case 'streaming': //setting activity to "listening"
        if(message.author.id != '405391811222437890') return message.channel.send(perms)
        client.user.setActivity(args.splice(1).join(' '), {type: 'streaming'});
        message.channel.send('**Listening** status ready');
        break;
    }
}
module.exports.config = {
    command: "playing"
  }
  