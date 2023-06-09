import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let vn = './media/menu.mp3'
let pp = imagen4
let img = await(await fetch('https://www.paidmembershipspro.com/wp-content/uploads/2017/07/PayPal-Express.png')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
*╭──̇─̇─̇─̇─̇─̇─̇─̇─̇─̇─̇─̇─̇─̇──╮*
*𝗛ola, ${taguser}* bienvendio
    *🍂ꦿꦼ͜͡𖦞𝐁𝐨𝐭 𝐝𝐞 𝐂𝐨𝐦𝐩𝐫𝐚 𝐩𝐨𝐫 𝐌𝐞𝐧𝐬𝐚𝐣𝐞ᬊ͜͡🍂*
                *❛ welco᷍me ❜*

*Fecha:* ${date}
*Tiempo activo:* ${uptime}
*Usuarios:* ${rtotalreg}
                   ︶͝︶͝︶͝︶
        Winkelink ᴠᴇʀsɪᴏ́ɴ 3.0
*🎟️ Premium:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
${readMore}
         *. . . . ︿᷼︿᷼︿᷼︿ . . . .*
*◯֗┈───̇─̇─̇────̇─̇─̇───┈֗◯*
  *🛒꫶ꪆꦿꦼ͜͡✎͘͜ W I N K E L I N Kᬊ͜͡🛒*
  ${readMore}
  
  _CATEGORIAS/TAGS:_
*╭╭┄┅┄┅┄┅┄┅┄┅┄┅┄┅┄┅╮*
*│├🍁꫶ꪆꦿꦼ͜͡✎͘͜#ropa*
*╰╰┄┅┄┅┄┅┄┅┄┅┄┅┄┅┄┅╯*
*╭╭┄┅┄┅┄┅┄┅┄┅┄┅┄┅┄┅╮*
*│├🍁꫶ꪆꦿꦼ͜͡✎͘͜#electrodomésticos*
*╰╰┄┅┄┅┄┅┄┅┄┅┄┅┄┅┄┅╯*
*╭╭┄┅┄┅┄┅┄┅┄┅┄┅┄┅┄┅╮*
*│├🍁꫶ꪆꦿꦼ͜͡✎͘͜#celulares*
*╰╰┄┅┄┅┄┅┄┅┄┅┄┅┄┅┄┅╯*
*╭╭┄┅┄┅┄┅┄┅┄┅┄┅┄┅┄┅╮*
*│├🍁꫶ꪆꦿꦼ͜͡✎͘͜#libros*
*╰╰┄┅┄┅┄┅┄┅┄┅┄┅┄┅┄┅╯*
*╭╭┄┅┄┅┄┅┄┅┄┅┄┅┄┅┄┅╮*
*│├🍁ꪆꦿꦼ͜͡✎͘͜#arte*
*╰╰┄┅┄┅┄┅┄┅┄┅┄┅┄┅┄┅╯*
*╭╭┄┅┄┅┄┅┄┅┄┅┄┅┄┅┄┅╮*
*│├🍁꫶ꪆꦿꦼ͜͡✎͘͜#vehiculos*
*╰╰┄┅┄┅┄┅┄┅┄┅┄┅┄┅┄┅╯*
*╭╭┄┅┄┅┄┅┄┅┄┅┄┅┄┅┄┅╮*
*│├🍁꫶ꪆꦿꦼ͜͡✎͘͜#otros*
*╰╰┄┅┄┅┄┅┄┅┄┅┄┅┄┅┄┅╯*
`.trim()
if (m.isGroup) {
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: m })    
} else {    
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

/*let buttons = [
{ buttonId: '#donar', buttonText: { displayText: '📮 𝙳𝙾𝙽𝙰𝚁 📮' }, type: 1 },
//{ buttonId: '#terminosycondiciones', buttonText: { displayText: '📋 𝚃𝙴𝚁𝙼𝙸𝙽𝙾𝚂 𝚈 𝙲𝙾𝙽𝙳𝙸𝙲𝙸𝙾𝙽𝙴𝚂 📋' }, type: 1 }]
{ buttonId: '#infobot', buttonText: { displayText: '🐾 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 🐾' }, type: 1 }]
let buttonMessage = {
image: pp,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '👑 𝐓𝐇𝐄 𝐌𝐘𝐒𝐓𝐈𝐂 - 𝐁𝐎𝐓 👑',
body: null,
thumbnail: img,
sourceUrl: `https://www.paypal.me/TheShadowBrokers133`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })*/
