const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

//client.on('message', message => {
//	console.log(message.body);
//});

client.on('message', message => {
	if(message.body === 'ping') {
		message.reply('pong');
	}
});

// client.on('message', message => {
//     const mentions = message.getMentions();
    
// 	if(message.body === 'hello') {
// 		message.reply(`Hii ${contact.pushname}`);
// 	}
// });


client.on('message', message => {
	if(message.body === 'Chomu') {
		message.reply('Choma');
	}
});

client.on('message', message => {
    for(i=0;i<5;i++){
	if(message.body === 'Hehe') {
		message.reply('hehe');
	}}
});

client.on('message', async (msg) => {
    if(msg.body === '/everyone') {
        const chat = await msg.getChat();
        
        let text = "";
        let mentions = [];

        for(let participant of chat.participants) {
            const contact = await client.getContactById(participant.id._serialized);
            
            mentions.push(contact);
            text += `@${participant.id.user} `;
        }

        await chat.sendMessage(text, { mentions });
    }
});

client.initialize();