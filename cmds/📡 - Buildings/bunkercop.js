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
    .setAuthor(bot.user.username, bot.user.avatarURL())
    .setDescription(
      `${emotes.Info} - ${lang.Infomation_DESCRIPTION} - ${emotes.bunkercoop}`
    )
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle(`${lang.Information} - ${lang.BunkerCop}`)
    .setURL(`${lang.BunkerCop_link}`)
    .attachFiles(["./assets/img/Buildings/bunkerco.png"])
    .setImage("attachment://bunkerco.png")
    .setFooter(
      `${lang.Bot_name} | ${lang.Information}`,
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
  name: "friendsbunker",
  aliases: [
    "fb",
    "bunkercooperatif",
    "bunkerco",
    "freundesbunker",
    "bunkerdeamigos",
    "bunkeramici",
    "vriendenbunker",
    "bunkiersojusznika",
    "amigosbunker",
    "arkadaşkoruganı",
  ],
  category: "📡 - buildings",
  description: `${english.friendsbunker_desc}`,
  cooldown: 30,
  usage: "",
};
