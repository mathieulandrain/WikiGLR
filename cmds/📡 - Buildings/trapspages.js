const Discord = require("discord.js");
const colours = require("../../assets/json/colours.json");
const emotes = require("../../assets/json/emotes.json");
const lang = require("../../assets/lang/english.json");
const files = require("../../assets/json/files.json");

module.exports.run = (client, message, args, tools) => {
  let pages = [
    `${emotes.Info} - ${lang.Infomation_DESCRIPTION} - ${emotes.piège}`,
    `${emotes.Info} - ${lang.Infomation_DESCRIPTION} - ${emotes.Bleutrap}`,
    `${emotes.Info} - ${lang.Infomation_DESCRIPTION} - ${emotes.Flytrap}`,
  ];
  let title = [
    `${lang.Information} - ${lang.Piège}`,
    `${lang.Information} - ${lang.piegeBleu}`,
    `${lang.Information} - ${lang.piegeVolant}`,
  ];
  let url = [`${lang.Piège_link}`, `${lang.Piège_link}`, `${lang.Piège_link}`];
  let image = [`${files.piege}`, `${files.piegeBleu}`, `${files.piegeVolant}`];
  let page = 1;

  const embed = new Discord.MessageEmbed()
    .setColor(colours.green_light)
    .setAuthor(client.user.username, client.user.avatarURL())
    .setThumbnail(client.user.displayAvatarURL())
    .setFooter(
      `${lang.Bot_name} | Page ${page} of ${pages.length} | ${lang.Information}`
    )
    .setDescription(pages[page - 1])
    .setTitle(title[page - 1])
    .setURL(url[page - 1])
    .setImage(image[page - 1]);

  message.channel.send(embed).then((msg) => {
    msg.react("◀️").then((r) => {
      msg.react("▶️");

      const backawardsFilter = (reaction, user) =>
        reaction.emoji.name === "◀️" && user.id === message.author.id;
      const forwardsFilter = (reaction, user) =>
        reaction.emoji.name === "▶️" && user.id === message.author.id;

      const backawards = msg.createReactionCollector(backawardsFilter, {
        time: 600000,
      });
      const forwards = msg.createReactionCollector(forwardsFilter, {
        time: 600000,
      });

      backawards.on("collect", (r) => {
        if (page === 1) return;
        page--;
        embed.setDescription(pages[page - 1]);
        embed.setTitle(title[page - 1]);
        embed.setURL(url[page - 1]);
        embed.setImage(image[page - 1]);
        embed.setAuthor(client.user.username, client.user.avatarURL());
        embed.setThumbnail(client.user.displayAvatarURL());
        embed.setFooter(
          `${lang.Bot_name} | Page ${page} of ${pages.length} | ${lang.Information}`
        );
        msg.edit(embed);
      });

      forwards.on("collect", (r) => {
        if (page === pages.length) return;
        page++;
        embed.setDescription(pages[page - 1]);
        embed.setTitle(title[page - 1]);
        embed.setURL(url[page - 1]);
        embed.setImage(image[page - 1]);
        embed.setAuthor(client.user.username, client.user.avatarURL());
        embed.setThumbnail(client.user.displayAvatarURL());
        embed.setFooter(
          `${lang.Bot_name} | Page ${page} of ${pages.length} | ${lang.Information}`
        );
        msg.edit(embed);
      });
    });
  });
};
// ◀️ ▶️
module.exports.help = {
  name: "traps",
  aliases: ["trap", "piège", "pièges"],
  category: "📜 - wiki",
  description: `${lang.WIKI_desc}`,
  usage: "",
};
