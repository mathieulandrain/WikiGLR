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
      `${emotes.Info} - ${lang.Infomation_DESCRIPTION} - ${emotes.flamme}`
    )
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle(`${lang.Information} - ${lang.LanceFlamme}`)
    .setURL(`${lang.LanceFlamme_link}`)
    .attachFiles(["./assets/img/Troops/flamme.png"])
    .setImage("attachment://flamme.png")
    .setFooter(
      `${lang.Bot_name} | ${lang.Information}`,
      bot.user.displayAvatarURL()
    );

  message.channel.send(embed);
};

module.exports.help = {
  name: "flamethrower",
  aliases: ["flame", "lance flamme", "flamme"],
  category: "📡 - troops",
  description: `${lang.Information_desc}`,
  usage: "",
};
