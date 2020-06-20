const { MessageEmbed } = require("discord.js");
const colours = require("../../assets/json/colours.json");
const emotes = require("../../assets/json/emotes.json");
const { prefix } = require("../../config.json");
const lang = require("../../assets/lang/english.json");

module.exports.run = (bot, message, args) => {
  const embed = new MessageEmbed()
    .setColor(colours.green_light)
    .setAuthor(bot.user.username, bot.user.avatarURL())
    .setThumbnail(bot.user.avatarURL())
    .setDescription(`${lang.WIKI_DESCRIPTION} \`\`${prefix}help\`\``)
    .addField(
      `${emotes.base} - ${lang.BUILDINGS}:`,
      `[${lang.Available_here}](${lang.Building_cat_link})`
    )
    .addField(
      `${emotes.colosse} - ${lang.Troops}:`,
      `[${lang.Available_here}](${lang.Troops_cat_link})`
    )
    .setFooter(bot.user.username, bot.user.displayAvatarURL());

  message.channel.send(embed);
};

module.exports.help = {
  name: "wiki",
  aliases: ["wiki"],
  category: "📜 - wiki",
  description: `${lang.WIKI_desc}`,
  usage: "",
};
