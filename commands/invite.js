exports.run = (client, message, args, guild) => { //dingen definen
const discord = require('discord.js'); //haal discord.js binnen

async function replyWithInvite(message) {
  let invite = await message.channel.createInvite(`Requested with command by ${message.author.tag}`).catch(console.log);

  message.reply(invite + `Here's your invite: ${invite}`);
	}
}
module.exports.config = {
  command: "invite"
}