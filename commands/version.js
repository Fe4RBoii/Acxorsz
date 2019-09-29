module.exports.run = async (client, message, args) => {

    const Discord = require('discord.js')
    const package = require("../package.json")

    const sayMessage = args.join("   ");
    const member = message.author
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    const sayMessage2 = new Discord.RichEmbed()
    .setTitle("My cracked version :joy:")
    .addField(`\n\nVersion:`, `${package.version} :egg:`)
    .setFooter(`Version: ${package.version} 🥚`)
    .setColor('#36393E')
    message.channel.send(sayMessage2);

    }
module.exports.config = {
  command: "version"
}