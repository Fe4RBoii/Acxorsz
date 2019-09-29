exports.run = async (bot, message, args) => {
	const Discord = require('discord.js')
	const axios = require('axios');

	let joke = await axios
	.get(`https://moppenbot.nl/api/random`);
	
	let mopembed = new Discord.RichEmbed()
	.setColor("#ff9900")
	.setTitle(joke.author)
	.setDescription(joke.joke)
	.setImage(joke.author_avatar)
	message.channel.send(mopembed)
}
module.exports.config = {
  command: "mop"
}