import os from 'os';
import util from 'util';
import sizeFormatter from 'human-readable';
import MessageType from '@whiskeysockets/baileys';
import fs from 'fs';
import {performance} from 'perf_hooks';
const handler = async (m, {conn, usedPrefix}) => {
  const _uptime = process.uptime() * 1000;
  const uptime = clockString(_uptime);
  const totalreg = Object.keys(global.db.data.users).length;
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats);
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'));
  const groups = chats.filter(([id]) => id.endsWith('@g.us'));
  const used = process.memoryUsage();
  const {restrict} = global.db.data.settings[conn.user.jid] || {};
  const {autoread} = global.opts;
  const grup = './Menu2.jpg';
  const old = performance.now();
  const neww = performance.now();
  const speed = neww - old;
  const text = `
┌☁️ *LORD ZEUS-MD⇝BOT* ☁️┐
┊*Hello👋 humble user❤️*
┊Welcome🌹to *LORD-ZEUS BOT* ✅
┊*🎗️BOT OWNER🎗️* *Jayden*
┊wa.me/254786827982,wa.me/254794597254
┊*🔱Credits🔱* *@khalid_official*
┊==========================
┊wa.me/254736958034, 
┊wa.me/254114098508
└───────────

┌─⭓ *'🕞QUICK-TEST MENU🕞'* ⭓──
┊➤🕞 ${usedPrefix} *ping*
┊➤🕞 ${usedPrefix}  *runtime*     
┊➤🕞 l${usedPrefix} *afk*
┊➤🕞 ${usedPrefix} *delcmd*
┊➤🕞 ${usedPrefix} *speedtest*
┊
└───────⭓

┌─⭓ *🎉FUN MENU🎉* ⭓──
┊➤🎉 ${usedPrefix} *gay*
┊➤🎉 ${usedPrefix} *trash*
┊➤🎉 ${usedPrefix} *kill*
┊➤🎉 ${usedPrefix} *pat*
┊➤🎉 ${usedPrefix} *slap*
┊➤🎉 ${usedPrefix} *ship*
┊➤🎉 ${usedPrefix} *kiss*
┊➤🎉 ${usedPrefix} *tomp3*
┊➤🎉 ${usedPrefix} *toav*
┊➤🎉 ${usedPrefix} *txt*
┊➤🎉 ${usedPrefix} *waifu*
┊
└───────⭓

┌─⭓ *🎮GAME MENU🎮* ⭓──
┊➤🎮 ${usedPrefix} *math*
┊➤🎮 ${usedPrefix} *ttt*
┊➤🎮 ${usedPrefix} *wordsearch*
┊➤🎮 ${usedPrefix} *slot*
┊
└───────⭓
════ •⊰❂⊱• ════
┌──⭓ *📥 DOWNLOAD MENU📥* ⭓──
┊➤📥 ${usedPrefix}*facebook*
┊➤📥 ${usedPrefix}*gdrive*
┊➤📥 ${usedPrefix}*gitclone*
┊➤📥 ${usedPrefix}*igstalk*
┊➤📥 ${usedPrefix}*igstory*
┊➤📥 ${usedPrefix}*ig*
┊➤📥 ${usedPrefix} *mediafire*
┊➤📥 ${usedPrefix}*play*
┊➤📥 ${usedPrefix} *tiktok*
┊➤📥 ${usedPrefix} *tstalk*
┊➤📥 ${usedPrefix} *twitter*
┊➤📥 ${usedPrefix} *yta*
┊➤📥 ${usedPrefix} *ytsearch*
┊
└───────⭓

┌─⭓ *👑OWNER MENU👑* ⭓──
┊➤👑 ${usedPrefix} *owner sf*
┊➤👑 ${usedPrefix} *owner df*
┊➤👑 ${usedPrefix} *addprem*
┊➤👑 ${usedPrefix} *banchat*
┊➤👑 ${usedPrefix} *banlist*
┊➤👑 ${usedPrefix} *ban*
┊➤👑 ${usedPrefix} *blocklist*
┊➤👑 ${usedPrefix} *broadcast*
┊➤👑 ${usedPrefix} *block/unblock*
┊➤👑 ${usedPrefix} *cleartmp*
┊➤👑 ${usedPrefix} *delprem*
┊➤👑 ${usedPrefix} *getdb*
┊➤👑 ${usedPrefix} *getplugin*
┊➤👑 ${usedPrefix} *join*
┊➤👑 ${usedPrefix} *resetuser*
┊➤👑 ${usedPrefix} *restart*
┊➤👑 ${usedPrefix} *unbanchat*
┊➤👑 ${usedPrefix} *unban*
┊➤👑 ${usedPrefix} *update*
┊
└───────⭓
════ •⊰❂⊱• ════
┌─⭓ *💎GROUP MENU💎* ⭓──
┊➤💎 ${usedPrefix} *invite*
┊➤💎 ${usedPrefix} *add*
┊➤💎 ${usedPrefix} *del*
┊➤💎 ${usedPrefix} *delwarn*
┊➤💎 ${usedPrefix} *demote*
┊➤💎 ${usedPrefix} *infogrupo*
┊➤💎 ${usedPrefix} *hidetag*
┊➤💎 ${usedPrefix} *kick*
┊➤💎 ${usedPrefix} *linkgroup*
┊➤💎 ${usedPrefix} *promote*
┊➤💎 ${usedPrefix} *rules*
┊➤💎 ${usedPrefix} *setbye*
┊➤💎 ${usedPrefix} *group*
┊➤💎 ${usedPrefix} *setwelcome*
┊➤💎 ${usedPrefix} *staffs*
┊➤💎 ${usedPrefix} *totag*
┊➤💎 ${usedPrefix} *warn*
┊➤💎 ${usedPrefix} *warns*
┊
└───────⭓

┌─⭓ *🔍SEARCH MENU🔍* ⭓──
┊➤🔍 ${usedPrefix} *video*
┊➤🔍 ${usedPrefix} *img*
┊➤🔍 ${usedPrefix} *image*
┊➤🔍 ${usedPrefix} *gimage*
┊➤🔍 ${usedPrefix} *meme*
┊➤🔍 ${usedPrefix} *pinterest* 
┊➤🔍 ${usedPrefix} *wallpaper*
┊
└───────⭓
 ════ •⊰❂⊱• ════ 
┌─⭓ *🌈 STICKER MENU🌈* ⭓──
┊➤🌈 ${usedPrefix} *attp*
┊➤🌈 ${usedPrefix} *emojimix*
┊➤🌈 ${usedPrefix} *getsticker*
┊➤🌈 ${usedPrefix} *stickersearch*
┊➤🌈 ${usedPrefix} *stickmaker*
┊➤🌈 ${usedPrefix} *stickermaker*
┊➤🌈 ${usedPrefix} *smaker*
┊➤🌈 ${usedPrefix} *sticker*
┊➤🌈 ${usedPrefix} *telestick*
┊➤🌈 ${usedPrefix} *telesticker*
┊➤🌈 ${usedPrefix} *toimg*
┊➤🌈 ${usedPrefix} *jpg*
┊➤🌈 ${usedPrefix} *mp4*
┊➤🌈 ${usedPrefix} *ttp*
┊➤🌈 ${usedPrefix} *ttps2*
┊➤🌈 ${usedPrefix} *take*
┊
└───────⭓

 ════ •⊰❂⊱• ════ 


════ •⊰❂⊱• ════ 

┌─⭓ *🛠️TOOL MENU🛠️* ⭓──
┊➤🛠️ ${usedPrefix} *calc*
┊➤🛠️ ${usedPrefix} *fake*
┊➤🛠️ ${usedPrefix} *fetch*
┊➤🛠️ ${usedPrefix} *google*
┊➤🛠️ ${usedPrefix} *lyrics*
┊➤🛠️ ${usedPrefix} *chatgpt*
┊➤🛠️ ${usedPrefix} *readmore*
┊➤🛠️ ${usedPrefix} *read*
┊➤🛠️ ${usedPrefix} *sc*
┊➤🛠️ ${usedPrefix} *ss*
┊➤🛠️ ${usedPrefix} *upload*
┊➤🛠️ ${usedPrefix} *translate*
┊➤🛠️ ${usedPrefix} *tts*
┊➤🛠️ ${usedPrefix} *wiki*
┊
└────

┌─⭓ *🧬ACTIVATE/DIACTIVATE MENU🧬'* ⭓──
┊➤🧡 _${usedPrefix}𝗲𝗻𝗮𝗯𝗹𝗲 *welcome*_
┊➤🧡 _${usedPrefix}𝗱𝗶𝘀𝗮𝗯𝗹𝗲 *welcome*_
┊➤🧡 _${usedPrefix}*enable* *modohorny*_
┊➤🧡 _${usedPrefix}*disable* *modohorny*_
┊➤🧡 _${usedPrefix}*enable* *antilink*_
┊➤🧡 _${usedPrefix}disable* *antilink*_
┊➤🧡 _${usedPrefix}*enable *antilink2*_
┊➤🧡 _${usedPrefix}*disable* *antilink2*_
┊➤🧡 _${usedPrefix}*enable* *detect*_
┊➤🧡 _${usedPrefix}disable* *detect*_
┊➤🧡 _${usedPrefix}*enable *audios*_
┊➤🧡 _${usedPrefix}*disable* *audios*_
┊➤🧡 _${usedPrefix}*enable* *autosticker*_
┊➤🧡 _${usedPrefix}*disable* *autosticker*_
┊➤🧡 _${usedPrefix}*enable* *antiviewonce*_
┊➤🧡 _${usedPrefix}*disable* *antiviewonce*_
┊➤🧡 _${usedPrefix}*enable* *antitoxic*_
┊➤🧡 _${usedPrefix}*disable* *antitoxic*_
┊➤🧡 _${usedPrefix}*enable* *antitraba*_
┊➤🧡 _${usedPrefix}*disable* *antitraba*_
┊➤🧡 _${usedPrefix}*enable* *antiarabes*_
┊➤🧡 _${usedPrefix}*disable* *antiarabes*_
┊➤🧡 _${usedPrefix}*enable* *modoadmin*_
┊➤🧡 _${usedPrefix}*disable* *modoadmin*_
└───────⭓
`.trim();
  conn.sendFile(m.chat, grup, 'errop.jpg', text, m, false );
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menu|help|commands|command)$/i;
export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ms, h, m, s});
  return [h, m, s].map((v) => v.toString().padStart(2, 0) ).join(':');
}
