const { MessageEmbed } = require("discord.js");
const package = require("../../package.json");
const colours = require("../../assets/json/colours.json");
const english = require("../../assets/lang/english.json");
const emotes = require("../../assets/json/emotes.json");
const chan = require("../../assets/json/channels.json");
const db = require("quick.db");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  let default_lang = await db.get(message.guild.id);
  let lang = await checklanguage(db, fs, default_lang.langue);
  var interdit = [
    `${chan.Test}`,
    `${chan.chat_deutsch}`,
    `${chan.chat_english}`,
    `${chan.chat_español}`,
    `${chan.chat_français}`,
    `${chan.chat_italiano}`,
    `${chan.chat_nederlands}`,
    `${chan.chat_polski}`,
    `${chan.chat_portugês}`,
    `${chan.donator_chat}`,
    `${chan.galaxy_life_bases}`,
    `${chan.galaxy_life_chat}`,
    `${chan.galaxy_life_fanart}`,
    `${chan.galaxy_life_friends}`,
    `${chan.galaxy_life_issues}`,
    `${chan.galaxy_life_memes}`,
    `${chan.the_meme_room}`,
    `${chan.vc_music}`,
  ];

  if (interdit.includes(message.channel.id))
    return message.channel.send(`⚠️ - ${lang.Block} <#663702472329658386>`);
  const embed = new MessageEmbed()
    .setColor(colours.green_light)
    .setAuthor(`${bot.user.username} - ${lang.Info}`, bot.user.avatarURL())
    .setThumbnail(bot.user.avatarURL())
    .addFields(
      {
        name: `📀 - ${lang.Memory}:`,
        value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
          2
        )} MB`,
        inline: true,
      },
      {
        name: `📡 - ${lang.Uptime}:`,
        value: `${Math.floor(bot.uptime / 1000 / 60).toString()} minutes`,
        inline: true,
      },
      { name: "\u200b", value: `\u200b`, inline: true },
      {
        name: `🕹️ - ${lang.Servers}:`,
        value: `${bot.guilds.cache.size.toString()}`,
        inline: true,
      },
      {
        name: `📜 - ${lang.Salon}:`,
        value: `${bot.channels.cache.size.toString()}`,
        inline: true,
      },
      {
        name: `👥 - ${lang.User}:`,
        value: `${bot.guilds.cache
          .map((g) => g.memberCount)
          .reduce((a, b) => a + b)}`,
        inline: true,
      },
      {
        name: `⚙️ - ${lang.Version}:`,
        value: `${package.version}`,
        inline: true,
      },
      {
        name: `🆘 - ${lang.Support}:`,
        value: `[${lang.Server_Invite}](https://discord.gg/VTYaxAk)`,
        inline: true,
      },
      {
        name: `${emotes.invite} - ${lang.Invite}:`,
        value: `[${lang.Invite_link}](https://discordapp.com/oauth2/authorize?client_id=723611271458586657&scope=bot&permissions=523328)`,
        inline: true,
      },
      {
        name: `${emotes.dev} - ${lang.Devmathieu}:`,
        value: `[${lang.Mathieu}](https://github.com/mathieulandrain)`,
        inline: true,
      },
      {
        name: `${emotes.dev} - ${lang.Devclem}:`,
        value: `[${lang.Clem}](https://github.com/clem2263)`,
        inline: true,
      }
    )
    .setFooter(`${lang.Bot_name} | ${lang.Info}`, bot.user.displayAvatarURL());

  message.channel.send(embed);

  function checklanguage(db, fs, language) {
    return new Promise(function (resolve, reject) {
      fs.readFile(`./assets/lang/${language}.json`, async (err, data) => {
        let l = JSON.parse(data);
        resolve(l);
      });
    });
  }
};

module.exports.help = {
  name: "botinfo",
  aliases: ["botinfo"],
  category: "📌 - misc",
  description: `${english.Botinfo_desc}`,
  cooldown: 0,
  usage: "",
};
