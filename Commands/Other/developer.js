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
        .setName("developers")
        .setDescription("developer - commands"),
        
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */
    execute(interaction, client) { 
        interaction.reply({ embeds:[
            new EmbedBuilder()
            .setTitle(`**KadeX -//- Developer**`)
        .setDescription(`> **My Lovely Developer - <@!845887110225592350>**

        **He Spent His Imp Time In Making Me Thank You All For Trying Me Out!**`)
        ], });
    },
};
