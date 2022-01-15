const Discord = require('discord.js');

const client = new Discord.Client({
    intents: [Discord.Intents.FLAGS.GUILDS],
    partials: ['MESSAGE', 'USER', 'REACTION'] 
});

const Buttons = require('discord-buttons')
Buttons(client);


client.queue = new Discord.Collection()
const variables = require(`./variables/variables.json`)
const prefix = variables.prefix


const help = require('./commands/help/help')
const gen = require('./commands/help/gen')
const pack = require('./commands/help/pack')
const stats = require('./commands/help/stats');
const categories = require('./commands/help/categories');


client.once('ready', () => {
    console.log('Ready.')

    setInterval(() => {
        const statuses = [
            `Emoji Generator`,
            `${prefix}help`
        ]

        const status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setActivity(status, { type: "WATCHING" }) // Can Be WATCHING, STREAMING, LISTENING
    }, 2000) // Second You Want to Change Status, This Cahnges Every 2 Seconds


    help(client)
    gen(client)
    pack(client)
    stats(client)
    categories(client)
})

client.on('voiceStateUpdate', (old, New) => {
    if (old.id !== client.user.id) return
    if (old.channelID && !New.channelID) client.queue.delete(old.guild.id)
})

client.on('clickButton', async (button) => {
    // For All Buttons With ID 'button1', This Will Happen When User Clicks It
    if (button.id === 'button1') {
        // Button
        const button1 = new disbut.MessageButton()
            .setStyle('url')
            .setLabel('Join')
            .setURL('https://discord.gg/MS6TMgRfqB')

        // Embed
        const embed1 = new Discord.MessageEmbed()
            .setAuthor(`Join Discord`)
            .setTimestamp()
            .setColor('RANDOM')
            .setDescription(`Now Join Discord Server
        `)

        button.channel.send(`Join Discord`, { button: button1, embed: embed1 });
    }



})

client.login(variables.token)