const { Component, EmbedBuilder, ActionRowBuilder, ButtonStyle, ButtonBuilder } = require("discord.js");
module.exports = {
    id: "edit_ticket",
    /**
     *
     * @param {import("discord.js").SelectMenuInteraction} interaction
     * @param {import("../../Structures/bot")} client
     */
    async execute(interaction, client) {
        const row = new ActionRowBuilder()
              .addComponents(
                new ButtonBuilder()
                    .setLabel("Claim")
                    .setEmoji("✅")
                    .setCustomId("claim-ticket")
                    .setStyle(ButtonStyle.Success),

                    new ButtonBuilder()
                    .setLabel("Close")
                    .setEmoji("950290040121098250")
                    .setCustomId("close-ticket")
                    .setStyle(ButtonStyle.Danger)
                            )
      await interaction.reply({
        embeds:[
            new EmbedBuilder()
             .setTitle(`Welcome To Ticket Management Panel`)
        .setDescription(`There Are Two Buttons Click Them To Use The Panel`)
    ], components: [row]
      });
    },
  };
  