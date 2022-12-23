const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const moment = require("moment");
const db = require("quick.db");
require("moment-duration-format");
const config = require("../../../config.json")

module.exports = {
    name: "k",
    aliases: ["k"],
    execute: async (client, message, args, embed, author, channel) => {
        if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.roles.cache.has(config.registration.staff)) return message.reply({ embeds: [embed.setDescription(`Komutu kullanabilmek için geçerli yetkiniz yok!`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    var name = args[1]
    const age = args[2]
    if (!name) return message.reply({ embeds: [embed.setDescription("Geçerli bir roblox-ismi belirtmelisin!")] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        if (!age) return message.reply({ embeds: [embed.setDescription("Geçerli bir kademe belirtmelisin!")] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
       // if (!age) return message.reply({ embeds: [embed.setDescription("Belirtilen yaş geçerli rakamlardan oluşsun!")] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
       // if (age < config.registration.minage) return message.reply({ embeds: [embed.setDescription("Kullanıcı için belirtilen yaş minimum yaştan küçük!")] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        if (config.registration.purchase) {
            if (!member.username.includes(config.registration.GuilDTag) && !member.roles.cache.has(config.roles.viprole && config.roles.boosterrole && config.roles.musiciansrole && config.roles.designerrole && config.roles.team)) {
              //  return message.reply({ embeds: [embed.setDescription(`Şuanlık taglı alımdayız! (${config.registration.TagSymbol})`)] });
            }
        }
    var Gennin = new MessageButton()
    .setLabel("Gennin")
    .setCustomId("gennin")
    .setStyle("SUCCESS")


    var Chunnin = new MessageButton()
    .setLabel("Chunnin")
    .setCustomId("chunnin")
    .setStyle("SUCCESS")

    var Jounnin = new MessageButton()
    .setLabel("Jounnin")
    .setCustomId("jounnin")
    .setStyle("SUCCESS")

    var Bb = new MessageButton()
    .setLabel("İptal")
    .setCustomId("iptal")
    .setStyle("DANGER")

    const row = new MessageActionRow()
    .addComponents([Gennin, Chunnin, Jounnin, Bb])


embed.setDescription(`
${member.toString()} kullanıcısını butonlarla etkileşime geçerek kademeyi verebilirsiniz.

Unutmayın, kademeyi vermek için sadece 30 saniyeniz var.

\`\`\`NOT: Kullanıcının kademesini doğru bir şekilde seçmenizi önemle rica ederiz!\`\`\`
`)

    let msg = await message.channel.send({ embeds: [embed], components: [row] });
    var filter = (button) => button.user.id === message.author.id;
   
    let collector = await msg.createMessageComponentCollector({ filter, time: 30000 })
    collector.on("collect", async (button) => {

      if(button.customId === "gennin") {
        await button.deferUpdate();
        const guild = message.guild
           // await guild.members.cache.get(member.id).setNickname(`${name}  ${age}`);
            db.add(`gennin_${author.id}`, 1)
            db.add(`toplam_${author.id}`, 1)
                  const names = db.get(`isimler_${member.id}`)
            db.push(`isimler_${member.id}`, ` \`${name}  ${age}\` (<@&${config.registration.gennin}>)`);
            db.push(`kke_${member.id}`, `${author} \`${moment(Date.now()).format("LLL")}\` (<@&${config.registration.gennin}>)`)
//            await guild.members.cache.get(member.id).roles.add(config.registration.man);
        //    await guild.members.cache.get(member.id).roles.remove(config.registration.unregistered)
            const borangkdn = client.users.cache.get(config.bot.owner);
        const bgerkekemb = new MessageEmbed().setColor(message.member.displayHexColor).setAuthor({name: message.member.displayName, iconURL: author.avatarURL({ dynamic: true, size: 2048 })}).setFooter({text: (config.bot.BotFooter) , iconURL: borangkdn.avatarURL({ dynamic: true, size: 2048 })})
        if (!names) {
            bgerkekemb.setDescription(`Kullanıcının ismi \`${name}  ${age}\` olarak değiştirildi ve <@&${config.registration.gennin}> rolü verilerek kayıt edildi.`) 
        } else {
            bgerkekemb.setDescription(`Kullanıcı başarıyla <@&${config.registration.gennin}> olarak kayıt edildi!\n\n Kullanıcının toplamda " ${names.length} " isim kayıtı görüntülendi.\n${names.map((data) => `${data}`).join("\n")}`) 
        }
        client.channels.cache.get(config.logs.kayıtlog).send({ embeds: [embed.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${config.registration.gennin}> olarak kayıt edildi.
      
        \`Kullanıcı:\` ${member} - (**${member.id}**)
        \`Gerçek İsmi ve Roblox Adı:\` ${name} | ${age}
        \`Yetkili:\` ${message.author} - (**${message.author.id}**)
        \`Kademe:\` <@&${config.registration.gennin}>     
        \`Tarih:\` ${moment(Date.now()).format("LLL")}`)] });
    
        client.channels.cache.get(config.channels.chat).send(`${member} Kullanıcısı Yeni Bir Kademeye Geçiş Yaptı! Kademe: **__Gennin__**`).then((e) => setTimeout(() => { e.delete(); }, 60000));
    
    
msg.edit({
  embeds : [bgerkekemb],
  components : []
})
      
      }

  if(button.customId === "chunnin") {
    await button.deferUpdate();
    const guild = message.guild
    
        //await guild.members.cache.get(member.id).setNickname(`${name} ${age}`);
        db.add(`chunnin_${author.id}`, 1)
        db.add(`toplam_${author.id}`, 1)
              const names = db.get(`isimler_${member.id}`)
        db.push(`isimler_${member.id}`, ` \`${name} ${age}\` (<@&${config.registration.chunnin}>)`);
        db.push(`kke_${member.id}`, `${author} \`${moment(Date.now()).format("LLL")}\` (<@&${config.registration.chunnin}>)`)
      //  await guild.members.cache.get(member.id).roles.add(config.registration.woman);
        //await guild.members.cache.get(member.id).roles.remove(config.registration.unregistered)
        const borangkdn = client.users.cache.get(config.bot.owner);
    const bgkadinemb = new MessageEmbed().setColor(message.member.displayHexColor).setAuthor({name: message.member.displayName, iconURL: author.avatarURL({ dynamic: true, size: 2048 })}).setFooter({text: (config.bot.BotFooter) , iconURL: borangkdn.avatarURL({ dynamic: true, size: 2048 })})
    if (!names) {
        bgkadinemb.setDescription(`Kullanıcının ismi \`${name} ${age}\` olarak değiştirildi`) 
    } else {
        bgkadinemb.setDescription(`Kullanıcı başarıyla <@&${config.registration.chunnin}> olarak kayıt edildi!\n\n Kullanıcının toplamda " ${names.length} " isim kayıtı görüntülendi.\n${names.map((data) => `${data}`).join("\n")}`) 
    }
    client.channels.cache.get(config.logs.kayıtlog).send({ embeds: [embed.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${config.registration.chunnin}> olarak kayıt edildi.
  
    \`Kullanıcı:\` ${member} - (**${member.id}**)
    \`Gerçek İsmi ve Roblox Adı:\` ${name} | ${age}
    \`Yetkili:\` ${message.author} - (**${message.author.id}**)
    \`Kademe:\` <@&${config.registration.chunnin}>     
    \`Tarih:\` ${moment(Date.now()).format("LLL")}`)] });

    client.channels.cache.get(config.channels.chat).send(`${member} Kullanıcısı Yeni Bir Kademeye Geçiş Yaptı! Kademe: **__Chunnin__**`).then((e) => setTimeout(() => { e.delete(); }, 15000));


msg.edit({
  embeds: [bgkadinemb],
  components : []
})

  

    }

  if(button.customId === "jounnin") {
    await button.deferUpdate();
    const guild = message.guild
    
       // await guild.members.cache.get(member.id).setNickname(`${name} ${age}`);
        db.add(`jounnin_${author.id}`, 1)
        db.add(`toplam_${author.id}`, 1)
              const names = db.get(`isimler_${member.id}`)
        db.push(`isimler_${member.id}`, ` \`${name} ${age}\` (<@&${config.registration.jounnin}>)`);
        db.push(`kke_${member.id}`, `${author} \`${moment(Date.now()).format("LLL")}\` (<@&${config.registration.jounnin}>)`)
       // await guild.members.cache.get(member.id).roles.add(config.registration.woman);
       // await guild.members.cache.get(member.id).roles.remove(config.registration.unregistered)
        const borangkdn = client.users.cache.get(config.bot.owner);
    const bgkadinemb = new MessageEmbed().setColor(message.member.displayHexColor).setAuthor({name: message.member.displayName, iconURL: author.avatarURL({ dynamic: true, size: 2048 })}).setFooter({text: (config.bot.BotFooter) , iconURL: borangkdn.avatarURL({ dynamic: true, size: 2048 })})
    if (!names) {
        bgkadinemb.setDescription(`Kullanıcının ismi \`${name} ${age}\` olarak değiştirildi`) 
    } else {
        bgkadinemb.setDescription(`Kullanıcı başarıyla <@&${config.registration.jounnin}> olarak kayıt edildi!\n\n Kullanıcının toplamda " ${names.length} " isim kayıtı görüntülendi.\n${names.map((data) => `${data}`).join("\n")}`) 
    }
    client.channels.cache.get(config.logs.kayıtlog).send({ embeds: [embed.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${config.registration.jounnin}> olarak kayıt edildi.
  
    \`Kullanıcı:\` ${member} - (**${member.id}**)
    \`Gerçek İsmi ve Roblox Adı:\` ${name} | ${age}
    \`Yetkili:\` ${message.author} - (**${message.author.id}**)
    \`Kademe:\` <@&${config.registration.jounnin}>     
    \`Tarih:\` ${moment(Date.now()).format("LLL")}`)] });

    client.channels.cache.get(config.channels.chat).send(`${member} Kullanıcısı Yeni Bir Kademeye Geçiş Yaptı! Kademe: **__Jounnin__**`).then((e) => setTimeout(() => { e.delete(); }, 15000));


msg.edit({
  embeds: [bgkadinemb],
  components : []
})

  

    }

 if(button.customId === "iptal") {   
    await button.deferUpdate();
    const iptal = new MessageEmbed()
    .setDescription(`${member} kullanıcısının kademe verme işlemi ${message.author} yetkilisi tarafından iptal edildi.`) 

msg.edit({
  embeds: [iptal],
  components : []
})  
    }


  })
  }
};
