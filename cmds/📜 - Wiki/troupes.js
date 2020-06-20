const { MessageEmbed } = require("discord.js");
const colours = require("../../assets/json/colours.json");
const emotes = require("../../assets/json/emotes.json");
const lang = require("../../assets/lang/english.json");

module.exports.run = (bot, message, args) => {
  // pk look ici ???
  const embed = new MessageEmbed()
    .setColor(colours.green_light)
    .setTitle(`${emotes.colosse} - ${lang.Troops}`) // look ici ^^
    .setThumbnail(bot.user.avatarURL())
    .setDescription(`${lang.IciVousAurezAccèsAuxPagesPourLesTroupes}.`)
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
};

module.exports.help = {
  name: "troops",
  aliases: ["troop"],
  category: "📜 - wiki",
  description: `${lang.WIKI_desc}`,
  usage: "",
};
