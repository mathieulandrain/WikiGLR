const { MessageEmbed } = require("discord.js");
const colours = require("../../assets/json/colours.json");
const english = require("../../assets/lang/english.json");
const emotes = require("../../assets/json/emotes.json");
const chan = require("../../assets/json/channels.json");
const model1 = require("../../dbFile.js");
const fs = require("fs");

module.exports.run = async (bot, message, args, Prefix, lang) => {
  let infoServ = await model1.findOne({ ID: `${message.guild.id}` });
  const embed = new MessageEmbed()
    .setColor(colours.green_light)
    .setAuthor(`${bot.user.username} - ${lang.Invite}`, bot.user.avatarURL())
    .setDescription(`${lang.Invite_desc}`)
    .addField(
      `${emotes.invite} - ${lang.Invite}:`,
      `[${lang.Invite_link}](https://discordapp.com/oauth2/authorize?client_id=723611271458586657&scope=bot&permissions=523328)`
    )
    .setFooter(
      `${lang.Bot_name} | ${lang.Invite}`,
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
  name: "invite",
  aliases: ["invite"],
  category: "📌 - misc",
  description: `${english.Invite_desc}`,
  cooldown: 30,
  usage: "",
};
