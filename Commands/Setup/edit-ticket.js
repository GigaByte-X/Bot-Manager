const { SlashCommandBuilder, 
    ChatInputCommandInteraction, 
    Client, 
    ActionRowBuilder, 
    SelectMenuBuilder,
    EmbedBuilder
    } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("edit")
        .setDescription("Ticket Management Commands")
        .addSubcommand((item) =>
            item
                .setName("ticket")
                .setDescription("Ticket Management Commands.")
        ),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        const row = new ActionRowBuilder()
			.addComponents(
				new SelectMenuBuilder()
					.setCustomId('edit_ticket')
					.setPlaceholder('Nothing selected')
					.addOptions(
						{
							label: 'Claim/Close',
							description: 'The Claim/Close Management Options',
							value: 'first_option',
						},
						{
							label: 'You can select me too',
							description: 'This is also a description',
							value: 'second_option',
						},
					),
            );
            return await interaction.reply({ embeds:[
                new EmbedBuilder()
            .setDescription(`<:tick:1006483064685334588> **Ticket Management -//- Panel!**`)
            ], components: [row] })
        }
    }