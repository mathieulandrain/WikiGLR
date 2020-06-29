const { default_prefix } = require("../config.json");

module.exports = async (bot, message) => {
  console.log(`(NoLimitv2): En ligne`);
  let statuses = [
    `${default_prefix}help`,
    `Online on ${bot.guilds.cache.size} servers`,
  ];

  setInterval(function () {
    let statuses = [
      `${default_prefix}help`,
      `Online on ${bot.guilds.cache.size} servers`,
    ];
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    bot.user.setActivity(status, { type: "WATCHING" });
  }, 5000);
};
