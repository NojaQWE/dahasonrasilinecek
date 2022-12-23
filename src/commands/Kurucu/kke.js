const config = require("../../../config.json");
const db = require("quick.db");

module.exports = {
    name: 'kkv',
    aliases: ["kkv"],

    execute: async (client, message, args, embed, author, channel, guild) => {
        var member = message.mentions.users.first() || guild.members.cache.get(args[0])
        
        if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.roles.cache.has(config.Guild.GuildOwnerRole)) return message.reply({ embeds: [embed.setDescription(`Komutu kullanabilmek için geçerli yetkiniz yok!`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        if (!member) return message.reply({ embeds: [embed.setDescription("Geçerli bir kullanıcı belirtmelisin!")] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        let kke = db.get(`kke_${member.id}`);
        if (!kke) return message.reply({ embeds: [embed.setDescription("Bu kullanıcı daha önce kademe atlamamış!")] }).catch((err) => console.log(err), client.ytick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        message.reply({ embeds: [embed.setDescription(`${member} kullanıcısının Kagesi:
        
${kke.join("\n")}`)] });
    }
}
