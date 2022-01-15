const { MessageEmbed } = require('discord.js')
const moment = require('moment');
const { get } = require('axios');
const variables = require(`../../variables/variables.json`)
let url = `https://emoji.gg/api?request=stats`;

module.exports = (client) => {
    client.on('message', async message => {
        const prefix = (`${variables.prefix}`)
        
        if(message.content.toLowerCase() === `${prefix}pack`)//CHANGE NAME COMMANDS HERE
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
                //?--------------------------------------
                
                    //? start get api
                    get(url,
                        {
                           headers: {
                               'Content-Type': "application/json",
                           }
                       }).then( (res) => {
                       
                           try 
                           {
                            console.log("1-|Commande PACK effectué.")
                            //?--------------------------------------
                            function format(min, max) {  
                                return Math.floor(
                                  Math.random() * (max - min) + min
                                )
                              }
                              var genmax = res.data.packs;
                              var number = format(1, genmax)
                            //?--------------------------------------
                             //? start get api
                get(`https://emoji.gg/api/packs`,
                {
                   headers: {
                       'Content-Type': "application/json",
                   }
               }).then( (emoji) => {
               
                   try 
                   {
                       if(emoji.data[number].name == "undefined")
                       {
                           var Etitle = "unrecovered emoji pack name"
                           console.log("error-|Commande PACK nom pas trouver.")
                       }
                       else
                       {
                           var Etitle = emoji.data[number].name
                       }

                       if(emoji.data[number].id == "undefined")
                       {
                           message.channel.send("Wait...")
                           .then((msg) => {
                               setTimeout(function() {
                               msg.edit("We did not find a pack, redone the commands.");
                               }, 1000)});
                               console.log("error-|Commande PACK nom non trouver, message envoyer.")
                       }
                       else
                       {
                           message.channel.send("Wait...")
                           .then((msg) => {
                           setTimeout(function() {
                           let embed_emoji = new MessageEmbed()
                           .setColor('random')
                           .setTitle(Etitle)
                           .setURL(`https://emoji.gg/pack/${emoji.data[number].slug}`)
                           .setImage(`https://emoji.gg/assets/packs/${emoji.data[number].slug}.jpg`)
                           .setDescription(`-| **Amount Emojis:** ${emoji.data[number].amount}\n\n-| **Description Pack:**\n\`\`\`${emoji.data[number].description}\`\`\`\n\n-| **Emojis Name:**\n\`\`\`${emoji.data[number].emojis}\`\`\`\n\n**[DOWNLOAD PACK](https://emoji.gg/pack/${emoji.data[number].slug})**`)
                           .setFooter(`Developped By OldModz95 - Proposed By ProtonDev`)
                           msg.edit("", embed_emoji);
                           console.log("3-|Commande PACK edit.")
                           }, 1000)});
                           console.log("2-|Commande PACK envoyer.")
                       }

                   }
                   catch(error)
                   {
                       console.log("error-|Commande PACK error api emoji.\n-------")
                   }
               })
           //? end get api
                            //?--------------------------------------
                           }
                           catch(error)
                           {
                               console.log("error-|Commande PACK error api protondev.\n-------")
                           }
                    
                    })//? end get api
                    //?--------------------------------------
            }
        }//? end commands
        
    
    
    })
}