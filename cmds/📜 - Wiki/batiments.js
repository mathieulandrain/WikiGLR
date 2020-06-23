const { MessageEmbed } = require("discord.js");
const colours = require("../../assets/json/colours.json");
const emotes = require("../../assets/json/emotes.json");
const lang = require("../../assets/lang/english.json");
const chan = require("../../assets/json/channels.json");

module.exports.run = (bot, message, args) => {
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
    return message.channel.send(
      `⚠️ - You're on the wrong channel, to do the commands go to <#663702472329658386>`
    );
  const embed = new MessageEmbed()
    .setColor(colours.green_light)
    .setTitle(`${emotes.building} - ${lang.BUILDINGS}`)
    .setThumbnail(bot.user.avatarURL())
    .setDescription(`${lang.Build_desc}`)
    .addField(
      `${emotes.généraux} - ${lang.Main}:`,
      `${emotes.base} - [${lang.Base}](${lang.Base_link})\n${emotes.labo} - [${lang.Labo}](${lang.Labo_link})\n${emotes.obso} - [${lang.Obso}](${lang.Obso_link})\n${emotes.académie} - [${lang.Academie}](${lang.Academie_link})`
    )
    .addField(
      `${emotes.ressources} - ${lang.Resource}:`,
      `${emotes.maison} - [${lang.House}](${lang.House_link})\n${emotes.mine} - [${lang.Mine}](${lang.Mine_link})\n${emotes.banque} - [${lang.Bank}](${lang.Bank_link})\n${emotes.silo} - [${lang.Silo}](${lang.Silo_link})\n${emotes.raffinerie} - [${lang.Rafinery}](${lang.Rafinery_link})`
    )
    .addField(
      `${emotes.militaire} - ${lang.Military}:`,
      `${emotes.camp} - [${lang.Camp}](${lang.Camp_link})\n${emotes.usine} - [${lang.Factory}](${lang.Factory_link})\n${emotes.port} - [${lang.Starport}](${lang.Starport_link})\n${emotes.portail} - [${lang.WarpGate}](${lang.WarpGate_link})`
    )
    .addField(
      `${emotes.défense} - ${lang.Défense}:`,
      `${emotes.canon} - [${lang.Canon}](${lang.Canon_link})\n${emotes.snipe} - [${lang.Sniper}](${lang.Sniper_link})\n${emotes.aa} - [${lang.aa}](${lang.aa_link})\n${emotes.laser} - [${lang.Laser}](${lang.Laser_link})\n${emotes.mortier} - [${lang.Mortar}](${lang.Mortar_link})\n${emotes.gel} - [${lang.Gel}](${lang.Gel_link})\n${emotes.bunkercoop} - [${lang.BunkerCop}](${lang.BunkerCop_link})\n${emotes.bunker} - [${lang.Bunker}](${lang.Bunker_link})\n${emotes.murs} - [${lang.Mur}](${lang.Mur_link})\n${emotes.piège} - [${lang.Piège}](${lang.Piège_link})`
    )
    .addField(
      `${emotes.deco} - ${lang.Décoration}:`,
      `${emotes.deco} - [${lang.Décoration}](${lang.Décoration_link})`
    )
    .setFooter(
      `${lang.Bot_name} | ${lang.BUILDINGS}`,
      bot.user.displayAvatarURL()
    );

  message.channel.send(embed);
};

module.exports.help = {
  name: "buildings",
  aliases: ["building"],
  category: "📜 - wiki",
  description: `${lang.WIKI_desc}`,
  cooldown: 0,
  usage: "",
};
