//** ytmp4

const {
y2mateA,
y2mateV
} = require('../lib/scraper/y2mate.js')

module.exports = { 
      CmD: ['*ytmp4* - Download video youtube'],
      aliases: ['ytmp4','ytvideo','youtubevideo','youtubemp4'],
      categori: "downloader",
      exec: async(m, { quoted, dil, prefix, command, ytSearch }) => {
      if (!q) m.reply(`Example : ${prefix + command} link`)
      dil.sendMessage(m.chat, {react: { text: '⏳', key: m.key}})
                y2mateV(q).then((tess) => {
                	console.log(tess)
               dil.sendMessage(m.chat, {video: {url: tess[0].link}, caption: 'Ytmp4 Downloader by Fadhil Graphy\n\nSupport kami instagram.com/fdhlgrphy' })        
				})
				}
}