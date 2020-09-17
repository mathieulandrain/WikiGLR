const { default_prefix, token } = require("../config.json");
const { execSync } = require("child_process");

module.exports = async (bot, message) => {
  let done = false;
  console.log(`(NoLimitv2): En ligne`);
  let statuses = [
    `${default_prefix}help`,
    `Online on ${bot.guilds.cache.size} servers`,
  ];

  setInterval(async function () {
    if (
      new Date().getHours() === 16 &&
      new Date().getMinutes() === 36 &&
      done === false
    ) {
      done = true;
      bot.users.cache
        .get("257173141489582085")
        .send("J'ai été redémarré automatiquement.");
      bot.destroy();
      bot.login(token);

      setTimeout(function () {
        done = false;
      }, 60000);
    }

    let statuses = [
      `${default_prefix}help`,
      `Online on ${bot.guilds.cache.size} servers`,
    ];
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    bot.user.setActivity(status, { type: "WATCHING" });
  }, 5000);
};
