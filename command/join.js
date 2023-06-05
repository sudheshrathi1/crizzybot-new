//** join


module.exports = {
 CmD: ['*join* - Menambahkan bot ke group via link 🄿'],
 aliases: ['join'],
 categori: "premium",
 exec: async (m, { dil, text, prefix, command, isPremium, isUrl, args, jsonformat }) => {
 try {
	if (!isPremium) return m.reply('premium only')
 if (!text) return m.reply('Masukkan Link Group!')
 if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('Link Invalid!')
 m.reply('wait bg...')
 let result = args[0].split('https://chat.whatsapp.com/')[1]
 await dil.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
 } catch (e) {
        m.reply(`⚠️ Gagal, tidak bisa masuk group!`)
     }
 }
 }

