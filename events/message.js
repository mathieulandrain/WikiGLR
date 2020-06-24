const { Collection } = require("discord.js");
const config = require("../config.json");
const emotes = require("../assets/json/emotes.json");
const moment = require("moment");
const lang = require("../assets/lang/english.json");
moment.locale("fr");
const cdseconds = 5;

module.exports = async (bot, message) => {
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
        `${lang.Ohgod} <@${message.author.id}>, ${lang.Calm} ${timeLeft.toFixed(
          0
        )} ${lang.Before} \`${config.prefix}${command.help.name}\` ${
          lang.Again
        } ${emotes.Retard}`
      );
    }
  }

  tStamps.set(message.author.id, timeNow);
  setTimeout(() => tStamps.delete(message.author.id), cdAmount);

  command.run(bot, message, args, config.prefix);

  bot.on("message", function (message) {
    if (message.mentions.users.first() === bot.user) {
      return message.channel.send(
        `${lang.Hello} <@${message.author.id}>, ${lang.Im} <@${bot.user.id}>, ${lang.myprefix} "\`\`${config.prefix}\`\`".\n${lang.needhelp} \`\`${config.prefix}help\`\` ${lang.or} \`\`${config.prefix}help <${lang.command}>\`\``
      );
    }
  });
};
