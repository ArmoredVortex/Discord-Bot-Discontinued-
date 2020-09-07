module.exports = {
    name : 'generatenumber {max}',
    description : 'Generates a random number from 0 to arg provided',
    execute(message,args){
        if (!args.length) {
            return message.channel.send(`Syntax : .generateNumber (max)s`);
        }else {
            return message.channel.send(Math.floor((Math.random() * args ) + 1));
        }
    }
}