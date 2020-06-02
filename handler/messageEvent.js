const {
    prefix
} = require('../json/botconfig.json')

module.exports = (bot) => {
    bot.on('message', message => {
        if (message.author.bot) return;
        if (!message.content) return;

        if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return
        let args = message.content.slice(prefix.length).trim().split(/ +/g);
        let cmd;
        cmd = args.shift().toLowerCase();
        let command;
        if (bot.commands.has(cmd)) {
            command = bot.commands.get(cmd);
        } else if (bot.aliases.has(cmd)) {
            command = bot.commands.get(bot.aliases.get(cmd));
        }
        try {
            command.run(bot, message, args);

        } catch (e) {
            return
        }

    })
}