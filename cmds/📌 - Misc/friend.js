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
    .addField(`${emotes.Info} - ${lang.Howto}`, `${lang.friendsDescription}`)
    .setTitle(`${lang.Information} - ${lang.friends} - ${emotes.Friend}`)
    .setFooter(
      `${lang.Bot_name} | ${lang.friends}`,
      bot.user.displayAvatarURL()
    );

  message.channel.send(embed);
};

module.exports.help = {
  name: "friend",
  aliases: ["friends", "f", "ami", "amis"],
  category: "📌 - misc",
  description: `how to invite some friends on GLR`,
  usage: "",
};
