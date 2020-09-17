const { MessageEmbed } = require("discord.js");
const package = require("../../package.json");
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
  name: "botinfo",
  aliases: ["botinfo"],
  category: "📌 - misc",
  description: `${english.Botinfo_desc}`,
  cooldown: 30,
  usage: "",
};
