const Discord = require('discord.js-selfbot-v13');

module.exports = {
    name: 'status2',
    description: 'Set a custom status with Rich Presence.',
    execute(channel, message, client, args) {
        console.clear();
        console.log(`${client.user.tag} - rich presence started!`);
        
        // Send a message in the same channel where the command was used, confirming that the rich presence has started
        message.channel.send('Rich Presence started.').catch(console.error);

        // Check if the first argument is "streaming"
        if (args[0] && args[0].toLowerCase() === 'streaming') {
            // Check if enough arguments are provided for streaming status
            if (args.length < 2) {
                return message.channel.send('Please provide the streaming URL and status message. Usage: !status2 streaming <URL> <message>').catch(console.error);
            }
            
            const url = args[1]; // Streaming URL
            const statusMessage = args.slice(2).join(' '); // Status message

            // Set the streaming status
            client.user.setActivity(statusMessage, { type: 'STREAMING', url: url });
            message.channel.send(`Streaming status set to "${statusMessage}"`).catch(console.error);
        } else {
            // Set the default custom status using Rich Presence
            const r = new Discord.RichPresence()
                .setType('STREAMING')
                .setURL('https://www.twitch.tv/its_manish_bro')
                .setState('CHILL WITH MANISH')
                .setName('<3')
                .setDetails('raiden shogun')
                .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1154096032725078046/1260879305622290453/baal-raiden-shogun.gif?ex=6690ecdc&is=668f9b5c&hm=7a229cc07b99fade43f4eba19f5d9d54266a6fa6233766a6799e263f1fc95289&')
                .setAssetsLargeText('ITS_MANISH')
                .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1154096032725078046/1253987569897705514/baal-raiden-shogun.gif?ex=6677da6e&is=667688ee&hm=7bd430bbcf5732cda9e0cea6681ae99f30818e182ce961622ce830419d35726d&')
                .setAssetsSmallText('HEY BRO')
                .addButton('raiden shogun <3', 'https://discord.gg/stCTQjxv7S')
                .addButton('its_manish', 'https://www.youtube.com/@manish_boyy');
    
            client.user.setActivity(r);
        }
        
        // Set presence status to "streaming"
        client.user.setPresence({ status: "streaming" });
    }
};
