const { MessageEmbed } = require("discord.js");
const colours = require("../../assets/json/colours.json");
const emotes = require("../../assets/json/emotes.json");
const { prefix } = require("../../config.json");
const english = require("../../assets/lang/english.json");
const chan = require("../../assets/json/channels.json");
const model1 = require("../../dbFile.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  let infoServ = await model1.findOne({ ID: `${message.guild.id}` });
  let lang = await checklanguage(model1, fs, infoServ.langue);
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
    `${chan.galaxy_life_chat}`,
    `${chan.donator_chat}`,
    `${chan.bots_and_spam}`,
    `${chan.galaxy_life_bases}`,
    `${chan.galaxy_life_fanart}`,
    `${chan.galaxy_life_friends}`,
    `${chan.galaxy_life_memes}`,
    `${chan.the_meme_room}`,
    `${chan.vc_music}`,
  ];

  if (interdit.includes(message.channel.id))
    return message.channel.send(
      `⚠️ - ${lang.Block} <#${chan.galaxy_life_issues}>.`
    );
  const embed = new MessageEmbed()
    .setColor(colours.green_light)
    .setAuthor(bot.user.username, bot.user.avatarURL())
    .setThumbnail(bot.user.displayAvatarURL())
    .addField(`${emotes.Info} - ${lang.Howtobug}`, `${lang.Issue_desc}`)
    .setTitle(`${lang.Information} - ${lang.Issue} - ⚠️`)
    .setFooter(`${lang.Bot_name} | ${lang.Issue}`, bot.user.displayAvatarURL());

  message.channel.send(embed);
  function checklanguage(db, fs, language) {
    return new Promise(function (resolve, reject) {
      fs.readFile(`./assets/lang/${language}.json`, async (err, data) => {
        let l = JSON.parse(data);
        resolve(l);
      });
    });
  }
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
  name: "issues",
  aliases: ["bug", "issue", "bugs"],
  category: "📌 - misc",
  description: `${english.Issue_DESC}`,
  cooldown: 30,
  usage: "",
};
