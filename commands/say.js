const Discord = require('discord.js')
module.exports = {
    name : 'say',
    description : 'Repeats the argument you provide',
    execute(message,args){
        const Embed = new Discord.MessageEmbed()
        .setDescription(args)
        message.reply(Embed)
    }
}