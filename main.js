const { Client, Collection } = require("discord.js");
const bot = new Client();
const config = require("./config.json");
const emotes = require("./assets/json/emotes.json");
const moment = require("moment");
const { loadCommands, loadEvents } = require("./util/loader");
moment.locale("fr");
const cdseconds = 5;

["commands", "cooldowns"].forEach((x) => (bot[x] = new Collection()));

loadCommands(bot);
loadEvents(bot);

bot.login(config.token);

bot.on("message", async (message) => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
  const user = message.mentions.users.first();

  const command =
    bot.commands.get(commandName) ||
    bot.commands.find(
      (cmd) => cmd.help.aliases && cmd.help.aliases.includes(commandName)
    );
  if (!command) return;

  if (!bot.cooldowns.has(command.help.name)) {
    bot.cooldowns.set(command.help.name, new Collection());
  }

  const timeNow = Date.now();
  const tStamps = bot.cooldowns.get(command.help.name);
  const cdAmount = (command.help.cooldown || 0) * 1000;

  if (tStamps.has(message.author.id)) {
    const cdExpirationTime = tStamps.get(message.author.id) + cdAmount;

    if (timeNow < cdExpirationTime) {
      timeLeft = (cdExpirationTime - timeNow) / 1000;
      return message.channel.send(
        `Oh god! <@${
          message.author.id
        }>, just calm down and wait ${timeLeft.toFixed(
          0
        )} seconds before use \`${config.prefix}${
          command.help.name
        }\` again ! ${emotes.Retard}`
      );
    }
  }

  tStamps.set(message.author.id, timeNow);
  setTimeout(() => tStamps.delete(message.author.id), cdAmount);

  command.run(bot, message, args, config.prefix);
});

bot.on("message", function (message) {
  if (message.mentions.users.first() === bot.user) {
    return message.channel.send(
      `Hello <@${message.author.id}>, I\'m <@${bot.user.id}>, my prefix is "\`\`${config.prefix}\`\`".\nif you need help do \`\`${config.prefix}help\`\` or \`\`${config.prefix}help <command>\`\` :p`
    );
  }
});
