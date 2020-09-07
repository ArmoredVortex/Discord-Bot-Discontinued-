const greetMessages = ['Hello','Hola','Namaste','Glad you are here','Hallo','Hope u r gud','Nice to see You','The party is incomplete without you!','Howdy'];
module.exports = {
    name : 'greet {mention}',
    description : "Greets the user you mention",
    execute(message,args){
        if(!args.length){

        }else{ message.channel.send(`${greetMessages[Math.floor(Math.random()*greetMessages.length)]} ${args}`)
       message.delete({timeout : 1})
    }
}
}