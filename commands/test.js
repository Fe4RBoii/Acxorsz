exports.run = async (bot, message, args, color, prefix) => {
    const config = require("../botsettings.json");
    const Discord = require('discord.js');
    const client = new Discord.Client()
    const Linter = require('eslint').Linter;
    const linter = new Linter();

    const regex = /```js\n([\s\S]+)\n?```/gi;
    const rules = {
        semi: 'error'
      };

      const match = regex.exec(message.content);

    

    const linterConfig = {
        rules,
        parserOptions: {
          ecmaVersion: 2015
        }
      };

    let messages = linter.verify(code, linterConfig, {filename: 'shitcode.js'});

    let errorMessage = messages.map(
        message => `L:${message.line}:C${message.column}: ${message.message}`
      ).join('\n');
   
    if (message.author.id !== config.ownerID) return message.channel.send("You are not authorized to use this command."); 

    try {
        let codein = args.join(" ");
        let code = eval(codein);

        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.RichEmbed()
        .setAuthor('Evaluate')
        .setColor('GREEN')
        .addField('📥 Input', `\`\`\`js\n${codein}\`\`\``)
        .addField('📤 Output', `\`\`\`js\n${code}\n\`\`\``)
        message.channel.send(embed)
    } catch (e) {
        message.channel.send('\n\n```js\n' + errorMessage + '\n```');
    }
}
  module.exports.config = {
  command: "test"
}