const { Component, EmbedBuilder, ActionRowBuilder, ButtonStyle } = require("discord.js");
const Enmap = require("enmap")
const myEnmap = new Enmap({ name: "points" })

module.exports = {
    id: "claim-ticket",
    /**
     *
     * @param {import("discord.js").ButtonInteraction} interaction
     * @param {import("../../Structures/bot")} client
     */
    async execute(interaction, client) {
  myEnmap.set(interaction.guild.id,interaction.user,"ticketsystem.claimer")
  const claimer = myEnmap.get(interaction.guild.id,"ticketsystem.claimer")
  const user = myEnmap.get(interaction.guild.id,"ticketsystem.User")

  interaction.reply({ content: `${claimer.username} **Has Claimed Your Support Ticket**`})
  interaction.channel.setName(`⍿✅・sp・${interaction.user.username}`);
    },
  };
  