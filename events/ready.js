const Discord = require("discord.js");
const { Serveur_ID, prefix, memberCountChannelID } = require("../config.json");

module.exports = async (bot) => {
  console.log(`(NoLimitv2): En ligne`);

  let statuses = [
    `${prefix}help`,
    `Online at ${bot.guilds.cache.size} servers`,
  ];

  setInterval(function () {
    let statuses = [
      `${prefix}help`,
      `Online at ${bot.guilds.cache.size} servers`,
    ];
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    bot.user.setActivity(status, { type: "WATCHING" });
  }, 5000);
};