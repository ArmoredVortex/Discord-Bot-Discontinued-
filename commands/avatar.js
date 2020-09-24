const Discord = require('discord.js');
module.exports = {
    name : 'avatar',
    description : `Displays the user's avatar`,
    execute(message,args){
        if(!args.length){
            let embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setThumbnail(message.author.avatarURL())
            .setTitle(`${message.author.username}'s Avatar`)
            .setDescription(`User ID - ${message.author.tag}
                             Account initialized - ${message.author.createdAt}`)
            message.channel.send(embed);
        }else if(!message.mentions.users.first()){
           message.channel.send(`Well Thats Rubbish`); 
        }else{
            let taggedUser = message.mentions.users.first();
            let embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`${taggedUser.username}'s Avatar`)
            .setThumbnail(taggedUser.avatarURL())
            .setDescription(`User ID - ${taggedUser.tag}
                             Account initialized - ${taggedUser.createdAt}`)
            message.channel.send(embed);
        }
}
}