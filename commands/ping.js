module.exports.run = async (client, message, cont) => {

    message.channel.send('Pong! Your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
}
  
  module.exports.config = {
    command: "ping"
  }
  