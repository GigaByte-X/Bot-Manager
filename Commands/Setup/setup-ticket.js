const {
    SlashCommandBuilder,
    CommandInteraction,
    PermissionFlagsBits,
    Client,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder
} = require("discord.js");
const ms = require("ms");
const Enmap = require("enmap")
const myEnmap = new Enmap({ name: "points" })

module.exports = {
    data: new SlashCommandBuilder()
        .setName("setup-ticket")
        .setDescription("Setups Ticket System - Commands")

        .addChannelOption((option) => 
        option.setName("channel")
        .setDescription("The Channel Where The Ticket Setup Will Get Setted Up")
        .setRequired(true))

        .addRoleOption((option) =>
        option.setName("role")
        .setDescription("The Ticket Supporter Id")
        .setRequired(true))

        .addChannelOption((option) => 
        option.setName("parent")
        .setDescription("The Category wher The Tickets Will Open")
        .setRequired(true))

        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */
    execute(interaction, client) {
        const channel = interaction.options.getChannel("channel")
        const role = interaction.options.getRole("role")
        const parent = interaction.options.getChannel("parent")

        const Date = myEnmap.ensure(interaction.guild.id, {
            Channel: channel.id,
            Role: role.id,
            Parent: parent.id,
            Claimer: "",
            Closer: "",
            ticketChannel: "",
            User: ""
            
        }, "ticketSystem")

        const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setLabel("Open A Ticket")
            .setEmoji("🎟️")
            .setStyle(ButtonStyle.Secondary)
            .setCustomId("open-ticket"),

            new ButtonBuilder()
            .setLabel("Ping Me")
            .setEmoji("1006483064685334588")
            .setStyle(ButtonStyle.Secondary)
            .setCustomId("pingme")
        )

        interaction.channel.send({ embeds:[
            new EmbedBuilder()
            .setTitle(`**Create a Ticket / Application / Partnership / Request**`)
        .setDescription(`>If you need **help**, want to **apply** or want to request a **custom Service / Support**, then open a Ticket.

        **To open a Ticket, select in the Menu down below, the correct Category-Type for your needs!**`)
        ], components: [row] })
    },
};
