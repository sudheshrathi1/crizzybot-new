//** play

const yts = require("yt-search")
const {
y2mateA,
y2mateV
} = require('../lib/scraper/y2mate.js')

module.exports = { 
      CmD: ['*play* - Play mp3 dari youtube'],
      aliases: ['ytplay','play'],
      categori: "search",
      exec: async(m, { quoted, dil, prefix, command, ytSearch }) => {
      if (!q) m.reply(`Example : ${prefix + command} nemen`)
      dil.sendMessage(m.chat, {react: { text: '⏳', key: m.key}})
let search = await yts(q)
url = search.videos[0].url
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
     y2mateA(anu.url).then((tess) => {
 	let aud = {
          document: {
           url: tess[0].link
           },      
          fileName: tess[0].output,
          mimetype: 'audio/mpeg',
          caption: `*YouTube Play*\n\nJudul : ${anu.title}\nDeskrepsi : ${anu.description}\nViwes : ${anu.views}\nDuration : ${anu.timestamp}\nUpload : ${anu.ago}\nSize : ${tess[0].size}\nChannel : ${anu.author.name}\nLink Channel : ${anu.author.url}\n◈───────────◈\n\nSuport Kami instagram.com/fdhlgrphy`,
         }
         dil.sendMessage(m.chat, aud)
         //console.log(tess)
         })
}
}
