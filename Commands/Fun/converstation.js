const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("convostarter")
    .setDescription("A command to get the conversation started!"),
    async execute (interaction, client) {
    const questions = [
        "Do you listen to any podcasts? Which ones?",
        "What's the best gift you've ever gotten?",
        "If you were in charge of the playlist, which song would you play next?",
        "Are there any upcoming events you're planning on going to?",
        "I'm trying to plan my next trip — have you traveled anywhere interesting lately?",
        "What's keeping you busy lately?",
        "What did you get done today?",
        "If you could recommend only one restaurant/coffee shop, which one would you choose?",
        "If you could only eat one thing for the rest of your life, what would you choose?",
        "What's the last new skill you learned?",
        "It's nice to meet you. How has your day been?",
        "Is your day going like you expected?",
        "Are you a cat or dog person? Do you have any pets?",
        "Do you know most of the people here?",
        "Are there any Netflix/Hulu/television series you'd recommend?",
        "Where's your favorite vacation spot?",
        "Got any fun plans for the weekend? I need some inspiration so I don't end up on the couch with some Netflix and Ben & Jerry's.",
        "Did you fulfill your childhood dream?",
        "If you could live anywhere in the world, where would it be?",
        "If you could spend one month at any period in the past — and you were guaranteed not to suffer any harm or change the course of history -- when would it be?",
        "Who was your childhood hero?",
        "Do you have a secret talent?",
        "What's one thing you'd love to be an expert at?",
        " What is one non-work related goal that you would like to achieve in the next five years?",
        "What is something people are always surprised to learn about you?",
        "What is one thing you can't live without?",
        "What's your favorite city you've visited?",
        "How many countries have you been to?",
        "What's your favorite sport?",
        "What's your favorite sport?",
        "What was the last movie you saw?",
        "Do you like to cook?",
        "What did you want to be when you were a kid?",
        "What are you most afraid of?",
        "What scares you the most about the future?",
        "If you could invite one famous person to dinner, who would it be?",
        "Who is the most important person in your life right now?",
        "What piece of technology could you live without?",
        "Do you ever sing in the shower?",
        "Who is your favorite comedian?",
        "What's your favorite subject?",
        "Do you believe in aliens?",
        "Do you have any brothers or sisters?",
        "What's your favorite song?",
        "What's your favorite color?",
        "What's your favorite game to play?",
        "What's your favorite movie that you could watch over and over again?",
        "What's your favorite food?",
        "What's the worst thing you've ever eaten?",
        "Are you a morning person or a night owl?",
        "If you could only eat one food for the rest of your life, what would it be?",
        "What app do you use everyday?",
        "If you could change your name, what would you change it to?",
        "Where is the coolest place you've been to for dinner lately?",
        "Have you ever lived anywhere else?",
        "Do you like to swim?",
        "Who is a celebrity you admire?",
    ]
    const question = questions[Math.floor(Math.random() * questions.length)]

    const message = new EmbedBuilder()
        .setColor("Fuchsia")
        .setTitle(`Conversation Starter`)
        .setDescription(`➡️ ${question}`)

    await interaction.reply({ embeds: [message] }).catch((err) => {})
}
}