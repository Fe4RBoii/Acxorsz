const discord = require ("discord.js");

exports.run = async (bot, msg, args) => {

	 let sa = require ("superagent");

    let {body} = await sa
    .get(`https://icanhazdadjoke.com/slack`);

    let o = new discord.RichEmbed()
        .setColor('RANDOM')
	.setTitle(body.username(a => a.username))
        .setDescription("**" + body.attachments.map(a => a.text) + "**")
    msg.channel.send(o)
	
}
module.exports.config = {
    command: "joke"
  }