const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
module.exports = {
  id: "information",
  /**
   *
   * @param {import("discord.js").ButtonInteraction} interaction
   * @param {import("../../../Structures/bot")} client
   */
  async execute(interaction, client) {
    const Emded = new EmbedBuilder()
    .setTitle(`Commands -//- Information`)
    .setDescription(`>>> \`\`\` help ' buy ' ping ' say ' together \`\`\``)
    .setTimestamp()

    const row = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('information')
            .setLabel('Information!')
            .setEmoji('ℹ️')
            .setStyle(ButtonStyle.Primary),

            new ButtonBuilder()
            .setCustomId('moderation')
            .setLabel('Moderation!')
            .setEmoji('🔶')
            .setStyle(ButtonStyle.Primary),
 );
  await interaction.update({
    embeds: [Emded],
    components: [row],
    content: "Treo Manager | Information Menu | Server Manager!",
  })
  },
};
