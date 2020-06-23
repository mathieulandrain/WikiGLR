const { MessageEmbed } = require("discord.js");
const package = require("../../package.json");
const colours = require("../../assets/json/colours.json");
const lang = require("../../assets/lang/english.json");
const emotes = require("../../assets/json/emotes.json");
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
    return message.channel.send(
      `⚠️ - You're on the wrong channel, to do the commands go to <#663702472329658386>`
    );
  const embed = new MessageEmbed()
    .setColor(colours.green_light)
    .setAuthor(`${bot.user.username} - Invite`, bot.user.avatarURL())
    .setDescription(
      "You will find here the link to invite the bot on your server."
    )
    .addField(
      `${emotes.invite} - ${lang.Invite}:`,
      `[${lang.Invite_link}](https://discordapp.com/oauth2/authorize?client_id=723611271458586657&scope=bot&permissions=523328)`
    )
    .setFooter(`${lang.Bot_name} | Invite`, bot.user.displayAvatarURL());

  message.channel.send(embed);
};

module.exports.help = {
  name: "invite",
  aliases: ["invite"],
  category: "📌 - misc",
  description: `${lang.Botinfo_desc}`,
  cooldown: 0,
  usage: "",
};
