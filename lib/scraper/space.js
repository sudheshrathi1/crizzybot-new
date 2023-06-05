const axios = require('axios')
const fetch = require('node-fetch')
/** For Duchaiten
       [ 
          "vivinh7fxk", //DucHaitenAnimated_v5.0
          "vrwsvth8eq" //DucHaitenDreamWorld_v2.4.1
       ]
*/
exports.stableDiffusion = async(prompt, negativePrompt) => {

return new Promise(async(resolve, reject) => {
 try{  
  let a = await axios('https://camenduru-webui-docker.hf.space/run/predict/',
   {
   method: 'POST',
   data: {
   "fn_index": 49,
   "data": [
    prompt,
    negativePrompt,
    "None",
    "None",
    20,
    "DPM++ 2M Karras",
    false,
    false,
    1,
    1,
    7,
    -1,
    -1,
    0,
    0,
    0,
    false,
    1344,
    1024,
    false,
    0.7,
    0,
    0,
    "None",
    null,
    "",
    ""
  ],
    "session_hash": "7h0xtimb0f8"
   }
   })   
   resolve('https://camenduru-webui-docker.hf.space/file='+ a["data"]["data"][0][0]["name"]) 
  } catch (e){ 
    reject(e)
  }
 })
}

exports.esrgan = async(file) => {
return new Promise(async(resolve, reject) => {
 
  let azfir = await axios('https://doevent-face-real-esrgan.hf.space/run/predict',
   {
   method: 'POST',
   data: {      
      "fn_index": 0,
      "data": [
           "data:image/jpg;base64," + file.toString('base64'),
           "8x"
         ],
          "session_hash":"x4tdsp37sb"                               
    },
   headers: {
      'method': 'POST',
      'cookie': 'session-space-cookie=ae775f3e4c92af9d437b82bfa40cbafc',
   }
   }).catch((e)=> reject({ err: true }))
  resolve(new Buffer.from(azfir.data.data[0].replace('data:image/png;base64,', ''), 'base64'))
})
}

let checkpoint =
         [ 
          "vivinh7fxk", //DucHaitenAnimated_v5.0
          "vrwsvth8eq" //DucHaitenDreamWorld_v2.4.1
         ]


exports.DucHaitenAnimated = async(prompt, negativePrompt) => {
return new Promise(async(resolve, reject) => {  
 try{  
 console.log(prompt, negativePrompt)
  let a = await axios('https://duchaiten-webui.hf.space/run/predict/',
   {
     method: "POST",
     timeout: 100000,
     data: {
     "fn_index": 49,
     "data": [
       prompt,
       negativePrompt,
      "None",
      "None",
       50,
      "DPM++ SDE Karras",
       false,
       false,
       1,
       1,
       7,
      -1,
      -1,
       0,
       0,
       0,
       false,
       704,
       832,
       false,
       0.7,
       0,
       0,
       "None",
        null,
        "",
        ""
       ],
       "session_hash": "vivinh7fxk"
     },     
    })   
    resolve('https://duchaiten-webui.hf.space/file='+ a["data"]["data"][0][0]["name"])
  
  } catch (e) {
  reject(e)
  } 
 })
}

exports.protogenv34 = async(prompt, negativePrompt) => {
return new Promise(async(resolve, reject) => {
 try{
  let a = await axios('https://darkstorm2150-protogen-web-ui.hf.space/run/predict/',
   {
     method: "POST",
  //   timeout: 30000,
     data: 
{
  "fn_index": 1,
  "data": [
    "Protogen x3.4 (Photorealism)",
    prompt,
    7.5,
    50,
    1,
    808,
    1024,
    0,
    null,
    0.5,
    negativePrompt
  ],
  "session_hash": "coo1j78zsh"
}
    })     
    if(a["data"]["data"][0][0]["name"]){ 
       resolve('https://darkstorm2150-protogen-web-ui.hf.space/file='+ a["data"]["data"][0][0]["name"])
    } else { resolve(a.data) }
    
    } catch{
    reject({'error': true})
    }
})
}

exports.protogenv22 = async(prompt, negativePrompt) => {
return new Promise(async(resolve, reject) => {
 try{
let a = await axios('https://darkstorm2150-protogen-web-ui.hf.space/run/predict/',
   {
     method: "POST",
  //   timeout: 30000,
     data: 
{
  "fn_index": 1,
  "data": [
    "Protogen v2.2 (Anime)",
    prompt,
    10,
    50,
    1,
    808,
    1024,
    0,
    null,
    0.5,
    negativePrompt
  ],
  "session_hash": "ql4h3hrqy6"
}
    })  
    console.log(a.data)
    if(a["data"]["data"][0][0]["name"]){ 
       resolve('https://darkstorm2150-protogen-web-ui.hf.space/file='+ a["data"]["data"][0][0]["name"])
    } else { resolve(a.data.data) }
    
    } catch {
    reject({'error': true})
    }
})
}

exports.protogenx53 = async(prompt, negativePrompt) => {
return new Promise(async(resolve, reject) => {
 try{
let a = await axios('https://darkstorm2150-protogen-web-ui.hf.space/run/predict/',
   {
     method: "POST",
  //   timeout: 30000,
     data: 
{
  "fn_index": 1,
  "data": [
    "Protogen x5.3 (Photorealism)",
    prompt,
    7.5,
    50,
    1,
    808,
    1024,
    0,
    null,
    0.5,
    negativePrompt
  ],
  "session_hash": "coo1j78zsh"
}
    })  
    if(a["data"]["data"][0][0]["name"]){ 
       resolve('https://darkstorm2150-protogen-web-ui.hf.space/file='+ a["data"]["data"][0][0]["name"])
    } else { resolve(a.data) }
    
    } catch{
    reject({'error': true})
    }
})
}

exports.protogenx58 = async(prompt, negativePrompt) => {
return new Promise(async(resolve, reject) => {
 try{
let a = await axios('https://darkstorm2150-protogen-web-ui.hf.space/run/predict/',
   {
     method: "POST",
  //   timeout: 30000,
     data: 
{
  "fn_index": 1,
  "data": [
    "Protogen x5.8 Rebuilt (Scifi+Anime)",
    prompt,
    7.5,
    50,
    1,
    808,
    1024,
    0,
    null,
    0.5,
    negativePrompt
  ],
  "session_hash": "coo1j78zsh"
}
    })  
    if(a["data"]["data"][0][0]["name"]){ 
       resolve('https://darkstorm2150-protogen-web-ui.hf.space/file='+ a["data"]["data"][0][0]["name"])
    } else { resolve(a.data) }
    
    } catch{
    reject({'error': true})
    }
})
}

exports.protogenDragon = async(prompt, negativePrompt) => {
return new Promise(async(resolve, reject) => {
 try{
let a = await axios('https://darkstorm2150-protogen-web-ui.hf.space/run/predict/',
   {
     method: "POST",
  //   timeout: 30000,
     data: 
{
  "fn_index": 1,
  "data": [
    "Protogen Dragon (RPG Model)",
    prompt,
    7.5,
    50,
    1,
    808,
    1024,
    0,
    null,
    0.5,
    negativePrompt
  ],
  "session_hash": "coo1j78zsh"
}
    })  
    if(a["data"]["data"][0][0]["name"]){ 
       resolve('https://darkstorm2150-protogen-web-ui.hf.space/file='+ a["data"]["data"][0][0]["name"])
    } else { resolve(a.data) }
    
    } catch{
    reject({'error': true})
    }
})
}

exports.protogenNova = async(prompt, negativePrompt) => {
return new Promise(async(resolve, reject) => {
 try{
let a = await axios('https://darkstorm2150-protogen-web-ui.hf.space/run/predict/',
   {
     method: "POST",
  //   timeout: 30000,
     data: 
{
  "fn_index": 1,
  "data": [
    "Protogen Nova",
    prompt,
    7.5,
    50,
    1,
    808,
    1024,
    0,
    null,
    0.5,
    negativePrompt
  ],
  "session_hash": "coo1j78zsh"
}
    })  
    if(a["data"]["data"][0][0]["name"]){ 
       resolve('https://darkstorm2150-protogen-web-ui.hf.space/file='+ a["data"]["data"][0][0]["name"])
    } else { resolve(a.data) }
    
    } catch{
    reject({'error': true})
    }
})
}

exports.protogenEclipse = async(prompt, negativePrompt) => {
return new Promise(async(resolve, reject) => {
 try{
let a = await axios('https://darkstorm2150-protogen-web-ui.hf.space/run/predict/',
   {
     method: "POST",
  //   timeout: 30000,
     data: 
{
  "fn_index": 1,
  "data": [
    "Protogen Eclipse",
    prompt,
    7.5,
    50,
    1,
    808,
    1024,
    0,
    null,
    0.5,
    negativePrompt
  ],
  "session_hash": "coo1j78zsh"
}
    })  
    if(a["data"]["data"][0][0]["name"]){ 
       resolve('https://darkstorm2150-protogen-web-ui.hf.space/file='+ a["data"]["data"][0][0]["name"])
    } else { resolve(a.data) }
    
    } catch{
    reject({'error': true})
    }
})
}

exports.protogenInfinity = async(prompt, negativePrompt) => {
return new Promise(async(resolve, reject) => {
 try{
let a = await axios('https://darkstorm2150-protogen-web-ui.hf.space/run/predict/',
   {
     method: "POST",
  //   timeout: 30000,
     data: 
{
  "fn_index": 1,
  "data": [
    "Protogen Infinity",
    prompt,
    7.5,
    50,
    1,
    808,
    1024,
    0,
    null,
    0.5,
    negativePrompt
  ],
  "session_hash": "coo1j78zsh"
}
    })  
    if(a["data"]["data"][0][0]["name"]){ 
       resolve('https://darkstorm2150-protogen-web-ui.hf.space/file='+ a["data"]["data"][0][0]["name"])
    } else { resolve(a.data) }
    
    } catch{
    reject({'error': true})
    }
})
}