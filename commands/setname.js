module.exports.run = async (client, message, args) => {

    const Discord = require('discord.js')
    const botsettings = require('../botsettings.json')

    const sayMessage = args.join(" ");
    const member = message.author
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    if(message.author.id !== botsettings.ownerID) return message.reply('Your not the bot owner.');
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    client.user.setUsername(sayMessage);

    }
module.exports.config = {
  command: "setname"
}