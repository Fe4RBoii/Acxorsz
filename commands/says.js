module.exports.run = async (client, message, args) => {

    const Discord = require('discord.js')
	const lookout = 'prices are monthly.'

    const sayMessage = args.join(" ");
    const member = message.author
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    const price1 = new Discord.RichEmbed()
    .setTitle(sayMessage)
	.addField('1024MB', '€1,00')
	.addField('2048MB', '€2,00')
	.addField('30724MB', '€1,00')
	.addField('1024MB', '€1,00')
	.addField('1024MB', '€1,00')
	.addField('1024MB', '€1,00')
	.setFooter(lookout)
    .setColor('RANDOM')
    message.channel.send(price1);

    }
module.exports.config = {
  command: "says"
}