const db = require("quick.db");
const { default_prefix } = require("../../config.json");
const english = require("../../assets/lang/english.json");
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  let default_lang = await db.get(message.guild.id);
  let lang = await checklanguage(db, fs, default_lang.langue);
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    return message.channel.send(`${lang.Noperm}`);
  }

  if (!args[0]) {
    return message.channel.send(`${lang.Noprefix}`);
  }

  if (args[1]) {
    return message.channel.send(`${lang.doublearg}`);
  }

  if (args[0].length > 3) {
    return message.channel.send(`${lang.charac}`);
  }

  if (args.join("") === default_prefix) {
    db.delete(`prefix_${message.guild.id}`);
    return await message.channel.send(`${lang.prefixreset}`);
  }

  db.set(`prefix_${message.guild.id}`, args[0]);
  await message.channel.send(`${lang.setto} **\`\`${args[0]}\`\`**`);
  function checklanguage(db, fs, language) {
    return new Promise(function (resolve, reject) {
      fs.readFile(`./assets/lang/${language}.json`, async (err, data) => {
        let l = JSON.parse(data);
        resolve(l);
      });
    });
  }
};

module.exports.help = {
  name: "setprefix",
  aliases: ["prefix"],
  category: "administration",
  description: `${english.Botinfo_desc}`,
  cooldown: 0,
  usage: "",
};
