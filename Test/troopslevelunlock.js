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
      `${emotes.Info} - ${lang.Troopslvlunlock_DESCRIPTION} - ${emotes.labo}`
    )
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle(`${lang.Information} - ${lang.Troopslvlunlock}`)
    .setURL(`${lang.Troopslvlunlock_link}`)
    .attachFiles(["./assets/img/Troops/troopslvl.png"])
    .setImage("attachment://troopslvl.png")
    .setFooter(
      `${lang.Bot_name} | ${lang.Information}`,
      bot.user.displayAvatarURL()
    );

  message.channel.send(embed);
};

module.exports.help = {
  name: "troopsunlock",
  aliases: ["troopsevelunlock", "tlu"],
  category: "📡 - troops",
  description: `${lang.Information_desc}`,
  usage: "",
};
