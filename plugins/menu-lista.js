import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }) 
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

let pp = '.media/menu2.jpg'
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, diamond, registered, self, level, role } = global.db.data.users[m.sender]
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let name = await conn.getName(m.sender)
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
}) 
 
const sections = [
{
title: `๐๐๐ฆ๐ง๐ ๐๐ ๐ ๐๐ก๐จ๐ฆ`,
rows: [
     {title: "๐ ๐๐ฅ๐๐๐๐ข๐ฅ ๐", description: '๐๐ข๐ก๐ง๐๐๐ง๐ข ๐๐๐ ๐๐ฅ๐๐๐๐ข๐ฅ', rowId: `${usedPrefix}creador`},
     {title: " ๐ ๐๐๐๐ ๐พ๐๐๐๐๐๐๐ผ ๐ ", description: '๐๐ผ๐๐ผ ๐๐๐ ๐๐ ๐๐๐๐ ๐พ๐๐๐๐๐๐๐ ', rowId: `${usedPrefix}menucompleto`},
     ]}, ] 
const listMessage = {
text: `*ใ๐ ๐๐ข๐๐ _${name}_ ๐ๅฝก*
โ  ใ     โข๐โข     ใ โ
โ๐ก สษชแดษดแด แดษดษชแดแด แดส แดแดษดแด สษชsแดแด
โโคโโโโโ โ. โ .โ โโโโโโฅ
โ๐ ษชษดาแด  แดแดส สแดแด ๐
โโคโโโโโ โ. โ .โ โโโโโโฅ
โโฒ โฑ๏ธ *สแดสแด:* ${time}    
โโฒ โฐ *แดแดแดษชแด ษชแดแดแด:* ${uptime}
โโฒ ๐  *แด แดสsษชแดษด แดแดส สแดแด:* ${vs}
โโฒ ๐ฅ *แดsแดแดสษชแด(s):* ${Object.keys(global.db.data.users).length} 
โโฒ โจ๏ธ *แดแดแดแด:* ${self ? '*๐๐๐๐๐๐๐*' : '*๐๐๐๐๐๐๐*'}
โโคโโโโโ โ. โ .โ โโโโโโฅ
โ๐ ษชษดาแด แดแดส แดsแดแดสษชแด ๐
โโคโโโโโ โ. โ .โ โโโโโโฅ
โโฒ ๐ แดสแดแดษชแดแด: ${user.premiumTime > 0 ? 'โ' : 'โ'}
โโฒ โ๏ธ สแดษขษชsแดสแดแดแด: ${registered ? 'โ': 'โ'}
โโฒ ๐๏ธ ษดษชแด แดส: ${level}
โโฒ ๐ แดษชแดแดแดษดแดแดs: ${diamond}
โโฒ ๐งฐ แดxแดแดสษชแดษดแดษชแด: ${exp}
โโโโโใ ๐ ใโโโโโ
*๐ณ๐ฐ๐ฑ๐ธ-๐ฑ๐พ๐ โจ*`, pp,
title: null,
buttonText: "โ๐๐ผ๐๐ผ ๐พ๐๐๐พ๐ ๐ผ๐๐๐โ", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu|menรบ|memu|memรบ|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
handler.register = true
export default handler


function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = `๐ฑ๐๐ด๐ฝ๐พ๐ ๐ณ๐ธ๐ฐ๐ | ๐ถ๐พ๐พ๐ณ ๐ผ๐พ๐๐ฝ๐ธ๐ฝ๐ถ`
  if (time >= 4) {
    res = `๐ฑ๐๐ด๐ฝ๐พ๐ ๐ณ๐ธ๐ฐ๐ | ๐ถ๐พ๐พ๐ณ ๐ผ๐พ๐๐ฝ๐ธ๐ฝ๐ถ`
  }
  if (time >= 11) {
    res = `๐ฑ๐๐ด๐ฝ๐ฐ๐ ๐๐ฐ๐๐ณ๐ด๐ | ๐ถ๐พ๐พ๐ณ ๐ด๐๐ด๐ฝ๐ธ๐ฝ๐ถ`
  }
  if (time >= 15) {
    res = `๐ฑ๐๐ด๐ฝ๐ฐ๐ ๐๐ฐ๐๐ณ๐ด๐ | ๐ถ๐พ๐พ๐ณ ๐ด๐๐ด๐ฝ๐ธ๐ฝ๐ถ`
  }
  if (time >= 17) {
    res = `๐ฑ๐๐ด๐ฝ๐ฐ๐ ๐ฝ๐พ๐ฒ๐ท๐ด๐ | ๐ถ๐พ๐พ๐ณ ๐ฝ๐ธ๐ถ๐๐ท`
  }
  return res
}
