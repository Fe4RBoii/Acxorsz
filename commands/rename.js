module.exports.run = async (client, message, args) => {
    const config = require('../botsettings.json');
    const argss = message.content.slice(config.prefix.length).trim().split(/ +/g);

if (argss[0] === "rename") {
    if(!message.member.roles.some(r=>["Staff"].includes(r.name)) )
    return message.reply("Sorry, you don't have permissions to use this! :no_entry_sign: ");
    let rename = message.content.slice(config.prefix.length + argss[0].length)
    if (!message.channel.name.startsWith("ticket")) return message.channel.send("This channel, is not a ticket channel!");
    if (!argss[1]) return message.channel.send("Enter a valid name!");
    message.channel.setName(`ticket-${rename}`);
    message.channel.send(`You have successfully changed the name of this ticket channel to: ticket-${argss[1].toLowerCase()}`)
    }
}

module.exports.config = {
    command: "rename"
  }