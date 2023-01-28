const {SlashCommandBuilder, CommandInteraction, PermissionFlagsBits, EmbedBuilder, ChannelFlagsBitField, ChannelType} = require('discord.js');

const { QuickDB } = require('quick.db')
const db = new QuickDB;

module.exports = {
    data: new SlashCommandBuilder()
    .setName("counting")
    .setDescription("Clear a specific amount of messages from a target or channel.")
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
    .addChannelOption(option =>
        option.setName("channel")
            .setDescription("Where do you want to start counting!")
            .setRequired(true)
            .addChannelTypes(ChannelType.GuildText)
    ),
    async execute(interaction) {

        const ch = interaction.options.getChannel("channel") || interaction.channel.id;
        const ch1 = await interaction.guild.channels.cache.get(ch.id)

        const embed1 = new EmbedBuilder()
        .setTitle('Counting')
        .setDescription(`Countin started, first number is 0, type next one!`)
        .setColor('Blue')
        .setTimestamp()

        const channel = interaction.channel.id;
        db.set(`counting_${interaction.guild.id}`, ch.id);
        db.set(`cc_${interaction.guild.id}`, 1);

        await ch1.send({embeds:[embed1]})
        
        interaction.reply({content: `${interaction.channel.name} added as counting channel and frist number is 0, type next one!`, ephemeral: true})
    }
};