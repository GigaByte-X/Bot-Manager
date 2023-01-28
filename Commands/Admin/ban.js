const {
    SlashCommandBuilder,
    EmbedBuilder,
    PermissionFlagsBits,
  } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("ban")
      .setDescription("Ban a user from the discord server.")
      .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
      .addUserOption((option) =>
        option
          .setName("target")
          .setDescription("User to be banned.")
          .setRequired(true)
      )
      .addStringOption((option) =>
        option.setName("reason").setDescription("Reason for the ban.")
      ),
  
    async execute(interaction, client) {
      const { guild, options } = interaction;
  
      const user = options.getUser("target");
      const reason = options.getString("reason") || "No reason provided.";
  
      const member = await interaction.guild.members.fetch(user.id);
  
      const errEmbed = new EmbedBuilder()
        .setDescription(
          `You can't take action on ${user.username} since they have a higher role.`
        )
        .setColor(0xc72c3b);
  
      if (
        member.roles.highest.position >= interaction.member.roles.highest.position
      )
        return interaction.reply({ embeds: [errEmbed], ephemeral: true });
  
      const Private = new EmbedBuilder()
        .setColor("#00b1a6")
        .setDescription(
          `:asucc: You have been **Banned** from **${guild.name}**\nWith Reason: **${reason}**`
        )
        .setFooter({
          text: `Powered by ${client.user.username}`,
          iconURL: "https://i.ibb.co/VM1hFyt/Profile-picture.gif",
        })
        .setTimestamp();
  
      await member.ban({ reason });
      
      member.send({ embeds: [Private] }).catch((err) => {
        if (err.code !== 50007) return console.log(err);
      });
  
      const embed = new EmbedBuilder()
        .setDescription(`Succesfully banned ${user} with reason: ${reason}`)
        .setColor(0x5fb041)
        .setTimestamp();
  
      await interaction.reply({
        embeds: [embed],
      });
    },
  };
  