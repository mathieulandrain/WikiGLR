const { MessageEmbed } = require("discord.js");
const package = require("../../package.json");
const colours = require("../../assets/json/colours.json");
const english = require("../../assets/lang/english.json");
const emotes = require("../../assets/json/emotes.json");
const chan = require("../../assets/json/channels.json");
const db = require("quick.db");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  if (message.author.id !== "257173141489582085") return;
  bot.guilds.cache.forEach((guild) => {
    db.set(guild.id, { langue: "english" });
  });
};

module.exports.help = {
  name: "*",
  aliases: [],
  category: "administration",
  description: `${english.Botinfo_desc}`,
  cooldown: 0,
  usage: "",
};
