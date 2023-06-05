//** owner

module.exports = {
 CmD: ['*owner* - Owner bot'],
 aliases: ['owner', 'creator'],
 categori: "other",
 exec: async (m, { dil, text, prefix, command, list, sender}) => {
const repf = await dil.sendMessage(m.chat, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, mentions: [sender] }, { quoted: m })
dil.sendMessage(m.chat, { text : `Hai Kak @${sender.split("@")[0]}, Nih Owner Ku Jangan Macam-macam Ya Btw -1 kack`, mentions: [sender]}, { quoted: repf })
}
}
