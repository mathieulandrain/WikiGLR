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
      `${emotes.Info} - ${lang.Infomation_DESCRIPTION} - ${emotes.ovni}`
    )
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle(`${lang.Information} - ${lang.OvniAspirateur}`)
    .setURL(`${lang.OvniAspirateur_link}`)
    .attachFiles(["./assets/img/Troops/ovni.png"])
    .setImage("attachment://ovni.png")
    .setFooter(
      `${lang.Bot_name} | ${lang.Information}`,
      bot.user.displayAvatarURL()
    );

  message.channel.send(embed);
};

module.exports.help = {
  name: "hoover",
  aliases: ["hooverufo", "ovni", "OVNI"],
  category: "📡 - troops",
  description: `${lang.Information_desc}`,
  usage: "",
};
