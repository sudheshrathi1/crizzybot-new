//** convert-toimg

const { getRandom } = require('@fnc');
const fs = require('fs');
const { exec, spawn, execSync } = require("child_process")

module.exports = { 
 CmD: ['*toimg* - Mengubah sticker menjadi gambar'],
 aliases: ['toimg','convertimage', 'convertimg'],
 categori: "convert",
 exec: async(m, { dil, mime, quoted, command, prefix }) => {
 if (!/webp/.test(mime)) return m.reply(`Reply sticker dengan caption *${prefix + command}*`)
 dil.sendMessage(m.chat, {react: { text: '⏳', key: m.key}})
 let media = await dil.downloadAndSaveMediaMessage(quoted)
 let ran = await getRandom('.png')
 exec(`ffmpeg -i ${media} ${ran}`, (err) => {
 fs.unlinkSync(media)
 if (err) throw err
 let buffer = fs.readFileSync(ran)
 dil.sendMessage(m.chat, { image: buffer }, { quoted: m })
 fs.unlinkSync(ran)
 })
 }
}

