module.exports.run = async (client, message, cont) => {
  const Discord = require("discord.js");
  const eco = require("discord-eco");
  const config = require('../botsettings.json');
  const oc = message.guild.channels.find("id", "486594878264967196");
  const db = require("quick.db");
  const ms = require("parse-ms");

  let cooldown = 8.64e+7;
  let lastkill = await db.fetch(`lastkill_${message.author.id}`);

  if(lastkill != null && cooldown - (Date.now() - lastkill) > 0) {
    let timeObj = ms(cooldown - (Date.now() - lastkill));
    const embed = new Discord.RichEmbed()
  .setTitle("Wait")
  .setDescription(`You need to wait **${timeObj.hours}h ${timeObj.minutes}m**!`)
    message.channel.send(embed);
    return;
}

  function clear() {
    oc.bulkDelete(100)
        .catch(error => console.log(`Error: ${error}`));
  }

  function policeEscaped() {
    oc.send("`Police officer:` Dispatch, I can't find anybody.")
    oc.send("`Dispatch`: Return to patrol.")
    message.author.send("You've successfully escaped! \nYou've got half of the payment, €150 has been added to your account!");
    eco.updateBalance(message.author.id, 150);
  }
  function policeCaught() {
    oc.send("`Police officer:` Dispatch, I've found the suspect.")
    oc.send("`Dispatch`: Ok, move to engage.")
    oc.send("`Police officer:` I've cuffed the suspect. Can i have a transport for the suspect?")
    oc.send("`Dispatch` 02-PAUL-23, please transport the suspect to the police station.")
    oc.send("`02-PAUL-23:` Ok, roger!")
    oc.send("`Dispatch:` Return to patrol.")
    message.author.send("You've been caught by the police! \nYou've got a fine of €2000!");
    eco.updateBalance(message.author.id, -2000);
  }
  function kill() {
        var random = Math.floor((Math.random() * 3) + 1);
        db.set(`lastkill_${message.author.id}`, Date.now());
        if (random === 1) {
          message.author.send("You've successfully killed someone! You've got €300");
          eco.updateBalance(message.author.id, 300);
        }
        if (random === 2) {
          message.author.send("You've been caught by the police in the act! \nYou've got a fine of €1000!");
          eco.updateBalance(message.author.id, -1000);
        }
        if (random === 3) {
          var location = 1;
          //var location = Math.floor((Math.random() * 3) + 1);
          message.author.send("Someone has called the police. \nTo follow the call goto: <#432920371398836234>");
          oc.send("`Caller:` There's here someone with a firearm and aiming at a person.");
          oc.send("`Dispatch:` What's your location?");
          if(location === 1) {
            oc.send("`Caller:` I'm at a cafe in Amsterdam!");
            oc.send("`Dispatch:` Do you know the name of the cafe?")
            oc.send("`Caller:` The name is: 'Cafe Nol'.")
            oc.send("`Dispatch:` We will send the police to your location!")
            oc.send("`Caller:` Ok thanks! Goodbye!")
            oc.send("`Dispatch:` Goodbye!")
            var caught = Math.floor((Math.random() * 2) + 1);
            if (caught === 1) {
              setTimeout(policeCaught, 500)
            }
            if (caught === 2) {
              setTimeout(policeEscaped, 500)
            }
          }
        }
    }
    kill();
    setTimeout(clear, 2000);
}
module.exports.config = {
  command: "kill"
}
