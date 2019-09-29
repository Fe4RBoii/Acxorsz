module.exports.run = async (client, message, args) => {
    const Discord = require('discord.js');
    const config = require('../botsettings.json');

    var random;
 
    random =
        [
            "#1d64b4",
            "#14dcb4",
            "#008000",
            "#ff8000",
            "#ff8000",
            "#40e0d0",
            "#028af1",
            "#dc143c",
            "#c3f6fe",
            "#ffb400",
            "#afff00",
            "#532cea",
            "#36d44a",
            "#6ff521",
            "#2441e2",
            "#7b72b6"
        ]
 
    var randomColor = random[Math.floor(Math.random() * random.length)]
 
    const use = new Discord.RichEmbed()
    .setTitle('**⚠️ ERROR**')
    .setDescription(`\n\nUse: **${config.prefix}help <moderator, general, fun>**`)
    .setColor('#ff8000')
    if (args[0] === undefined) return message.channel.send(use);
 
    if (args[0] === `settingsz`) {
        let embed = new Discord.RichEmbed()
 
            .setAuthor('Settings help list of ' + message.guild.name + '')
            .setColor(randomColor)
            // .setDescription(`${config.prefix}settings setconfig.prefix <new_config.prefix> - **Verander de bot zijn config.prefix**\n\n${config.prefix}settings setlogkanaal <new_logkanaal> - **Verander het logkanaal**\n\n${config.prefix}settings setstaffrole <new_staffrole> - **Verander de staffrole**\n\n`)
            .setDescription(`${config.prefix}settings setconfig.prefix <config.prefix> - **Verander de bot zijn config.prefix**\n\n${config.prefix}settings setlogkanaal <logkanaal> - **Verander het logkanaal**`)
            .setTimestamp()
            .setFooter('Settings')
 
        //\n\n${config.prefix}settings setbadwords <true, false> - **Verander het badwords status**\n\n${config.prefix}settings addbadword <new_badword> - **Add een badword**
 
        //\n\n${config.prefix}settings setlevelupkanaal <new_levelupkanaal> - **verander het levelup kanaal, hier komen de levelup messages in**
        message.channel.send('You have the `settings` help list in your dm!')
        message.author.send(embed).catch(err => {
            message.channel.send(`Error: ` + err)
        });
    }
    if (args[0] === `general`) {
        let embed1 = new Discord.RichEmbed()
 
            .setAuthor('General help list of ' + message.guild.name + '')
            .setColor(randomColor)
            //.setDescription(`Eerst setup de bot!\n\nMet: ${config.prefix}setup <value> (adminrole)`)
            .setDescription('<> is obligated. [] is optional.')
            .addBlankField(true)
            .addField('Help:', `${config.prefix}help <plugin> - krijg de help lijst`)
            .addField('Ping:', `${config.prefix}ping - bekijk de bot zijn ping`)
            .addField('Support:', `${config.prefix}support <text> - vraag support aan in de SupportDiscord van de bot`)
            .addField('Idea:', `${config.prefix}idea <idea (A detailed explanation of your hastebin / pastebin idea is also allowed)> - sent an idea!`)
            .addField('Userinfo:', `${config.prefix}userinfo @<user> - get the userinfo of someone`)
            .addField('Botinfo:', `${config.prefix}botinfo - get info of the bot`)
            .addField('Invite:', `${config.prefix}invite - invite the bot`)
            .addField('Serverinfo:', `${config.prefix}serverinfo - get info of the server`)
        message.channel.send('You have the `general` help list in your dm!')
        message.author.send(embed1).catch(err => {
            message.channel.send(`Error: ` + err)
        });
    }
    if (args[0] === `moderator`) {
        let embed2 = new Discord.RichEmbed()
 
            .setAuthor('Moderator help list of ' + message.guild.name + '')
            .setColor(randomColor)
            //.setDescription(`Eerst setup de bot!\n\nMet: ${config.prefix}setup <value> (adminrole)`)
            .setDescription('<> is obligated. [] is optional.')
            .addBlankField(true)
            .addField('Warn:', `${config.prefix}warn @<user> <reason> - warn a user`)
            .addField("Say:", `${config.prefix}say <text> - let the bot say something`)
            .addField("Clear:", `${config.prefix}clear <amount (1-100)> - clear an amount of messages`)
        message.channel.send('You have the `moderator` help list in your dm!')
        message.author.send(embed2).catch(err => {
            message.channel.send(`Error: ` + err)
        });
    }
    if (args[0] === `botowner`) {
        let embed3 = new Discord.RichEmbed()
 
            .setAuthor('Botowner help list of ' + message.guild.name + '')
            .setColor(randomColor)
            //.setDescription(`Eerst setup de bot!\n\nMet: ${config.prefix}setup <value> (adminrole)`)
            .setDescription('<> is obligated. [] is optional.')
            .addBlankField(true)
            .addField('Guildlist:', `${config.prefix}guildlist - bekijk de guilds waar de bot in zit`)
            .addField('Eval:', `${config.prefix}eval - eval iets`)
            .addField('Restart:', `${config.prefix}restart - restart de bot`)
            .addField('Setstatus:', `${config.prefix}setstatus <status ('idle', 'online', 'offline', 'dnd')> - verander de bot zijn status (bugged)`)
            .addField('Setgame:', `${config.prefix}setgame <game> - verander de bot zijn game`)
        message.channel.send('You have the `botowner` help list in your dm!')
        message.author.send(embed3).catch(err => {
            message.channel.send(`Error: ` + err)
        });
    }
    if (args[0] === `fun`) {
        let embed4 = new Discord.RichEmbed()
 
            .setAuthor('Fun help list of ' + message.guild.name + '')
            .setColor(randomColor)
            .setDescription('<> is obligated. [] is optional.')
            .addBlankField(true)
            .addField('8ball:', `${config.prefix}8ball <text> - 8ball`)
            .addField('Mop:', `${config.prefix}mop - let the bot say a DUTCH joke, in DUTCH`)
        message.channel.send('You have the `fun` help list in your dm!')
        message.author.send(embed4).catch(err => {
            message.channel.send(`Error: ` + err)
        });
    }
    if (args[0] === `music`) {
        let embed4 = new Discord.RichEmbed()
 
            .setAuthor('Music help list of ' + message.guild.name + '')
            .setColor('randomColor')
            .setDescription('<> is obligated. [] is optional.')
            .addBlankField(true)
            .addField('SOON')
        message.channel.send('You have the `music` help list in your dm!')
        message.author.send(embed4).catch(err => {
            message.channel.send(`Error: ` + err)
        });
    }
 
 
}
 

module.exports.config = {
    command: "help"
}