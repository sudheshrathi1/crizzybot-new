//** aitoimg

module.exports = { 
      CmD: ['*aitoimg* - Membuat gambar dari ai [beta]'],
      aliases: ['aitoimg'],
      categori: "ai",
      exec: async(m, { quoted, qmsg, mime, dil, prefix, command, replicate}) => {
      if (!q) return m.reply('Mau buat gambar apa kak? usahakan pakai bahasa inggris ya.') 
      dil.sendMessage(m.chat, {react: { text: '⏳', key: m.key}})
      try {
const model = "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf";
const input = { prompt: q };
const output = await replicate.run(model, { input });
//console.log(output[0])
dil.sendMessage(m.chat, {image: {url: output[0] }}, {qioted: m})
} catch (e) {
m.reply(`Link invalid, harap kirim link gambar yang benar!`)
}
}
}

