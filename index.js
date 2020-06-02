const Discord = require('discord.js');
const bot = new Discord.Client();
const {
    token
} = require('./json/botconfig.json')

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

["command", "messageEvent","newUser"].forEach(handler => {
    require(`./handler/${handler}`)(bot);
});

bot.login(token)