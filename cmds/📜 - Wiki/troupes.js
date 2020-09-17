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
    .setTitle(`${emotes.colosse} - ${lang.Troops}`)
    .setThumbnail(bot.user.avatarURL())
    .setDescription(`${lang.troopslvlunlock_desc}`)
    .addField(
      `${emotes.starlin} - ${lang.Infanterie}:`,
      `${emotes.marine} - [${lang.Marine}](${lang.Marine_link})\n${emotes.pilleur} - [${lang.Pilleur}](${lang.Pilleur_link})\n${emotes.flamme} - [${lang.LanceFlamme}](${lang.LanceFlamme_link})\n${emotes.bazooka} - [${lang.Bazooka}](${lang.Bazooka_link})\n${emotes.kami} - [${lang.Kamikaze}](${lang.Kamikaze_link})\n${emotes.starlin} - [${lang.Starlinator}](${lang.Starlinator_link})\n${emotes.esquade} - [${lang.Esquade}](${lang.Esquade_link})\n${emotes.bérets} - [${lang.BéretVert}](${lang.BéretVert_link})`
    )
    .addField(
      `${emotes.colosse} - ${lang.Véhiculée}:`,
      `${emotes.strikes} - [${lang.STrike}](${lang.Strike_link})\n${emotes.tank} - [${lang.Tank}](${lang.Tank_link})\n${emotes.raider} - [${lang.Raider}](${lang.Raider_link})\n${emotes.taupe} - [${lang.Taupe}](${lang.Taupe_link})\n${emotes.colosse} - [${lang.Colosse}](${lang.Colosse_link})`
    )
    .addField(
      `${emotes.zep} - ${lang.Aérienne}:`,
      `${emotes.guepe} - [${lang.Guêpe}](${lang.Guêpe_link})\n${emotes.ovni} - [${lang.OvniAspirateur}](${lang.OvniAspirateur_link})\n${emotes.falcon} - [${lang.Falcon}](${lang.Falcon_link})\n${emotes.zep} - [${lang.Zeppelin}](${lang.Zeppelin_link})`
    )
    .setFooter(`No Limit | Wiki - ${lang.Troops}`, bot.user.displayAvatarURL());

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
  name: "troops",
  aliases: [
    "troop",
    "Truppen",
    "Edificios",
    "Troupes",
    "Truppe",
    "Troepen",
    "Jednostki",
    "Tropas",
    "Birlikler",
  ],
  category: "📜 - wiki",
  description: `${english.troops_desc}`,
  cooldown: 30,
  usage: "",
};
