import yts from 'yt-search'
import fs from 'fs'

let handler = async (m, {conn, text }) => {
  if (!text) throw ' ⚠️ *_What do you want me to look for on YouTube?_*'
  let results = await yts(text)
  let tes = results.all
  console.log(tes)
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
° *${v.title}*
↳ 🫐 *𝗟𝗶𝗻𝗸 :* ${v.url}
↳ 🕒 *𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻 :* ${v.timestamp}
↳ 📥 *𝗨𝗽𝗹𝗼𝗮𝗱𝗲𝗱 :* ${v.ago}
↳ 👁 *𝗩𝗶𝗲𝘄𝘀 :* ${v.views}`}}).filter(v => v).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n')
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)
}
handler.help = ['ytsearch *<texto>*'] 
handler.tags = ['search']
handler.command = ['ytsearch', 'yts'] 
export default handler