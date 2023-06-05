//** convert-tourl
const fs = require("fs")

module.exports = {
 CmD: ['*tourl* - Convert gambar menjadi link'],
 aliases: ['tourl', 'upload'],
 categori: "convert",
 exec: async (m, { dil, text, prefix, command, qmsg, mime, util }) => {
 	      dil.sendMessage(m.chat, {react: { text: '⏳', key: m.key}})
				let { UploadFileUgu, webp2mp4File, TelegraPh } = require('../lib/scraper/uploader')
                let media = await dil.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
     	}
     }

