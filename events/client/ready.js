const { BOT_PREFIX } = process.env;

module.exports = async (client) => {
	const botStatus = [
		`${client.commands.size} Commands`,
		`${client.users.cache.size} Users`,
		`${client.guilds.cache.size} Servers`,
	];

	setInterval(function() {
		const status = botStatus[Math.floor(Math.random() * botStatus.length)];
		
	}, 30000);

	console.log(`Logged in as ${client.user.tag}`);
	console.log('Prefix:', BOT_PREFIX);
};