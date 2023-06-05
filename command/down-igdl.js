//** down-igdl

const { savefrom } = require('../lib/scraper/savefrom.js')

module.exports = {
      CmD: ['*ingstagram* - Instagram downloader'],
      aliases: ['instagram','igdl','ig'],
      isVIP: false,
      categori: "downloader",
      exec: async(m, { text, prefix, command, dil }) => {
      if (!text) return m.reply(`format salah kirim pesan ${prefix + command} link`)
      if (!text.includes('https://www.instagram.com')) return m.reply('Link tidak valid!')
      dil.sendMessage(m.chat, {react: { text: '⏳', key: m.key}})
      try {
      const data = await savefrom(text)
      if (data.url[0].type === "mp4") {
         dil.sendMessage(m.chat, { video: { url: data.url[0].url }, caption: "Instagram Downloader by Fadhil Graphy\n\n" + data.meta.title + "\n\nSupport Instagram.com/fdhlgrphy" }, { quoted: m })
      } else {
         dil.sendMessage(m.chat, { image: { url: data.url[0].url }, caption: "Instagram Downloader by Fadhil Graphy\n\n" + data.meta.title + "\n\nSupport Instagram.com/fdhlgrphy" }, { quoted: m })
      }
      } catch (err) {
          m.reply('❗ Server bermasalah atau type media tidak diketahui')
      }
      }
}      

