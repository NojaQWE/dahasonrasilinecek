const config = require("../../../config.json");
const db = require("quick.db");

module.exports = {
    name: "top-kademe",
    aliases: ["top-kademe", "topkademe", "top"],
    execute: async (client, message, args, embed) => {
        if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.roles.cache.has(config.registration.staff)) return message.reply({ embeds: [embed.setDescription(`Komutu kullanabilmek için geçerli yetkiniz yok!`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));

        const member = message.mentions.members.first() || message.author;

        let top = [...message.guild.members.cache.filter(member => db.get(`toplam_${member.id}`)).values()].sort((member1, member2) => Number(db.get(`toplam_${member2.id}`))-Number(db.get(`toplam_${member1.id}`))).slice(0, 15).map((member, index) => `\`${index+1}.\` ${member} | \`${db.get(`toplam_${member.id}`) || "0"}\` mevcut kayıt. (\`${db.get(`gennin_${member.id}`) || "0"}\` Gennin, \`${db.get(`chunnin_${member.id}`) || "0"}\` Jounnin, \`${db.get(`jounnin_${member.id}`) || "0"}\` Jounnin.))`).join('\n');
        if(!top) return message.reply({ embeds: [embed.setDescription("Sunucuda hiç kayıt yapılmamış.")]})
        message.reply({ embeds: [embed.setDescription(top)]})

    }
}