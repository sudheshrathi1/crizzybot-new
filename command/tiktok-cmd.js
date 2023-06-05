//** tiktok-cmd
require("../lib/scraper/tiktok.js")

module.exports = {
 CmD: ['*tiktok* - Download video tiktok'],
 aliases: ['tt', 'tiktok'],
 categori: "downloader",
 exec: async (m, { dil, text, prefix, command}) => {
 if (!q) return m.reply('Linknya mana kak?')
 let res = await tiktok(q)
 console.log(res)
 //**m.reply('Tunggu bentar ya kak⏳')
 dil.sendMessage(m.chat, {react: { text: '⏳', key: m.key}})
 dil.sendMessage(m.chat, {
 video: {
 url: res.url[0].url
 },
 caption: 'Tiktok Downloader by Fadhil Graphy\n\nSupport instagram.com/fdhlgrphy',
 }, {
 quoted: m
 })
 }
}