module.exports = {
    id: "pingme",
    /**
     *
     * @param {import("discord.js").ButtonInteraction} interaction
     * @param {import("../../Structures/bot")} client
     */
    async execute(interaction, client) {
      await interaction.reply({
        embeds: [],
        components: [],
        content: `<:tick:1006483064685334588> **Pinged You Can Open The Ticket** - \`${client.ws.ping}ms\``, ephemeral: true
      })
    },
  };
  