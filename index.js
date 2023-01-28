require("dotenv/config");
const BOT = require("./Structures/bot");
const client = new BOT();
const fs = require("fs");

client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    default: {
      botsCanWin: false,
      embedColor: 'Aqua',
      reaction: "🎉",
      lastChance: {
        enabled: true,
        content: '⚠️ | **Last chance to enter this giveaway!** | ⚠️',
        threshold: 10000,
        embedColor: 'Aqua'
      }
    }
  });

  client.giveawaysManager.on("giveawayReactionAdded", (giveaway, member, reaction) => {
    console.log(`${member.user.tag} entered giveaway #${giveaway.messageId} (${reaction.emoji.name})`);
  });
  
  client.giveawaysManager.on("giveawayReactionRemoved", (giveaway, member, reaction) => {
    console.log(`${member.user.tag} unreact to giveaway #${giveaway.messageId} (${reaction.emoji.name})`);
  });
  
  client.giveawaysManager.on("giveawayEnded", (giveaway, winners) => {
    console.log(`Giveaway #${giveaway.messageId} ended! Winners: ${winners.map((member) => member.user.username).join(', ')}`);
  });

client.init();