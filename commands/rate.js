module.exports.run = async (client, message, args) => {
	
const Discord = require("discord.js");

let ratus = message.mentions.members.first();
if(!ratus) return message.channel.send("Tag someone to rate them!");

let rates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

let result = Math.floor((Math.random() * rates.length));

if(ratus.user.id === message.author.id) {
  return message.channel.send(`**${message.author.username}**, I'd give you ${result}/10 <:thinking:>`);
} else return message.channel.send(`I'd give **__${ratus.user.username}__** ${result}/10 <:thinking:>`);

}
module.exports.config = {
    command: "rate"
}