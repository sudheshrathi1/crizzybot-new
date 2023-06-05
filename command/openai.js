//** openai

const fs = require('fs')

module.exports = { 
      CmD: ['*openai* - Chat dengan ai'],
      aliases: ['ai', 'openai', 'chatgpt'],
      categori: "ai",
      exec: async(m, { quoted, qmsg, mime, dil, prefix, command, configuration, openai, ucapanWaktu}) => {
      if (!q) return m.reply('Mau tanya apa nih kak?') 
      dil.sendMessage(m.chat, {react: { text: '🔎', key: m.key}})
      //console.log(openai)
      try {
      	let gg = "```"
       const completion = await openai.createCompletion({
        model: "text-davinci-003",
         prompt: q,
         temperature: 1.0,
         max_tokens: 4000,
         top_p: 1.0,
         frequency_penalty: 0.0,
         presence_penalty: 0.0,
        });
        //console.log(completion)
        //m.reply("```Answers :\n```" + completion.data.choices[0].text)  
	let seend = {
          text: "```Question :\n```" + q + "\n\n" + "```Answers :\n```" + completion.data.choices[0].text,          
          mimetype: 'application/pdf',
          contextInfo:{
           externalAdReply:{
             title: ucapanWaktu + " " + m.pushName + "👋",
             body: `Created by Fadhil Graphy | fdhlgrphy.com`,
             thumbnail: fs.readFileSync('./lib/image/openai.jpg'),
             sourceUrl: "openai",
             mediaUrl: "openai.com",
             renderLargerThumbnail: true,
             showAdAttribution: false,
             mediaType: 1
            }
           }
         }
         dil.sendMessage(m.chat, seend, { quoted : m })      
  } catch (e) {
m.reply(`Maaf Gagal ChatGPT sedang eror, silahkan coba lagi nanti!`)
console.log(e)
}
/*try {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: q,
  });
  console.log(completion.data.choices[0].text);
} catch (error) {
  if (error.response) {
    console.log(error.response.status);
    console.log(error.response.data);
  } else {
    console.log(error.message);
  }
}*/
}
}