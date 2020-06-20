const { MessageEmbed } = require("discord.js");
const { prefix } = require("../../config.json");
const { readdirSync } = require("fs");
const categoryList = readdirSync("./cmds");
const lang = require("../../assets/lang/english.json");

module.exports.run = (bot, message, args) => {
  if (!args.length) {
    const embed = new MessageEmbed()
      .setAuthor(`${lang.Bot_name} | Help`, bot.user.displayAvatarURL())
      .setColor("#a1ee33")
      .addField(
        `${lang.ListeCommandes}`,
        `${lang.Help_DESCRIPTION} **${prefix}help <command>**.`
      );

    for (const category of categoryList) {
      console.log(
        bot.commands
          .filter((cat) => cat.help.category === category.toLowerCase())
          .map((cmd) => cmd.help.name)
      );
      embed
        .addField(
          `${category}`,
          `${bot.commands
            .filter((cat) => cat.help.category === category.toLowerCase())
            .map((cmd) => `\`\`${cmd.help.name}\`\``)
            .join(", ")}`
        )
        .setFooter(`${lang.Bot_name} | Help `, bot.user.displayAvatarURL());
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

    const embed = new MessageEmbed()
      .setAuthor(`${lang.Bot_name} - Command Help`, bot.user.displayAvatarURL())
      .setColor("#a1ee33")
      .setTitle(`${lang.Aide_sur_commande}: *${command.help.name}*`)
      .setThumbnail(message.guild.iconURL())
      .addField("📄 - Description", `${command.help.description}`)
      .addField(
        `⚒️ - ${lang.Utilisation}`,
        command.help.usage
          ? `${prefix}${command.help.name} ${command.help.usage}`
          : `${prefix}${command.help.name}`,
        true
      );

    if (command.help.aliases.length > 0)
      embed.addField(
        "⛓️ - Alias",
        `\`\`${command.help.aliases.join(", ")}\`\``,
        true
      );
    return message.channel.send(embed);
  }
};

module.exports.help = {
  name: "help",
  aliases: ["help"],
  category: "📌 - misc",
  description: `${lang.Help_desc}`,
  usage: "",
};
