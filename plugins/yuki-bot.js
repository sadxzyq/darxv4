import fetch from 'node-fetch'
import moment from 'moment-timezone'
import fs from 'fs'
let handler = async (m, { conn, command, text }) => {
  let name = await conn.getName(m.sender)
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let pp = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/12ef4b5b06b3b906ffb93.jpg" )
await conn.sendButton(m.chat, `Iya kak ${cmenut}${name}${cmenuh} Saya *${await conn.getName(conn.user.jid)}* ☰⟥⟝⟞⟝❨ *_SCRIPT_* ❩⟞⟝⟞⟤☰ https://github.com/sadxzyq/darxv4 contact Owner wa.me/6282285357346\n`,wm + '\n\n' + botdate, [['「MENU」','.menu']], m,)
}
handler.command = /^(sc)$/i
handler.tags = ['info']
handler.help = ['sc']

export default handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari 🎑"
    if (time >= 4) {
        res = "Good Morning 🌅"
    }
    if (time > 10) {
        res = "Good Afternoon 🏞️"
    }
    if (time >= 15) {
        res = "Good Afternoon 🌇"
    }
    if (time >= 18) {
        res = "Good Evening 🌃" 
    }
    return res
}
