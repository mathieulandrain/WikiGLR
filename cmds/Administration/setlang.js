const model1 = require("../../dbFile.js");
const { default_lang } = require("../../config.json");
const english = require("../../assets/lang/english.json");
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  var files = fs.readdirSync(`./assets/lang/`);
  console.log(files);
  let resultDb = await model1.findOne({ ID: `${message.guild.id}` });
  if (!resultDb) resultDb = default_lang;
  let lang = await checklanguage(model1, fs, resultDb.langue);
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
      `${lang.notrad} \`\`french\`\`, \`\`english\`\`, \`\`polski\`\`, \`\`turkish\`\`, \`\`nederlands\`\`, \`\`español\`\`,\`\`deutsch\`\`,\`\`italiano\`\`, \`\`português\`\`.`
    );
  }

  if (args.join("") === resultDb.langue) {
    model1.deleteOne({ ID: `${message.guild.id}` });
    return await message.channel.send(`${lang.langreset}`);
  }

  await model1.updateOne(
    { ID: `${message.guild.id}` },
    { $set: { langue: args[0].toLowerCase() } }
  );
  resultDb = await model1.findOne({ ID: `${message.guild.id}` });
  lang = await checklanguage(model1, fs, resultDb.langue);
  await message.channel.send(`${lang.setlangto} **${lang.lang}** ✅`);

  function checklanguage(model1, fs, language) {
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
