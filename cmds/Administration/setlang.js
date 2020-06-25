const db = require("quick.db");
const { default_lang } = require("../../config.json");
const english = require("../../assets/lang/english.json");
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  var files = fs.readdirSync(`./assets/lang/`);
  console.log(files);
  let default_lang = await db.get(message.guild.id);
  let lang = await checklanguage(db, fs, default_lang.langue);
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    return message.channel.send(`${lang.Nopermlang}`);
  }

  if (!args[0]) {
    return message.channel.send(`${lang.Nolang}`);
  }

  if (args[1]) {
    return message.channel.send(`${lang.errorlang}`);
  }

  if (!files.includes(`${args[0].toLowerCase()}.json`)) {
    return message.channel.send(
      `${lang.notrad} \`\`french\`\`, \`\`english\`\`, \`\`polski\`\`, \`\`turkish\`\`, \`\`nederlands\`\`, \`\`español\`\`.`
    ); // //\`\`italiano\`\`, \`\`português\`\`.
  }

  if (args.join("") === default_lang) {
    db.delete(message.guild.id);
    return await message.channel.send(`${lang.langreset}`);
  }

  db.set(message.guild.id, { langue: args[0].toLowerCase() });
  default_lang = await db.get(message.guild.id);
  lang = await checklanguage(db, fs, default_lang.langue);
  await message.channel.send(`${lang.setlangto} **${lang.lang}** ✅`);

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
  name: "setlang",
  aliases: ["setlang"],
  category: "administration",
  description: `${english.Botinfo_desc}`,
  cooldown: 0,
  usage: "",
};
