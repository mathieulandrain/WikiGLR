const { MessageEmbed } = require("discord.js");
const colours = require("../../assets/json/colours.json");
const emotes = require("../../assets/json/emotes.json");
const english = require("../../assets/lang/english.json");
const chan = require("../../assets/json/channels.json");
const db = require("quick.db");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  let default_lang = await db.get(message.guild.id);
  let lang = await checklanguage(db, fs, default_lang.langue);
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
    .setDescription(
      `${emotes.Info} - ${lang.Infomation_DESCRIPTION} - ${emotes.bunkercoop}`
    )
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle(`${lang.Information} - ${lang.BunkerCop}`)
    .setURL(`${lang.BunkerCop_link}`)
    .attachFiles(["./assets/img/Buildings/bunkerco.png"])
    .setImage("attachment://bunkerco.png")
    .setFooter(
      `${lang.Bot_name} | ${lang.Information}`,
      bot.user.displayAvatarURL()
    );

  message.channel.send(embed);
  function checklanguage(db, fs, language) {
    return new Promise(function (resolve, reject) {
      fs.readFile(`./assets/lang/${language}.json`, async (err, data) => {
        let l = JSON.parse(data);
        resolve(l);
      });
    });
  }
};

module.exports.help = {
  name: "friendsbunker",
  aliases: ["fb", "bunker cooperatif", "bunker co"],
  category: "📡 - buildings",
  description: `${english.friendsbunker_desc}`,
  cooldown: 0,
  usage: "",
};
