const { MessageEmbed } = require('discord.js')
const moment = require('moment');
const { get } = require('axios');
const variables = require(`../../variables/variables.json`)
let url = `https://api.protondev.eu/emojigen/v1/number.php`;


module.exports = (client) => {
    
    client.on('message', async message => {
        const prefix = (`${variables.prefix}`)
        
        if(message.content.toLowerCase() === `${prefix}gen`)//CHANGE NAME COMMANDS HERE
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
                        console.log("1-|Commande GEN effectué.")
                        //?--------------------------------------
                        function format(min, max) {  
                            return Math.floor(
                              Math.random() * (max - min) + min
                            )
                          }
                          var genmax = res.data.genmax;
                          var number = format(1, genmax)
                        //?--------------------------------------
                          //? start get api
                get(`https://emoji.gg/api`,
                {
                   headers: {
                       'Content-Type': "application/json",
                   }
               }).then( (emoji) => {
               
                   try 
                   {

                       if(emoji.data[number].title == "undefined")
                       {
                           var Etitle = "unrecovered emoji title"
                           var Eimage = ""
                           console.log("error-|Commande GEN redemander.\n------")
                       }
                       else
                       {
                           var Etitle = emoji.data[number].title
                           var Eimage = emoji.data[number].image
                       }

                       message.channel.send("Wait...")
                       .then((msg) => {
                       setTimeout(function() {
                           let embed_emoji = new MessageEmbed()
                           .setColor('random')
                           .setTitle(Etitle)
                           .setImage(Eimage)
                           .setDescription(`Emoji By **${emoji.data[number].submitted_by}**`)
                           .setFooter(`Developped By OldModz95 - Proposed By ProtonDev`)
                           msg.edit("", embed_emoji);
                           console.log("3-|Commande GEN Edit.\n-----")
                         }, 2000)});
                         console.log("2-|Commande GEN Envoyer.")

                   }
                   catch(error)
                   {
                       //console.log("Respons api emoji ",  emoji.data)
                       console.log("error-|Commande GEN error api emoji.\n-------")
                   }
               })
           //? end get api
                //?--------------------------------------
                       }
                       catch(error)
                       {
                           //console.log("Respons api protondev ", res.data)
                           console.log("error-|Commande GEN error api protondev.\n-------")
                       }
                
                })//? end get api
                //?--------------------------------------

                
            }
        }//? end commands
        
    
    
    })
}