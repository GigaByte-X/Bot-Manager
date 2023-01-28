const { Client } = require("discord.js");
module.exports = {
  name: "messageCreate",
  /**
 * 

 * @param {Client} client 
 */
  async execute(message, client) {
    let messageCount = new Map();
    // Ignore messages from bots
    if (message.author.bot) return;

    // Increment the message count for the member
    const count = messageCount.get(message.member.id);
    messageCount.set(message.member.id, count + 1);

    // Check if the member has sent the same message 7 times
    if (count == 6) {
      // Warn the member
      message.channel.send(`${message.member}, please do not spam the chat.`);

      // // Mute the member
      // message.member.voice.setMute(true);
    }
  },
};
