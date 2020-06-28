const { default_lang } = require("../config.json");
const model1 = require("../dbFile.js");

module.exports = async (bot, guild) => {
  model1.updateOne(
    { ID: `${guild.id}` },
    { $set: { langue: "english" } },
    function (err) {
      if (err) console.log(err);
    }
  );
};
