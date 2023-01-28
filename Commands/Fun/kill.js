const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  Cooldown: true,
  data: new SlashCommandBuilder()
    .setName("kill")
    .setDescription("Kills a target")
    .addUserOption((options) =>
      options.setName("target").setDescription("Select a target to kill")
    ),
  /**
   *
   * @param { ChatInputCommandInteraction } interaction
   * @param { Client } client
   */
  execute(interaction) {
    const { user, options } = interaction;
    let target = options.getUser("target");
    if (!target) target = `<@${interaction.user.id}>`;
    const killmessages = [
      `${target} got killed by ${user}`,
      `${target} died to heart attack`,
      `${target} was killed by a lion`,
      `${user} shot ${target}`,
      `${target} breathed too much and died`,
      `${target} ate shit :poop: and died`,
      `${target} got hit by a car`,
      `${target} drank pee and died`,
      `${target} died to Emotional Damage`,
      `${target} died to dehydration`,
    ]; //add more kill messages
    const finalmessage = `${
      killmessages[Math.floor(Math.random() * killmessages.length)]
    }`;

    const Embed = new EmbedBuilder()
      .setTitle("R.I.P")
      .setDescription(finalmessage)
      .setThumbnail(user.avatarURL({ size: 512 }))
      .setImage(
        "https://cdn.discordapp.com/attachments/1028538200425246733/1062803936089739415/vector-white-wording-rest-peace-rip-symbol-rose-black-background-end-life_39658-283.webp"
      )
      .setColor("Random")
      .setFooter({ text: `Requested by ${user.tag}` })
      .setTimestamp();
    interaction.reply({ embeds: [Embed] });
  },
};
