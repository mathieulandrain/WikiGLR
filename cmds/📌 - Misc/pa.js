const { MessageEmbed } = require("discord.js");
const colours = require("../../assets/json/colours.json");
const emotes = require("../../assets/json/emotes.json");
const { prefix } = require("../../config.json");
const lang = require("../../assets/lang/english.json");

module.exports.run = (bot, message, args) => {
  const embed = new MessageEmbed()
    .setColor(colours.green_light)
    .setAuthor(bot.user.username, bot.user.avatarURL())
    .setThumbnail(bot.user.displayAvatarURL())
    .addField(`${emotes.Info} - ${lang.HowtoPA}`, `${lang.PADesc}`)
    .setTitle(`${lang.Information} - ${lang.PA} - ${emotes.Friend}`)
    .setFooter(`${lang.Bot_name} | ${lang.PA}`, bot.user.displayAvatarURL());

  message.channel.send(embed);
};

module.exports.help = {
  name: "pa",
  aliases: ["pocketsadventure"],
  category: "📌 - misc",
  description: `how to play pa`,
  usage: "",
};
