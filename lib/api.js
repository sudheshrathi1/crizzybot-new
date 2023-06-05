__path = process.cwd()

var express = require('express');
var router = express.Router()

// MASUKKAN/GANTI APIKEY 
const fetch = require('node-fetch');

creator = "Febriansyah"
const listkey = ["apa","pebri","tes","PebriKaito","boby"]
const apikey = 'boby'
const axios = require('axios')
const cheerio = require('cheerio');
const request = require('request');
const fs = require('fs');

loghandler = {
    error: {
        status: false,
        code: 503,
        message: 'Service Unavaible, Sedang dalam perbaikan',
        maintanied_by: `${creator}`
    },
    apikey: {
    	status: false,
    	code: 403,
    	message: 'Forbiden, Invalid apikey, hubungi saya di whatsapp untuk mendapatkan apikey anda',
    	contact: 'http://wa.me/6285849362085',
    	maintanied_by: `${creator}`
    },
    noturl: {
    	status: false,
    	code: 403,
    	message: 'Forbiden, Invlid url, masukkan parameter url',
    	maintanied_by: `${creator}`,
    },
    notext: {
    	status: false,
    	code: 403,
    	message: 'Forbiden, Invlid result, masukkan parameter text/kata',
    	maintanied_by: `${creator}`,
    },
    noquery: {
    	status: false,
    	code: 403,
    	message: 'Forbiden, Invlid result, masukkan parameter query example query=kurumi',
    	maintanied_by: `${creator}`,
    }
}

//function 
var { chara, pinte, whatanime } = require(__path + '/lib/scrape.js')
var { Buffer } = require(__path + '/lib/functions.js');
//var maker = require(__path + '/lib/maker/index.js');
var kusonime = require(__path + '/lib/kusonime.js');
var { getLatest, getVideo } = require (__path + '/lib/nekopoi.js');
var { surah, listsurah, tafsirsurah } = require(__path + '/lib/islami.js');
var { photooxy, textpro, ephoto } = require(__path + '/lib/maker.js');
var { jadwalbola, jadwaltv, inews, kompasnews } = require(__path + '/lib/information.js');


//=─────────────────[ FITUR CUY ]────────────────=\\

//=───────────= WALLPAPER 


router.get('/wallpaper/cyberspace', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
      fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/wallpaper/CyberSpace.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/wallpaper/game', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
      fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/wallpaper/GameWallp.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/wallpaper/islamic', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
      fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/wallpaper/Islamic.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/wallpaper/mountain', async (req, res, next) => {    
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/wallpaper/Mountain.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})

router.get('/wallpaper/programming', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.sendFile(__path + '/views/key.html')
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/wallpaper/Programming.json`))
        .then(response => response.json())
	.then(data => {
		var result = data;
		var result = data[Math.floor(Math.random() * data.length)];
		res.json({
		    creator : `${creator}`,
			result
 })})})
 
router.get('/wallpaper/technology', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/wallpaper/Technology.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/wallpaper/aesthetic', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/wallpaper/aesthetic.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/wallpaper/onepiece', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/wallpaper/onepiece.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/wallpaper/pentol', async (req, res, next) => {
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/wallpaper/pentol.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})

router.get('/wallpaper/profil', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/wallpaper/profil.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/wallpaper/tatasurya', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/wallpaper/tatasurya.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
  
router.get('/wallpaper/cowo', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/wallpaper/wallcwo.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/wallpaper/hp', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/wallpaper/wallhp.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})

//=───────────= GAME

router.get('/game/asahotak', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.sendFile(__path + '/views/key.html')
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/games/asahotak.json`))
        .then(response => response.json())
	.then(data => {
		var result = data;
		var result = data[Math.floor(Math.random() * data.length)];
		res.json({
		    creator : `${creator}`,
			result
 })})})
 
router.get('/game/caklontong', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.sendFile(__path + '/views/key.html')
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/games/caklontong.json`))
        .then(response => response.json())
	.then(data => {
		var result = data;
		var result = data[Math.floor(Math.random() * data.length)];
		res.json({
		    creator : `${creator}`,
			result
 })})})
 
router.get('/game/family100', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.sendFile(__path + '/views/key.html')
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/games/family.json`))
        .then(response => response.json())
	.then(data => {
		var result = data;
		var result = data[Math.floor(Math.random() * data.length)];
		res.json({
		    creator : `${creator}`,
			result
 })})})
 
router.get('/game/siapakahaku', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.sendFile(__path + '/views/key.html')
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/games/siapakahaku.json`))
        .then(response => response.json())
	.then(data => {
		var result = data;
		var result = data[Math.floor(Math.random() * data.length)];
		res.json({
		    creator : `${creator}`,
			result
 })})})
 
router.get('/game/susunkata', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.sendFile(__path + '/views/key.html')
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/games/susunkata.json`))
        .then(response => response.json())
	.then(data => {
		var result = data;
		var result = data[Math.floor(Math.random() * data.length)];
		res.json({
		    creator : `${creator}`,
			result
 })})})
 
router.get('/game/tebakanime', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.sendFile(__path + '/views/key.html')
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/games/tebakanime.js`))
        .then(response => response.json())
	.then(data => {
		var result = data;
		var result = data[Math.floor(Math.random() * data.length)];
		res.json({
		    creator : `${creator}`,
			result
 })})})
 
router.get('/game/tebakbendera', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.sendFile(__path + '/views/key.html')
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/games/tebakbendera.json`))
        .then(response => response.json())
	.then(data => {
		var result = data;
		var result = data[Math.floor(Math.random() * data.length)];
		res.json({
		    creator : `${creator}`,
			result
 })})})
 
router.get('/game/tebakchara', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.sendFile(__path + '/views/key.html')
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/games/tebakchara.json`))
        .then(response => response.json())
	.then(data => {
		var result = data;
		var result = data[Math.floor(Math.random() * data.length)];
		res.json({
		    creator : `${creator}`,
			result
 })})})
 
router.get('/game/tebakgambar', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.sendFile(__path + '/views/key.html')
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/games/tebakgambar.json`))
        .then(response => response.json())
	.then(data => {
		var result = data;
		var result = data[Math.floor(Math.random() * data.length)];
		res.json({
		    creator : `${creator}`,
			result
 })})})
 
router.get('/game/tebakjenaka', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.sendFile(__path + '/views/key.html')
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/games/tebakjenaka.json`))
        .then(response => response.json())
	.then(data => {
		var result = data;
		var result = data[Math.floor(Math.random() * data.length)];
 	res.json({
		    creator : `${creator}`,
			result
 })})})
 
router.get('/game/tebakkalimat', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.sendFile(__path + '/views/key.html')
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/games/tebakkalimat.json`))
        .then(response => response.json())
	.then(data => {
		var result = data;
		var result = data[Math.floor(Math.random() * data.length)];
		res.json({
		    creator : `${creator}`,
			result
 })})})
 
router.get('/game/tebakkata', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.sendFile(__path + '/views/key.html')
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/games/tebakkata.json`))
        .then(response => response.json())
	.then(data => {
		var result = data;
		var result = data[Math.floor(Math.random() * data.length)];
		res.json({
		    creator : `${creator}`,
			result
 })})})
 
router.get('/game/tebakkimia', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.sendFile(__path + '/views/key.html')
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/games/tebakkimia.json`))
        .then(response => response.json())
	.then(data => {
		var result = data;
		var result = data[Math.floor(Math.random() * data.length)];
		res.json({
		    creator : `${creator}`,
			result
 })})})
 
router.get('/game/tebaklirik', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.sendFile(__path + '/views/key.html')
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/games/tebaklirik.json`))
        .then(response => response.json())
	.then(data => {
		var result = data;
		var result = data[Math.floor(Math.random() * data.length)];
		res.json({
		    creator : `${creator}`,
			result
 })})})
 
router.get('/game/tebaktebakan', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.sendFile(__path + '/views/key.html')
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/games/tebaktebakan.json`))
        .then(response => response.json())
	.then(data => {
		var result = data;
		var result = data[Math.floor(Math.random() * data.length)];
		res.json({
		    creator : `${creator}`,
			result
 })})})
 
router.get('/game/tekateki', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.sendFile(__path + '/views/key.html')
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/games/tekateki.json`))
        .then(response => response.json())
	.then(data => {
		var result = data;
		var result = data[Math.floor(Math.random() * data.length)];
		res.json({
		    creator : `${creator}`,
			result
 })})})


//=───────────= STALKER

router.get('/stalker/github', async (req, res, next) => {  
var apikeyInput = req.query.apikey
var user = req.query.username
if (!user) return res.json(loghandler.noquery)
if(apikeyInput != apikey) return res.sendFile(__path + '/views/key.html')
       fetch(encodeURI(`https://api.github.com/users/${user}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
 }).catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})})}) 
 
//=───────────= ANIME

router.get('/anime/akira', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/akira.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})

router.get('/anime/akiyama', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/akiyama.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/anime/asuna', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/asuna.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/anime/ayuzawa', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/ayuzawa.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/anime/boruto', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/boruto.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
 router.get('/anime/chiho', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/chiho.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/anime/chitoge', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/chitoge.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/anime/deidara', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/deidara.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/anime/itachi', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/itachi.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/anime/elaina', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/elaina.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/anime/emilia', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/emilia.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/anime/gremory', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/gremory.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/anime/hinata', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/hinata.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/anime/inori', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/inori.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/anime/isuzu', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/isuzu.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/anime/kakashi', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/kakasih.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/anime/itori', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/itori.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/anime/kaga', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/kaga.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/anime/kagura', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/kagura.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/anime/kaori', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/kaori.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/anime/kotori', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/kotori.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/anime/kurumi', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/kurumi.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/anime/madara', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/madara.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/anime/megumin', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/megumin.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/anime/mikasa', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/mikasa.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/anime/miku', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/miku.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/anime/minato', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/minato.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/anime/naruto', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/naruto.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/anime/nezuko', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/nezuko.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/anime/rize', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/rize.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/anime/sakura', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/sakura.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/anime/sagiri', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/sagiri.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/anime/sasuke', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/sasuke.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/anime/shina', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/shina.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/anime/shinka', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/shinka.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/anime/shinomiya', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/shinomiya.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/anime/toukachan', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/toukachan.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/anime/tsunade', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/tsunade.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/anime/yotsuba', async (req, res, next) => {  
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/anime/yotsuba.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
 
router.get('/anime/chara', async (req, res, next) => {  
var text = req.query.query
if (!text) return res.json(loghandler.noquery)
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
       chara(text)       
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result;
          data = await fetch(buffer).then(v => v.buffer())
          await fs.writeFileSync(__path +'/tmp/result.jpg', data)
        res.sendFile(__path+'/tmp/result.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})

//=───────────= DOWNLOADER

/*router.get('/download/zippyshare', async (req, res, next) => {  
var text = req.query.url
if (!text) return res.json(loghandler.nourl)
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
desuDrive(text)
	.then(data => {
		var result = data;
		res.json({
		    creator : `${creator}`,
			result
})
})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})*/

//=───────────= INFORMATION 

router.get('/anime/kusonime', async (req, res, next) => {  
var text = req.query.query
if (!text) return res.json(loghandler.notext)
var apikey = req.query.apikey
if(!apikey) return res.sendFile(__path + '/views/key.html')
if(listkey.includes(apikey)){
kusonime(text)
	.then(data => {
		var result = data;
		res.json({
		    creator : `${creator}`,
			result
})
})
         .catch(e => {
         	console.log(e);
         	res.json({ message: "anime tidak ditemukan/sistem tidak dapat mendeteksi"})
})
} else {
  res.sendFile(__path + '/views/key.html')
}
})
/*var text = req.query.query
if (!text) return res.json(loghandler.notext)
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.sendFile(__path + '/views/key.html')
       kusonime(text)
	.then(data => {
		var result = data;
		res.json({
		    creator : `${creator}`,
			result
 })})})*/

router.get('/info/jadwal-bola', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.sendFile(__path + '/views/key.html')
       jadwalbola()
	.then(data => {
		var result = data;
		res.json({
		    creator : `${creator}`,
			result
 })})})
 
router.get('/info/inews', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.sendFile(__path + '/views/key.html')
       inews()
	.then(data => {
		var result = data;
		res.json({
		    creator : `${creator}`,
			result
 })})})
 
router.get('/info/jadwal-tv', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.sendFile(__path + '/views/key.html')
       jadwaltv()
	.then(data => {
		var result = data;
		res.json({
		    creator : `${creator}`,
			result
 })})})
 
router.get('/info/kompas-news', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.sendFile(__path + '/views/key.html')
       kompasnews()
	.then(data => {
		var result = data;
		res.json({
		    creator : `${creator}`,
			result
 })})})

//=───────────= SEARCHING 

router.get('/search/pinterest', async (req, res, next) => {  
var apikeyInput = req.query.apikey
var text = req.query.query
if (!text) return res.json(loghandler.noturl)
if(apikeyInput != apikey) return res.sendFile(__path + '/views/key.html')
      pinte(text)
	.then(data => {
		var result = data;
		res.json({
		    creator : `${creator}`,
			result
 })})})
 
router.get('/anime/nekopoi', async (req, res, next) => {  
var apikeyInput = req.query.apikey
//var text = req.query.query
//if (!text) return res.json(loghandler.noturl)
if(apikeyInput != apikey) return res.sendFile(__path + '/views/key.html')
      getLatest()
	.then(data => {
		var result = data;
		res.json({
		    creator : `${creator}`,
			result
 })})})

router.get('/search/whatanime', async (req, res, next) => {  
var apikeyInput = req.query.apikey
var text = req.query.url
if (!text) return res.json(loghandler.noturl)
if(apikeyInput != apikey) return res.sendFile(__path + '/views/key.html')
       whatanime(text)
	.then(data => {
		var result = data;
		res.json({
		    creator : `${creator}`,
			result
 })})})
		
//=───────────= MUSLIM

router.get('/muslim/asmaulhusna', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.sendFile(__path + '/views/key.html')
       fetch(encodeURI(`https://raw.githubusercontent.com/FebriansyahXd/mentahan/master/random/AsmaulHusna.json`))
        .then(response => response.json())
	.then(data => {
		var result = data;
		res.json({
		    creator : `${creator}`,
			result
 })})})

router.get('/muslim/surah', async (req, res, next) => {  
var apikeyInput = req.query.apikey
var text = req.query.namasurah
if (!text) return res.json(loghandler.noturl)
if(apikeyInput != apikey) return res.sendFile(__path + '/views/key.html')
       surah(text)
	.then(data => {
		var result = data;
		res.json({
		    creator : `${creator}`,
			result
 })})})

router.get('/muslim/listsurah', async (req, res, next) => {  
var apikeyInput = req.query.apikey
if(apikeyInput != apikey) return res.sendFile(__path + '/views/key.html')
       listsurah()
	.then(data => {
		var result = data;
		res.json({
		    creator : `${creator}`,
			result
 })})})

router.get('/muslim/tafsir', async (req, res, next) => {  
var apikeyInput = req.query.apikey
var text = req.query.tafsir
if (!text) return res.json(loghandler.noturl)
if(apikeyInput != apikey) return res.sendFile(__path + '/views/key.html')
       tafsirsurah(text)
	.then(data => {
		var result = data;
		res.json({
		    creator : `${creator}`,
			result
 })})})

module.exports = router;