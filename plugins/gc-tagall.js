let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${pesan}`
let teks = `𝐀𝐍𝐆𝐄𝐋𝐄𝐒 𝐒𝐔𝐏𝐄𝐑𝐈𝐎𝐑𝐄𝐒\n\n ${oi}\n\n\n`
for (let mem of participants) {
teks += `➥🎅@${mem.id.split('@')[0]}\n`}
teks += `➥ *ɢᴏᴋᴜ ʙᴏᴛ*\n\n*𝕄𝔼ℝℝ𝕐 ℂℍℝ𝕀𝕊𝕋𝕄𝔸𝕊*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|marcar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
