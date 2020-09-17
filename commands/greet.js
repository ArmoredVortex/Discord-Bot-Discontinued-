const greetMessages = ['Hello','Hola','Namaste','Glad you are here','Hallo','Hope u r gud','Nice to see You','The party is incomplete without you!','Howdy'];
module.exports = {
    name : 'greet',
    description : "Greets the user you mention",
    execute(message,args){
        	let taggedUser = message.mentions.users.first();
    if(taggedUser === undefined){
    message.channel.send('Enter a valid arg')
    }else{
    message.channel.send(`${greetMessages[Math.floor(Math.random()*greetMessages.length)]} ${taggedUser}`)
       message.delete({timeout : 1})
    }
}
}