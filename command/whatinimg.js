//** whatinimg

module.exports = { 
      CmD: ['*whatinimg* - Apa yang ada dalam gambar (ai)'],
      aliases: ['whatinimg'],
      categori: "ai",
      exec: async(m, { quoted, qmsg, mime, dil, prefix, command, replicate}) => {
      if (!q) return m.reply('Mau buat gambar apa kak? usahakan pakai bahasa inggris ya.') 
      try {
      	const data = await quoted.download()
// Convert the buffer into a base64-encoded string
dil.sendMessage(m.chat, {react: { text: '⏳', key: m.key}})
const base64 = data.toString("base64");
 //Set MIME type for PNG image
const mimeType = "image/png";
 //Create the data URI
const dataURI = `data:${mimeType};base64,${base64}`;
const model = "andreasjansson/blip-2:4b32258c42e9efd4288bb9910bc532a69727f9acd26aa08e175713a0a857a608";
const input = {
  image: dataURI,
  question: q
};
const output = await replicate.run(model, { input });
//console.log(output)
dil.sendMessage(m.chat, { text: output}, {quoted: m })
} catch (e) {
m.reply(`Link invalid, harap kirim link gambar yang benar!\n\n${e}`)
}
}
}