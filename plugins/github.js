import { lyrics, lyricsv2 } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    m.reply(`
Lyrics *${result.title}*
Author ${result.author}
☰⟥⟝⟞⟝❨ *_SCRIPT_* ❩⟞⟝⟞⟤☰

https://github.com/sadxzyq/darxv4

contact Owner
wa.me/6282285357346`.trim())
}

handler.help = ['github')
handler.tags = ['main']
handler.command = /^(github)$/i

export default handler