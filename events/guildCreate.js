const { default_lang } = require("../config.json");
const db = require("quick.db");

module.exports = async (bot, guild) => {
  db.set(guild.id, { langue: "English" });
};
