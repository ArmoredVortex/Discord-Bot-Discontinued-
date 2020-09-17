const { execute } = require("./generatenumber");

let runtime = false;
let numbers = ['placeholder'];
module.exports = {
    name : "count",
    description : "Starts a Count Game",
    execute(message,args){
        if(!args.length && !runtime){
            message.channel.send(`${message.author} has started a new Count game !!`);
            runtime = true;
        } else if (!args.length && runtime){
            message.channel.send(`A game of count is already running.`)
        } else if (parseInt(args)==numbers.length && runtime){
            message.delete({timeout : 1})
            message.channel.send(`${message.author} : ${args}`)
            numbers.push(args)
        } else if (parseInt(args)!==numbers.length && runtime){
            message.channel.send(`The game has been Terminated`);
            numbers.splice(1,numbers.length);
            runtime = false;
        }
    }
}