const Discord = require("discord.js");
const colours = require("../../assets/json/colours.json");
const emotes = require("../../assets/json/emotes.json");
const english = require("../../assets/lang/english.json");
const chan = require("../../assets/json/channels.json");
const model1 = require("../../dbFile.js");
const fs = require("fs");
const files = require("../../assets/json/files.json");

module.exports.run = async (client, message, args, Prefix, lang) => {
  let infoServ = await model1.findOne({ ID: `${message.guild.id}` });
  let pages = [
    `${emotes.Info} - ${lang.Infomation_DESCRIPTION} - ${emotes.starlin}`,
    `${emotes.Info} - ${lang.Infomation_DESCRIPTION} - ${emotes.colosse}`,
    `${emotes.Info} - ${lang.Infomation_DESCRIPTION} - ${emotes.zep}`,
    `${emotes.Info} - ${lang.Infomation_DESCRIPTION} - ${emotes.bérets}`,
  ];
  let title = [
    `${lang.Information} - ${lang.troops_title}`,
    `${lang.Information} - ${lang.troops_title}`,
    `${lang.Information} - ${lang.troops_title}`,
    `${lang.Information} - ${lang.troops_title}`,
  ];
  let url = [
    `${lang.starlinator_link}`,
    `${lang.colossus_link}`,
    `${lang.zep_link}`,
    `${lang.beret_link}`,
  ];
  let image = [
    `${files.stralinator}`,
    `${files.colossus}`,
    `${files.zep}`,
    `${files.beret}`,
  ];
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
    msg.react("724429073778081900").then((r) => {
      msg.react("724429073765630154");

      const backawardsFilter = (reaction, user, bot) =>
        reaction.emoji.name === "gb" && user.id !== client.user.id;
      const forwardsFilter = (reaction, user, bot) =>
        reaction.emoji.name === "forward" && user.id !== client.user.id;

      const backawards = msg.createReactionCollector(backawardsFilter, {
        time: 600000,
      });
      const forwards = msg.createReactionCollector(forwardsFilter, {
        time: 600000,
      });
      backawards.on("collect", async (r, user) => {
        if (user.id !== message.author.id) {
          await r.users.remove(user);
          console.log(r);
        } else {
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
          await r.users.remove(user);
          msg.edit(embed);
        }
      });

      forwards.on("collect", async (r, user) => {
        if (user.id !== message.author.id) {
          await r.users.remove(user);
          console.log(r);
        } else {
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
          await r.users.remove(user);
          msg.edit(embed);
        }
      });
    });
  });
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
  name: "troopsitems",
  aliases: ["troopscraft"],
  category: "🧰 - items",
  description: `${english.wiki_desc}`,
  cooldown: 30,
  usage: "",
};
