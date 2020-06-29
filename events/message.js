const { Collection } = require("discord.js");
const { default_prefix } = require("../config.json");
const { default_lang } = require("../config.json");
const emotes = require("../assets/json/emotes.json");
const moment = require("moment");
const model1 = require("../dbFile.js");
const english = require("../assets/lang/english.json");
moment.locale("fr");
const cdseconds = 5;
const fs = require("fs");

module.exports = async (bot, message) => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let infoServ = await model1.findOne({ ID: `${message.guild.id}` });
  if (!infoServ) {
    infoServ = {};
    infoServ.langue = default_lang;
    infoServ.prefix = default_prefix;
  }
  let lang = await checklanguage(model1, fs, infoServ.langue);
  let prefix = infoServ.prefix;

  if (message.mentions.users.first() === bot.user) {
    return message.channel.send(
      `${lang.Hello} <@${message.author.id}>, ${lang.Im} <@${bot.user.id}>, ${lang.myprefix} "\`\`${prefix}\`\`".\n${lang.needhelp} \`\`${prefix}help\`\` ${lang.or} \`\`${prefix}help <${lang.command}>\`\``
    );
  }

  if (!message.content.startsWith(prefix) || message.content.length === 1)
    return;

  const args = message.content.slice(prefix.length).split(/ +/);
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
        )} ${lang.Before} \`${prefix}${command.help.name}\` ${lang.Again} ${
          emotes.Retard
        }`
      );
    }
  }

  tStamps.set(message.author.id, timeNow);
  setTimeout(() => tStamps.delete(message.author.id), cdAmount);

  command.run(bot, message, args, prefix);
  function checklanguage(model1, fs, language) {
    return new Promise(function (resolve, reject) {
      fs.readFile(`./assets/lang/${language}.json`, async (err, data) => {
        let l = JSON.parse(data);
        resolve(l);
      });
    });
  }
};
