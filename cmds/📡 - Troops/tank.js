const { MessageEmbed } = require("discord.js");
const colours = require("../../assets/json/colours.json");
const emotes = require("../../assets/json/emotes.json");
const { prefix } = require("../../config.json");
const lang = require("../../assets/lang/english.json");

module.exports.run = (bot, message, args) => {
  const embed = new MessageEmbed()
    .setColor(colours.green_light)
    .setAuthor(bot.user.username, bot.user.avatarURL())
    .setDescription(
      `${emotes.Info} - ${lang.Infomation_DESCRIPTION} - ${emotes.tank}`
    )
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle(`${lang.Information} - ${lang.Tank}`)
    .setURL(`${lang.Tank_link}`)
    .attachFiles(["./assets/img/Troops/tank.png"])
    .setImage("attachment://tank.png")
    .setFooter(
      `${lang.Bot_name} | ${lang.Information}`,
      bot.user.displayAvatarURL()
    );

  message.channel.send(embed);
};

module.exports.help = {
  name: "beetletank",
  aliases: ["tank", "char"],
  category: "📡 - troops",
  description: `${lang.Information_desc}`,
  usage: "",
};
