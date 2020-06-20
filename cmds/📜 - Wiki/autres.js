const { MessageEmbed } = require("discord.js");
const { version } = require("../../package.json");
const colours = require("../../assets/json/colours.json");
const emotes = require("../../assets/json/emotes.json");
const { prefix } = require("../../config.json");
const lang = require("../../assets/lang/english.json");

module.exports.run = (bot, message, args) => {
  const embed = new MessageEmbed()
    .setColor(colours.green_light)
    .setTitle(`${emotes.glr} - ${lang.Autres}`)
    .setThumbnail(bot.user.avatarURL())
    .setDescription(`${lang.Autres_DESCRIPTION}`)
    .addField(
      `${emotes.glr} - ${lang.Autres}:`,
      `${emotes.chips} - [${lang.Level}](${lang.Level_link})\n${emotes.base} - [${lang.Buildinglvlunlock}](${lang.Buildinglvlunlock_link})\n${emotes.labo} - [${lang.Troopslvlunlock}](${lang.Troopslvlunlock_link})\n${emotes.alliance} - [${lang.Alliances}](${lang.Alliances_link})\n${emotes.Craft} - [${lang.Craft}](${lang.Craft_link})`
    )

    .setFooter(
      `${lang.Bot_name} | ${lang.Autres}`,
      bot.user.displayAvatarURL()
    );

  message.channel.send(embed);
};

module.exports.help = {
  name: "misc",
  aliases: ["craft", "level", "alliance", "levelunlock"],
  category: "📜 - wiki",
  description: `${lang.WIKI_desc}`,
  usage: "",
};
