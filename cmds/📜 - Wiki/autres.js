const { MessageEmbed } = require("discord.js");
const colours = require("../../assets/json/colours.json");
const emotes = require("../../assets/json/emotes.json");
const english = require("../../assets/lang/english.json");
const chan = require("../../assets/json/channels.json");
const model1 = require("../../dbFile.js");
const fs = require("fs");

module.exports.run = async (bot, message, args, Prefix, lang) => {
  let infoServ = await model1.findOne({ ID: `${message.guild.id}` });
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
  function checklanguage(model1, fs, language) {
    return new Promise(function (resolve, reject) {
      fs.readFile(`./assets/lang/${language}.json`, async (err, data) => {
        let l = JSON.parse(data);
        resolve(l);
      });
    });
  }
};

module.exports.help = {
  name: "misc",
  aliases: ["craft", "level", "alliance", "levelunlock"],
  category: "📜 - wiki",
  description: `${english.misc_desc}`,
  cooldown: 30,
  usage: "",
};
