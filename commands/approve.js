exports.run = (client, message, cont) => {
  const Discord = require("discord.js");
  const webhook = require("../webhook/index.js")
  const modRole = message.guild.roles.find("name", "Tester")

  if(!message.member.roles.has(modRole.id)) return message.reply("You don't have permission to do this!")

  let msgid = cont[0];
  if(!cont[0]) return message.reply("Please give a message id")
  const emoji = message.guild.emojis.find("name", "approve")

  const channel = message.guild.channels.find("id", "468076306463064065")
  let msg = channel.fetchMessage(msgid).then((i) => {
    i.clearReactions()
    function addemoji() {
      i.react(emoji)
    }
    setTimeout(addemoji, 500)
  })

}

module.exports.config = {
  command: "approve"
}
