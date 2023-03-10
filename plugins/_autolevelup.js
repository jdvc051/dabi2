//import db from '../lib/database.js'
import { canLevelUp } from '../lib/levelling.js'

export async function before(m, { conn }) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++
    user.role = global.rpg.role(user.level).name
    if (before !== user.level) {
    conn.sendButton(m.chat, 'ð¤ ' + wm, `â­âââââââªðâ«âââââââ®
ââ FELICIDADES ð HAS ALCANZADO UN NUEVO NIVEL
ââ¤âââââ â. â .â ââââââ¥
ââ NIVEL ANTERIOR: ${before}
ââ¤âââââ â. â .â ââââââ¥
ââ NIVEL ACTUAL: ${user.level}
ââ¤âââââ â. â .â ââââââ¥
ââ RANGO : ${user.role}
ââ¤âââââ â. â .â ââââââ¥
ââ FECHA: ${new Date().toLocaleString('id-ID')}
â°âââââââªðâ«âââââââ¯×`, null, [['â³ï¸MENU', `/menu`]], m)
}}		