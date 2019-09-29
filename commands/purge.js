module.exports.run = async (client, message, cont) => {
  const Discord = require("discord.js");
  const sconfig = require('../botsettings.json');
  const modRole = message.guild.roles.find("name", "Staff");
  if (!modRole){
    console.error("Staff role don't exist in: " + message.guild.name + "!")
    message.channel.send("Staff role don't exist!")
  }

if (!message.member.roles.has(modRole.id))
return message.reply("Sorry, you don't have permissions to use this! :no_entry_sign: ");

  async function purge() {
              message.delete();

              if (!message.member.roles.find("name", "Staff")) {
                  message.channel.send('You need the \`Staff\` role to use this command.');
                  return;
              }

              if (isNaN(cont[0])) {
                  message.channel.send('Please use a number as your argsuments. \n Usage: ' + prefix + 'purge <amount>');
                  return;
              }

              if (cont[0] > 100){
                message.channel.send(`Maximum messages I can delete is: **100**`);
                return;
              }

              const fetched = await message.channel.fetchMessages({limit: cont[0]});
              console.log(fetched.size + ' messages found, deleting...');

              message.channel.bulkDelete(fetched)
                  .catch(error => message.channel.send(`Error: ${error}`));

          }


          purge();
    const purgeEmbed = new Discord.RichEmbed()
		.addField("Messages Purged:", cont)
		.addField("Author:", `${message.author.tag}`)
		.setColor('#36393E')
    message.author.send(purgeEmbed)
    const purgeEmbedLog = new Discord.RichEmbed()
    .addField("Messages Purged:", cont)
    .addField("Author:", `${message.author.tag}`)
    .addField("Channel:", `${message.channel.name}`)
    .addField("Amount:", `${cont}`)
    .addField("Purged:", `${message.guild.me.nickname}`)
		.setColor('#36393E')
    message.guild.channels.get(sconfig.modLog).send(purgeEmbedLog)

}
module.exports.config = {
  command: "purge"
}
