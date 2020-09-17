const fs = require('fs');
const Discord = require('discord.js');
const files = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
module.exports = {
    name : 'help',
    description : 'Lists all the commands',
    execute(message,args){
        let commands = message.client.commands.array();
        for(file of files){
            let cmd = require(`./${file}`);
        }
        const Embed = new Discord.MessageEmbed()
        .setColor('#00FF00')
        .setTitle('**List of all the Commands**')
        commands.forEach(cmd => {
            Embed.addField(cmd.name,cmd.description,false)
        });
  
        message.channel.send(Embed);
    }
}