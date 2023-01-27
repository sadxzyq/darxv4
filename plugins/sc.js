const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m) => {
let sewa = `☰⟥⟝⟞⟝❨ *_SCRIPT_* ❩⟞⟝⟞⟤☰

Pengen mentahan nya ?
Nih ada santai bro....
https://github.com/sadxzyq/darxv3

Pengen Yang Model Script Bot Seperti Ini Bro?
Mampir Aja Ke GITHUB Diatas *FREE*

contact Owner
wa.me/6282285357346`
let message = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/df81f6ad526d8d0df96a2.jpg' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: sc,
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '📸 Instagram',
               url: 'https://instagram.com/mydiam.is.fun'
             }

           },
               {
             callButton: {
               displayText: 'Dana',
               phoneNumber: '082285357346'
             }
           },           
               {
             quickReplyButton: {
               displayText: '🧒 Owner',
               id: '.owner',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.help = ['sc']
handler.tags = ['main']
handler.command = /^(sc)$/i

module.exports = handler