const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const moment = require("moment")
require('moment-duration-format');
const config = require("../../../config.json");
module.exports = {
    name: "Kademe",
    aliases: ["kademesayı", "kademesayım", "atlattırdıklarım", "kademe", "kademe-sayı"],
    execute: async (client, message, args, embed, author, channel, guild) => {
        if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.roles.cache.has(config.registration.staff)) return message.reply({ embeds: [embed.setDescription(`Komutu kullanabilmek için geçerli yetkiniz yok!`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        var member = message.mentions.users.first() || guild.members.cache.get(args[0]) || author;
        let Gennin = db.get(`gennin_${author.id}`) || 0;
        let Chunnin = db.get(`chunnin_${author.id}`) || 0;
        let Jounnin = db.get(`jounnin_${author.id}`) || 0;
        let toplam = db.get(`toplam_${author.id}`) || 0;
        message.reply({ embeds: [embed.setDescription(`
 ${member} kullanıcısının toplam **${toplam}** mevcut kayıtı bulunmakta.
 
 • Toplam Gennin: **${Gennin}**
 • Toplam Chunnin: **${Chunnin}**
 • Toplam Jounnin: **${Jounnin}**`)] });
    }
}