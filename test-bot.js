const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});

client.once('ready', () => console.log('Ready!'));

client.on('messageCreate', (message) => {
  if (message.content.includes('dn')) {
    return message.reply('deez nuts haha gotem');
  }

  if (message.content === '!help') {
    return message.reply("there's no help lmao");
  }
});

client.login('MTE1Nzc2NTIwOTU1ODExMDMwOQ.GJKoFs.8-E6ky1iPRDd5zNYZsmjahzDtaAYAcm02uBMJ0');