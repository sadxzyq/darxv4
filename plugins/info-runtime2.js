//Thanks Papah-Chan https://github.com/FahriAdison
let { generateWAMessageFromContent } = (await import("@adiwajshing/baileys")).default 
import { performance } from 'perf_hooks'
import fs from 'fs'
let handler  = async (m, { conn, usedPrefix: _p }) => {

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var days = Math.floor(seconds / (24 * 60 * 60 * 1000));
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `\n\t\t*⏰ʀᴜɴᴛɪᴍᴇ「 \t${pad(days)}D\t ${pad(hours)}H ${pad(minutes)}M ${pad(seconds)}S \t」*\n`
}
					const runtime = process.uptime()
		            const teks = `${kyun(runtime)}`
					const itsme = `0@s.whatsapp.net`
					const split = `uwu >//<`
					const rtimebro = {
					contextInfo: {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
				    text: split
									}
								}
							}
					}
						    
						  let prep = generateWAMessageFromContent(m.chat, { orderMessage: { 
itemCount: 24-05-2006, status: 500,
surface: 0,
message: teks,
description: '^^',
orderTitle: 'Haii Kak',
token: '9',
curreyCode: 'IDR',
totalCurrencyCode: '>〰<',
totalAmount1000: '6282285357346',
sellerJid: '6282285357346@s.whatsapp.net',
thumbnail: fs.readFileSync('./media/run.jpg')
}}, {contextInfo: null, quoted: m})
conn.relayWAMessage(prep)
				/*	conn.sendMessage(m.chat, `${teks}`, MessageType.text, rtimebro)*/
}

handler.help = ['runtime2']
handler.command = ['runtime2', 'rt2']
export default handler
