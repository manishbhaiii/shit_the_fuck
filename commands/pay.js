module.exports = {
    name: 'pay',
    description: '💳 Pay Here (UPI) ID along with an image in a styled message with emojis.',
    /**
     * Executes the upi command.
     * 
     * @param {Channel} channel The channel where the command was executed.
     * @param {Message} message The message object for the command.
     * @param {Client} client The client or bot instance.
     * @param {String[]} args The arguments passed with the command.
     */
    async execute(channel, message, client, args) {
        // Replace 'YOUR_UPI_ID' with your actual UPI ID
        const upiID = 'mk90581542787@oksbi';

        try {
            // Send the UPI ID as a message
            await message.channel.send(`💳 **Your UPI (Unified Payments Interface) ID:**\n\n||${upiID}||`);
            
            // Send the image as a separate message
            await message.channel.send({
                files: [{
                    attachment: './images/upi_qr_code.png', // Example: './images/upi_qr_code.png'
                    name: 'upi_qr_code.png'
                }]
            });
        } catch (error) {
            console.error('Error sending UPI message:', error);
            message.channel.send('https://cdn.discordapp.com/attachments/1184047119007494216/1246489014333345812/Screenshot_2024-06-01-21-09-41-683_com.google.android.apps.nbu.paisa.user.png?ex=665c92db&is=665b415b&hm=6101294a7da14037f3fb1cc37dec2119001292aa5e1418d9932c35c5f73d51ef&');
        }
    }
};
