const { MessageEmbed } = require("discord.js");
const colours = require("../../assets/json/colours.json");
const emotes = require("../../assets/json/emotes.json");
const english = require("../../assets/lang/english.json");
const model1 = require("../../dbFile.js");
const fs = require("fs");

module.exports.run = async (bot, message, args, Prefix, lang) => {
  let infoServ = await model1.findOne({ ID: `${message.guild.id}` });
  const embed = new MessageEmbed()
    .setColor(colours.green_light)
    .setAuthor(bot.user.username, bot.user.avatarURL())
    .setThumbnail(bot.user.displayAvatarURL())
    .addField(`${emotes.Info} - ${lang.Howto}`, `${lang.friendsDescription}`)
    .setTitle(`${lang.Information} - ${lang.friends} - ${emotes.Friend}`)
    .setFooter(
      `${lang.Bot_name} | ${lang.friends}`,
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
  name: "friend",
  aliases: ["friends", "f", "ami", "amis"],
  category: "📌 - misc",
  description: `${english.Friend_desc}`,
  cooldown: 30,
  usage: "",
};
