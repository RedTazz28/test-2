const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "?";

client.login("NDY1NjE4NjI2NDA2NTE0Njg4.DzTAvA.ClGDhJnRIkImyX_Zrgk5eTu9w5Y");

client.on("ready", () => {
    console.log("je suis pret !");
    client.user.setGame("s'ameliorer !!!help");
});

client.on('message', message => { 

    if (message.content === "!!!create"){
        message.reply("bonjoure je suis le BOT cree par Redtazz28");
        console.log('Le BOT dis qui est son createur');
    }

    if (message.content === "!!!site"){
        message.reply("https://*****.000webhostapp.com");
        console.log('yo poto on est la');
    } 

    if (message.content === "!!!b"){
        message.reply("je suis en developement");
        console.log('bref salut');
    }

    if (message.content === "****"){
        message.reply("j'avoue c vrais");
        console.log('bref salut');
    }

    if (message.content === "mrc du soutien"){
        message.reply("tkt ^^");
        console.log('bref salut');
    }
    
    if (message.content === "a"){
        message.reply("");
        console.log('bref salut');
    }    

 if (message.content === ""){
        message.reply("");
        console.log('bref salut');
    }   
});