module.exports.run = async (client, message, args) => {

  
if (args[0] === "idea") {
    if (!args[1]) return message.reply("Use: !idea <your idea for the bot>!");
    const ideaComplete = new Discord.RichEmbed()
    .setTitle('Idea sended!')
    .setDescription(`You have succesfully sent an idea for the bot!\n\nIdea: **${WatGezegd}**\n\nTime: ${NowTime}`)
    .setColor(randomColor)
    message.channel.send(ideaComplete)
    }
}

module.exports.config = {
  command: "idea"
}