const { MessageEmbed } = require("discord.js");
const package = require("../../package.json");
const colours = require("../../assets/json/colours.json");
const lang = require("../../assets/lang/english.json");
const emotes = require("../../assets/json/emotes.json");

module.exports.run = (bot, message, args) => {
  const embed = new MessageEmbed()
    .setColor(colours.green_light)
    .setAuthor(`${bot.user.username} - Invite`, bot.user.avatarURL())
    .setDescription(
      "You will find here the link to invite the bot on your server."
    )
    .addField(
      `${emotes.invite} - ${lang.Invite}:`,
      `[${lang.Invite_link}](https://discordapp.com/oauth2/authorize?client_id=723611271458586657&scope=bot&permissions=523328)`
    )
    .setFooter(`${lang.Bot_name} | Invite`, bot.user.displayAvatarURL());

  message.channel.send(embed);
};

module.exports.help = {
  name: "invite",
  aliases: ["invite"],
  category: "📌 - misc",
  description: `${lang.Botinfo_desc}`,
  usage: "",
};
