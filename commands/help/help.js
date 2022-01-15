const { MessageEmbed } = require('discord.js')
const moment = require('moment');
const variables = require(`../../variables/variables.json`)
const emoji = require(`../../variables/emoji.json`)

module.exports = (client) => {
    client.on('message', async message => {
        const prefix = (`${variables.prefix}`)

        if(message.content.toLowerCase() === `${prefix}help`)//CHANGE NAME COMMANDS HERE
        {

            // IF USER SEND COMMANDS IN DM
            if (message.author.bot || message.channel.type === 'dm')
            {
                            let embed_add = new MessageEmbed()
                            .setColor('random')
                            .setTitle(`PAS EN DM - NOT IN DM`)
                            .setImage("https://i.imgur.com/1zkJf1R.png")
                            .setDescription(``)
                            .setTimestamp()
                            .setFooter(`Developper par OldModz95 proposer par ProtonDev`)

                            message.author.send(embed_add)
                            .then(msg => { // Send A Message In That Channel
                            msg.delete({ timeout: 4000 }) // Delete After 4 Seconds
                            })
            }
            else
            {
                //? Start embed
                let embed_help = new MessageEmbed()
                .setTitle("**Help!** ✦ :mailbox_with_mail:")
                .setColor("random")
                .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`[SITE WEB](https://emojigen.protondev.eu/)
                Below is the list of all my Commands.\n**MY PREFIX:** \`${prefix}\`
                \n
                ▸__**HELP COMMANDS BOT [3]**__
                \`${prefix}gen\`  -| GEN RANDOM EMOJI
                \`${prefix}pack\` -| GEN RANDOM PACK EMOJI
                \`${prefix}stats\` -| INFORMATION NUMBER PACK/EMOJI
                \`${prefix}ctg\` -| ALL CATEGORIES PROPOSED IN COMMANDS GEN
                \n\n
                ▸__**INFORMATION BOT**__ ${emoji.dev}
                -| Developed ― By OldModz95 - Proposed By ProtonDev
                -| Invite ― [CLICK HERE!](https://discord.com/oauth2/authorize?client_id=926047065627308062&permissions=8&scope=bot%20applications.commands)
                \n\n
                ▸__**SERVER DISCORD OFFICIAL**__

                ✦ ${emoji.owner} \`Official Discord Dev!\` ― [CLICK HERE!](https://discord.gg/MS6TMgRfqB)
                ✦ ${emoji.bot} \`Official Discord Bot!\` ― [CLICK HERE!](https://discord.gg/aNtE4wzS4E)


                ✦ ${emoji.like} \`INVITE BOT!\` ― **[CLICK HERE!](https://discord.com/oauth2/authorize?client_id=926047065627308062&permissions=8&scope=bot%20applications.commands)**
                `)

                .setFooter(`ProtonDev * ✦ Emoji Gen v${variables.version} - API BY Emoji.gg`)
                
                message.channel.send(embed_help)
            }

            

           //Fin de la commande - END COMMANDS
        }
        
    
    
    })
}