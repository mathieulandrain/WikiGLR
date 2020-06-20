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
    .setDescription(
      `${emotes.Info} - ${lang.Infomation_DESCRIPTION} - ${emotes.zep}`
    )
    .setTitle(`${lang.Information} - ${lang.Zeppelin}`)
    .setURL(`${lang.Zeppelin_link}`)
    .attachFiles(["./assets/img/Troops/zep.png"])
    .setImage("attachment://zep.png")
    .setFooter(
      `${lang.Bot_name} | ${lang.Information}`,
      bot.user.displayAvatarURL()
    );

  message.channel.send(embed);
};

module.exports.help = {
  name: "zeppelin",
  aliases: ["zep"],
  category: "📡 - troops",
  description: `${lang.Information_desc}`,
  usage: "",
};
