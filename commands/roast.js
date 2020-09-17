const roastMsg = ['If i were to die i would jump off thier ego to their IQ',`You know why mirrors can't laugh?`,`They were born in a highway, coz that is where the most accidents happen`,`When their mum dropped them at school, she got fined for littering.`,`They have the right to remain silent because what they're gonna say next would probably be stupid anyways.`,`Have they been shopping lately? I've heard they're selling lives at the mall they should go get one.`];
module.exports = {
    name : 'roast',
    description : 'Roasts the user you mention',
    execute(message,args){
        let taggedUser = message.mentions.users.first();
        if(taggedUser === undefined){
        message.channel.send('Enter a valid arg')
        }else{
        message.channel.send(`${roastMsg[Math.floor(Math.random()*roastMsg.length)]}`)
        }
    }
}