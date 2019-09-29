module.exports.run = async (client, message, args) => {

    const Discord = require('discord.js')

    const sayMessage = args.join(" ");
    const member = message.author
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    const sayMessage2 = new Discord.RichEmbed()
    .setTitle(":mega:  " + sayMessage + "  :mega:")
    .setFooter(`Requested by: ${message.author.tag}`)
    .setColor('#36393E')
    message.channel.send(sayMessage);

    }
module.exports.config = {
  command: "say"
}