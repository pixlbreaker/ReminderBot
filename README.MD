# Reminder Discord Bot

This bot was developed to add reminder features to a bot on a discord server. It can remind either the author of the message or another memeber in the discord server. The node module that was used is discord.js

For more information on discord.js go to [Discord.js](https://discord.js.org) or their public [Github](https://github.com/discordjs/discord.js) repo.

## List of Commands
1. !commands Shows a list of all the commands
2. !remindme {time} {message} Reminds the author a specific message after the given time interval.
3. !remind {@User} {time} {message} Reminds that specific user in a chat after the given time interval.
4. !quitbot Quits the bot

### Time Operations
The time operator is either in seconds, minutes, hours, and days.
- Seconds use the 's' character
    - e.g. 40s, 40 seconds
- Minutes use the 'm' character
    - e.g. 10m, 10 minutes
- Hours use the 'h' character
    - e.g. 5h, 5 hours
- Days use the 'd' character
    - e.g. 3d, 3 days