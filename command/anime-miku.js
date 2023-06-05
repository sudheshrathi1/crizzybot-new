const { fetchJson } = require('@fnc')

module.exports = {
    CmD: ['*miku* - Random miku'],
    aliases: ['miku'],
    categori: "anime",
    exec: async (m, { text, dil, prefix, command }) => {
      await fetchJson(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/miku.json`)
        .then(async data => {
        	dil.sendMessage(m.chat, {react: { text: '🔎', key: m.key}})
        var result = data[Math.floor(Math.random() * data.length)];       
        dil.sendMessage(m.chat, {
                        image: {
                            url: result
                        },
                        caption: 'Random miku by Fadhil Graphy\n\nSupport kami ya Instagram.com/fdhlgrphy',
                        }, {quoted: m
                    }) 
})       
    }
}        