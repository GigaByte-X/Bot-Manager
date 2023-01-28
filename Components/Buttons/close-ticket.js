const { ButtonBuilder } = require("@discordjs/builders");
const { Component, EmbedBuilder, ActionRowBuilder, ButtonStyle } = require("discord.js");
const Enmap = require("enmap")
const myEnmap = new Enmap({ name: "points" })

module.exports = {
    id: "close-ticket",
    /**
     *
     * @param {import("discord.js").ButtonInteraction} interaction
     * @param {import("../../Structures/bot")} client
     */
    async execute(interaction, client) {
  myEnmap.set(interaction.guild.id,interaction.user.username,"ticketsystem.claimer")
  const claimer = myEnmap.get(interaction.guild.id,"ticketsystem.claimer")
  const user = myEnmap.get(interaction.guild.id,"ticketsystem.User")


  //interaction.channel.permissionOverwrites.set([
  //  {
  //      id: user.id,
 //       deny: ["Send_Messages"],
//
 //   },
 // ]);
  interaction.reply({ embeds:[
    new EmbedBuilder()
.setDescription(`:thumbsup: **This ticket will be closed in a few seconds!**`)
]})

  setTimeout(() => {
interaction.channel.delete()
  }, 3000)
    },
  };
  