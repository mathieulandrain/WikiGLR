const { MessageEmbed } = require("discord.js");
const { version } = require("../../package.json");
const colours = require("../../assets/json/colours.json");
const emotes = require("../../assets/json/emotes.json");
const { prefix } = require("../../config.json");
const lang = require("../../assets/lang/english.json");
const chan = require("../../assets/json/channels.json");

module.exports.run = (bot, message, args) => {
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
    .setTitle(`${emotes.glr} - ${lang.Autres}`)
    .setThumbnail(bot.user.avatarURL())
    .setDescription(`${lang.Autres_DESCRIPTION}`)
    .addField(
      `${emotes.glr} - ${lang.Autres}:`,
      `${emotes.chips} - [${lang.Level}](${lang.Level_link})\n${emotes.base} - [${lang.Buildinglvlunlock}](${lang.Buildinglvlunlock_link})\n${emotes.labo} - [${lang.Troopslvlunlock}](${lang.Troopslvlunlock_link})\n${emotes.alliance} - [${lang.Alliances}](${lang.Alliances_link})\n${emotes.Craft} - [${lang.Craft}](${lang.Craft_link})`
    )

    .setFooter(
      `${lang.Bot_name} | ${lang.Autres}`,
      bot.user.displayAvatarURL()
    );

  message.channel.send(embed);
};

module.exports.help = {
  name: "misc",
  aliases: ["craft", "level", "alliance", "levelunlock"],
  category: "📜 - wiki",
  description: `${lang.WIKI_desc}`,
  cooldown: 0,
  usage: "",
};
