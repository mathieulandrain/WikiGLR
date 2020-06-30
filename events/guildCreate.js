const { default_lang } = require("../config.json");
const model1 = require("../dbFile.js");

module.exports = async (bot, guild) => {
  model1.findOne({ ID: `${guild.id}` }, function (err, data) {
    if (!data) {
      model1.create({ ID: `${guild.id}`, langue: "english" });
    }
  });
};
