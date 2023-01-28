module.exports = {
  id: "menu-test",
  /**
   *
   * @param {import("discord.js").SelectMenuInteraction} interaction
   * @param {import("../../Structures/bot")} client
   */
  async execute(interaction, client) {
    await interaction.reply({
      content: `You selected: ${interaction.values[0]}!`,
    });
  },
};
