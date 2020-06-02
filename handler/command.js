const ascii = require('ascii-table');

const table = new ascii().setHeading("Commands", "Load status");

const {
    readdirSync
} = require('fs')

module.exports = (bot) => {

    readdirSync('./commands/').forEach(dir => {
        const commands = readdirSync(`./commands/${dir}/`).filter(f => f.endsWith(".js"));

        for (let file of commands) {
            let pull = require(`../commands/${dir}/${file}`);

            if (pull.help) {
                bot.commands.set(pull.help.name, pull);
                table.addRow(`${dir}/${file}`, '✅');
            } else {
                table.addRow(file, '❌ -> missing something ?');
                continue;
            }

            pull.help.aliases.forEach(alias => {
                bot.aliases.set(alias, pull.help.name)
            })
        }
    })

    console.log(table.toString())
}