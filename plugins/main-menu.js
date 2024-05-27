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
┊➤🕞 ${usedPrefix} 
┊➤🕞 ${usedPrefix}       
┊➤🕞 l${usedPrefix} 
┊➤🕞 ${usedPrefix} 
┊➤🕞 ${usedPrefix} 
┊➤🕞 ${usedPrefix} 
┊➤🕞 ${usedPrefix} 
┊➤🕞 ${usedPrefix} 
┊➤🕞 ${usedPrefix} 
┊➤🕞 ${usedPrefix} 
┊➤🕞 ${usedPrefix} 
┊➤🕞 ${usedPrefix} 
┊➤🕞 ${usedPrefix} 
┊➤🕞 ${usedPrefix} 
┊➤🕞 ${usedPrefix} 
┊➤🕞 ${usedPrefix} 
┊➤🕞 ${usedPrefix} 
┊➤🕞 ${usedPrefix} 
┊➤🕞 ${usedPrefix} 
┊➤🕞 ${usedPrefix} 
┊➤🕞 ${usedPrefix} 
┊➤🕞 ${usedPrefix} 
┊➤🕞 ${usedPrefix} 
┊➤🕞 ${usedPrefix} 
└───────⭓

┌─⭓ *🎉FUN MENU🎉* ⭓──
┊➤🎉 ${usedPrefix} 
┊➤🎉 ${usedPrefix} 
┊➤🎉 ${usedPrefix} 
┊➤🎉 ${usedPrefix} 
┊➤🎉 ${usedPrefix} 
┊➤🎉 ${usedPrefix} 
┊➤🎉 ${usedPrefix} 
┊➤🎉 ${usedPrefix} 
┊➤🎉 ${usedPrefix} 
┊➤🎉 ${usedPrefix} 
┊➤🎉 ${usedPrefix} 
┊➤🎉 ${usedPrefix} 
┊➤🎉 ${usedPrefix} 
┊➤🎉 ${usedPrefix} 
┊➤🎉 ${usedPrefix} 
┊➤🎉 ${usedPrefix} 
└───────⭓

┌─⭓ *⏳CONVERTER MENU⏳* ⭓──
┊➤⏳ ${usedPrefix} 
┊➤⏳ ${usedPrefix} 
┊➤⏳ ${usedPrefix} 
┊➤⏳ ${usedPrefix} 
┊➤⏳ ${usedPrefix} 
┊➤⏳ ${usedPrefix} 
┊➤⏳ ${usedPrefix} 
┊➤⏳ ${usedPrefix} 
┊➤⏳ ${usedPrefix} 
┊➤⏳ ${usedPrefix} 
┊➤⏳ ${usedPrefix} 
┊➤⏳ ${usedPrefix} 
┊➤⏳ ${usedPrefix} 
┊➤⏳ ${usedPrefix} 
┊➤⏳ ${usedPrefix} 
┊➤⏳ ${usedPrefix} 
└───────⭓

┌─⭓ *🎮GAME MENU🎮* ⭓──
┊➤🎮 ${usedPrefix} 
┊➤🎮 ${usedPrefix} 
┊➤🎮 ${usedPrefix} 
┊➤🎮 ${usedPrefix} 
┊➤🎮 ${usedPrefix} 
┊➤🎮 ${usedPrefix} 
┊➤🎮 ${usedPrefix} 
┊➤🎮 ${usedPrefix} 
┊➤🎮 ${usedPrefix} 
┊➤🎮 ${usedPrefix} 
┊➤🎮 ${usedPrefix} 
┊➤🎮 ${usedPrefix} 
┊➤🎮 ${usedPrefix} 
┊➤🎮 ${usedPrefix} 
┊➤🎮 ${usedPrefix} 
┊➤🎮 ${usedPrefix} 
└───────⭓
════ •⊰❂⊱• ════
┌──⭓ *📥 DOWNLOAD MENU📥* ⭓──
┊➤📥 ${usedPrefix} 
┊➤📥 ${usedPrefix} 
┊➤📥 ${usedPrefix} 
┊➤📥 ${usedPrefix} 
┊➤📥 ${usedPrefix} 
┊➤📥 ${usedPrefix} 
┊➤📥 ${usedPrefix} 
┊➤📥 ${usedPrefix} 
┊➤📥 ${usedPrefix} 
┊➤📥 ${usedPrefix} 
┊➤📥 ${usedPrefix} 
┊➤📥 ${usedPrefix} 
┊➤📥 ${usedPrefix} 
┊➤📥 ${usedPrefix} 
┊➤📥 ${usedPrefix} 
┊➤📥 ${usedPrefix} 
└───────⭓

┌─⭓ *👑OWNER MENU👑* ⭓──
┊➤👑 ${usedPrefix} 
┊➤👑 ${usedPrefix} 
┊➤👑 ${usedPrefix} 
┊➤👑 ${usedPrefix} 
┊➤👑 ${usedPrefix} 
┊➤👑 ${usedPrefix} 
┊➤👑 ${usedPrefix} 
┊➤👑 ${usedPrefix} 
┊➤👑 ${usedPrefix} 
┊➤👑 ${usedPrefix} 
┊➤👑 ${usedPrefix} 
┊➤👑 ${usedPrefix} 
┊➤👑 ${usedPrefix} 
┊➤👑 ${usedPrefix} 
┊➤👑 ${usedPrefix} 
┊➤👑 ${usedPrefix} 
┊➤👑 ${usedPrefix} 
┊➤👑 ${usedPrefix} 
┊➤👑 ${usedPrefix} 
┊➤👑 ${usedPrefix} 
┊➤👑 ${usedPrefix} 
┊➤👑 ${usedPrefix} 
┊➤👑 ${usedPrefix} 
┊➤👑 ${usedPrefix} 
┊➤👑 ${usedPrefix} 
┊➤👑 ${usedPrefix} 
┊➤👑 ${usedPrefix} 
┊➤👑 ${usedPrefix} 
└───────⭓
════ •⊰❂⊱• ════
┌─⭓ *💎GROUP MENU💎* ⭓──
┊➤💎 ${usedPrefix} 
┊➤💎 ${usedPrefix} 
┊➤💎 ${usedPrefix} 
┊➤💎 ${usedPrefix} 
┊➤💎 ${usedPrefix} 
┊➤💎 ${usedPrefix} 
┊➤💎 ${usedPrefix} 
┊➤💎 ${usedPrefix} 
┊➤💎 ${usedPrefix} 
┊➤💎 ${usedPrefix} 
┊➤💎 ${usedPrefix} 
┊➤💎 ${usedPrefix} 
┊➤💎 ${usedPrefix} 
┊➤💎 ${usedPrefix} 
┊➤💎 ${usedPrefix} 
┊➤💎 ${usedPrefix} 
┊➤💎 ${usedPrefix} 
┊➤💎 ${usedPrefix} 
┊➤💎 ${usedPrefix} 
┊➤💎 ${usedPrefix} 
└───────⭓

┌─⭓ *🔍SEARCH MENU🔍* ⭓──
┊➤🔍 ${usedPrefix} 
┊➤🔍 ${usedPrefix} 
┊➤🔍 ${usedPrefix} 
┊➤🔍 ${usedPrefix} 
┊➤🔍 ${usedPrefix} 
┊➤🔍 ${usedPrefix} 
┊➤🔍 ${usedPrefix} 
┊➤🔍 ${usedPrefix} 
┊➤🔍 ${usedPrefix} 
┊➤🔍 ${usedPrefix} 
┊➤🔍 ${usedPrefix} 
┊➤🔍 ${usedPrefix} 
┊➤🔍 ${usedPrefix} 
┊➤🔍 ${usedPrefix} 
┊➤🔍 ${usedPrefix} 
┊➤ 🔍${usedPrefix} 
└───────⭓
 ════ •⊰❂⊱• ════ 
┌─⭓ *🌈 STICKER MENU🌈* ⭓──
┊➤🌈 ${usedPrefix} 
┊➤🌈 ${usedPrefix} 
┊➤🌈 ${usedPrefix} 
┊➤🌈 ${usedPrefix} 
┊➤🌈 ${usedPrefix} 
┊➤🌈 ${usedPrefix} 
┊➤🌈 ${usedPrefix} 
┊➤🌈 ${usedPrefix} 
┊➤🌈 ${usedPrefix} 
┊➤🌈 ${usedPrefix} 
┊➤🌈 ${usedPrefix} 
┊➤🌈 ${usedPrefix} 
┊➤🌈 ${usedPrefix} 
┊➤🌈 ${usedPrefix} 
┊➤🌈 ${usedPrefix} 
┊➤🌈 ${usedPrefix} 
┊➤🌈 ${usedPrefix} 
┊➤🌈 ${usedPrefix} 
┊➤🌈 ${usedPrefix} 
┊➤🌈 ${usedPrefix} 
┊➤🌈 ${usedPrefix} 
┊➤🌈 ${usedPrefix} 
┊➤🌈 ${usedPrefix} 
└───────⭓

 ════ •⊰❂⊱• ════ 

┌─⭓ *💵RPG MENU💵* ⭓──
┊➤💵 ${usedPrefix} 
┊➤💵 ${usedPrefix} 
┊➤💵 ${usedPrefix} 
┊➤💵 ${usedPrefix} 
┊➤💵 ${usedPrefix} 
┊➤💵 ${usedPrefix} 
┊➤💵 ${usedPrefix} 
┊➤💵 ${usedPrefix} 
┊➤💵 ${usedPrefix} 
┊➤💵 ${usedPrefix} 
┊➤💵 ${usedPrefix} 
┊➤💵 ${usedPrefix} 
└───────⭓

════ •⊰❂⊱• ════ 

┌─⭓ *🛠️TOOL MENU🛠️* ⭓──
┊➤🛠️ ${usedPrefix} 
┊➤🛠️ ${usedPrefix} 
┊➤🛠️ ${usedPrefix} 
┊➤🛠️ ${usedPrefix} 
┊➤🛠️ ${usedPrefix} 
┊➤🛠️ ${usedPrefix} 
┊➤🛠️ ${usedPrefix} 
┊➤🛠️ ${usedPrefix} 
┊➤🛠️ ${usedPrefix} 
┊➤🛠️ ${usedPrefix} 
┊➤🛠️ ${usedPrefix} 
┊➤🛠️ ${usedPrefix} 
┊➤🛠️ ${usedPrefix} 
┊➤🛠️ ${usedPrefix} 
┊➤🛠️ ${usedPrefix} 
┊➤🛠️ ${usedPrefix} 
└───────⭓

┌─⭓ *♦️MAKER MENU♦️* ⭓──
┊➤♦️ ${usedPrefix} 
┊➤♦️ ${usedPrefix} 
┊➤♦️ ${usedPrefix} 
┊➤♦️ ${usedPrefix} 
┊➤♦️ ${usedPrefix} 
┊➤♦️ ${usedPrefix} 
┊➤♦️ ${usedPrefix} 
┊➤♦️ ${usedPrefix} 
┊➤♦️ ${usedPrefix} 
┊➤♦️ ${usedPrefix} 
┊➤♦️ ${usedPrefix} 
┊➤♦️ ${usedPrefix} 
┊➤♦️ ${usedPrefix} 
┊➤♦️ ${usedPrefix} 
┊➤♦️ ${usedPrefix} 
┊➤♦️ ${usedPrefix} 
└───────⭓

┌─⭓ *🧬ACTIVATE/DIACTIVATE MENU🧬'* ⭓──
┊➤🧬 ${usedPrefix} 
┊➤🧬 ${usedPrefix} 
┊➤🧬 ${usedPrefix} 
┊➤🧬 ${usedPrefix} 
┊➤🧬 ${usedPrefix} 
┊➤🧬 ${usedPrefix} 
┊➤🧬 ${usedPrefix} 
┊➤🧬 ${usedPrefix} 
┊➤🧬 ${usedPrefix} 
┊➤🧬 ${usedPrefix} 
┊➤🧬 ${usedPrefix} 
┊➤🧬 ${usedPrefix} 
┊➤🧬 ${usedPrefix} 
┊➤🧬 ${usedPrefix} 
┊➤🧬 ${usedPrefix} 
┊➤🧬 ${usedPrefix} 
└───────⭓
┌─⭓ *🏷️NSFW MENU🏷️* ⭓──
┊➤🏷️ ${usedPrefix} 
┊➤🏷️ ${usedPrefix} 
┊➤🏷️ ${usedPrefix} 
┊➤🏷️ ${usedPrefix} 
┊➤🏷️ ${usedPrefix} 
┊➤🏷️ ${usedPrefix} 
┊➤🏷️ ${usedPrefix} 
┊➤🏷️ ${usedPrefix} 
┊➤🏷️ ${usedPrefix} 
┊➤🏷️ ${usedPrefix} 
┊➤🏷️ ${usedPrefix} 
┊➤🏷️ ${usedPrefix} 
┊➤🏷️ ${usedPrefix} 
┊➤🏷️ ${usedPrefix} 
┊➤🏷️ ${usedPrefix} 
┊➤🏷️ ${usedPrefix} 
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