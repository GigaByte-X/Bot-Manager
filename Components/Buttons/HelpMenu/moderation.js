const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
module.exports = {
  id: "moderation",
  /**
   *
   * @param {import("discord.js").ButtonInteraction} interaction
   * @param {import("../../../Structures/bot")} client
   */
  async execute(interaction, client) {
    const Emded = new EmbedBuilder()
    .setTitle(`Commands -//- Moderation`)
    .setDescription(`>>> \`\`\` [none] \`\`\``)
    .setTimestamp()

    const row = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('information')
            .setLabel('Information!')
            .setEmoji('ℹ️')
            .setStyle(ButtonStyle.Primary),

            new ButtonBuilder()
            .setCustomId('home')
            .setLabel('Home!')
            .setEmoji('🏡')
            .setStyle(ButtonStyle.Success),

            new ButtonBuilder()
            .setCustomId('moderation')
            .setLabel('Moderation!')
            .setEmoji('🔶')
            .setStyle(ButtonStyle.Primary),
 );
  await interaction.update({
    embeds: [Emded],
    components: [row],
    content: "Treo Manager | Moderation Menu | Server Manager!",
  })
  },
};
