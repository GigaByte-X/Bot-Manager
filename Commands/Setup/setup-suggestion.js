const {
    SlashCommandBuilder,
    EmbedBuilder,
    PermissionFlagsBits,
    ChannelType,
  } = require("discord.js");
  const suggestionSchema = require("../../Structures/models/Suggestions");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("suggest-setup")
      .setDescription("Setup suggestion.")
      .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
      .addSubcommand((subcommand) =>
        subcommand
          .setName("add")
          .setDescription("Added suggestion channel.")
          .addChannelOption((option) =>
            option
              .setName("channel")
              .setDescription("select channel.")
              .setRequired(true)
              .addChannelTypes(ChannelType.GuildText)
          )
      )
      .addSubcommand((subcommand) =>
        subcommand.setName("delete").setDescription("Delete suggestion channel.")
      ),
    async execute(interaction) {
      const { options, guildId } = interaction;
  
      const subcommand = options.getSubcommand();
      const channel = options.getChannel("channel");
  
      const embed = new EmbedBuilder();
  
      if (subcommand === "add") {
        suggestionSchema.findOne({ Guild: guildId }, async (err, data) => {
          if (err) throw err;
          if (!data) {
            await suggestionSchema.create({
              Guild: guildId,
              Channel: channel.id,
            });
            interaction.reply({
              embeds: [
                embed
                  .setDescription(`${channel} was added the suggestion channel!`)
                  .setColor("Green"),
              ],
              ephemeral: true,
            });
          }
        });
      } else if (subcommand === "delete") {
        suggestionSchema.findOneAndDelete(
          { Guild: guildId },
          async (err, data) => {
            if (err) throw err;
            if (!data) {
              interaction.reply({
                embeds: [embed.setDescription("No data found").setColor("Red")],
                ephemeral: true,
              });
            } else if (data) {
              interaction.reply({
                embeds: [
                  embed
                    .setDescription(`<#${data.Channel}> succesfull deleted`)
                    .setColor("Green"),
                ],
                ephemeral: true,
              });
            }
          }
        );
      }
    },
  };