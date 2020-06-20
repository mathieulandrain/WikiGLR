const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const colours = require("./assets/json/colours.json");
const moment = require("moment");
const { loadCommands, loadEvents } = require("./util/loader");
moment.locale("fr");
const cdseconds = 5;

bot.commands = new Discord.Collection();

loadCommands(bot);
loadEvents(bot);

bot.login(config.token);

bot.on("message", async (message) => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.content.startsWith(config.prefix)) return;

  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

  let commandFile =
    bot.commands.get(command.slice(config.prefix.length)) ||
    bot.commands.find(
      (cmd) =>
        cmd.help.aliases &&
        cmd.help.aliases.includes(command.slice(config.prefix.length))
    );
  // console.log(bot.commands);
  if (commandFile) commandFile.run(bot, message, args, config.prefix);
});
