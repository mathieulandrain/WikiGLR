const Discord = require("discord.js");
const colours = require("../../assets/json/colours.json");
const emotes = require("../../assets/json/emotes.json");
const lang = require("../../assets/lang/english.json");
const files = require("../../assets/json/files.json");

module.exports.run = (client, message, args, tools) => {
  let pages = [
    `${lang.Build_desc}`,
    `${lang.Build_desc}`,
    `${lang.Build_desc}`,
    `${lang.Build_desc}`,
    `${lang.Build_desc}`,
  ];
  let title = [
    `${emotes.généraux} ${lang.Main}:`,
    `${emotes.ressources} ${lang.Resource}:`,
    `${emotes.militaire} ${lang.Military}:`,
    `${emotes.défense} ${lang.Défense}:`,
    `${emotes.deco} ${lang.Décoration}:`,
  ];
  let url = [
    `${lang.Main_link}`,
    `${lang.Ressource_link}`,
    `${lang.Military_link}:`,
    `${lang.Defense_link}:`,
    `${lang.Deco_link}:`,
  ];
  let field = [
    `${emotes.base} [${lang.Base}](${lang.Base_link})\n${emotes.labo} [${lang.Labo}](${lang.Labo_link})\n${emotes.obso} [${lang.Obso}](${lang.Obso_link})\n${emotes.académie} [${lang.Academie}](${lang.Academie_link})`,
    `${emotes.maison} [${lang.House}](${lang.House_link})\n${emotes.mine} [${lang.Mine}](${lang.Mine_link})\n${emotes.banque} [${lang.Bank}](${lang.Bank_link})\n${emotes.silo} [${lang.Silo}](${lang.Silo_link})\n${emotes.raffinerie} [${lang.Rafinery}](${lang.Rafinery_link})`,
    `${emotes.camp} [${lang.Camp}](${lang.Camp_link})\n${emotes.usine} [${lang.Factory}](${lang.Factory_link})\n${emotes.port} [${lang.Starport}](${lang.Starport_link})\n${emotes.portail} [${lang.WarpGate}](${lang.WarpGate_link})`,
    `${emotes.canon} [${lang.Canon}](${lang.Canon_link})\n${emotes.snipe} [${lang.Sniper}](${lang.Sniper_link})\n${emotes.aa} [${lang.aa}](${lang.aa_link})\n${emotes.laser} [${lang.Laser}](${lang.Laser_link})\n${emotes.mortier} [${lang.Mortar}](${lang.Mortar_link})\n${emotes.gel} [${lang.Gel}](${lang.Gel_link})\n${emotes.bunkercoop} [${lang.BunkerCop}](${lang.BunkerCop_link})\n${emotes.bunker} [${lang.Bunker}](${lang.Bunker_link})\n${emotes.murs} [${lang.Mur}](${lang.Mur_link})\n${emotes.piège} [${lang.Piège}](${lang.Piège_link})`,
    `${emotes.deco} [${lang.Décoration}](${lang.Décoration_link})`,
  ];
  let page = 1;
  const embed = new Discord.MessageEmbed()
    .setColor(colours.green_light)
    .setAuthor(client.user.username, client.user.avatarURL())
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(pages[page - 1])
    .setTitle(title[page - 1])
    .setURL(url[page - 1])
    .addField(field[page - 1])
    .setFooter(
      `${lang.Bot_name} | Page ${page} of ${pages.length} | ${lang.BUILDINGS}`
    );

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
        embed.setAuthor(client.user.username, client.user.avatarURL());
        embed.setThumbnail(client.user.displayAvatarURL());
        embed.addField(field[page - 1]);
        embed.setFooter(
          `${lang.Bot_name} | Page ${page} of ${pages.length} | ${lang.BUILDINGS}`
        );
        msg.edit(embed);
      });

      forwards.on("collect", (r) => {
        if (page === pages.length) return;
        page++;
        embed.setDescription(pages[page - 1]);
        embed.setTitle(title[page - 1]);
        embed.setURL(url[page - 1]);
        embed.addField(field[page - 1]);
        embed.setAuthor(client.user.username, client.user.avatarURL());
        embed.setThumbnail(client.user.displayAvatarURL());
        embed.addField(field[page - 1]);
        embed.setFooter(
          `${lang.Bot_name} | Page ${page} of ${pages.length} | ${lang.BUILDINGS}`
        );
        msg.edit(embed);
      });
    });
  });
};
// ◀️ ▶️
module.exports.help = {
  name: "buildingspage",
  aliases: ["buildingspage"],
  category: "📜 - wiki",
  description: `${lang.WIKI_desc}`,
  usage: "",
};
