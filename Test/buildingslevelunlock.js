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
      `${emotes.Info} - ${lang.Buildinglvlunlock_DESCRIPTION} - ${emotes.base}`
    )
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle(`${lang.Information} - ${lang.Buildinglvlunlock}`)
    .setURL(`${lang.Buildinglvlunlock_link}`)
    .attachFiles(["./assets/img/Buildings/aa.png"])
    .setImage("attachment://aa.png")
    .setFooter(
      `${lang.Bot_name} | ${lang.Information}`,
      bot.user.displayAvatarURL()
    );

  message.channel.send(embed);
};

module.exports.help = {
  name: "buildunlock",
  aliases: ["buildinglevelunlock", "blu"],
  category: "📡 - buildings",
  description: `${lang.Information_desc}`,
  usage: "",
};
