const { MessageEmbed } = require('discord.js')
const moment = require('moment');
const { get } = require('axios');
const variables = require(`../../variables/variables.json`)

module.exports = (client) => {
    client.on('message', async message => {
        const prefix = (`${variables.prefix}`)
        
        if(message.content.toLowerCase() === `${prefix}stats`)//CHANGE NAME COMMANDS HERE
        {
            if (message.author.bot || message.channel.type === 'dm')
            {
                            let embed_add = new MessageEmbed()
                            .setColor('random')
                            .setTitle(`PAS EN DM - NOT IN DM`)
                            //.setImage("https://i.imgur.com/1zkJf1R.png")
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
                //? start get api
                get(`https://emoji.gg/api?request=stats`,
                     {
                        headers: {
                            'Content-Type': "application/json",
                        }
                    }).then( (res) => {
                    
                        try 
                        {
                            let embed_emoji = new MessageEmbed()
                                .setColor('random')
                                .setTitle("Stats Emoji Gen")
                                .addField(`Emoji`, `\`\`\`${res.data.emoji}\`\`\``, true)
                                .addField(`Packs`, `\`\`\`${res.data.packs}\`\`\``, true)
                                .addField(`Kaomoji`, `\`\`\`${res.data.kaomoji}\`\`\``, true)
                                .addField(`Users`, `\`\`\`${res.data.users}\`\`\``, true)
                                .addField(`Downloads`, `\`\`\`${res.data.downloads}\`\`\``, true)
                                .addField(`Pending Approvals`, `\`\`\`${res.data.pending_approvals}\`\`\``, true)
                                .addField(`Pending Pack Approvals`, `\`\`\`${res.data.pending_pack_approvals}\`\`\``, true)
                                .setFooter(`Developped By OldModz95 - Proposed By ProtonDev`)
                            message.channel.send(embed_emoji)

                        }
                        catch(error)
                        {
                            console.log(res.data)
                        }
                    })
                //? end get api
            }
        }//? end commands
        
    
    
    })
}