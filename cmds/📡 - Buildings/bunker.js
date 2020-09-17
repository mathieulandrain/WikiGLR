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
      `${emotes.Info} - ${lang.Infomation_DESCRIPTION} - ${emotes.bunker}`
    )
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle(`${lang.Information} - ${lang.Bunker}`)
    .setURL(`${lang.Bunker_link}`)
    .attachFiles(["./assets/img/Buildings/bunker.png"])
    .setImage("attachment://bunker.png")
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
  name: "bunker",
  aliases: [
    "bunker",
    "verteidigungsbunker",
    "búnkerdedefensa",
    "bunkerdelladifesa",
    "verdedigingsbunker",
    "bunkierobronny",
    "bunkerdadefesa",
    "savunmakoruganı",
  ],
  category: "📡 - buildings",
  description: `${english.bunker_desc}`,
  cooldown: 30,
  usage: "",
};
