/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
//const chalk = require('chalk')


// Other
global.owner = ['6283102650464']
global.premium = ['6283102650464']
global.packname = 'WhatsApp Bot'
global.author = 'Fadhil Graphy\ninstagram.com/fdhlgrphy'
global.prefa = ['!','.']
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Maaf, Fitur ini khusus untuk owner bot, silahkan gunakan fitur lain!',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',    
}
global.thumb = fs.readFileSync('./lib/image/thumbnail.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`update ${__filename}`)
	delete require.cache[file]
	require(file)
})
