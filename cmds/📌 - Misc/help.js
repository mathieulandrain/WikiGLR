const { MessageEmbed } = require("discord.js");
const { default_prefix } = require("../../config.json");
const { readdirSync } = require("fs");
const categoryList = readdirSync("./cmds");
const english = require("../../assets/lang/english.json");
const chan = require("../../assets/json/channels.json");
const model1 = require("../../dbFile.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  let infoServ = await model1.findOne({ ID: `${message.guild.id}` });
  let lang = await checklanguage(model1, fs, infoServ.langue);
  let prefix = infoServ.prefix;
  if (prefix === null) prefix = default_prefix;
  var interdit = [
    `${chan.Test}`,
    `${chan.chat_deutsch}`,
    `${chan.chat_english}`,
    `${chan.chat_español}`,
    `${chan.chat_français}`,
    `${chan.chat_italiano}`,
    `${chan.chat_nederlands}`,
    `${chan.chat_polski}`,
    `${chan.chat_portugês}`,
    `${chan.donator_chat}`,
    `${chan.galaxy_life_bases}`,
    `${chan.galaxy_life_chat}`,
    `${chan.galaxy_life_fanart}`,
    `${chan.galaxy_life_friends}`,
    `${chan.galaxy_life_issues}`,
    `${chan.galaxy_life_memes}`,
    `${chan.the_meme_room}`,
    `${chan.vc_music}`,
  ];

  if (interdit.includes(message.channel.id))
    return message.channel.send(`⚠️ - ${lang.Block} <#663702472329658386>`);
  if (!args.length) {
    const embed = new MessageEmbed()
      .setAuthor(`${lang.Bot_name} | ${lang.Help}`, bot.user.displayAvatarURL())
      .setColor("#a1ee33")
      .addField(
        `${lang.ListeCommandes}`,
        `${lang.Help_DESCRIPTION} **${prefix}help <${lang.command}>**.`
      );

    for (const category of categoryList) {
      console.log(
        bot.commands
          .filter((cat) => cat.help.category === category.toLowerCase())
          .map((cmd) => cmd.help.name)
      );

      let category_name = "";
      var justEmoteBeforeCat = category.slice(0, 5);
      var justCat = category.slice(4);

      var link = "";
      link = "./cmds/" + category;
      category_name =
        justEmoteBeforeCat +
        eval(`lang.${justCat}`) +
        " - " +
        fs.readdirSync(`${link}`).length;
      embed
        .addField(
          `${category_name}`,
          `${bot.commands
            .filter((cat) => cat.help.category === category.toLowerCase())
            .map((cmd) => `\`\`${cmd.help.name}\`\``)
            .join(", ")}`
        )
        .setFooter(
          `${lang.Bot_name} | ${lang.Help} `,
          bot.user.displayAvatarURL()
        );
    }

    return message.channel.send(embed);
  } else {
    const command =
      bot.commands.get(args[0]) ||
      bot.commands.find(
        (cmd) => cmd.help.aliases && cmd.help.aliases.includes(args[0])
      );
    console.log(command);
    if (!command) return message.reply(`${lang.Commande_non_existante}`);
    let description = eval(`lang.${command.help.name}_desc`);
    const embed = new MessageEmbed()
      .setAuthor(
        `${lang.Bot_name} - ${lang.CommandHelp}`,
        bot.user.displayAvatarURL()
      )
      .setColor("#a1ee33")
      .setTitle(`${lang.Aide_sur_commande}: *${command.help.name}*`)
      .setThumbnail(message.guild.iconURL())
      .addField(`📄 - ${lang.Description}`, description)
      .addField(
        `⚒️ - ${lang.Utilisation}`,
        command.help.usage
          ? `${prefix}${command.help.name} ${command.help.usage}`
          : `${prefix}${command.help.name}`,
        true
      );

    if (command.help.aliases.length > 0)
      embed.addField(
        `⛓️ - ${lang.Aliase}`,
        `\`\`${command.help.aliases.join(", ")}\`\``,
        true
      );
    return message.channel.send(embed);
  }
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
  name: "help",
  aliases: ["help"],
  category: "📌 - misc",
  description: `${english.Help_desc}`,
  usage: "",
};
