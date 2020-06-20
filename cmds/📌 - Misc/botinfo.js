const { MessageEmbed } = require("discord.js");
const package = require("../../package.json");
const colours = require("../../assets/json/colours.json");
const lang = require("../../assets/lang/english.json");
const emotes = require("../../assets/json/emotes.json");

module.exports.run = (bot, message, args) => {
  const embed = new MessageEmbed()
    .setColor(colours.green_light)
    .setAuthor(`${bot.user.username} - Info`, bot.user.avatarURL())
    .setThumbnail(bot.user.avatarURL())
    .addFields(
      {
        name: "📀 - Memory:",
        value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
          2
        )} MB`,
        inline: true,
      },
      {
        name: "📡 - Uptime:",
        value: `${Math.floor(bot.uptime / 1000 / 60).toString()} minutes`,
        inline: true,
      },
      { name: "\u200b", value: `\u200b`, inline: true },
      {
        name: "🕹️ - Servers:",
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
      { name: "⚙️ - Version:", value: `${package.version}`, inline: true },
      {
        name: "🆘 - Support:",
        value: `[Server Invite](https://discord.gg/VTYaxAk)`,
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
    .setFooter(`${lang.Bot_name} | Botinfo`, bot.user.displayAvatarURL());

  message.channel.send(embed);
};

module.exports.help = {
  name: "botinfo",
  aliases: ["botinfo"],
  category: "📌 - misc",
  description: `${lang.Botinfo_desc}`,
  usage: "",
};
