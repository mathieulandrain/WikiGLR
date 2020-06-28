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
  var TipsList = [
    `${lang.tips1}`,
    `${lang.tips2}`,
    `${lang.tips3}`,
    `${lang.tips4}`,
    `${lang.tips5}`,
    `${lang.tips6}`,
    `${lang.tips7}`,
    `${lang.tips8}`,
    `${lang.tips9}`,
    `${lang.tips10}`,
    `${lang.tips11}`,
    `${lang.tips12}`,
    `${lang.tips13}`,
    `${lang.tips14}`,
    `${lang.tips15}`,
    `${lang.tips16}`,
    `${lang.tips17}`,
    `${lang.tips18}`,
    `${lang.tips19}`,
    `${lang.tips20}`,
  ];

  let result = Math.floor(Math.random() * TipsList.length);
  let reponse = TipsList[result];
  const embed = new MessageEmbed()
    .setColor(colours.green_light)
    .setAuthor(bot.user.username, bot.user.avatarURL())
    .setThumbnail(bot.user.displayAvatarURL())
    .addField(`${emotes.Info} - ${lang.tips_DESC}`, `${reponse}`)
    .setTitle(`${lang.Information} - ${lang.tips} - ${emotes.Friend}`)
    .setFooter(`${lang.Bot_name} | ${lang.tips}`, bot.user.displayAvatarURL());

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
  name: "tips",
  aliases: ["tip"],
  category: "📌 - misc",
  description: `${english.PA_desc}`,
  cooldown: 0,
  usage: "",
};
