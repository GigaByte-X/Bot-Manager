const { Component, EmbedBuilder, ActionRowBuilder, ButtonStyle } = require("discord.js");
module.exports = {
    id: "true",
    /**
     *
     * @param {import("discord.js").ButtonInteraction} interaction
     * @param {import("../../Structures/bot")} client
     */
    async execute(interaction, client) {
        coll.on("collect", async (ds) => {
        if (ds.user.id !== interaction.user.id) return;
        const e = new EmbedBuilder()
        .setDescription(`📗 Antilink system has been set to **Active**!`)
        .setColor("Aqua");

      ds.update({ embeds: [e], components: [] });

      await antilinkSchema.findOneAndUpdate(
        { _id: guild.id },
        {
          $set: { logs: true },
        },
        { upsert: true }
      );
    },
        )
},
};
  