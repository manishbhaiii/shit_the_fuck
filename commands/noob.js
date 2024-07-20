module.exports = {
    name: 'noob',
    description: 'Rates how noob a user is.',
    execute(channel, message, client, args) {
        // Check if a user is mentioned
        const member = message.mentions.members.first();
        
        if (!member) {
            return message.channel.send('Please mention a user to rate their noob.');
        }

        // Generate a random noob rating between 0 and 100
        const noob = Math.floor(Math.random() * 101);

        // Send the noob rating to the channel
        message.channel.send(`${member.user.username} is ${noob}% noob.`);
    }
};
