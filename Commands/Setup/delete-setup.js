const {
    SlashCommandBuilder,
    CommandInteraction,
    PermissionFlagsBits,
    Client
} = require("discord.js");
const ms = require("ms");
const Enmap = require("enmap")
const myEnmap = new Enmap({ name: "points" })


module.exports = {
    data: new SlashCommandBuilder()
        .setName("delete-setup")
        .setDescription("Delete's The Current Setups - Command ")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */
    execute(interaction, client) {

        myEnmap.clear()

        //myEnmap.delete(interaction.guild.id, "ticketSystem")
interaction.reply({ content: `Done!`})
    },
};
