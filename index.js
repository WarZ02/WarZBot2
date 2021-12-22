const { Client, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS] });
client.on("ready", () => {
    client.user.setActivity("None");
    console.log("Ready");
});

client.on("guildMemberAdd", async guildMember => {
    var i = "922957859996696576";
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.id === i);
 
    guildMember.roles.add(welcomeRole);
});

client.login(process.env.TOKEN);