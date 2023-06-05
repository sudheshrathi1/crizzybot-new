//** sendhd

module.exports = { 
      CmD: ['*sendhd* - Kirim gambar hd dari link'],
      aliases: ['sendhd'],
      categori: "convert",
      exec: async(m, { quoted, qmsg, mime, dil, prefix, command, replicate}) => {
      if (!q) return m.reply('Linknya mana kak?') 
      try {
const model = "nightmareai/real-esrgan:42fed1c4974146d4d2414e2be2c5277c7fcf05fcc3a73abf41610695738c1d7b";
const input = {
  image: `${q}`,
};
const output = await replicate.run(model, { input });
dil.sendMessage(m.chat, {react: { text: '⏳', key: m.key}})
dil.sendMessage(m.chat, { image: { url: output} })
} catch (e) {
m.reply(`Link invalid, harap kirim link gambar yang benar!`)
}
}
}


