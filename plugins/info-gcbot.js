import fs from 'fs'
import fetch from 'node-fetch'
 let handler = async(m, { conn }) => { 

         let pp = fs.readFileSync('./thumbnail.jpg')
         let gc1 = 'https://chat.whatsapp.com/CCQOGaVVa3WGtDxls8Ew5S'
         let caption = `*Mʏ Gᴄ 𝘿𝙖𝙧𝙠𝙭-𝘽𝙊𝙏*`
         await conn.sendButtonDoc(m.chat, caption, wm, 'Owner', '.owner', m, { contextInfo: { 
             externalAdReply: {
               sourceUrl: `${gc1}`,
               title: 'Murbug 𝙳𝚊𝚛𝚔𝚡', 
               body: '𝘿𝙖𝙧𝙠𝙭-𝘽𝙊𝙏',
               thumbnail: pp
             } 
         }})
         }

handler.tags = ['info']
handler.command = /^gcbul$/i
 export default handler