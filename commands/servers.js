module.exports.run = async (client, message, guild, member, members, args) => {

    const Discord = require('discord.js')

    const guildNames = client.guilds.map(g => g.name).join("\n")

    message.channel.send("**" + guildNames + "**");
    message.channel.send(client.users.size)

    }
module.exports.config = {
  command: "servers"
}