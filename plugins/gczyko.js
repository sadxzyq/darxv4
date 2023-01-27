/*import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
  
    
    conn.sendButtonDoc(text, wm, 'ᴡᴇʟᴄᴏᴍᴇ', fkontak, { contextInfo: { externalAdReply: { showAdAttribution: false,
    mediaUrl: 'https://instagram/wannzx_133',
    mediaType: 2, 
    description: sgc,
    title: '≪ ᴄʟɪᴄᴋ ʜᴇʀᴇ ⋟',
    body: wm,
    thumbnail: await(await fetch("https://telegra.ph/file/52866b574c930d17f0c1c.jpg")).buffer(),
    sourceUrl: sgc
     }}
  })*/
import fs from 'fs'
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)


let str = `
*Klik bacaan "ᴄʟɪᴄᴋ ʜᴇʀᴇ*"
`

conn.sendButtonDoc(m.chat, str, wm,' ᴏᴋᴇ ','huuu', m, { contextInfo: { externalAdReply: { showAdAttribution: false,
    mediaUrl: 'https://instagram/mydiam.is.fun',
    mediaType: 2, 
    description: sig,
    title: '≪ Follow Sɪɴɪ Cᴜʏ ⋟',
    body: wm,
    thumbnail: await(await fetch("https://telegra.ph/file/12ef4b5b06b3b906ffb93.jpg")).buffer(),
    sourceUrl: sig
  }
  } }) 
          }
handler.help = ['igdark']

handler.tags = ['info']

handler.command = /^ig|dark$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.exp = 3

export default handler
