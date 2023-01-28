const { InteractionCollector, EmbedBuilder } = require("discord.js");
const Schema = require("../../Structures/models/Welcome");

module.exports = {
  name: "guildMemberAdd",
  /**
   * @param {import("discord.js").GuildMember} member
   * @param {import("../../Structures/bot")} client
   */
  async execute(member, client) {
    Schema.findOne({ Guild: member.guild.id }, async ( err, data ) => {
      if (!data) return;
      let channel = data.Channel;
      let Msg = data.Msg || "";
      let Role = data.Role;

      const { user, guild } =  member;
      const welcomeChannel = member.guild.channels.cache.get(data.Channel);

      const welcomeEmbed = new EmbedBuilder()
      .setTitle("**New Member Joined The Server**")
      .setDescription(data.Msg)
      .setColor("0x037821")
      .addFields({ name: 'Total Members', value: `${guild.memberCount}` })
      .setTimestamp();

      welcomeChannel.send({ embeds: [welcomeEmbed] });
      member.role.add(data.Role);
    })
    //console.log(member.user.username + " joined " + member.guild.name);
  },
};
