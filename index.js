const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');
const files = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
client.commands = new Discord.Collection();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    
    for(const file of files){
        const command = require(`./commands/${file}`)
        client.commands.set(command.name, command)
    }

	if (command === 'ping') {
		client.commands.get('ping').execute(message,args);
	} else if (command === 'generatenumber') {
        client.commands.get('generatenumber {max}').execute(message,args);
	} else if(command === 'help'){
        client.commands.get('help').execute(message,args);
    } else if (command === 'greet') {
        client.commands.get('greet {mention}').execute(message,args);
    }
});

client.login(config.token);