const { EmbedBuilder } = require("discord.js");

const { QuickDB } = require('quick.db')
const db = new QuickDB;

module.exports = {
    name: "messageCreate",

    async execute(message) {
        
        if (!message.guild || message.author.bot) return;

         const channel = await db.get(`counting_${message.guild.id}`);
         if(!channel) return;

         const ch = message.guild.channels.cache.get(channel);
         if (!ch) return;

         const oldNumber = await db.get(`cc_${message.guild.id}`) || "1";
         const nextNumber = oldNumber + 1;

         const err1  = new EmbedBuilder()
         .setTitle('😂 HAHAH')
         .setDescription(`<@${message.author.id}> Did you know how to count!`)
         .setTimestamp()
         .setColor('Red')

         const err2  = new EmbedBuilder()
         .setTitle('😂 HAHAH')
         .setDescription(`I can not calculate Grandmothers and frogs`)
         .setTimestamp()
         .setColor('Red')

         const succes  = new EmbedBuilder()
         .setDescription(`<@${message.author.id}> let's go , keep goin'!`)
         .setColor('Green')

         if ( ch.id !== message.channel.id) return;

         if(isNaN(message.content)) {
            ch.send({embeds:[err2]})

         } else if(oldNumber > message.content) {
            return ch.send({embeds:[err1]})

         } else if (message.content > nextNumber) {
            return ch.send({embeds:[err1]})

         } else {
            await db.set(`cc_${message.guild.id}`, nextNumber)
            ch.send({embeds:[succes]})
         }
         
    }
}