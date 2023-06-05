//** tiktokaudio

require("../lib/scraper/tiktok.js")

module.exports = {
 CmD: ['*tiktokaudio* - Download audio tiktok'],
 aliases: ['ttmp3', 'tiktokaudio'],
 categori: "downloader",
 exec: async (m, { dil, text, prefix, command }) => {
 if (!q) return m.reply('Linknya mana kak?')
 let res = await tiktok(q)
/* dil.sendMessage(m.chat, {
 audio: {
 url: res.url[1].url
 }})*/
	//**m.reply("*Tunggu bentar ya kak⏳*")
	dil.sendMessage(m.chat, {react: { text: '⏳', key: m.key}})
	var namaFile = res.meta.title ? res.meta.title : "tiktokaudio" 
 let aud = {
          document: {
           url: res.url[1].url
           },      
          fileName: `${namaFile}.mp3`,
          mimetype: 'audio/mpeg',
          caption: 'TikTok mp3 downloader by Fadhil Graphy\n\nSuport Kami instagram.com/fdhlgrphy',
         }
         dil.sendMessage(m.chat, aud)
 }
}

