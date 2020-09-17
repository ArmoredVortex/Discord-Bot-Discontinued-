const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');
const files = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
client.commands = new Discord.Collection();

client.once('ready', () => {
    for(const file of files){
        const command = require(`./commands/${file}`)
        client.commands.set(command.name,command);
        console.log(`Loaded ${file}`)
    }
    console.log(`Logged in as ${client.user}`);
});

client.on('message', message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot){
    return;
    }

	const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    
    if(!client.commands.has(commandName)) return;
    const command = client.commands.get(commandName);
    try{
        command.execute(message,args);
    } catch(error){
        console.error(error)
    };
});

client.login(config.token);