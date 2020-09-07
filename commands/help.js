const fs = require('fs');
const files = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
module.exports = {
    name : 'help',
    description : 'Lists all the commands',
    execute(message,args){
    (message.channel.send('**List of all commands**')); 
    for(file of files){
        let cmd = require('./'+ file);   
    message.channel.send(`.${cmd.name} - *${cmd.description}*`);
}
}
}
