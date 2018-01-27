// Constants
const Discord = require('discord.js');
const DatabaseScripts = require('./tools.js');
const client = new Discord.Client();
const channel = new Discord.Channel(client);

// Replace all function
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

// Client on Message
client.on('message', msg => {

	// Quits the Bot
	if (msg.content === '!quitbot' && msg.author.tag === '109122837524017152') {
		msg.reply('Goodbye!');
		client.destroy();
		console.log('Disconnected...');
		process.exit();

	// Reminds the User
	} else if (msg.content.toLowerCase().startsWith('!remindme')) {
		var message = msg;
		try {
			
			// Variables
			var returntime;
			var timemeasure;
			msg = msg.content.split(' ');
			console.log('Message recieved from ' + message.author.id + ' at ' + Date.now().toString());

			// Sets the return time
			timemeasure = msg[1].substring((msg[1].length - 1), (msg[1].length))
			returntime = msg[1].substring(0, (msg[1].length - 1))

			// Based off the delimiter, sets the time
			switch (timemeasure) {
				case 's':
					returntime = returntime * 1000;
					break;

				case 'm':
					returntime = returntime * 1000 * 60;
					break;

				case 'h':
					returntime = returntime * 1000 * 60 * 60;
					break;

				case 'd':
					returntime = returntime * 1000 * 60 * 60 * 24;
					break;

				default:
					returntime = returntime * 1000;
					break;
			}

			// Returns the Message
			client.setTimeout(function () {
				// Removes the first 2 array items
				msg.shift();
				msg.shift();

				// Creates the message
				var content = msg.join();
				content = content.replaceAll(',', ' ');
				message.reply(content);
				console.log('Message sent to ' + message.author.id + ' at ' + Date.now().toString());
			}, returntime)
		} catch (e) {
			message.reply("An error has occured, please make sure the command has a time delimiter and message");
			console.error(e.toString());
		}

	// List of commands
	}else if (msg.content.toLowerCase() === "!reminderbot") {
		msg.channel.send("Hello I am reminder bot:\n\n!reminderbot \t\tList of all Commands\n!quit \t\tTurns off the bot\n!remindme \t\t {time} {message}\n\t{time} Please have the amount of time be denoted by a time character.\n\t\tm - minutes, s - seconds, d - days.\n!remind {@User} {time} {message}\n\t{time} Please have the amount of time be denoted by a time character.\n\t\tm - minutes, s - seconds, d - days.\n\t{@User} So far you can use the user's name with the @ symbol.\n\n--- Created and Managed by pixlbreaker ---");
	
	// Reminds a specific user
	} else if (msg.content.toLowerCase().startsWith('!remind')) {
		var message = msg;
		try {
			
			// Variables
			var returntime;
			var timemeasure;
			var userid;
			msg = msg.content.split(' ');
			console.log('Message recieved from ' + message.author.id + ' at ' + Date.now().toString());

			// Sets the userid for the recipiant
			//userid = client.users.get('name', msg[1]).id;
			userid = client.users.get(msg[1].replace('<@!', '').slice(0, -1))
			// Sets the return time
			timemeasure = msg[2].substring((msg[2].length - 1), (msg[2].length))
			returntime = msg[2].substring(0, (msg[2].length - 1))

			// Based off the delimiter, sets the time
			switch (timemeasure) {
				case 's':
					returntime = returntime * 1000;
					break;

				case 'm':
					returntime = returntime * 1000 * 60;
					break;

				case 'h':
					returntime = returntime * 1000 * 60 * 60;
					break;

				case 'd':
					returntime = returntime * 1000 * 60 * 60 * 24;
					break;

				default:
					returntime = returntime * 1000;
					break;
			}

			// Returns the Message
			client.setTimeout(function () {
				// Removes the first 2 array items
				msg.shift();
				msg.shift();
				msg.shift();

				// Creates the message
				var content = msg.join();
				content = content.replaceAll(',', ' ');
				message.channel.send(userid + content);
				console.log('Message sent to ' + userid + ' at ' + Date.now().toString());
			}, returntime)
		} catch (e) {
			message.reply("An error has occured, please make sure the command has a time delimiter and message");
			console.error(e.toString());
		}

	// List of Commands
	} 

});

// When the thing is ready
client.on('ready', () => {
	console.log('Logged in...');
});

// Login
client.login('MzI3ODQ4MDc5NjMxODQzMzI4.DGT-Ow.Gjl2dDevQyd-h4pd6WuFzJj4lSo');