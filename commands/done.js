module.exports.run = async (client, message, args) => {
    const config = require('../botsettings.json');
    const argss = message.content.slice(config.prefix.length).trim().split(/ +/g);
    var attempts;

if (argss[0] === "done") {
    if(!message.member.roles.some(r=>["Staff"].includes(r.name)) )
    return message.reply("Sorry, you don't have permissions to use this! :no_entry_sign: ");
    if (!message.channel.name.startsWith("ticket")) return message.channel.send("This channel, is not a ticket channel!");
    if (attempts == 1) {
        let donename = message.content.slice(config.prefix.length + argss[0].length)
        message.channel.send(`You have successfully marked this channel to: **done**`)
        await message.channel.delete();
        attempts = 0;
        return;
    }
    message.channel.send("Are you sure that this ticket is done? Type than again `!done`");
    }
    attempts = 1;
}

module.exports.config = {
    command: "done"
  }