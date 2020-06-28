const { MessageEmbed } = require("discord.js");
const colours = require("../../assets/json/colours.json");
const emotes = require("../../assets/json/emotes.json");
const { default_prefix } = require("../../config.json");
const english = require("../../assets/lang/english.json");
const chan = require("../../assets/json/channels.json");
const model1 = require("../../dbFile.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  let infoServ = await model1.findOne({ ID: `${message.guild.id}` });
  let lang = await checklanguage(model1, fs, infoServ.langue);
  let prefix = infoServ.prefix;
  if (prefix === null) prefix = default_prefix;
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
    return message.channel.send(`⚠️ - ${lang.Block} <#663702472329658386>`);
  const embed = new MessageEmbed()
    .setColor(colours.green_light)
    .setAuthor(bot.user.username, bot.user.avatarURL())
    .setThumbnail(bot.user.avatarURL())
    .setDescription(`${lang.WIKI_DESCRIPTION} \`\`${prefix}help\`\``)
    .addField(
      `${emotes.base} - ${lang.BUILDINGS}:`,
      `[${lang.Available_here}](${lang.Building_cat_link})`
    )
    .addField(
      `${emotes.colosse} - ${lang.Troops}:`,
      `[${lang.Available_here}](${lang.Troops_cat_link})`
    )
    .setFooter(bot.user.username, bot.user.displayAvatarURL());

  message.channel.send(embed);
  function checklanguage(model1, fs, language) {
    return new Promise(function (resolve, reject) {
      fs.readFile(`./assets/lang/${language}.json`, async (err, data) => {
        let l = JSON.parse(data);
        resolve(l);
      });
    });
  }
};

module.exports.help = {
  name: "wiki",
  aliases: ["wiki"],
  category: "📜 - wiki",
  description: `${english.wiki_desc}`,
  cooldown: 0,
  usage: "",
};
