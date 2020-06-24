const { MessageEmbed } = require("discord.js");
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
};

module.exports.help = {
  name: "wiki",
  aliases: ["wiki"],
  category: "📜 - wiki",
  description: `${lang.WIKI_desc}`,
  cooldown: 0,
  usage: "",
};
