const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!"

client.login('NTU0MzIwMjQ5OTU3Mzg0MjA1.D2bL8A.PRgppIROFlLBMprgfrNhUVlKjQU');

client.on('message', message =>{
    if(message.content === "tu fais quoi?"){
        message.reply('Je mange des pâtes dans ma pastabox ! :heart:');
        console.log('répond à tfq');
    }
