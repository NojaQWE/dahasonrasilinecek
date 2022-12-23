const moment = require("moment");
require("moment-duration-format");
const config = require("../../../config.json")

module.exports = {
    name: "yardım",
    owner: true,
    aliases: ["y", "help"],

    execute: async (client, message, args, embed, author, channel, guild) => {
        message.reply({ embeds: [embed.setDescription(`
\`- ${config.bot.prefix}kkv [@868137053861347389/ID]
- ${config.bot.prefix}isimler [@868137053861347389/ID]
- ${config.bot.prefix}ping
- ${config.bot.prefix}k [@868137053861347389/ID] (Roblox isim-Kademe)
- ${config.bot.prefix}isim [@868137053861347389/ID] (Roblox isim-Kademe)
- ${config.bot.prefix}kayıtsız [@868137053861347389/ID]
- ${config.bot.prefix}top-kademe [@868137053861347389/ID]
- ${config.bot.prefix}müzisyen [@868137053861347389/ID]
- ${config.bot.prefix}sponsor [@868137053861347389/ID]
- ${config.bot.prefix}vip [@868137053861347389/ID]
- ${config.bot.prefix}veri-sıfırla [@868137053861347389/ID]
- ${config.bot.prefix}eval (kod)
- ${config.bot.prefix}rolsüz (ver)
- ${config.bot.prefix}reboot\`
`)] }).catch((err) => console.log(err)).then((e) => setTimeout(() => { e.delete(); }, 60000));
                                   //,, client.ytick(message)
    }
}
