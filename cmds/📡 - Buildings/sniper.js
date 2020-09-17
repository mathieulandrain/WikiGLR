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
      `${emotes.Info} - ${lang.Infomation_DESCRIPTION} - ${emotes.snipe}`
    )
    .setThumbnail(bot.user.displayAvatarURL())
    .setTitle(`${lang.Information} - ${lang.Sniper}`)
    .setURL(`${lang.Sniper_link}`)
    .attachFiles(["./assets/img/Buildings/sniper.png"])
    .setImage("attachment://sniper.png")
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
  name: "snipertower",
  aliases: [
    "sniper",
    "toursniper",
    "scharfschützen-Turm",
    "torredetiro",
    "torredelcecchino",
    "snipertoren",
    "wieżasnajperska",
    "atiradorfurtivo",
    "keskinnişancıkulesi",
  ],
  category: "📡 - buildings",
  description: `${english.Build_desc}`,
  cooldown: 30,
  usage: "",
};
