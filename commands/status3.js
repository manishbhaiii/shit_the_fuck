const Discord = require('discord.js-selfbot-v13');

module.exports = {
    name: 'status3',
    description: 'Change the status automatically with different images in a loop.',
    execute(channel, message, client, args) {
        // Function to set the status
        const setStatus = (statusIndex) => {
            // Clear the console
            console.clear();

            // Log a message indicating that the status changer started
            console.log(`${client.user.tag} - status changer started!`);

            // Array of status objects with different details and images
            const statuses = [
                {
                    name: 'https://discord.gg/dr4zJrc44T',
                    details: 'chill with manish',
                    largeImageURL: 'https://cdn.discordapp.com/attachments/1154096032725078046/1252289913089425540/standard.gif?ex=6671ad5d&is=66705bdd&hm=df061167f28111df22cb4af9aad6f98c1549313aa2cfb1c821e0fff88d0824d3&'
                },
                {
                    name: 'bloodmoon.gg',
                    details: 'exclusive.exv',
                    largeImageURL: 'https://cdn.discordapp.com/attachments/1154096032725078046/1252289664992149534/raiden-genshin-impact.gif?ex=6671ad22&is=66705ba2&hm=eda86e57d5ddb132b50cf402d6453b2279a2247313366e34b8075d9e20222a3f&'
                },
                {
                    name: '<3',
                    details: 'anime',
                    largeImageURL: 'https://cdn.discordapp.com/attachments/1154096032725078046/1252290563768844369/f91669844da772dc0c00e9f627d2fd7e.gif?ex=6671adf8&is=66705c78&hm=23ca873e9c414bc7ecbda6cc33bb7f668405c1640bc9f26d5a4dcd7ce8b5b08f&'
                }
            ];

            // Get the current status object
            const status = statuses[statusIndex];

            const r = new Discord.RichPresence()
                .setType('STREAMING')
                .setURL('https://www.twitch.tv/its_manish_bro') // Change if needed
                .setState(status.name)
                .setName(status.name)
                .setDetails(status.details)
                .setAssetsLargeImage(status.largeImageURL) // Change to status.largeImageURL
                .setAssetsLargeText('its_manish') // Set as needed
                .addButton('Youtube', 'https://www.youtube.com/@manish_boyy') // Add button name and URL
                .addButton('Discord', 'https://discord.gg/dr4zJrc44T'); // Add button name and URL

            client.user.setActivity(r);

            // Log a message indicating that the status is changed
            console.log(`Status ${statusIndex + 1} set!`);

            // Increment status index and loop back to the start if it exceeds the array length
            const nextIndex = (statusIndex + 1) % statuses.length;

            // Call setStatus recursively after 10 seconds (adjustable)
            setTimeout(() => {
                setStatus(nextIndex);
            }, 10000); // Change 10000 to the interval you desire in milliseconds (e.g., 10000 for 10 seconds)
        };

        // Call setStatus to start the status changer loop
        setStatus(0);

        // Send a message indicating that the status changer is started
        channel.send('Status changer started.').catch(err => console.error('Failed to send message:', err));
    }
};
