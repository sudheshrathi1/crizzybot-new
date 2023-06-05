//** tohd

const fs = require('fs');

module.exports = { 
      CmD: ['*tohd* - Convert gambar menjadi hd (ai)'],
      aliases: ['tohd'],
      categori: "ai",
      exec: async(m, { quoted, qmsg, mime, dil, prefix, command, replicate }) => {
      	//if (/image/.test(mime)) {
      	try {
const data = await quoted.download()
// Convert the buffer into a base64-encoded string
dil.sendMessage(m.chat, {react: { text: '⏳', key: m.key}})
const base64 = data.toString("base64");
 //Set MIME type for PNG image
const mimeType = "image/png";
 //Create the data URI
const dataURI = `data:${mimeType};base64,${base64}`;
const model = "nightmareai/real-esrgan:42fed1c4974146d4d2414e2be2c5277c7fcf05fcc3a73abf41610695738c1d7b";
const input = {
  image: dataURI,
};
const output = await replicate.run(model, { input });
console.log(output)
dil.sendMessage(m.chat, { image: { url: output} })
} catch (e) {
m.reply(`Eror! ukuran gambar terlalu besar atau tidak ada gambar yang dikirim dengan caption ${prefix}tohd`)
}
}
}

