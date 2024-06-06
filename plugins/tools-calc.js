let handler = async (m, { conn, text }) => {
let id = m.chat
conn.math = conn.math ? conn.math : {}
if (id in conn.math) {
clearTimeout(conn.math[id][3])
delete conn.math[id]
m.reply(' HEY! YOU ARE CHEATING')
}
let val = text
.replace(/[^0-9\-\/+*脳梅蟺Ee()piPI/]/g, '')
.replace(/脳/g, '*')
.replace(/梅/g, '/')
.replace(/蟺|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = val
.replace(/Math\.PI/g, '蟺')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '梅')
.replace(/\*脳/g, '脳')
try {
console.log(val)
let result = (new Function('return ' + val))()
if (!result) throw result
m.reply(`*${format}* = _${result}_`)
} catch (e) {
if (e == undefined) throw '*[鉂楌潗堭潗嶐潗咅潗庘潡] ENTER THE MATHEMATICAL OPERATION YOU WANT TO CALCULATE*'
throw '*[鉂楌潗堭潗嶐潗咅潗庘潡] FORMAT NOT ADMITTED, ONLY NUMBERS AND SYMBOLS ARE ADMITTED -, +, *, /, 脳, 梅, 蟺, e, (, )*'
}}
handler.help = ['calc <expression>']
handler.tags = ['tools']
handler.command = /^(calc(ulat(e|or))?|kalk(ulator)?)$/i
handler.exp = 5
export default handler