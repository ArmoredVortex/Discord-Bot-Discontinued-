let runtime = false;
let tries = 3;
let min;
let max;
module.exports = {
    name : 'gtn',
    description : 'Guess the number in the range from min - max',
    execute(message,args){
        function between(min, max) {  
            return Math.floor(
              Math.random() * (max - min) + min
            )
          }
          let channel = message.channel.id
        if(args.length<=1 && !runtime){
            message.channel.send('Syntax : `.gtn <min> <max>`');
        }else if(args[0] >= args[1]){
            message.channel.send(`Trying to fool me huh?`);
        }
        else if(!runtime){
            message.channel.send(`Guess the number between ${args[0]} - ${args[1]}. You have 3 tries!`)
            randomNo = between(parseInt(args[0]),parseInt(args[1]));
            runtime = true;
            min = parseInt(args[0]);
            max = parseInt(args[1]);
            channel = message.channel.id;
        }else if(runtime && message.channel.id == channel){
            if(parseInt(args)==randomNo){
                message.channel.send('Gg you win')
                tries = 3;
                runtime = false;
            }else if(parseInt(args) < min || parseInt(args)> max){
                    message.channel.send(`You cant send a no lesser or greater than the range.`)
            }else if(parseInt(args)!=randomNo){
                tries -= 1;
                message.channel.send(`It was a wrong guess you have ${tries} try/tries remaining!`);
                if(tries == 0){
                    message.channel.send(`Better Luck next Time. The number i was looking for was ${randomNo}`);
                    runtime = false;
                    tries = 3;
                }
            }
        }
    }
}