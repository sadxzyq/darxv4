import fs from 'fs'
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
    let info = fs.readFileSync('./mp3/Bot.opus')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let zykomd = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

conn.reply(m.chat, info, m, { contextInfo: { externalAdReply: { showAdAttribution: false,
    mediaUrl: 'sig',
    mediaType: 2, 
    description: sig,
    title: `iya kenpa ${name}`,
    body: bottime,
    thumbnail: await(await fetch("https://telegra.ph/file/4ef8c2076e6569183b592.jpg")).buffer(),
    sourceUrl: syt
  }
  } }) 
          }
handler.customPrefix = /^(bot)$/i
handler.command = new RegExp

export default handler
