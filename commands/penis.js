module.exports.run = async (client, message, args) => {

    const Discord = require('discord.js')
    const package = require("../package.json")

    const sayMessage = args.join("   ");
    const member = message.author
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(`8==================================================================================================================D  «« So far so good, you have a big cock!`);

    }
module.exports.config = {
  command: "penis"
}