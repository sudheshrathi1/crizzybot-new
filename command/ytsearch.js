//** ytsearch

const yts = require("yt-search")

module.exports = { 
      CmD: ['*ytsearch* - Mencari konten youtube'],
      aliases: ['yts','ytsearch','youtubesearch','syt'],
      categori: "search",
      exec: async(m, { quoted, dil, prefix, command, ytSearch }) => {
      if (!q) m.reply(`Example : ${prefix + command} nemen`)
      
      dil.sendMessage(m.chat, {react: { text: '🔎', key: m.key}})
      
      //yts(q).then((tess) => {
                let teks = 'YouTube Search\n\n Result From '+q+'\n\n'
				var listt = []
				let search = await yts(q)
                let no = 1
                for (let i of search.all) {
                	teks += `*${no++} ${i.title}*\n▢ Judul : ${i.title}\n▢ ID : ${i.videoId}\n▢ Upload : ${i.ago}\n▢ Ditonton : ${i.views}\n▢ Duration : ${i.timestamp}\n▢ URL : ${i.url}\n\n`

				}
				//})

				//var sections = [{title: `Hallo *${m.pushName}* 👋 Silahkan pilih dibawah ini`, rows:list}]
				//var listms = { text: `*YOUTUBE SEARCH*\n\nBerhasil Menemukan Data\nHasil Pencarian : ${q}\nSilahkan Pilih Dibawah Ini`, footer: `Id : Jangan lupa donasi untuk suport bot yaa\nEn : don't forget to donate to support bots\n\n© 2022 Fadhil Graphy`, buttonText: "Click Here", sections }
				dil.sendMessage(m.chat, {text: teks}, {quoted: m})
		console.log(teks)

}
}
