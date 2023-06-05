//** sistem-anticall

const fs = require("fs")

module.exports = {
 CmD: ['*anticall* - Pengaturan anticall bot 🄾'],
 aliases: ['anticall'],
 categori: "owner",
 exec: async (m, { dil, text, prefix, command, isCreator, args }) => {
if (!isCreator) return m.reply("Maaf fitur ini khusus untuk owner!")
                let crizzyy = JSON.parse(fs.readFileSync('./lib/json/anticall.json'));
                if (args[0] === "on") {
                if (crizzyy.setting.anticall == true) return m.reply(`Sudah Aktif Sebelumnya`)
                crizzyy.setting.anticall = true
				fs.writeFileSync('./lib/json/anticall.json', JSON.stringify(crizzyy))
                m.reply(`AntiCall Aktif !`)
                } else if (args[0] === "off") {
                if (crizzyy.setting.anticall == false) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                crizzyy.setting.anticall = false
				fs.writeFileSync('./lib/json/anticall.json', JSON.stringify(crizzyy))
                m.reply(`AntiCall Tidak Aktif !`)
                } else {
                 dil.sendMessage(m.chat, {text: `Mungkin anda salah, contoh : ${prefix}anticall on` }, {quoted: m})
                }
          	   }
       	    }  

