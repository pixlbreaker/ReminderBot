const Discord = require('discord.js');
const DatabaseScripts = require('./tools.js');
const client = new Discord.Client();
const channel = new Discord.Channel(client);


// When the thing is ready
client.on('ready', () => {
	console.log('Logged in...');
});

// Login
client.login('MzI3ODQ4MDc5NjMxODQzMzI4.DGT-Ow.Gjl2dDevQyd-h4pd6WuFzJj4lSo');
