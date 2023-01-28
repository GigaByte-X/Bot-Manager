const { SlashCommandBuilder } = require(`@discordjs/builders`);
const { EmbedBuilder } = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
  .setName("confess")
  .setDescription("Sends a confession to the selected channel")

  .addChannelOption((option) =>
  option
      .setName("channel")
      .setDescription("channel you want to confess in")
      .setRequired(true)
)
.addStringOption((option) =>
  option
      .setName("confession")
      .setDescription("your confession")
      .setRequired(true)
),

  async execute ( interaction ) {

        const {client, guild} = interaction;
        const userID = interaction.user.id
        const channelsend = interaction.options.getChannel("channel");


      await interaction.reply({
      embeds: [new EmbedBuilder()
             .setColor("Random")
             .setDescription(`Succesfully sent your confession in ${channelsend}`)], ephemeral: true });
          

        const embed2 = new EmbedBuilder()
        .setColor("Random")
        .setTitle(`New Confession:`)
        .setDescription(`${interaction.options.getString("confession")}`)
        .setTimestamp()
        .setFooter({
          text: "/confession to submit a confession"
        });

      channelsend.send({ embeds: [embed2]})
  }
}