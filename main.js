const { Client, Collection } = require("discord.js");
const bot = new Client();
const config = require("./config.json");
const moment = require("moment");
const { loadCommands, loadEvents } = require("./util/loader");
moment.locale("fr");

["commands", "cooldowns"].forEach((x) => (bot[x] = new Collection()));

loadCommands(bot);
loadEvents(bot);

bot.login(config.token);
