const english = require("../../assets/lang/english.json");
const { token } = require("../../config.json");

module.exports.run = async (bot, message, args) => {
  if (message.author.id !== "257173141489582085") return;
  bot.destroy();
  bot.login(token);
};

module.exports.help = {
  name: "reload",
  aliases: [],
  category: "⚒️ - administration",
  description: `${english.Botinfo_desc}`,
  cooldown: 0,
  usage: "",
};
