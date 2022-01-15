const { MessageEmbed } = require('discord.js')
const moment = require('moment');
const { get } = require('axios');
const variables = require(`../../variables/variables.json`)

module.exports = (client) => {
    client.on('message', async message => {
        const prefix = (`${variables.prefix}`)
        
        if(message.content.toLowerCase() === `${prefix}ctg` || message.content.toLowerCase() === `${prefix}categories`)//CHANGE NAME COMMANDS HERE
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
                get(`https://emoji.gg/api?request=categories`,
                     {
                        headers: {
                            'Content-Type': "application/json",
                        }
                    }).then( (res) => {
                    
                        try 
                        {
                            let embed_emoji = new MessageEmbed()
                                .setColor('random')
                                .setTitle("All Categories Emoji Gen")
                                .setDescription(`\`\`\`apache
➼ 1- ${res.data[1]}
➼ 2- ${res.data[2]}
➼ 3- ${res.data[3]}
➼ 4- ${res.data[4]}
➼ 5- ${res.data[5]}
➼ 6- ${res.data[6]}
➼ 7- ${res.data[7]}
➼ 8- ${res.data[8]}
➼ 9- ${res.data[9]}
➼ 10- ${res.data[10]}
➼ 11- ${res.data[11]}
➼ 12- ${res.data[12]}
➼ 13- ${res.data[13]}
➼ 14- ${res.data[14]}
➼ 15- ${res.data[15]}
➼ 16- ${res.data[16]}
➼ 17- ${res.data[17]}
➼ 18- ${res.data[18]}
➼ 19- ${res.data[19]}
➼ 20- ${res.data[20]}\`\`\``)
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