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
      `${emotes.Info} - ${lang.Infomation_DESCRIPTION} - ${emotes.aa}`
    )
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle(`${lang.Information} - ${lang.aa}`)
    .setURL(`${lang.aa_link}`)
    .attachFiles(["./assets/img/Buildings/aa.png"])
    .setImage("attachment://aa.png")
    .setFooter(
      `${lang.Bot_name} | ${lang.Information}`,
      bot.user.displayAvatarURL()
    );

  message.channel.send(embed);
};

module.exports.help = {
  name: "missile",
  aliases: ["launcher", "missile launcher", "lance missile", "lance missiles"],
  category: "📡 - buildings",
  description: `${lang.Information_desc}`,
  usage: "",
};
