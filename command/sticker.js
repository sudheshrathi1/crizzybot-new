const fs = require('fs');

module.exports = { 
      CmD: ['*sticker* - Membuat sticker'],
      aliases: ['sticker','s','stiker','setiker'],
      categori: "convert",
      exec: async(m, { quoted, qmsg, mime, dil, prefix, command }) => {
          if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await dil.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await dil.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
m.reply(`Kirim Gambar/Vide:o Dengan Caption !sticker \nDurasi Video 1-9 Detik Atau Reply Media Yang Dikirim`)
}
     }
}