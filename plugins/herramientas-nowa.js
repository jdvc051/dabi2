/*---------------------------------------------------------------------------------------
  π β’ By https://github.com/ALBERTO9883
  π β’ βAlberto Y Ashlyβ
-----------------------------------------------------------------------------------------*/
let handler = async (m, { conn, text, usedPrefix, command }) => {
let regex = /x/g
if (!text) throw 'β οΈπ π΄π» π½ππΌπ΄ππΎ?'
if (!text.match(regex)) throw `*π΄πΉπ΄πΌπΏπ»πΎ π³π΄π» πππΎ: ${usedPrefix + command} 521999340434x*`
let random = text.match(regex).length, total = Math.pow(10, random), array = []
for (let i = 0; i < total; i++) {
let list = [...i.toString().padStart(random, '0')]
let result = text.replace(regex, () => list.shift()) + '@s.whatsapp.net'
if (await conn.onWhatsApp(result).then(v => (v[0] || {}).exists)) {
let info = await conn.fetchStatus(result).catch(_ => {})
array.push({ exists: true, jid: result, ...info })
} else {
array.push({ exists: false, jid: result })
}}
let txt = 'ππ΄πΆπΈππππ°π³πΎ\n\n' + array.filter(v => v.exists).map(v => `β’π½ππΌπ΄ππΎ: wa.me/${v.jid.split('@')[0]}\n*β’ π³π΄ππ²:* ${v.status || 'Sin descripcion'}\n*β’ π΅π΄π²π·π°:* ${formatDate(v.setAt)}`).join('\n\n') + '\n\n* π½πΎ ππ΄πΆπΈππππ°π³πΎ*\n\n' + array.filter(v => !v.exists).map(v => v.jid.split('@')[0]).join('\n')
m.reply(txt)
}
handler.command = /^nowa$/i
export default handler
function formatDate(n, locale = 'id') {
let d = new Date(n)
return d.toLocaleDateString(locale, { timeZone: 'Asia/Jakarta' })}