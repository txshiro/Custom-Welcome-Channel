const channels = require('../json/channel.json');

module.exports = (bot) => {
    bot.on("guildMemberAdd", member => {
        
        //Check if server is in channels json
        
        //It isnt
        if (!channels[member.guild.id].channel) {
            return;
        //it is
        } else {
            //Get channel from the channel json
            let channel = channels[member.guild.id].channel

            //We saved channel's id into channel.json so we need to get the channel from it
            let gettingChannel = bot.channels.cache.get(s)
            
            //Now we just send it
            gettingChannel.send(`Welcome ${member}!`)
        }
    })
}