let { MessageType } = (await import('@adiwajshing/baileys')).default
import moment from 'moment-timezone'
let handler  = async (m, { conn, command, name, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
let name = conn.getName(m.sender)
  let teks = `Hai ${name} lu bocah samnge ya awokawok\ncanda samnge 🗿`
const sections = [
   {
    title: `${htki} Bokep Viral Vol 0-3 ${htka}`,
    rows: [
        {title: `🪦 ${pmenus} Viral`, rowId: ".viral", description: "VIDEO VIRALL VOL 0"},
{title: `🪦 ${pmenus} Viral`, rowId: ".viral1", description: "VIDEO VIRALL VOL 1"},
        {title: `🪦 ${pmenus} Viral`, rowId: ".viral2", description: "VIDEO VIRALL VOL 2"},
        {title: `🪦 ${pmenus} Viral`, rowId: ".viral3", description: "VIDEO VIRALL VOL 3"},
    ]},
    {
    title: `${htki} Other menu ${htka}`
    rows: [
    {title: `🪦 ${pmenus} Okep nya.!`, rowId: ".bokep", description: "VIDEO Okep.."},
    ]},{
    title: `${htki} ${namebot} ${htka}`,
    rows: [
    {title: `${htki} GABUT COK ${htka}`, rowid: ".bot", description: "⌸⌸⌸⌸⌸⌸"},
    ]}
]
const listMessage = {
  text: teks,
  footer: `ᴍᴀᴅᴇ ᴡɪᴛʜ ʙʏ ${nameown}\n\n${botdate}\n\n${wm2}`,
  title: ``,
 buttonText: `🪦 RIP(ingat ajal bro) 🪦`, 
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(teks), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
}

handler.help = ['okeplist']
handler.tags = ['main','premium']
handler.command = /^(okeplist)/i
handler.register = true

export default handler
