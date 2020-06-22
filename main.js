const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const chan = require("./assets/json/channels.json");
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
  var interdit = [
    `${chan.Test}`,
    `${chan.chat_deutsch}`,
    `${chan.chat_english}`,
    `${chan.chat_español}`,
    `${chan.chat_français}`,
    `${chan.chat_italiano}`,
    `${chan.chat_nederlands}`,
    `${chan.chat_polski}`,
    `${chan.chat_portugês}`,
    `${chan.donator_chat}`,
    `${chan.galaxy_life_bases}`,
    `${chan.galaxy_life_chat}`,
    `${chan.galaxy_life_fanart}`,
    `${chan.galaxy_life_friends}`,
    `${chan.galaxy_life_issues}`,
    `${chan.galaxy_life_memes}`,
    `${chan.the_meme_room}`,
    `${chan.vc_music}`,
  ];

  if (interdit.includes(message.channel.id))
    return message.channel.send(
      `⚠️ - You're on the wrong channel, to do the commands go to <#663702472329658386>`
    );

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

bot.on("message", function (message) {
  if (message.mentions.users.first() === bot.user) {
    return message.channel.send(
      `Hello <@${message.author.id}>, I\'m <@${bot.user.id}>, my prefix is "\`\`${config.prefix}\`\`".\nif you need help do \`\`${config.prefix}help\`\` or \`\`${config.prefix}help <command>\`\` :p`
    );
  }
});
