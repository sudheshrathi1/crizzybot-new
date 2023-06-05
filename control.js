/**
 * Very Thanks To Dika Ardnt.
 * Amirul
 * Original https://github.com/DikaArdnt
 * Remake : Pebri => Fadhil Graphy
 */
 
require('@fnc')
require('module-alias/register')
require('./config')
const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType
} = require('@adiwajshing/baileys')
const fs = require('fs')
const os = require('os');
const util = require('util')
const path = require('path')
const axios = require('axios')
const speed = require('performance-now')
const moment = require('moment-timezone')
const fetch = require('cross-fetch')
const { color } = require('./lib/color.js')
global.prem = require("./lib/premium")
const { exec, spawn, execSync } = require("child_process")
const {isLimit:isLimit,limitAdd:limitAdd,getLimit:getLimit,giveLimit:giveLimit,addBalance:addBalance,kurangBalance:kurangBalance,getBalance:getBalance} = require("./lib/limit")
const { ytDonlodMp3, ytDonlodMp4, ytPlayMp3, ytPlayMp4, ytSearch } = require("./lib/scraper/yt")
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/function')
const Replicate = require("replicate")
const REPLICATE_API_TOKEN = "r8_8FhICJHisMEoYxiUpwoJzNi2gL5uJH62AseyJ"
const replicate = new Replicate({
  // get your token from https://replicate.com/account
  auth: 'r8_8FhICJHisMEoYxiUpwoJzNi2gL5uJH62AseyJ',
});
const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const {
y2mateA,
y2mateV
} = require('./lib/scraper/y2mate.js')

module.exports = dil = async (dil, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "!" : prefa ?? global.prefix
		
		//**Database
		const pendaftar = JSON.parse(fs.readFileSync('./lib/json/user.json'))
		//let hit = 0;
		let lastReset = new Date().getTime();
		
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        //const CmD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        const CmD = aliases = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await dil.decodeJid(dil.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const from = m.key.remoteJid ? m.key.remoteJid : m.key.participant
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const fake = ["0@s.whatsapp.net"]
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
		
		//Time
		const idulAdha = new Date('Juni 29, 2023 00:00:00')
        const nembe = new Date().getTime()
        const ceDadah = idulAdha - nembe
        const hihari = Math.floor( ceDadah / (1000 * 60 * 60 * 24));
        const hijam = Math.floor( ceDadah % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const himenit = Math.floor( ceDadah % (1000 * 60 * 60) / (1000 * 60))
        const hidetik = Math.floor( ceDadah % (1000 * 60) / 1000)
        
        // Group
        const groupMetadata = m.isGroup ? await dil.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isUser = pendaftar.includes(sender)
        const isPremium = isCreator || prem.checkPremiumUser(m.sender, premium);
        
        const dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
        const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)


        // Public & Self
        if (!dil.public) {
            if (!m.key.fromMe) return
        }

        //** cmd
        const CmDPlugins = isCmd ? body.slice(1).trim().split(/ +/).shift().toLowerCase() : null

        //** plugins
        /*for (let name in plugins) {
            let plugin = plugins[name]
            if (plugin.CmD && plugin.CmD.includes(CmDPlugins)) {
                let turn = plugin.CmD instanceof Array ?
                    plugin.CmD.includes(CmDPlugins) :
                    plugin.CmD instanceof String ?
                    plugin.CmD == CmDPlugins :
                    false
                if (!turn) continue 
                try {
                await plugin.exec(m, dil, quoted, pushname, {
                    args,
                    CmD,
                    text,
                    prefix,
                    command,
                    qmsg,
                    mime
                })
                } catch (e) {
                   m.reply(util.format(`*(⁠☉⁠｡⁠☉⁠)!* Upss... error pada plugins *_${plugin.CmD}_*\n\n${e}`))
                }
                console.log('pesan melalui plugins sistem')
            }
        }*/
        
        //Kontak
        let list = []
for (let i of owner) {
list.push({
displayName: await dil.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await dil.getName(i + '@s.whatsapp.net')}\n
FN:${await dil.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:admin@fdhlgrphy.com\n
item2.X-ABLabel:Email\n
item3.URL:https://fdhlgrphy.com/\n
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}
        
        const ftext = {
        key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...(from ? {
remoteJid: '6283102650464@s.whatsapp.net' } : {}) }, 
message: { 
extendedTextMessage: { 
text: `${m.pushName}`, 
title: `${m.pushName}`, 
jpegThumbnail: global.thumb } } }

const repPy = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: 'Fadhil Graphy',
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: 'Fadhil Graphy'
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "USD"
			}
		}
	}
}

		// fake 
		const faker = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: "status@broadcast" //status@broadcast
                } : {})
            },
            message: {
                "extendedTextMessage": {
                    "text": `Crizzy-Bot Made by Fadhil Graphy`,
                    "title": `Crizzy-Bot`,
                    'jpegThumbnail': global.thumb
                }
            }
        }
        
        //PREM EXP
		prem.expiredCheck(dil, m, premium);

        //** plugins
        for (let name in plugins) {
            let plugin = plugins[name]
            if (plugin.aliases && plugin.aliases.includes(CmDPlugins)) {
                let turn = plugin.aliases instanceof Array ?
                    plugin.aliases.includes(CmDPlugins) :
                    plugin.aliases instanceof String ?
                    plugin.aliases == CmDPlugins :
                    false
                if (!turn) continue 
                try {
                await plugin.exec(m, { dil, 
                    quoted, 
                    pushname,
                    args,
                    CmD,
                    aliases,
                    text,
                    prefix,
                    command,
                    mime,
                    list,
                    sender,
                    qmsg,
                    isUser,
                    util,
                    replicate,
                    openai,
                    ucapanWaktu,
                    isCreator,
                    isUrl,
                    isPremium,
                    isAdmins,
                    isBotAdmins,
                    jsonformat,
                    from
                })
                } catch (e) {
                   m.reply(util.format(`Upss... error pada plugins *_${plugin.CmD}_*\n\n${e}`))
                   console.log(e)
                }
                console.log(color('[ ! ]','red'), color('pesan melalui plugins sistem','yellow'))
            }
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            dil.readMessages([m.key])           
        }
        
          	//PUSH USER TO DATABASE
				 idd = sender
				var iddi = {
				id: idd
				}
				let databases = JSON.parse(fs.readFileSync("./lib/json/user.json"))
				if (!databases.includes(idd)) {
  				databases.push(idd)
  				fs.writeFileSync("./lib/json/user.json", JSON.stringify(databases))
					}
					//console.log(color('[ ✓ ]','red'), color('Update database every command!','magenta'))
                //END
        
         if (!m.isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ✓ \x1b[1;37m]', color(pushname), 'use', color(command), 'args :', color(args.length))
            if (isCmd && m.isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ✓ \x1b[1;37m]', color(pushname), 'use', color(command), 'in group', color(groupName), 'args :', color(args.length))
            if (!m.isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ❌ \x1b[1;37m]', color(pushname), 'not commands', color(command), 'args :', color(args.length))
            if (!isCmd && m.isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ❌ \x1b[1;37m]', color(pushname), 'not commands', color(command), 'in group', color(groupName), 'args :', color(args.length))
			
			//** START FUNCATION HIT PER COMMAND, BY OPENAI
			// Fungsi untuk membaca file JSON
function readJSONFile(filePath) {
  try {
    const jsonData = fs.readFileSync(filePath);
    return JSON.parse(jsonData);
  } catch (error) {
    console.error('Terjadi kesalahan saat membaca file JSON:', error);
    return null;
  }
}

// Fungsi untuk menulis file JSON
function writeJSONFile(filePath, data) {
  try {
    const jsonData = JSON.stringify(data);
    fs.writeFileSync(filePath, jsonData);
  } catch (error) {
    console.error('Terjadi kesalahan saat menulis file JSON:', error);
  }
}

function hasilHit(hitt) {
	const hitEnd = hitt
	//console.log(hitEnd)
	return hitt
	}
	
// Fungsi untuk mengupdate hit dan menyimpannya di file JSON
function updateHit() {
  const filePath = './lib/json/hit.json'; // Ganti dengan lokasi file JSON yang Anda inginkan
  const hitData = readJSONFile(filePath);
 
  var hitt = hitData ? hitData.count : 0;
  hitt++;

  const updatedData = { count: hitt };

  writeJSONFile(filePath, updatedData);
  
  hasilHit(hitt);
 
  // Tampilkan hasil hit
  //console.log(`Hit saat ini: ${hitt}`);
  return hitt
}

if (isCmd) updateHit();
//** END FUNCATION HIT


		//** START PEMBUAT ID BY OPENAI
		function generateRandomId() {
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var idLength = 15;
  var randomId = '';

  for (var i = 0; i < idLength; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }

  return randomId;
}

//** END PEMBUAT ID
        switch (command) {

            case 'menu': case 'help': case 'dil':{
                const plugins = []
                let pluginFolder = path.join(__dirname, 'command')
                let pluginFilter = filename => /\.js$/.test(filename)
                for (let filename of fs.readdirSync(pluginFolder).filter(pluginFilter)) {
                    try {
                        plugins.push(plugins[filename] = require(path.join(pluginFolder, filename)))
                    } catch (e) {
                        console.log(e)
                        delete plugins[filename]
                    }
                }                         

const commandsByCategory = {}
const uncategorizedCommands = []

plugins.forEach(plugin => {
  const { Jeneng, CmD, categori } = plugin

  if (!categori) {
    uncategorizedCommands.push(...CmD)
    return
  }

  if (!commandsByCategory[categori]) {
    commandsByCategory[categori] = []
  }

  const commandsWithCategory = CmD.map(cmd => `${cmd}`)
  commandsByCategory[categori].push(...commandsWithCategory)
})

const commandList = []

Object.entries(commandsByCategory).forEach(([category, commands]) => {
  commandList.push(`『 *${category} :* 』`)
  commandList.push(...commands.map(cmd => ` ╰≻ ${prefix+cmd}`))
  commandList.push('')
  })

if (uncategorizedCommands.length) {
  commandList.push(`*Uncategorized commands :*`)
  commandList.push(...uncategorizedCommands.map(cmd => ` ╰≻ ${cmd}`))
  commandList.push('')
  
  }

const commandOutput = commandList.join('\n')
                               
              var str = runtime(process.uptime())
              var rep = str.replace("seconds", "S")
		var Awal = `*${ucapanWaktu} ${pushname} 👋,* ini adalah daftar fitur yang dimiliki Crizzy-Bot.

*Information :*
*Idul Adha :* ${hihari}hari, ${hijam}jam, ${himenit}menit, ${hidetik}detik
*Jumlah User :* ${pendaftar.length} User
*Status :* ${isPremium ? "Premium" : "Free"}
*Runtime :* ${runtime(process.uptime())}
*Total Hit :* ${updateHit()}
*Library :* Baileys
*Program :* Java Script & NodeJs

*Keterangan :*
🄾 = Khusus Owner
🄿 = Khusus Premium

` + commandOutput + `\n『 *With Case :* 』
 ╰≻ ${prefix}*addplugins* - Menambah file untuk fitur 🄾
 ╰≻ ${prefix}*deleteplugins* - Menghapus file fitur 🄾
 ╰≻ ${prefix}*self* - Mengubah bot menjadi pribadi 🄾
 ╰≻ ${prefix}*public* - Mengubah bot menjadi publik 🄾
 ╰≻ ${prefix}*broadcast* - Mengirim pesan ke user 🄾
 ╰≻ ${prefix}*bcgc* - Mengirim pesan ke all group 🄾
 ╰≻ ${prefix}*addprem* - Menambah user premium 🄾
 ╰≻ ${prefix}*delprem* - Menghapus user premium 🄾
 ╰≻ ${prefix}*about* - Menampilkan info bot
 ╰≻ ${prefix}*ping* - Spek server dan bot


*Thangks To :*
╰≻ *Fadhil Graphy* - For Developer
╰≻ *Febri* - For Base 
╰≻ *AffisJunianto* - For Contributor
╰≻ *Node Codes* - For Team

instagram.com/fdhlgrphy`
                //const bwtRep = awaitdil.sendMessage(m.chat, { text: Awal + commandOutput + `\n『 *With Case :* 』\n ╰≻ ${prefix}addplugins\n ╰≻ ${prefix}deleteplugins\n ╰≻ ${prefix}self\n ╰≻ ${prefix}public\n ╰≻ ${prefix}broadcast\n ╰≻ ${prefix}about\n\ninstagram.com/fdhlgrphy`}, { quoted : m })
                //setTimeout(function(){ dil.sendMessage(m.chat, { text: "Suport Kami ya\n\ninstagram.com/fdhlgrphy"}, {quoted: bwtRep }); }, 3000);
                let send = {
          text: Awal,          
          mimetype: 'application/pdf',
          contextInfo:{
           externalAdReply:{
             title: "Klik disini untuk order followers!",
             body: `Folls Digital adalah penyedia jasa kebutuhan social media yang murah dan terpercaya!`,
             thumbnail: fs.readFileSync('./lib/image/follsdigital.jpg'),
             sourceUrl: "https://wa.me/message/WR2ACGXRQI5RO1",
             mediaUrl: "https://wa.me/message/WR2ACGXRQI5RO1",
             renderLargerThumbnail: true,
             showAdAttribution: true,
             mediaType: 1
            }
           }
         }
         dil.sendMessage(m.chat, send, { quoted : faker })
            }
            break
            
            case 'addplugins': {
                if (!isCreator) return m.reply(mess.owner)
                  let name = q.split("|")[0]
                  let isi = q.split("|")[1]
                  if(!name) return m.reply("plugins name?")
                  if(!isi) return m.reply("the code?")
const Structure = `//** ${name}


module.exports = {
 CmD: ['*Name* - Desk'],
 aliases: ['Cmd'],
 categori: "category",
 exec: async (m, { dil, text, prefix, command }) => {
 	${isi}
 
 }
 }

`            
            fs.writeFile(`./command/${name}.js`, Structure, (err) => { if (err) throw err; });    
            m.reply('success')        
            }
            break 
            case 'about':
            const sup = `*About Bot*
            
Id : _Bot ini dibuat dengan menggunakan bahasa pemrograman *Java script,* library *Baileys,* dan dibuat oleh *Fadhil Graphy.* Tujuan dibuatnya bot ini yaitu untuk mengisi waktu luang semasa lulus SMK, dan juga untuk menambah *postfolio.*_

En : _This bot was created using the programming language *Java script,* library *Baileys,* and was created by *Fadhil Graphy.* The purpose of making this bot is to fill free time while graduating from Vocational High School, and also to add *postfolio.*_

Suport bot dengan cara follow social media owner
╰≻ Ig : https://Instagram.com/fdhlgrphy
╰≻ Yt : https://youtube.com/c/FadhilGraphy
╰≻ Tt : https://tiktok.com/fdhlgrphy

Thangks To : 
╰≻ *Fadhil Graphy* as owner and developer
╰≻ *Febri* as the owner of the base
╰≻ *Affis Junianto* as a contributor
╰≻ *Node Codes* as a team
╰≻ *And all bot developers* for reference
`
				//dil.sendMessage(m.chat, {text: sup}, {quoted: { key: {fromMe: false, participant: fake,...(from ? {remoteJid: from} : {}) }, message: { conversation: "tes lagi ah"}}})
				dil.sendMessage(m.chat, {text: sup}, { quoted: ftext })
            break
            case 'deleteplugins': {
                if (!isCreator) return m.reply(mess.owner)
                if (!q) return m.reply('masukan nama plugin')
                  try{ 
                    fs.unlinkSync(`./command/${q}.js`) 
                  } catch (e) { 
                    m.reply('terjadi kesalahan *(⁠>⁠0⁠<⁠；⁠)*\nhallo owner perhatian nama plugins yang ingin di hapus') 
                }
                m.reply('success')
            }
            break
            case 'public': {
                if (!isCreator) throw mess.owner
                dil.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'addprem':
				if (!isCreator) return m.reply("Fitur ini khusus untuk owner!")
				{ q, args } {
				if (args.length < 2)
				return m.reply(
				`Penggunaan :\n*#addprem* @tag waktu\n*#addprem* nomor waktu\n\nContoh : #addprem @tag 30d`
				);
				if (m.mentionedJid.length !== 0) {
				for (let i = 0; i < m.mentionedJid.length; i++) {
				prem.addPremiumUser(m.mentionedJid[0], args[1], premium);
						}
				m.reply("Sukses");
					} else {
				prem.addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
				m.reply("Sukses via nomor");
						}
					}
				break
			case 'delprem':
				if (!isCreator) return m.reply("Fitur ini khusus untuk owner!")
				{ q, args, arg } {
				if (args.length < 1) return reply(`Penggunaan :\n*#delprem* @tag\n*#delprem* nomor`);
				if (m.mentionedJid.length !== 0) {
					for (let i = 0; i < m.mentionedJid.length; i++) {
						premium.splice(prem.getPremiumPosition(m.mentionedJid[i], premium), 1);
						fs.writeFileSync("./lib/json/premium.json", JSON.stringify(premium));
					}
					m.reply("Sukses");
				} else {
				premium.splice(prem.getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
				fs.writeFileSync("./lib/json/premium.json", JSON.stringify(premium));
				m.reply("sukses via nomor");
				}
				}
				break
            case 'self': {
                if (!isCreator) throw mess.owner
                dil.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break  
			case 'bc': case 'broadcast':{
				if (!isCreator) return m.reply(mess.owner)
				let arr = JSON.parse(fs.readFileSync("./lib/json/user.json"))
let first = 0 //ini terserah taro mana

setInterval(function(){
  if (arr.length > first) {
    dil.sendMessage(arr[first], {text: `*Broadcast Message*\n◈─────────────◈\n\n${q}`})
    first++
  } else {
    return
  }
}, 1000)
}
break
            case 'qc':
            	try{
if (!q) return m.reply('Textnya mana kak?')
const name = m.pushName
let q1 = m.quoted ? m.quoted : m
let teks = q 
const avatar = await dil.profilePictureUrl(sender, "image").catch(_ => "https://telegra.ph/file/89c1638d9620584e6e140.png")
let mime = (q1.msg || q1).mimetype || '' 

if (/image\/(jpe?g|png)/.test(mime)) { 
let media = await dil.downloadAndSavemediamessage(quoted,getRandom())
let anu = await UploadFileUgu(media)
const json = { type: "quote", format: "png", backgroundColor: "#4e4e4e", width: 512, height: 768,  scale: 3, messages: [{ entities: [], media: { url: anu.url }, avatar: true, from: { id: 1, name, photo: { url: avatar }}, text: teks, replymessage: {} }]}
 const { data } = await axios.post("https://bot.lyo.su/quote/generate", json, {
    headers: {
      "Content-Type": "application/json"
    }
  }).catch(e => e.response || {})
  if(!data.ok) throw data
const buffer = Buffer.from(data.result.image, "base64")
//dil.sendMessage(m.chat, { image : buffer })
dil.sendImageAsSticker(m.chat, buffer, m, { packname: global.packname, author: global.author })
//const final = await dil.sendImageAsSticker(m.chat, buffer, m, { packname: 'di buat oleh', author: 'dily' })
sleep(1000)
fs.unlinkSync(media)

} else {
const json = { type: "quote", format: "png", backgroundColor: "#121B22", width: 512, height: 768,  scale: 2, messages: [{ entities: [], avatar: true, from: { id: 1, name, photo: { url: avatar }}, text: teks, replymessage: {} }]}
const { data } = await axios.post("https://bot.lyo.su/quote/generate", json, {
    headers: {
      "Content-Type": "application/json"
    }
  }).catch(e => e.response || {})
  if(!data.ok) m.reply( data)
const buffer = Buffer.from(data.result.image, "base64")
//await dil.sendImageAsSticker(m.chat, buffer, m, { packname: 'di buat oleh', author: 'dily' })
//dil.sendMessage(m.chat, { image : buffer })
dil.sendImageAsSticker(m.chat, buffer, m, { packname: global.packname, author: global.author })
}
} catch (e){
    m.reply (`${e}`)
    console.log(e)
	return
	}
	break
			case 'tes':
			m.reply('hallo bot active, 0s')
			setTimeout(function(){ m.reply('hallo bot active, 1s') }, 1000);
			setTimeout(function(){ m.reply('hallo bot active, 2s') }, 2000);
			setTimeout(function(){ m.reply('hallo bot active, 3s') }, 3000);
			break
			
			case 'teshitya':
				m.reply('ya')
				updateHit();
			break
			
			case 'createid': {
				var randomId = "FD-" + generateRandomId();
				m.reply("your id : " + randomId)
				}
				break
				
				case 'bcgc': case 'bcgroup': {
                if (!isCreator) return m.reply("Fitur ini khusus untuk owner!")
                if (!text) return m.reply(`Text mana?\n\nExample : ${prefix + command} Hallo semua`)
                let getGroups = await dil.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                      let txt = `「 Broadcast Group 」\n\n${text}`
                      dil.sendMessage(i, {text: txt})
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            
            case 'ping': case 'botstatus': case 'statusbot': {
           	  const used = process.memoryUsage()
           	  const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
           	  })
           	  const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
        	     }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
           	  }
         	    })
           	  let timestamp = speed()
        	     let latensi = speed() - timestamp
          	   neww = performance.now()
      	       oldd = performance.now()
       	      respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
       	     }
         	   break
             
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply("Fitur ini khusus untuk owner!")

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply("Fitur ini khusus untuk owner!")
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }
				

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(`${err}`)
                        if (stdout) return m.reply(stdout)
                    })
                }

        }


    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(`Update ${__filename}`)
    delete require.cache[file]
    require(file)
})