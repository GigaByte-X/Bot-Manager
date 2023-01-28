const { Component, EmbedBuilder, ActionRowBuilder, ButtonStyle, ButtonBuilder } = require("discord.js");
const Enmap = require("enmap")
const myEnmap = new Enmap({ name: "points" })

module.exports = {
    id: "open-ticket",
    /**
     *
     * @param {import("discord.js").ButtonInteraction} interaction
     * @param {import("../../Structures/bot")} client
     */
    async execute(interaction, client) {
        const parent = myEnmap.get(interaction.guild.id, "ticketSystem.Parent")
        const role = myEnmap.get(interaction.guild.id, "ticketSystem.Role")
      await interaction.guild.channels.create({
        name: `sp-${interaction.user.username}`,
        topic: `**Support Ticket For -- __${interaction.user.username}__** | By Astrexx`,
        parent: parent,
        PermissionOverwrites: [
            {
                id: interaction.user.id,
                allow: ["Send_Messages"]
            },
            {
                id: role,
                allow: ["Send_Messages"]
            }

        ]

      }).then((channel) =>
      {
        const user = myEnmap.get(interaction.guild.id,interaction.user.id,"ticketsystem.User")
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
        interaction.reply({ content: `${interaction.user}, **Your Ticket Has Been Created** - ${channel}`, ephemeral: true})
        channel.send({ embeds:[
          new EmbedBuilder()
           .setTitle(`Welcome To Your Support Ticket`)
      .setDescription(`Test`)
  ], components: [row]})
      })
    },
  };
  