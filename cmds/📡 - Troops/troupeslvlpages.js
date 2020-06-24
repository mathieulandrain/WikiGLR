const Discord = require("discord.js");
const colours = require("../../assets/json/colours.json");
const emotes = require("../../assets/json/emotes.json");
const lang = require("../../assets/lang/english.json");
const files = require("../../assets/json/files.json");
const chan = require("../../assets/json/channels.json");

module.exports.run = (client, message, args, tools) => {
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
  let pages = [
    `${emotes.Info} - ${lang.Troopslvlunlock_DESCRIPTION} - ${emotes.labo}`,
    `${emotes.Info} - ${lang.Troopslvlunlock_DESCRIPTION} - ${emotes.labo}`,
    `${emotes.Info} - ${lang.Troopslvlunlock_DESCRIPTION} - ${emotes.labo}`,
    `${emotes.Info} - ${lang.Troopslvlunlock_DESCRIPTION} - ${emotes.labo}`,
  ];
  let title = [
    `${lang.Information} - ${lang.Troopslvlunlock}`,
    `${lang.Information} - ${lang.Troopslvlunlock}`,
    `${lang.Information} - ${lang.Troopslvlunlock}`,
    `${lang.Information} - ${lang.Troopslvlunlock}`,
  ];
  let url = [
    `${lang.Troopslvlunlock_link}`,
    `${lang.Troopslvlunlock_link}`,
    `${lang.Troopslvlunlock_link}`,
    `${lang.Troopslvlunlock_link}`,
  ];
  let image = [
    `${files.lvlTroupes}`,
    `${files.infanterie}`,
    `${files.vehicule}`,
    `${files.aerien}`,
  ];
  let page = 1;

  const embed = new Discord.MessageEmbed()
    .setColor(colours.green_light)
    .setAuthor(client.user.username, client.user.avatarURL())
    .setThumbnail(client.user.displayAvatarURL())
    .setFooter(
      `${lang.Bot_name} | ${lang.Page} ${page} ${lang.Of} ${pages.length} | ${lang.Information}`
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
            `${lang.Bot_name} | ${lang.Page} ${page} ${lang.Of} ${pages.length} | ${lang.Information}`
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
            `${lang.Bot_name} | ${lang.Page} ${page} ${lang.Of} ${pages.length} | ${lang.Information}`
          );
          await r.users.remove(user);
          msg.edit(embed);
        }
      });
    });
  });
};
// 724429073778081900 724429073765630154
module.exports.help = {
  name: "troopslvlunlock",
  aliases: ["tlu", "debloquer troupes", "niveau troupes", "lvl troupes"],
  category: "📡 - troops",
  description: `${lang.Troops_desc}`,
  cooldown: 0,
  usage: "",
};
