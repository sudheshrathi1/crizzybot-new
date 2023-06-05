//** ytmp3

const {
y2mateA,
y2mateV
} = require('../lib/scraper/y2mate.js')

module.exports = { 
      CmD: ['*ytmp3* - Download audio youtube'],
      aliases: ['ytmp3','ytaudio','youtubeaudio','youtubemp3'],
      categori: "downloader",
      exec: async(m, { quoted, dil, prefix, command, ytSearch }) => {
      if (!q) m.reply(`Example : ${prefix + command} link`)
      dil.sendMessage(m.chat, {react: { text: '⏳', key: m.key}})
                y2mateA(q).then((tess) => {
 let aud = {
          document: {
           url: tess[0].link
           },      
          fileName: tess[0].output,
          mimetype: 'audio/mpeg',
          caption: 'Ytmp3 downloader by Fadhil Graphy\n\nSuport Kami instagram.com/fdhlgrphy',
         }
         dil.sendMessage(m.chat, aud)
				})
				}
}