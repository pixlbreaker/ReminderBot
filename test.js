const Discord = require('discord.js');
const DatabaseScripts = require('./tools.js');
const config = require('./config.json')
const client = new Discord.Client();
const channel = new Discord.Channel(client);


// When the thing is ready
client.on('ready', () => {
	console.log('Logged in...');
});

// Login
client.login(config.token);
