const {
    SlashCommandBuilder,
    CommandInteraction,
    EmbedBuilder,
    PermissionFlagsBits,
    Client,
    ActionRowBuilder, 
    ButtonStyle,
    ButtonBuilder
} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("shards")
        .setDescription("Shards - commands"),
        
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */
    execute(interaction, client) { 
        interaction.reply({ embeds:[
            new EmbedBuilder()
            .setTitle(`**KadeX -//- <:K_locate:1065548560126443530> -//- Shards**`)
        .setDescription(`**<:K_strong:1065548564228485150> Uptime: 56m 4s
        <a:K_on:1065549096582119464> C 1 [3 - 5]
        <:K_strong:1065548564228485150> Uptime: 55m 19s
        <a:K_on:1065549096582119464> C 2 [6 - 8]
        <:K_strong:1065548564228485150> Uptime: 54m 34s
        <a:K_on:1065549096582119464> C 3 [9 - 11]
        <:K_strong:1065548564228485150> Uptime: 53m 49s
        <a:K_on:1065549096582119464> C 4 [12 - 14]
        <:K_strong:1065548564228485150> Uptime: 53m 4s
        <a:K_on:1065549096582119464> C 5 [15 - 17]
        <:K_strong:1065548564228485150> Uptime: 52m 19s
        <a:K_on:1065549096582119464> C 6 [18 - 20]
        <:K_strong:1065548564228485150> Uptime: 51m 34s
        <a:K_on:1065549096582119464> C 7 [21 - 23]
        <:K_strong:1065548564228485150> Uptime: 50m 49s
        <a:K_on:1065549096582119464> C 8 [24 - 26]
        <:K_strong:1065548564228485150> Uptime: 50m 4s
        <a:K_on:1065549096582119464> C 9 [27 - 29]
        <:K_strong:1065548564228485150> Uptime: 49m 19s
        <a:K_on:1065549096582119464> C 10 [30 - 32]
        <:K_strong:1065548564228485150> Uptime: 48m 34s
        <a:K_on:1065549096582119464> C 11 [33 - 35]
        <:K_strong:1065548564228485150> Uptime: 47m 49s**`)
        ], });
    },
};
