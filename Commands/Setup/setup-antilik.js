const {
    SlashCommandBuilder,
    Client,
    EmbedBuilder,
    ButtonBuilder,
    ActionRowBuilder,
    ChatInputCommandInteraction,
    PermissionFlagsBits,
  } = require("discord.js");
  const antilinkSchema = require("../../Structures/models/antilink");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("antilink")
      .setDescription("Prevent users from sending link on the server.")
      .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  
    /**
     * @param {Client} client
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(interaction, client) {
      const guild = interaction.guild;
  
      await interaction.deferReply();
  
      let requireDB = await antilinkSchema.findOne({ _id: guild.id });
  
      const sistema = requireDB?.logs === true ? "📗 Activated" : "📕 Disabled";
  
      const e2 = new EmbedBuilder()
        .setTitle(`🔗 Antilink`)
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("Aqua")
        .setImage("https://cdn.discordapp.com/attachments/921924771883667467/1059914271926014012/standard_2.gif")
        .setDescription(
          `Antilink from ${guild.name}\n\nThe system is currently [\`${sistema}\`](https://discord.gg/kCh8cC2fEs).\nUse the button below to configure the server antilink!!`
        )
        .setFooter({
          text: guild.name,
          iconURL: guild.iconURL({ dynamic: true }),
        })
        .setTimestamp(new Date());
  
      const b = new ButtonBuilder()
        .setLabel(`Activate`)
        .setCustomId(`true`)
        .setStyle(3)
        .setEmoji(`📗`);
  
      const b1 = new ButtonBuilder()
        .setLabel(`Disable`)
        .setCustomId(`false`)
        .setStyle(4)
        .setEmoji(`📕`);
  
      const ac = new ActionRowBuilder().addComponents(b, b1);
  
      const tf = await interaction.editReply({ embeds: [e2], components: [ac] });
  
      const coll = tf.createMessageComponentCollector();
  
      coll.on("collect", async (ds) => {
        if (ds.user.id !== interaction.user.id) return;
  
         else if (ds.customId === `false`) {
          const e = new EmbedBuilder()
            .setDescription(`📕 Antilink system has been set to **Disabled**!`)
            .setColor("Red");
  
          ds.update({ embeds: [e], components: [] });
  
          await antilinkSchema.findOneAndUpdate(
            { _id: guild.id },
            {
              $set: { logs: false },
            },
            { upsert: true }
          );
        }
      });
    },
  };