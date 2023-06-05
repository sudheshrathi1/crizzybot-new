//** AnythingV4

const { stableDiffusion } = require('../lib/scraper/space.js')
const fs = require('fs')
const { getRandom } = require('../lib/function')

module.exports = {
	  CmD: ['*anythingv4* - Membuat Anime dengan ai'],
      aliases: ['anythingv4', 'at4'],
      categori: "ai",
      exec: async(m, { quoted, dil, prefix, command, replicate}) => {
          if(!q) return m.reply('Berikan deskripsi gambar anda!')
            let text1 = q.split("|")[0]
            let text2 = q.split("|")[1]
              if (!text1) return m.reply(`*Format salah!*\n\nPerhatikan petunjuk berikut!\n${prefix + command + ' ' + '<text1>|<text2>'}\n_<text1> = your prompt\n<text2> = your negative prompt_`)    
              if (!text2) return m.reply(`*Format salah!*\n\nPerhatikan petunjuk berikut!\n${prefix + command + ' ' + '<text1>|<text2>'}\n_<text1> = your prompt\n<text2> = your negative prompt_`)    
             dil.sendMessage(m.chat, {react: { text: '⏳', key: m.key}})
               let sd = await stableDiffusion(text1, text2)
               //m.reply('sending....')
             dil.sendMessage(m.chat, { image: { url: ''+sd }, caption: 'Result, silahkan coba lagi jika result blank hitam!\n\nSupport : Instagram.com/fdhlgrphy' },{quoted: m})
    }
}
         
                  
                  

