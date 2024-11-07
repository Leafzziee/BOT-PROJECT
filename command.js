/*  

  Made By fox
  Base : fox
  WhatsApp : wa.me/6283829814737
  Telegram : t.me/ifox
  Youtube : @fox

  Channel : https://whatsapp.com/channel/0029VaGdzBSGZNCmoTgN2K0u

  Copy Code?, Recode?, Rename?, Reupload?, Reseller? Taruh Credit Ya :D

*/

require('./setting')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, interactiveMessage, downloadContentFromMessage, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const { color, bgcolor } = require('./lib/color')
const { ssweb } = require('./lib/ssweb')
const { quote } = require('./lib/quote')
const { uptotelegra } = require('./lib/upload')
const { Primbon } = require('scrape-primbon')
const { remini } = require('./lib/remini')
const { TelegraPh } = require('./lib/uploader')
const uploadImage = require('./lib/uploadImage')
const primbon = new Primbon()
const hxz = require('hxz-api')
const jsobfus = require('javascript-obfuscator')
const cheerio = require('cheerio')
const { Client } = require('ssh2')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
let search = require('yt-search');
const { exec, spawn, execSync } = require("child_process")
const { mediafireDl } = require('./database/mediafire.js')
const { smsg, tanggal, getTime, formatp, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list');
const { addRespons, checkRespons, deleteRespons } = require('./lib/respon');
const alosehat = require('./lib/alosehat.js'); 

// Membaca Seluruh Database
global.db.data = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db.data) global.db.data = {
users: {},
chats: {},
game: {},
database: {},
settings: {},
setting: {},
others: {},
sticker: {},
...(global.db.data || {})
}
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
let reminders = {};

const yts = require('./scrape/yt-search')
const { ytSearch } = require('./scrape/yt')
const { antispam } = require('./lib/antispam')
const pengguna = JSON.parse(fs.readFileSync('./database/user.json'))
const reseller = JSON.parse(fs.readFileSync('./database/premium.json'))
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))
const chatbot = JSON.parse(fs.readFileSync("./lib/chatbot.json"))
const antidel = JSON.parse(fs.readFileSync("./lib/antidel.json"))
const banned = JSON.parse(fs.readFileSync('./data/ban/banned.json'))
const reseller2 = JSON.parse(fs.readFileSync('./database/reseller.json'))
const reseller3 = JSON.parse(fs.readFileSync('./database/reseller2.json'))
const subdo = JSON.parse(fs.readFileSync('./database/subdo.json'))
const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))

// Get Database
const isContacts = contacts.includes(m.sender)

module.exports = fox = async (fox, m, chatUpdate, store) => {
 try {
var body = ( m.mtype === 'conversation' ? m.message.conversation : m.mtype === 'imageMessage' ? m.message.imageMessage.caption : m.mtype === 'videoMessage' ? m.message.videoMessage.caption : m.mtype === 'extendedTextMessage' ? m.message.extendedTextMessage.text : m.mtype === 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId : m.mtype === 'listResponseMessage' ? m.message.listResponseMessage.singleSelectReply.selectedRowId : m.mtype === 'InteractiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson)?.id : m.mtype === 'templateButtonReplyMessage' ? m.message.templateButtonReplyMessage.selectedId : m.mtype === 'messageContextInfo' ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.message.InteractiveResponseMessage.NativeFlowResponseMessage || m.text : '');
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix


const isCmd = body.startsWith(prefix)
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
//Kalau Mau Single Prefix Kamu Ganti Command Diatas Pakai Ini : const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()


const args = body.trim().split(/ +/).slice(1)
const full_args = body.replace(command, '').slice(1).trim()
const spychat = body.replace().slice().trim()
const pushname = m.pushName || "No Name"
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const botNumber = await fox.decodeJid(fox.user.id)
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isReseller = [botNumber, ...reseller].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isReseller2 = [botNumber, ...reseller2].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isReseller3 = [botNumber, ...reseller3].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isSelsub = [botNumber, ...subdo].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await fox.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const ChatBot = m.isGroup ? chatbot.includes(from) : false 
const autodelete = from && isCmd ? antidel.includes(from) : false 
const isBan = banned.includes(m.sender)
const isUser = pengguna.includes(m.sender)
const content = JSON.stringify(m.message)
const welcm = m.isGroup ? wlcm.includes(from) : true
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const qtod = m.quoted? "true":"false"
const more = String.fromCharCode(8206).repeat(1001)

const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = '🌃 Selamat Malam'
        }
        if(time2 < "19:00:00"){
        var ucapanWaktu = '🌆 Selamat Petang'
        }
        if(time2 < "18:00:00"){
        var ucapanWaktu = '🌇 Selamat Sore'
        }
        if(time2 < "15:00:00"){
        var ucapanWaktu = '🏙 Selamat Siang'
        }
        if(time2 < "10:00:00"){
        var ucapanWaktu = '🌅 Selamat Pagi'
        }
        if(time2 < "05:00:00"){
        var ucapanWaktu = '🌆 Selamat Subuh'
        }
        if(time2 < "03:00:00"){
        var ucapanWaktu = '🌌 Selamat Tengah Malam'
        }
        
        if (!fox.public) {
if (!m.key.fromMe && !isPrem) return
}

const cap = 'LEN'
try {
pplu = await fox.profilePictureUrl(anu.id, 'image')
} catch {
pplu = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
//Fake Quoted
const len = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                "contactMessage": {
                    'displayName': `${pushname}`,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Fox,;;;\nFN: fox V2.1\nitem1.TEL;waid=${m.sender.split("@")[0]}:+${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    'jpegThumbnail': pplu,
                    thumbnail: pplu,
                    sendEphemeral: true
                }   
            }
        }

const len2 = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "extendedTextMessage": {
            "text": ucapanWaktu,
            "title": ``,
            "thumbnailUrl": pplu
        }
    }
}

const fstatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": botname,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./data/image/menu.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}

const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: global.thumbnail}}}

const reply = (teks) => {
fox.sendMessage(from, { text: teks, }, { quoted: m })}
/*fox.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `☘️ Halo Aku fox`,"body": `Hai kak ${pushname} Jangan Spam Ya`, "previewType": "PHOTO","thumbnail": thumb,"sourceUrl": `https://whatsapp.com/channel/0029Vak5a1P6LwHiAJkd0M0q`}}}, { quoted: len })}*/
// Tanpa ContextInfo : fox.sendMessage(from, { text: teks, }, { quoted: len })}

const onlygc = () => {} 
/*fox.sendMessage(m.chat, {
    text: `☘️ *Hello Im fox*\n⚠️ *Fitur Bot Hanya Bisa Digunakan Didalam Grup*\n\n🎁 *Mau Sc? Ketik fox Di Grup*\n\n☘️ *Information :*\n *⨠ Version : 2.1*\n *⨠ Author : fox*\n *⨠ Author :* wa.me/6287858976852\n🎁 *Telegram Author :* t.me/sikbidisigam`,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu}`,
        body: "fox",
        thumbnailUrl: "https://telegra.ph/file/77cdd43116f63eaadca02.jpg",
        sourceUrl: "https://whatsapp.com/channel/0029Vak5a1P6LwHiAJkd0M0q",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   } */

// Tanpa Auto Chat : const onlygc = () => {} 

try {
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('wlcm' in chats)) chats.wlcm = true
                if (!('antitoxic' in chats)) chats.antitoxic = false
                if (!('antilink' in chats)) chats.antilink = false
                if (!('antilinkyt' in chats)) chats.antilinkyt = false
                if (!('antilinktt' in chats)) chats.antilinktt = false
                if (!('antivirtex' in chats)) chats.antivirtex = true
                if (!('antipanel' in chats)) chats.antipanel = false
                if (!('antilinkv2' in chats)) chats.antilinkv2 = false
                if (!('antiwame' in chats)) chats.antiwame = false
                if (!('notification' in chats)) chats.notification = {}
            } else global.db.data.chats[m.chat] = {
                mute: false,
                wlcm: true,
                antitoxic: false,
                antilink: false,
                antilinkyt: false,
                antilinktt: false,
                antivirtex: true,
                antipanel: false,
                antiwame: false,
                antilinkv2: false,
                notification: {
                     status: false,
                     text_left: '',
                     text_welcome:''
                  }
            }
        } catch (err) {
            console.error(err)
        }

let cron = require('node-cron')
        cron.schedule('02 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = global.foxSet.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })

const totalfitur = () =>{
            var mytext = fs.readFileSync("./fox.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }

if(m.mtype === "interactiveResponseMessage"){  
            let msg = m.message[m.mtype]  || m.msg
            if(msg.nativeFlowResponseMessage  && !m.isBot  ){ 
                let { id } = JSON.parse(msg.nativeFlowResponseMessage.paramsJson) || {}  
                if(id){
                    let emit_msg = { 
                        key : { ...m.key } , // SET RANDOME MESSAGE ID  
                        message:{ extendedTextMessage : { text : id } } ,
                        pushName : m.pushName,
                        messageTimestamp  : m.messageTimestamp || 754785898978
                    }
                    return fox.ev.emit("messages.upsert" , { messages : [ emit_msg ] ,  type : "notify"})
                }
            }
        }        

function cwr(tMatch, tWr, wrReq) {
    let tLose = tMatch * (100 - tWr) / 100;
    let seratusPersen = tLose * (100 / (100 - wrReq));
    let final = seratusPersen - tMatch;
    return Math.round(final);
  } 

function LenTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return hours + " Jam " + minutes + " Menit " + seconds + " Detik"
}                 
        
function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

async function jarak(dari, ke) {
    let html = (await axios(`https://www.google.com/search?q=${encodeURIComponent('jarak ' + dari + ' ke ' + ke)}&hl=id`)).data
    let $ = cheerio.load(html), obj = {}
    let img = html.split("var s=\'")?.[1]?.split("\'")?.[0]
    obj.img = /^data:.*?\/.*?;base64,/i.test(img) ? Buffer.from(img.split`,` [1], 'base64') : ''
    obj.desc = $('div.BNeawe.deIvCb.AP7Wnd').text()?.trim()
    return obj
}

if (m.isBaileys && m.fromMe) {
          reply(`*Bot Lain Terdeteksi*\n\n*Bot Akan Di Keluarkan, Karena Admin Mengaktifkan Anti Bot*`)
    await fox.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}

const listcolor = ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white']
        const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]
        if (m.message) {
            fox.sendPresenceUpdate(from)
            console.log(chalk.yellow.bgCyan.bold(botname), color(`[ PESAN ]`, `${randomcolor}`), color(`Dari`, `${randomcolor}`), color(`${pushname}`, `${randomcolor}`), color(` :`, `${randomcolor}`), color(`${body}`, `white`))
        }

if (isCmd && !isUser) {
pengguna.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(pengguna, null, 2))
}

if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
fox.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
fox.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
}
}

// Anti Link
if (db.data.chats[m.chat].fox_antigc) {
            if (budy.match(`chat.whatsapp.com`)) {
                let gclink = (`https://chat.whatsapp.com/` + await fox.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return reply(`🦊 *Eh Ternyata Link Group Ini*`)
                if (isAdmins) return reply(`🦊 *Ehh Halo Admin*`)
                if (isCreator) return reply(`🦊 *Ehh Halo Owner*`)
                fox.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        if (db.data.chats[m.chat].fox_antigc2) {
            if (budy.match(`chat.whatsapp.com`)) {
                reply(`*😡 Anti Link Gc Whatsapp*\n⚠️ *Kamu Terdeteksi Mengirim Link Group*`)
                if (!isBotAdmins) return reply(msg.botAdmin)
                let gclink = (`https://chat.whatsapp.com/` + await fox.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return reply(`🦊 *Eh Ternyata Link Group Ini*`)
                if (isAdmins) return reply(`🦊 *Ehh Halo Admin*`)
                if (isCreator) return reply(`🦊 *Ehh Halo Owner*`)
                fox.sendMessage(m.chat, { delete: m.key })
            }
        }

        if (db.data.chats[m.chat].fox_antiwame) {
            if (budy.includes('https://wa.me') || budy.includes('wa.me') || budy.includes('Https://wa.me') || budy.includes('Wa.me') ) {
                reply(`*😡 Anti Wame Whatsapp*\n⚠️ *Kamu Terdeteksi Mengirim Chat Wame*`)
                if (!isBotAdmins) return reply(msg.botAdmin)
                let gclink = (`https://chat.whatsapp.com/` + await fox.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return reply(`🦊 *Eh Ternyata Link Group Ini*`)
                if (isAdmins) return reply(`🦊 *Ehh Halo Admin*`)
                if (isCreator) return reply(`🦊 *Ehh Halo Owner*`)
                fox.sendMessage(m.chat, { delete: m.key })
            }
        }

        if (db.data.chats[m.chat].fox_antilink) {
            if (budy.includes('https:') || budy.includes('http') || budy.includes('Https:') || budy.includes('Http') ) {
                reply(`*😡 Anti Link Whatsapp*\n⚠️ *Kamu Terdeteksi Mengirim Link*`)
                if (!isBotAdmins) return reply(msg.botAdmin)
                let gclink = (`https://chat.whatsapp.com/` + await fox.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return reply(`🦊 *Eh Ternyata Link Group Ini*`)
                if (isAdmins) return reply(`🦊 *Ehh Halo Admin*`)
                if (isCreator) return reply(`🦊 *Ehh Halo Owner*`)
                fox.sendMessage(m.chat, { delete: m.key })
            }
        }

        if (db.data.chats[m.chat].fox_antipanel) {
            if (budy.includes('PANEL') || budy.includes('Panel') || budy.includes('panel') || budy.includes('pnel') ) {
                reply(`😡 *Anti Promosi Panel*\n⚠️ *Kamu Terdeteksi Mengirim Promosi Panel*`)
                if (!isBotAdmins) return reply(msg.botAdmin)
                let gclink = (`https://chat.whatsapp.com/` + await fox.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return reply(`🦊 *Eh Ternyata Link Group Ini*`)
                if (isAdmins) return reply(`🦊 *Ehh Halo Admin*`)
                if (isCreator) return reply(`🦊 *Ehh Halo Owner*`)
                fox.sendMessage(m.chat, { delete: m.key })
            }
        }

        if (db.data.chats[m.chat].fox_antitiktok) {
            if (budy.match(`https://vt.tiktok.com`)) {
                reply(`😡 *Anti Link Tiktok*\n⚠️ *Kamu Terdeteksi Mengirim Link Tiktok*`)
                if (!isBotAdmins) return reply(msg.botAdmin)
                let gclink = (`https://chat.whatsapp.com/` + await fox.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return reply(`🦊 *Eh Ternyata Link Group Ini*`)
                if (isAdmins) return reply(`🦊 *Ehh Halo Admin*`)
                if (isCreator) return reply(`🦊 *Ehh Halo Owner*`)
                fox.sendMessage(m.chat, { delete: m.key })
            }
        }

        if (db.data.chats[m.chat].fox_antiyoutube) {
            if (budy.match(`https://youtu.be`)) {
                reply(`😡 *Anti Link Youtube*\n⚠️ *Kamu Terdeteksi Mengirim Link Youtube*`)
                if (!isBotAdmins) return reply(msg.botAdmin)
                let gclink = (`https://chat.whatsapp.com/` + await fox.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return reply(`🦊 *Eh Ternyata Link Group Ini*`)
                if (isAdmins) return reply(`🦊 *Ehh Halo Admin*`)
                if (isCreator) return reply(`🦊 *Ehh Halo Owner*`)
                fox.sendMessage(m.chat, { delete: m.key })
            }
        }

                if (db.data.chats[m.chat].fox_antich) {
            if (budy.includes('https://whatsapp.com/channel/') || budy.includes('https://whatsapp.com/channel/') || budy.includes('https://whatsapp.com/channel/') || budy.includes('https://whatsapp.com/channel/') ) {
                reply(`*😡 Anti Channel Whatsapp*\n⚠️ *Kamu Terdeteksi Mengirim Link Channel Wa*`)
                if (!isBotAdmins) return reply(msg.botAdmin)
                let gclink = (`https://chat.whatsapp.com/` + await fox.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isAdmins) return reply(`🦊 *Follow Saluran fox Yaa*`)
                if (isCreator) return reply(`🦊 *Follow Saluran fox Yaa*`)
                fox.sendMessage(m.chat, { delete: m.key })
            }
        }

let list = []
for (let i of owner) {
list.push({
displayName: await fox.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await fox.getName(i + '@s.whatsapp.net')}\n
FN:${await fox.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:leafz@sigma.id\n
item2.X-ABLabel:Email\n
item3.URL:Youtube : fox\n
item3.X-ABLabel:Grup Wangsaff\n
item4.ADR:;;Mars Area 51;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: fox.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, fox.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
fox.ev.emit('messages.upsert', msg)
}

if (budy.startsWith('©️')) {
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}

async function sendGeekzMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await fox.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `fox`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}

var createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
try {
ppuser = await fox.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 await reply(`🐣 *Kuis Matematika*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silakan Ketik Math Mode*`)
 delete kuismath[m.sender.split('@')[0]]
} else reply('🐣 *Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 fox.sendMessage(m.chat, { image: ppnyauser, caption: `🐣 *Tebak Gambar*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silahkan Ketik Tebak Gambar*`}, {quoted:m})
 delete tebakgambar[m.sender.split('@')[0]]
} else reply('🐣 *Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 fox.sendMessage(m.chat, { image: ppnyauser, caption: `🐣 *Tebak Kata*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silahkan Ketik Tebak Kata*`}, {quoted:m})  
 delete tebakkata[m.sender.split('@')[0]]
} else reply('🐣 *Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 fox.sendMessage(m.chat, { image: ppnyauser, caption: `🐣 *Tebak Lontong*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silahkan Ketik Tebak Lontong*`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else reply('🐣 *Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 fox.sendMessage(m.chat, { image: ppnyauser, caption: `🐣 *Tebak Kalimat*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silahkan Ketik Tebak Kalimat*`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
} else reply('🐣 *Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 fox.sendMessage(m.chat, { image: ppnyauser, caption: `🐣 *Tebak Lirik*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silahkan Ketik Tebak Lirik*`}, {quoted:m}) 
 delete tebaklirik[m.sender.split('@')[0]]
} else reply('🐣 *Jawaban Salah!*')
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 fox.sendMessage(m.chat, { image: ppnyauser, caption: `🐣 *Tebak Tebakan*\n\n🎁 *Jawaban Benar*\n\n📣 *Ingin Bermain Lagi? Silahkan Ketik Tebak Tebakan*`}, {quoted:m}) 
 delete tebaktebakan[m.sender.split('@')[0]]
} else reply('🐣 *Jawaban Salah!*')
}

//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== from)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = from
if (room.x !== room.o) await fox.sendText(room.x, str, m, { mentions: parseMention(str) } )
await fox.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
fox.sendTextWithMentions(from, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
fox.sendText(from, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) fox.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) fox.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) fox.sendText(from, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
fox.sendTextWithMentions(from, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) fox.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) fox.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
fox.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}

//tempat menu case
switch(command) {

case 'menu': {
    let teks = `📃「 *Bot Information* 」
▩ *Bot Name : ${global.botname}*
▩ *Bot Version : ${global.version}*
▩ *Owner :* ${global.owner}
▩ *Bot Mode : ${global.status ? 'Public' : 'Self'}*

📃「 *User Information* 」
▩ *Reseller 1 : ${isReseller ? 'Yes' : 'No'}*
▩ *Reseller 2 : ${isReseller2 ? 'Yes' : 'No'}*
▩ *Reseller 3 : ${isReseller3 ? 'Yes' : 'No'}*
▩ *Subdo : ${isSelsub ? 'Yes' : 'No'}*
▩ *Name : ${pushname}*
▩ *Status : ${isCreator ? 'Owner' : 'Member'}*

─┄┉┅╍ < *FOXX BOT* > ╍┅┉┄─
➤ ${grid}mainmenu${grid}
➤ ${grid}allmenu${grid}
➤ ${grid}templatev1${grid}
➤ ${grid}templatev2${grid}

> © FOXX BOT 3.0`;

    const contextInfo = {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363335802741292@newsletter',
            newsletterName: `${global.botname} - I N F O`,
            serverMessageId: null
        },
        externalAdReply: {
            title: `© ${global.botname}`,
            thumbnail: global.image,
            sourceUrl: global.ch,
            renderLargerThumbnail: false, 
            mediaType: 1
        }
    };

    await fox.sendMessage(
        m.chat, 
        { 
            image: thumbnail, 
            caption: teks, 
            contextInfo: contextInfo 
        }, 
        { quoted: fstatus }
    );
}
break;

case 'mainmenu': {
let teks = `📃「 *Bot Information* 」
▩ *Bot Name : ${global.botname}*
▩ *Bot Version : ${global.version}*
▩ *Owner :* ${global.owner}
▩ *Bot Mode : ${global.status ? 'Public' : 'Self'}*

📃「 *User Information* 」
▩ *Reseller 1 : ${isReseller ? 'Yes' : 'No'}*
▩ *Reseller 2 : ${isReseller2 ? 'Yes' : 'No'}*
▩ *Reseller 3 : ${isReseller3 ? 'Yes' : 'No'}*
▩ *Subdo : ${isSelsub ? 'Yes' : 'No'}*
▩ *Name : ${pushname}*
▩ *Status : ${isCreator ? 'Owner' : 'Member'}*

╭┄─「 *MAIN MENU* 」─╼
┊❐ ${grid}ownermenu${grid}
┊❐ ${grid}groupmenu${grid}
┊❐ ${grid}pushmenu${grid}
┊❐ ${grid}resellermenu${grid}
┊❐ ${grid}installmenu${grid}
┊❐ ${grid}antimenu${grid}
┊❐ ${grid}downloadmenu${grid}
┊❐ ${grid}toolsmenu${grid}
┊❐ ${grid}aimenu${grid}
┊❐ ${grid}cpanelmenu${grid}
┊❐ ${grid}subdomenu${grid}
┊❐ ${grid}funmenu${grid}
╰┄─╼

> © FOXX BOT 3.0`
const contextInfo = {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363335802741292@newsletter',
            newsletterName: `${global.botname} - I N F O`,
            serverMessageId: null
        },
        externalAdReply: {
            title: `© ${global.botname}`,
            thumbnail: global.image,
            sourceUrl: global.ch,
            renderLargerThumbnail: false, 
            mediaType: 1
        }
    };

    await fox.sendMessage(
        m.chat, 
        { 
            image: thumbnail, 
            caption: teks, 
            contextInfo: contextInfo 
        }, 
        { quoted: fstatus }
    );
}
break;

case 'allmenu': {
let menu = `📃「 *User Information* 」
▩ *Reseller 1 : ${isReseller ? 'Yes' : 'No'}*
▩ *Reseller 2 : ${isReseller2 ? 'Yes' : 'No'}*
▩ *Reseller 3 : ${isReseller3 ? 'Yes' : 'No'}*
▩ *Subdo : ${isSelsub ? 'Yes' : 'No'}*
▩ *Name : ${pushname}*
▩ *Status : ${isCreator ? 'Owner' : 'Member'}*

╭┄─「 *OWNER MENU* 」─╼
┊❐ ${grid}self${grid}
┊❐ ${grid}public${grid}
┊❐ ${grid}addown${grid}
┊❐ ${grid}delown${grid}
┊❐ ${grid}listown${grid}
┊❐ ${grid}setdomain1${grid}
┊❐ ${grid}setdomain2${grid}
┊❐ ${grid}setdomainp${grid}
┊❐ ${grid}setapikey1${grid}
┊❐ ${grid}setapikey2${grid}
┊❐ ${grid}setapikeyp${grid}
┊❐ ${grid}setcapikey1${grid}
┊❐ ${grid}setcapikey2${grid}
┊❐ ${grid}setcapikeyp${grid}
┊❐ ${grid}addseller${grid}
┊❐ ${grid}addseller2${grid}
┊❐ ${grid}addsellp${grid}
┊❐ ${grid}delseller${grid}
┊❐ ${grid}delseller2${grid}
┊❐ ${grid}delsellp${grid}
┊❐ ${grid}listseller${grid}
┊❐ ${grid}listseller2${grid}
┊❐ ${grid}listsellp${grid}
┊❐ ${grid}addsubdo${grid}
┊❐ ${grid}delsubdo${grid}
┊❐ ${grid}listsubdo${grid}
╰┄─╼

╭┄─「 *GROUP MENU* 」─╼
┊❐ ${grid}group [ close/open ]${grid}
┊❐ ${grid}welcome [ on/off ]${grid}
┊❐ ${grid}hidetag${grid}
┊❐ ${grid}tagall${grid}
┊❐ ${grid}promote${grid}
┊❐ ${grid}demote${grid}
┊❐ ${grid}kick${grid}
┊❐ ${grid}closetime${grid}
┊❐ ${grid}opentime${grid}
╰┄─╼

╭┄─「 *PUSH MENU* 」─╼
┊❐ ${grid}listgc${grid}
┊❐ ${grid}pushkontakgc${grid}
┊❐ ${grid}pushkontak${grid}
┊❐ ${grid}savekontakgc${grid}
┊❐ ${grid}savekontak${grid}
┊❐ ${grid}setteksjpm${grid}
┊❐ ${grid}startjpm${grid}
┊❐ ${grid}jpm${grid}
┊❐ ${grid}jpmvip${grid}
╰┄─╼

╭┄─「 *RESELLER MENU* 」─╼
┊❐ ${grid}cpanelmenu1${grid}
┊❐ ${grid}cpanelmenu2${grid}
┊❐ ${grid}cpanelmenu3${grid}
┊❐ ${grid}listdomain${grid}
┊❐ ${grid}domainA-J${grid}
╰┄─╼

╭┄─「 *INSTALL MENU* 」─╼
┊❐ ${grid}installpanel${grid}
┊❐ ${grid}installtemastellar${grid}
┊❐ ${grid}installtemabilling${grid}
┊❐ ${grid}installtemaenigma${grid}
┊❐ ${grid}createnode${grid}
┊❐ ${grid}startwings${grid}
┊❐ ${grid}uninstallpanel${grid}
┊❐ ${grid}uninstalltema${grid}
╰┄─╼

╭┄─「 *ANTI MENU* 」─╼
┊❐ ${grid}antilinkgc [ KICK ]${grid}
┊❐ ${grid}antilinkgc2 [ DELETE ]${grid}
┊❐ ${grid}antiwame${grid}
┊❐ ${grid}antipanel${grid}
┊❐ ${grid}anticall${grid}
╰┄─╼

╭┄─「 *DOWNLOAD MENU* 」─╼
┊❐ ${grid}tiktok${grid}
┊❐ ${grid}play${grid}
┊❐ ${grid}facebook${grid}
┊❐ ${grid}instagram${grid}
┊❐ ${grid}ttslide${grid}
┊❐ ${grid}mediafire${grid}
┊❐ ${grid}ytmp3${grid}
┊❐ ${grid}ytmp4${grid}
┊❐ ${grid}capcut${grid}
╰┄─╼

╭┄─「 *TOOLS MENU* 」─╼
┊❐ ${grid}sticker${grid}
┊❐ ${grid}smeme${grid}
┊❐ ${grid}qc${grid}
┊❐ ${grid}ptv${grid}
┊❐ ${grid}tourl${grid}
┊❐ ${grid}toimage${grid}
┊❐ ${grid}idch${grid}
┊❐ ${grid}upch${grid}
┊❐ ${grid}hd${grid}
╰┄─╼

╭┄─「 *AI MENU* 」─╼
┊❐ ${grid}openai${grid}
┊❐ ${grid}blackbox${grid}
┊❐ ${grid}gpt4o${grid}
┊❐ ${grid}gemini${grid}
╰┄─╼

╭┄─「 *CPANEL MENU* 」─╼
┊❐ ${grid}cpanelmenu1${grid}
┊❐ ${grid}cpanelmenu2${grid}
┊❐ ${grid}cpanelmenu3${grid}
╰┄─╼

╭┄─「 *SUBDO MENU* 」─╼
┊❐ ${grid}listdomain${grid}
┊❐ ${grid}domainA-I${grid}
╰┄─╼

╭┄─「 *FUN MENU* 」─╼
┊❐ ${grid}tebakgambar${grid}
┊❐ ${grid}tebakkata${grid}
┊❐ ${grid}tictactoe${grid}
┊❐ ${grid}suitpvp${grid}
┊❐ ${grid}tebaklontong${grid}
╰┄─╼

> FOXX BOT 3.0`
const contextInfo = {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363335802741292@newsletter',
            newsletterName: `${global.botname} - I N F O`,
            serverMessageId: null
        },
        externalAdReply: {
            title: `© ${global.botname}`,
            thumbnail: global.image,
            sourceUrl: global.ch,
            renderLargerThumbnail: false, 
            mediaType: 1
        }
    };

    await fox.sendMessage(
        m.chat, 
        { 
            image: thumbnail, 
            caption: menu, 
            contextInfo: contextInfo 
        }, 
        { quoted: fstatus }
    );
}
break;

case 'ownermenu': {
let teks = `📃「 *User Information* 」
▩ *Reseller 1 : ${isReseller ? 'Yes' : 'No'}*
▩ *Reseller 2 : ${isReseller2 ? 'Yes' : 'No'}*
▩ *Reseller 3 : ${isReseller3 ? 'Yes' : 'No'}*
▩ *Subdo : ${isSelsub ? 'Yes' : 'No'}*
▩ *Name : ${pushname}*
▩ *Status : ${isCreator ? 'Owner' : 'Member'}*

╭┄─「 *OWNER MENU* 」─╼
┊❐ ${grid}self${grid}
┊❐ ${grid}public${grid}
┊❐ ${grid}addown${grid}
┊❐ ${grid}delown${grid}
┊❐ ${grid}listown${grid}
┊❐ ${grid}setdomain1${grid}
┊❐ ${grid}setdomain2${grid}
┊❐ ${grid}setdomainp${grid}
┊❐ ${grid}setapikey1${grid}
┊❐ ${grid}setapikey2${grid}
┊❐ ${grid}setapikeyp${grid}
┊❐ ${grid}setcapikey1${grid}
┊❐ ${grid}setcapikey2${grid}
┊❐ ${grid}setcapikeyp${grid}
┊❐ ${grid}addseller${grid}
┊❐ ${grid}addseller2${grid}
┊❐ ${grid}addsellp${grid}
┊❐ ${grid}delseller${grid}
┊❐ ${grid}delseller2${grid}
┊❐ ${grid}delsellp${grid}
┊❐ ${grid}listseller${grid}
┊❐ ${grid}listseller2${grid}
┊❐ ${grid}listsellp${grid}
┊❐ ${grid}addsubdo${grid}
┊❐ ${grid}delsubdo${grid}
┊❐ ${grid}listsubdo${grid}
╰┄─╼

> FOXX BOT 3.0`
const contextInfo = {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363335802741292@newsletter',
            newsletterName: `${global.botname} - I N F O`,
            serverMessageId: null
        },
        externalAdReply: {
            title: `© ${global.botname}`,
            thumbnail: global.image,
            sourceUrl: global.ch,
            renderLargerThumbnail: false, 
            mediaType: 1
        }
    };

    await fox.sendMessage(
        m.chat, 
        { 
            image: thumbnail, 
            caption: teks, 
            contextInfo: contextInfo 
        }, 
        { quoted: fstatus }
    );
}
break;

case 'groupmenu': {
let menu = `📃「 *User Information* 」
▩ *Reseller 1 : ${isReseller ? 'Yes' : 'No'}*
▩ *Reseller 2 : ${isReseller2 ? 'Yes' : 'No'}*
▩ *Reseller 3 : ${isReseller3 ? 'Yes' : 'No'}*
▩ *Subdo : ${isSelsub ? 'Yes' : 'No'}*
▩ *Name : ${pushname}*
▩ *Status : ${isCreator ? 'Owner' : 'Member'}*

╭┄─「 *GROUP MENU* 」─╼
┊❐ ${grid}group [ close/open ]${grid}
┊❐ ${grid}welcome [ on/off ]${grid}
┊❐ ${grid}hidetag${grid}
┊❐ ${grid}tagall${grid}
┊❐ ${grid}promote${grid}
┊❐ ${grid}demote${grid}
┊❐ ${grid}kick${grid}
┊❐ ${grid}closetime${grid}
┊❐ ${grid}opentime${grid}
╰┄─╼

> FOXX BOT 3.0`
const contextInfo = {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363335802741292@newsletter',
            newsletterName: `${global.botname} - I N F O`,
            serverMessageId: null
        },
        externalAdReply: {
            title: `© ${global.botname}`,
            thumbnail: global.image,
            sourceUrl: global.ch,
            renderLargerThumbnail: false, 
            mediaType: 1
        }
    };

    await fox.sendMessage(
        m.chat, 
        { 
            image: thumbnail, 
            caption: menu, 
            contextInfo: contextInfo 
        }, 
        { quoted: fstatus }
    );
}
break;

case 'pushmenu': {
let teks = `📃「 *User Information* 」
▩ *Reseller 1 : ${isReseller ? 'Yes' : 'No'}*
▩ *Reseller 2 : ${isReseller2 ? 'Yes' : 'No'}*
▩ *Reseller 3 : ${isReseller3 ? 'Yes' : 'No'}*
▩ *Subdo : ${isSelsub ? 'Yes' : 'No'}*
▩ *Name : ${pushname}*
▩ *Status : ${isCreator ? 'Owner' : 'Member'}*

╭┄─「 *PUSH MENU* 」─╼
┊❐ ${grid}listgc${grid}
┊❐ ${grid}pushkontakgc${grid}
┊❐ ${grid}pushkontak${grid}
┊❐ ${grid}setteksjpm${grid}
┊❐ ${grid}startjpm${grid}
┊❐ ${grid}jpm${grid}
╰┄─╼

> FOXX BOT 3.0`
const contextInfo = {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363335802741292@newsletter',
            newsletterName: `${global.botname} - I N F O`,
            serverMessageId: null
        },
        externalAdReply: {
            title: `© ${global.botname}`,
            thumbnail: global.image,
            sourceUrl: global.ch,
            renderLargerThumbnail: false, 
            mediaType: 1
        }
    };

    await fox.sendMessage(
        m.chat, 
        { 
            image: thumbnail, 
            caption: teks, 
            contextInfo: contextInfo 
        }, 
        { quoted: fstatus }
    );
}
break;

case 'resellermenu': {
let teks = `📃「 *User Information* 」
▩ *Reseller 1 : ${isReseller ? 'Yes' : 'No'}*
▩ *Reseller 2 : ${isReseller2 ? 'Yes' : 'No'}*
▩ *Reseller 3 : ${isReseller3 ? 'Yes' : 'No'}*
▩ *Subdo : ${isSelsub ? 'Yes' : 'No'}*
▩ *Name : ${pushname}*
▩ *Status : ${isCreator ? 'Owner' : 'Member'}*

╭┄─「 *RESELLER MENU* 」─╼
┊❐ ${grid}cpanelmenu1${grid}
┊❐ ${grid}cpanelmenu2${grid}
┊❐ ${grid}cpanelmenu3${grid}
┊❐ ${grid}listdomain${grid}
┊❐ ${grid}domainA-I${grid}
╰┄─╼

> FOXX BOT 3.0`
const contextInfo = {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363335802741292@newsletter',
            newsletterName: `${global.botname} - I N F O`,
            serverMessageId: null
        },
        externalAdReply: {
            title: `© ${global.botname}`,
            thumbnail: global.image,
            sourceUrl: global.ch,
            renderLargerThumbnail: false, 
            mediaType: 1
        }
    };

    await fox.sendMessage(
        m.chat, 
        { 
            image: thumbnail, 
            caption: teks, 
            contextInfo: contextInfo 
        }, 
        { quoted: fstatus }
    );
}
break;

case 'installmenu': {
let teks = `📃「 *User Information* 」
▩ *Reseller 1 : ${isReseller ? 'Yes' : 'No'}*
▩ *Reseller 2 : ${isReseller2 ? 'Yes' : 'No'}*
▩ *Reseller 3 : ${isReseller3 ? 'Yes' : 'No'}*
▩ *Subdo : ${isSelsub ? 'Yes' : 'No'}*
▩ *Name : ${pushname}*
▩ *Status : ${isCreator ? 'Owner' : 'Member'}*

╭┄─「 *INSTALL MENU* 」─╼
┊❐ ${grid}installpanel${grid}
┊❐ ${grid}installtemastellar${grid}
┊❐ ${grid}installtemabilling${grid}
┊❐ ${grid}installtemaenigma${grid}
┊❐ ${grid}createnode${grid}
┊❐ ${grid}startwings${grid}
┊❐ ${grid}uninstallpanel${grid}
┊❐ ${grid}uninstalltema${grid}
╰┄─╼

> FOXX BOT 3.0`
const contextInfo = {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363335802741292@newsletter',
            newsletterName: `${global.botname} - I N F O`,
            serverMessageId: null
        },
        externalAdReply: {
            title: `© ${global.botname}`,
            thumbnail: global.image,
            sourceUrl: global.ch,
            renderLargerThumbnail: false, 
            mediaType: 1
        }
    };

    await fox.sendMessage(
        m.chat, 
        { 
            image: thumbnail, 
            caption: teks, 
            contextInfo: contextInfo 
        }, 
        { quoted: fstatus }
    );
}
break;

case 'antimenu': {
let teks = `📃「 *User Information* 」
▩ *Reseller 1 : ${isReseller ? 'Yes' : 'No'}*
▩ *Reseller 2 : ${isReseller2 ? 'Yes' : 'No'}*
▩ *Reseller 3 : ${isReseller3 ? 'Yes' : 'No'}*
▩ *Subdo : ${isSelsub ? 'Yes' : 'No'}*
▩ *Name : ${pushname}*
▩ *Status : ${isCreator ? 'Owner' : 'Member'}*

╭┄─「 *ANTI MENU* 」─╼
┊❐ ${grid}antilinkgc [ KICK ]${grid}
┊❐ ${grid}antilinkgc2 [ DELETE ]${grid}
┊❐ ${grid}antiwame${grid}
┊❐ ${grid}antipanel${grid}
┊❐ ${grid}anticall${grid}
╰┄─╼

> FOXX BOT 3.0`
const contextInfo = {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363335802741292@newsletter',
            newsletterName: `${global.botname} - I N F O`,
            serverMessageId: null
        },
        externalAdReply: {
            title: `© ${global.botname}`,
            thumbnail: global.image,
            sourceUrl: global.ch,
            renderLargerThumbnail: false, 
            mediaType: 1
        }
    };

    await fox.sendMessage(
        m.chat, 
        { 
            image: thumbnail, 
            caption: teks, 
            contextInfo: contextInfo 
        }, 
        { quoted: fstatus }
    );
}
break;

case 'downloadmenu': {
let teks = `📃「 *User Information* 」
▩ *Reseller 1 : ${isReseller ? 'Yes' : 'No'}*
▩ *Reseller 2 : ${isReseller2 ? 'Yes' : 'No'}*
▩ *Reseller 3 : ${isReseller3 ? 'Yes' : 'No'}*
▩ *Subdo : ${isSelsub ? 'Yes' : 'No'}*
▩ *Name : ${pushname}*
▩ *Status : ${isCreator ? 'Owner' : 'Member'}*

╭┄─「 *DOWNLOAD MENU* 」─╼
┊❐ ${grid}tiktok${grid}
┊❐ ${grid}play${grid}
┊❐ ${grid}facebook${grid}
┊❐ ${grid}instagram${grid}
┊❐ ${grid}ttslide${grid}
┊❐ ${grid}mediafire${grid}
┊❐ ${grid}ytmp3${grid}
┊❐ ${grid}ytmp4${grid}
┊❐ ${grid}capcut${grid}
╰┄─╼

> FOXX BOT 3.0`
const contextInfo = {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363335802741292@newsletter',
            newsletterName: `${global.botname} - I N F O`,
            serverMessageId: null
        },
        externalAdReply: {
            title: `© ${global.botname}`,
            thumbnail: global.image,
            sourceUrl: global.ch,
            renderLargerThumbnail: false, 
            mediaType: 1
        }
    };

    await fox.sendMessage(
        m.chat, 
        { 
            image: thumbnail, 
            caption: teks, 
            contextInfo: contextInfo 
        }, 
        { quoted: fstatus }
    );
}
break;

case 'toolsmenu': {
let teks = `📃「 *User Information* 」
▩ *Reseller 1 : ${isReseller ? 'Yes' : 'No'}*
▩ *Reseller 2 : ${isReseller2 ? 'Yes' : 'No'}*
▩ *Reseller 3 : ${isReseller3 ? 'Yes' : 'No'}*
▩ *Subdo : ${isSelsub ? 'Yes' : 'No'}*
▩ *Name : ${pushname}*
▩ *Status : ${isCreator ? 'Owner' : 'Member'}*

╭┄─「 *TOOLS MENU* 」─╼
┊❐ ${grid}sticker${grid}
┊❐ ${grid}smeme${grid}
┊❐ ${grid}qc${grid}
┊❐ ${grid}ptv${grid}
┊❐ ${grid}tourl${grid}
┊❐ ${grid}toimage${grid}
┊❐ ${grid}idch${grid}
┊❐ ${grid}upch${grid}
┊❐ ${grid}hd${grid}
╰┄─╼

> FOX MENU 3.0`
const contextInfo = {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363335802741292@newsletter',
            newsletterName: `${global.botname} - I N F O`,
            serverMessageId: null
        },
        externalAdReply: {
            title: `© ${global.botname}`,
            thumbnail: global.image,
            sourceUrl: global.ch,
            renderLargerThumbnail: false, 
            mediaType: 1
        }
    };

    await fox.sendMessage(
        m.chat, 
        { 
            image: thumbnail, 
            caption: teks, 
            contextInfo: contextInfo 
        }, 
        { quoted: fstatus }
    );
}
break;

case 'aimenu': {
let teks = `📃「 *User Information* 」
▩ *Reseller 1 : ${isReseller ? 'Yes' : 'No'}*
▩ *Reseller 2 : ${isReseller2 ? 'Yes' : 'No'}*
▩ *Reseller 3 : ${isReseller3 ? 'Yes' : 'No'}*
▩ *Subdo : ${isSelsub ? 'Yes' : 'No'}*
▩ *Name : ${pushname}*
▩ *Status : ${isCreator ? 'Owner' : 'Member'}*

╭┄─「 *AI MENU* 」─╼
┊❐ ${grid}openai${grid}
┊❐ ${grid}blackbox${grid}
┊❐ ${grid}gpt4o${grid}
┊❐ ${grid}gemini${grid}
╰┄─╼

> FOXX BOT 3.0`
const contextInfo = {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363335802741292@newsletter',
            newsletterName: `${global.botname} - I N F O`,
            serverMessageId: null
        },
        externalAdReply: {
            title: `© ${global.botname}`,
            thumbnail: global.image,
            sourceUrl: global.ch,
            renderLargerThumbnail: false, 
            mediaType: 1
        }
    };

    await fox.sendMessage(
        m.chat, 
        { 
            image: thumbnail, 
            caption: teks, 
            contextInfo: contextInfo 
        }, 
        { quoted: fstatus }
    );
}
break;

case 'cpanelmenu1': {
let teks = `📃「 *User Information* 」
▩ *Reseller 1 : ${isReseller ? 'Yes' : 'No'}*
▩ *Name : ${pushname}*
▩ *Status : ${isCreator ? 'Owner' : 'Member'}*

╭┄─「 *CPANEL MENU* 」─╼
┊❐ ${grid}1gb${grid}
┊❐ ${grid}2gb${grid}
┊❐ ${grid}3gb${grid}
┊❐ ${grid}4gb${grid}
┊❐ ${grid}5gb${grid}
┊❐ ${grid}6gb${grid}
┊❐ ${grid}7gb${grid}
┊❐ ${grid}8gb${grid}
┊❐ ${grid}9gb${grid}
┊❐ ${grid}10gb${grid}
┊❐ ${grid}unli${grid}
┊❐ ${grid}addadmin${grid}
┊❐ ${grid}listpanel${grid}
┊❐ ${grid}listadmin${grid}
┊❐ ${grid}delpanel${grid}
┊❐ ${grid}deladmin${grid}
╰┄─╼

> FOXX BOT 3.0`
const contextInfo = {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363335802741292@newsletter',
            newsletterName: `${global.botname} - I N F O`,
            serverMessageId: null
        },
        externalAdReply: {
            title: `© ${global.botname}`,
            thumbnail: global.image,
            sourceUrl: global.ch,
            renderLargerThumbnail: false, 
            mediaType: 1
        }
    };

    await fox.sendMessage(
        m.chat, 
        { 
            image: thumbnail, 
            caption: teks, 
            contextInfo: contextInfo 
        }, 
        { quoted: fstatus }
    );
}
break;

case 'cpanelmenu2': {
let teks = `📃「 *User Information* 」
▩ *Reseller 2 : ${isReseller2 ? 'Yes' : 'No'}*
▩ *Name : ${pushname}*
▩ *Status : ${isCreator ? 'Owner' : 'Member'}*

╭┄─「 *CPANEL MENU* 」─╼
┊❐ ${grid}1gb2${grid}
┊❐ ${grid}2gb2${grid}
┊❐ ${grid}3gb2${grid}
┊❐ ${grid}4gb2${grid}
┊❐ ${grid}5gb2${grid}
┊❐ ${grid}6gb2${grid}
┊❐ ${grid}7gb2${grid}
┊❐ ${grid}8gb2${grid}
┊❐ ${grid}9gb2${grid}
┊❐ ${grid}10gb2${grid}
┊❐ ${grid}unli2${grid}
┊❐ ${grid}addadmin2${grid}
┊❐ ${grid}listpanel2${grid}
┊❐ ${grid}listadmin2${grid}
┊❐ ${grid}delpanel2${grid}
┊❐ ${grid}deladmin2${grid}
╰┄─╼

> FOXX BOT 3.0`
const contextInfo = {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363335802741292@newsletter',
            newsletterName: `${global.botname} - I N F O`,
            serverMessageId: null
        },
        externalAdReply: {
            title: `© ${global.botname}`,
            thumbnail: global.image,
            sourceUrl: global.ch,
            renderLargerThumbnail: false, 
            mediaType: 1
        }
    };

    await fox.sendMessage(
        m.chat, 
        { 
            image: thumbnail, 
            caption: teks, 
            contextInfo: contextInfo 
        }, 
        { quoted: fstatus }
    );
}
break;

case 'cpanelmenu3': {
let teks = `📃「 *User Information* 」
▩ *Reseller 3 : ${isReseller3 ? 'Yes' : 'No'}*
▩ *Name : ${pushname}*
▩ *Status : ${isCreator ? 'Owner' : 'Member'}*

╭┄─「 *CPANEL MENU* 」─╼
┊❐ ${grid}1gbr${grid}
┊❐ ${grid}2gbr${grid}
┊❐ ${grid}3gbr${grid}
┊❐ ${grid}4gbr${grid}
┊❐ ${grid}5gbr${grid}
┊❐ ${grid}6gbr${grid}
┊❐ ${grid}7gbr${grid}
┊❐ ${grid}8gbr${grid}
┊❐ ${grid}9gbr${grid}
┊❐ ${grid}10gbr${grid}
┊❐ ${grid}unlir${grid}
┊❐ ${grid}addadmin3${grid}
┊❐ ${grid}listpanel3${grid}
┊❐ ${grid}listadmin3${grid}
┊❐ ${grid}delpanel3${grid}
┊❐ ${grid}deladmin3${grid}
╰┄─╼

> FOXX BOT 3.0`
const contextInfo = {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363335802741292@newsletter',
            newsletterName: `${global.botname} - I N F O`,
            serverMessageId: null
        },
        externalAdReply: {
            title: `© ${global.botname}`,
            thumbnail: global.image,
            sourceUrl: global.ch,
            renderLargerThumbnail: false, 
            mediaType: 1
        }
    };

    await fox.sendMessage(
        m.chat, 
        { 
            image: thumbnail, 
            caption: teks, 
            contextInfo: contextInfo 
        }, 
        { quoted: fstatus }
    );
}
break;

case 'cpanelmenu': {
let teks = `📃「 *User Information* 」
▩ *Reseller 1 : ${isReseller ? 'Yes' : 'No'}*
▩ *Reseller 2 : ${isReseller2 ? 'Yes' : 'No'}*
▩ *Reseller 1 : ${isReseller3 ? 'Yes' : 'No'}*
▩ *Name : ${pushname}*
▩ *Status : ${isCreator ? 'Owner' : 'Member'}*

╭┄─「 *CPANEL MENU* 」─╼
┊❐ ${grid}cpanelmenu1${grid}
┊❐ ${grid}cpanelmenu2${grid}
┊❐ ${grid}cpanelmenu3${grid}
╰┄─╼

> FOXX BOT 3.0`
const contextInfo = {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363335802741292@newsletter',
            newsletterName: `${global.botname} - I N F O`,
            serverMessageId: null
        },
        externalAdReply: {
            title: `© ${global.botname}`,
            thumbnail: global.image,
            sourceUrl: global.ch,
            renderLargerThumbnail: false, 
            mediaType: 1
        }
    };

    await fox.sendMessage(
        m.chat, 
        { 
            image: thumbnail, 
            caption: teks, 
            contextInfo: contextInfo 
        }, 
        { quoted: fstatus }
    );
}
break;
case 'subdomenu': {
let teks = `📃「 *User Information* 」
▩ *Reseller 1 : ${isReseller ? 'Yes' : 'No'}*
▩ *Reseller 2 : ${isReseller2 ? 'Yes' : 'No'}*
▩ *Reseller 1 : ${isReseller3 ? 'Yes' : 'No'}*
▩ *Name : ${pushname}*
▩ *Status : ${isCreator ? 'Owner' : 'Member'}*

╭┄─「 *SUBDO MENU* 」─╼
┊❐ ${grid}listdomain${grid}
┊❐ ${grid}domainA-J${grid}
╰┄─╼

> FOXX BOT 3.0`
const contextInfo = {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363335802741292@newsletter',
            newsletterName: `${global.botname} - I N F O`,
            serverMessageId: null
        },
        externalAdReply: {
            title: `© ${global.botname}`,
            thumbnail: global.image,
            sourceUrl: global.ch,
            renderLargerThumbnail: false, 
            mediaType: 1
        }
    };

    await fox.sendMessage(
        m.chat, 
        { 
            image: thumbnail, 
            caption: teks, 
            contextInfo: contextInfo 
        }, 
        { quoted: fstatus }
    );
}
break;

case 'funmenu': {
let teks = `📃「 *User Information* 」
▩ *Reseller 1 : ${isReseller ? 'Yes' : 'No'}*
▩ *Reseller 2 : ${isReseller2 ? 'Yes' : 'No'}*
▩ *Reseller 1 : ${isReseller3 ? 'Yes' : 'No'}*
▩ *Name : ${pushname}*
▩ *Status : ${isCreator ? 'Owner' : 'Member'}*

╭┄─「 *FUN MENU* 」─╼
┊❐ ${grid}tebakgambar${grid}
┊❐ ${grid}tebakkata${grid}
┊❐ ${grid}tictactoe${grid}
┊❐ ${grid}suitpvp${grid}
┊❐ ${grid}tebaklontong${grid}
╰┄─╼

> FOXX BOT 3.0`
const contextInfo = {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363335802741292@newsletter',
            newsletterName: `${global.botname} - I N F O`,
            serverMessageId: null
        },
        externalAdReply: {
            title: `© ${global.botname}`,
            thumbnail: global.image,
            sourceUrl: global.ch,
            renderLargerThumbnail: false, 
            mediaType: 1
        }
    };

    await fox.sendMessage(
        m.chat, 
        { 
            image: thumbnail, 
            caption: teks, 
            contextInfo: contextInfo 
        }, 
        { quoted: fstatus }
    );
}
break;
//╍╍╍╍╍╍╍╍╍╍╍OWNER MENU╍╍╍╍╍╍╍┅╍╍╍╍╍╍//
case 'self': {
if (!isCreator) return reply(msg.owner)
fox.public = false;
reply('SUKSES UBAH MODE BOT KE SELF')
}
break;

case 'public': {
if (!isCreator) return reply(msg.owner)
fox.public = true;
reply('SUKSES UBAH MODE BOT KE PUBLIC')
}
break;

case 'setdomain1': {
    if (text || m.quoted) { 
        const baru = m.quoted ? m.quoted.text : text;
        if (!isCreator) return reply(msg.owner);
        
        global.domain = baru;  // Update global.domain dengan nilai baru
        fs.writeFileSync('./setting.js', fs.readFileSync('./setting.js', 'utf-8').replace(/(global.domain = ).*?;/, `$1'${global.domain}';`));
        
        reply(`${grid}BERHASIL GANTI DOMAIN PANEL 1 MENJADI ${global.domain}${grid}`); 
    } else {
        return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n${prefix + command} domain panelnya`);
    }
}
break;

case 'setdomain2': {
    if (text || m.quoted) { 
        const baru = m.quoted ? m.quoted.text : text;  
        if (!isCreator) return reply(msg.owner);
        
        global.domain2 = baru;  // Update global.domain2 dengan nilai baru
        fs.writeFileSync('./setting.js', fs.readFileSync('./setting.js', 'utf-8').replace(/(global.domain2 = ).*?;/, `$1'${global.domain2}';`));
        
        reply(`${grid}BERHASIL GANTI DOMAIN PANEL 2 MENJADI ${global.domain2}${grid}`); 
    } else {
        return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n${prefix + command} domain panelnya`);
    }
}
break;

case 'setdomainp': {
    if (text || m.quoted) { 
        const baru = m.quoted ? m.quoted.text : text;  
        if (!isCreator) return reply(msg.owner);
        
        global.domainp = baru;  // Update global.domainp dengan nilai baru
        fs.writeFileSync('./setting.js', fs.readFileSync('./setting.js', 'utf-8').replace(/(global.domainp = ).*?;/, `$1'${global.domainp}';`));
        
        reply(`${grid}BERHASIL GANTI DOMAIN PANEL PRIV MENJADI ${global.domainp}${grid}`); 
    } else {
        return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n${prefix + command} domain panelnya`);
    }
}
break;

case 'setapikey1': {
    if (text || m.quoted) { 
        const baru = m.quoted ? m.quoted.text : text;  
        if (!isCreator) return reply(msg.owner);
        
        global.apikey = baru;  // Update global.apikey dengan nilai baru
        fs.writeFileSync('./setting.js', fs.readFileSync('./setting.js', 'utf-8').replace(/(global.apikey = ).*?;/, `$1'${global.apikey}';`));
        
        reply(`${grid}BERHASIL GANTI APIKEY PANEL 1 MENJADI ${global.apikey}${grid}`); 
    } else {
        return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n${prefix + command} apikey panelnya`);
    }
}
break;

case 'setapikey2': {
    if (text || m.quoted) { 
        const baru = m.quoted ? m.quoted.text : text;  
        if (!isCreator) return reply(msg.owner);
        
        global.apikey2 = baru;  // Update global.apikey2 dengan nilai baru
        fs.writeFileSync('./setting.js', fs.readFileSync('./setting.js', 'utf-8').replace(/(global.apikey2 = ).*?;/, `$1'${global.apikey2}';`));
        
        reply(`${grid}BERHASIL GANTI APIKEY PANEL 2 MENJADI ${global.apikey2}${grid}`); 
    } else {
        return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n${prefix + command} apikey panelnya`);
    }
}
break;

case 'setapikeyp': {
    if (text || m.quoted) { 
        const baru = m.quoted ? m.quoted.text : text;  
        if (!isCreator) return reply(msg.owner);
        
        global.apikeyp = baru;  // Update global.apikeyp dengan nilai baru
        fs.writeFileSync('./setting.js', fs.readFileSync('./setting.js', 'utf-8').replace(/(global.apikeyp = ).*?;/, `$1'${global.apikeyp}';`));
        
        reply(`${grid}BERHASIL GANTI APIKEY PANEL PRIV MENJADI ${global.apikeyp}${grid}`); 
    } else {
        return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n${prefix + command} apikey panelnya`);
    }
}
break;

case 'setcapikey1': {
    if (text || m.quoted) { 
        const baru = m.quoted ? m.quoted.text : text;  
        if (!isCreator) return reply(msg.owner);
        
        global.capikey = baru;  // Update global.capikey dengan nilai baru
        fs.writeFileSync('./setting.js', fs.readFileSync('./setting.js', 'utf-8').replace(/(global.capikey = ).*?;/, `$1'${global.capikey}';`));
        
        reply(`${grid}BERHASIL GANTI CAPIKEY PANEL 1 MENJADI ${global.capikey}${grid}`); 
    } else {
        return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n${prefix + command} apikey panelnya`);
    }
}
break;

case 'setcapikey2': {
    if (text || m.quoted) { 
        const baru = m.quoted ? m.quoted.text : text;  
        if (!isCreator) return reply(msg.owner);
        
        global.capikey2 = baru;  // Update global.capikey2 dengan nilai baru
        fs.writeFileSync('./setting.js', fs.readFileSync('./setting.js', 'utf-8').replace(/(global.capikey2 = ).*?;/, `$1'${global.capikey2}';`));
        
        reply(`${grid}BERHASIL GANTI CAPIKEY PANEL 2 MENJADI ${global.capikey2}${grid}`); 
    } else {
        return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n${prefix + command} apikey panelnya`);
    }
}
break;

case 'setcapikeyp': {
    if (text || m.quoted) { 
        const baru = m.quoted ? m.quoted.text : text;  
        if (!isCreator) return reply(msg.owner);
        
        global.capikeyp = baru;  // Update global.capikeyp dengan nilai baru
        fs.writeFileSync('./setting.js', fs.readFileSync('./setting.js', 'utf-8').replace(/(global.capikeyp = ).*?;/, `$1'${global.capikeyp}';`));
        
        reply(`${grid}BERHASIL GANTI CAPIKEY PANEL PRIV MENJADI ${global.capikeyp}${grid}`); 
    } else {
        return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n${prefix + command} apikey panelnya`);
    }
}
break;
  
case "addseller": {
  if (!isCreator) return reply(msg.owner); 

  if (m.quoted || text) {
    let orang = m.mentionedJid[0] 
      ? m.mentionedJid[0] 
      : text 
        ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' 
        : m.quoted 
          ? m.quoted.sender 
          : '';

    // Cek apakah user sudah terdaftar sebagai reseller
    if (reseller.includes(orang)) {
      return reply(`*Gagal Menambah User Reseller!*\n${orang.split('@')[0]} Sudah Terdaftar Di Database *User Reseller*`);
    }

    // Menambah user ke daftar reseller
    await reseller.push(orang);
    await fs.writeFileSync("./database/reseller.json", JSON.stringify(reseller));

    reply(`*Berhasil Menambah Reseller ✅*\n${orang.split('@')[0]} Sekarang Terdaftar Di Database *User Reseller*`);
  } else {
    return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n${prefix + command} Tag/Nomor Orangnya`);  // Tampilkan contoh jika input tidak valid
  }
}
break;

case "addseller2": {
  if (!isCreator) return reply(msg.owner); 

  if (m.quoted || text) {
    let orang = m.mentionedJid[0] 
      ? m.mentionedJid[0] 
      : text 
        ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' 
        : m.quoted 
          ? m.quoted.sender 
          : '';

    // Cek apakah user sudah terdaftar sebagai reseller
    if (reseller2.includes(orang)) {
      return reply(`*Gagal Menambah User Reseller!*\n${orang.split('@')[0]} Sudah Terdaftar Di Database *User Reseller*`);
    }

    // Menambah user ke daftar reseller
    await reseller2.push(orang);
    await fs.writeFileSync("./database/reseller2.json", JSON.stringify(reseller2));

    reply(`*Berhasil Menambah Reseller ✅*\n${orang.split('@')[0]} Sekarang Terdaftar Di Database *User Reseller*`);
  } else {
    return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n${prefix + command} Tag/Nomor Orangnya`);  // Tampilkan contoh jika input tidak valid
  }
}
break;

case "addsellp": {
  if (!isCreator) return reply(msg.owner); 

  if (m.quoted || text) {
    let orang = m.mentionedJid[0] 
      ? m.mentionedJid[0] 
      : text 
        ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' 
        : m.quoted 
          ? m.quoted.sender 
          : '';

    // Cek apakah user sudah terdaftar sebagai reseller
    if (reseller3.includes(orang)) {
      return reply(`*Gagal Menambah User Reseller!*\n${orang.split('@')[0]} Sudah Terdaftar Di Database *User Reseller*`);
    }

    // Menambah user ke daftar reseller
    await reseller3.push(orang);
    await fs.writeFileSync("./database/reseller3.json", JSON.stringify(reseller3));

    reply(`*Berhasil Menambah Reseller ✅*\n${orang.split('@')[0]} Sekarang Terdaftar Di Database *User Reseller*`);
  } else {
    return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n${prefix + command} Tag/Nomor Orangnya`);  // Tampilkan contoh jika input tidak valid
  }
}
break;

case "delseller": {
  if (!isCreator) return reply(msg.owner);  
  
  if (m.quoted || text) {
    let orang = m.mentionedJid[0] 
      ? m.mentionedJid[0] 
      : text 
        ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' 
        : m.quoted 
          ? m.quoted.sender 
          : '';

    // Cek apakah user ada dalam daftar reseller
    if (!reseller.includes(orang)) {
      return reply(`*Gagal Menghapus User Reseller!*\n${orang.split('@')[0]} Tidak Terdaftar Di Database *User Reseller*`);
    }

    // Menghapus user dari daftar reseller
    const index = reseller.indexOf(orang);
    if (index > -1) {
      reseller.splice(index, 1);  // Menghapus user dari array reseller
      await fs.writeFileSync("./database/reseller.json", JSON.stringify(reseller));
      reply(`*Berhasil Menghapus Reseller ✅*\n${orang.split('@')[0]} Sekarang Tidak Terdaftar Di Database *User Reseller*`);
    }
  } else {
    return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n${prefix + command} Tag/Nomor Orangnya`);  // Tampilkan contoh jika input tidak valid
  }
}
break;

case "delseller2": {
  if (!isCreator) return reply(msg.owner);  
  
  if (m.quoted || text) {
    let orang = m.mentionedJid[0] 
      ? m.mentionedJid[0] 
      : text 
        ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' 
        : m.quoted 
          ? m.quoted.sender 
          : '';

    // Cek apakah user ada dalam daftar reseller
    if (!reseller2.includes(orang)) {
      return reply(`*Gagal Menghapus User Reseller!*\n${orang.split('@')[0]} Tidak Terdaftar Di Database *User Reseller*`);
    }

    // Menghapus user dari daftar reseller
    const index = reseller2.indexOf(orang);
    if (index > -1) {
      reseller2.splice(index, 1);  // Menghapus user dari array reseller
      await fs.writeFileSync("./database/reseller2.json", JSON.stringify(reseller2));
      reply(`*Berhasil Menghapus Reseller ✅*\n${orang.split('@')[0]} Sekarang Tidak Terdaftar Di Database *User Reseller*`);
    }
  } else {
    return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n${prefix + command} Tag/Nomor Orangnya`);  // Tampilkan contoh jika input tidak valid
  }
}
break;

case "delsellp": {
  if (!isCreator) return reply(msg.owner);  
  
  if (m.quoted || text) {
    let orang = m.mentionedJid[0] 
      ? m.mentionedJid[0] 
      : text 
        ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' 
        : m.quoted 
          ? m.quoted.sender 
          : '';

    // Cek apakah user ada dalam daftar reseller
    if (!reseller3.includes(orang)) {
      return reply(`*Gagal Menghapus User Reseller!*\n${orang.split('@')[0]} Tidak Terdaftar Di Database *User Reseller*`);
    }

    // Menghapus user dari daftar reseller
    const index = reseller3.indexOf(orang);
    if (index > -1) {
      reseller3.splice(index, 1);  // Menghapus user dari array reseller
      await fs.writeFileSync("./database/reseller3.json", JSON.stringify(reseller3));
      reply(`*Berhasil Menghapus Reseller ✅*\n${orang.split('@')[0]} Sekarang Tidak Terdaftar Di Database *User Reseller*`);
    }
  } else {
    return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n${prefix + command} Tag/Nomor Orangnya`);  // Tampilkan contoh jika input tidak valid
  }
}
break;

case "listseller": {
  if (!isCreator) return reply(msg.owner);  

  // Menampilkan daftar reseller
  if (reseller.length === 0) {
    return reply(`*❏ Tidak Ada Reseller Terdaftar ❏*`);
  }

  let awuu = reseller.map((res) => `➤ ${res.split('@')[0]}`).join('\n');
  reply(`*❍ LIST RESELLER TERDAFTAR ❍*\n\n${awuu}`);
}
break;

case "listseller2": {
  if (!isCreator) return reply(msg.owner);  

  // Menampilkan daftar reseller
  if (reseller2.length === 0) {
    return reply(`*❏ Tidak Ada Reseller Terdaftar ❏*`);
  }

  let awuu = reseller2.map((res) => `➤ ${res.split('@')[0]}`).join('\n');
  reply(`*❍ LIST RESELLER TERDAFTAR ❍*\n\n${awuu}`);
}
break;

case "listsellp": {
  if (!isCreator) return reply(msg.owner);  

  // Menampilkan daftar reseller
  if (reseller3.length === 0) {
    return reply(`*❏ Tidak Ada Reseller Terdaftar ❏*`);
  }

  let awuu = reseller3.map((res) => `➤ ${res.split('@')[0]}`).join('\n');
  reply(`*❍ LIST RESELLER TERDAFTAR ❍*\n\n${awuu}`);
}
break;

case "addown": case "addowner": {
  if (!isCreator) return reply(msg.owner); 

  if (m.quoted || text) {
    let orang = m.mentionedJid[0]
      ? m.mentionedJid[0]
      : text
        ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        : m.quoted
          ? m.quoted.sender
          : '';

    // Cek apakah nomor sudah terdaftar sebagai owner
    if (owner.includes(orang)) {
      return reply(`*Gagal Menambah Owner!*\n${orang.split('@')[0]} Sudah Terdaftar Sebagai *Owner*`);
    }

    // Menambah user ke daftar owner
    await owner.push(orang);
    await fs.writeFileSync("./database/owner.json", JSON.stringify(owner));

    reply(`*Berhasil Menambah Owner ✅*\n${orang.split('@')[0]} Sekarang Terdaftar Sebagai *Owner*`);
  } else {
    return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n${prefix + command} Tag/Nomor Orangnya`);  // Tampilkan contoh jika input tidak valid
  }
}
break;

case "delown": case "delowner": {
  if (!isCreator) return reply(msg.owner); 

  if (m.quoted || text) {
    let orang = m.mentionedJid[0]
      ? m.mentionedJid[0]
      : text
        ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        : m.quoted
          ? m.quoted.sender
          : '';

    // Cek apakah nomor sudah terdaftar sebagai owner
    if (!owner.includes(orang)) {
      return reply(`*Gagal Menghapus Owner!*\n${orang.split('@')[0]} Tidak Terdaftar Sebagai *Owner*`);
    }

    // Menghapus user dari daftar owner
    await owner.splice(owner.indexOf(orang), 1);
    await fs.writeFileSync("./database/owner.json", JSON.stringify(owner));

    reply(`*Berhasil Menghapus Owner ✅*\n${orang.split('@')[0]} Sudah Dihapus Dari Daftar *Owner*`);
  } else {
    return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n${prefix + command} Tag/Nomor Orangnya`);  // Tampilkan contoh jika input tidak valid
  }
}
break;

case "listown": case "listowner": {
  if (!isCreator) return reply(msg.owner);  

  // Menampilkan daftar owner
  if (owner.length === 0) {
    return reply(`*❏ Tidak Ada Owner Terdaftar ❏*`);
  }

  let ownerNames = owner.map((owner) => `➤ ${owner.split('@')[0]}`).join('\n');
  reply(`*❍ LIST OWNER TERDAFTAR ❍*\n\n${ownerNames}`);
}
break;
//╍╍╍╍╍╍╍╍╍╍╍╍╍GROUP MENU╍╍╍╍╍╍╍╍╍╍╍╍╍//
case 'group': case 'gc': {   
    if (!m.isGroup) return reply(msg.group);
    if (!isAdmins) return reply(msg.admin);
    

    // Mendapatkan nama grup saat ini
    fox.groupMetadata(from).then(group => {
        const currentGroupName = group.subject;

        // Memeriksa argumen untuk menentukan tindakan (open/close)
        if (args[0] === 'close') {
            // Menutup grup dan mengubah nama grup menjadi "|| Closed"
            const newGroupName = currentGroupName.includes("|| Open") 
                ? currentGroupName.replace(" || Open", " || Closed") 
                : `${currentGroupName} || Closed`;

            fox.groupUpdateSubject(from, newGroupName)
                .then(() => {
                    return fox.groupSettingUpdate(from, 'announcement');
                })
                .then(() => {
                    reply(`Sukses Menutup Group`); // Pesan sukses untuk menutup grup
                })
                .catch(err => {
                    console.error("Gagal mengubah nama grup atau pengaturan", err);
                    reply("Gagal menutup grup.");
                });
        } else if (args[0] === 'open') {
            // Membuka grup dan mengubah nama grup menjadi "|| Open"
            const newGroupName = currentGroupName.includes("|| Closed") 
                ? currentGroupName.replace(" || Closed", " || Open") 
                : `${currentGroupName} || Open`;

            fox.groupUpdateSubject(from, newGroupName)
                .then(() => {
                    return fox.groupSettingUpdate(from, 'not_announcement');
                })
                .then(() => {
                    reply(`Sukses Membuka Group`); // Pesan sukses untuk membuka grup
                })
                .catch(err => {
                    console.error("Gagal mengubah nama grup atau pengaturan", err);
                    reply("Gagal membuka grup.");
                });
        } else {
            // Pesan kesalahan jika format salah
            return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n${prefix + command} Close/Open`); 
        }
    }).catch(err => {
        console.error("Gagal mendapatkan metadata grup", err); // Menangani kesalahan saat mengambil metadata grup
        reply("Gagal mengambil informasi grup.");
    });
}
break;

case "welcome": {
    if (!isCreator) return reply(msg.owner)
    if (!m.isGroup) return reply(msg.group)
    if (args.length < 1) return reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')

    let chatData = global.db.data.chats[m.chat]
    
    if (args[0] === "on") {
        if (chatData.wlcm) return reply('Sudah Aktif')
        chatData.wlcm = true
        var groupe = await fox.groupMetadata(from)
        var members = groupe['participants']
        var mems = []
        members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
        })
        fox.sendMessage(from, { text: `Fitur Welcome Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid: mems } }, { quoted: m })
    } else if (args[0] === "off") {
        if (!chatData.wlcm) return reply('Sudah Non Aktif')
        chatData.wlcm = false
        reply('Sukses Mematikan Welcome di group ini')
    }
}
break

case 'hidetag': case 'h': {
    if (!m.isGroup) return reply(msg.group);
    if (!isAdmins) return reply(msg.admin);

    if (!q) return reply('Teksnya mana?');

    // Mengirim pesan dengan tag semua anggota grup
    fox.sendMessage(from, { text: q, mentions: participants.map(a => a.id) }, { quoted: fdoc });
}
break;

  
case 'tagall': {
if (!m.isGroup) return reply(msg.group)
if (!isAdmins) return reply(msg.admin)
let teks = `🐣 *❏ Tag Semua Orang ❏*
📜 *Pesan : ${q ? q : 'Kosong'}*\n\n`
for (let mem of participants) {
teks += `➤ @${mem.id.split('@')[0]}\n`
}
fox.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:m })
}
break;

case 'kick': {
    if (!m.isGroup) return reply(msg.group);
    if (!isBotAdmins) return reply(msg.botAdmin);
    if (!isAdmins) return reply(msg.admin);

    // Jika perintah .kick diketik tanpa tag atau reply
    if (!m.mentionedJid[0] && !m.quoted && !text) {
        return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n*${prefix + command}* Tag Orangnya`);
    }

    // Mendapatkan pengguna yang ditargetkan
    let users = m.mentionedJid[0] 
        ? m.mentionedJid[0] 
        : m.quoted 
            ? m.quoted.sender 
            : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    // Proses mengeluarkan peserta
    await fox.groupParticipantsUpdate(from, [users], 'remove')
        .then(() => {
            reply(`Berhasil mengeluarkan @${users.split('@')[0]}`, null, { mentions: [users] });
        })
        .catch(err => {
            console.error("Gagal mengeluarkan anggota", err);
            reply("Gagal mengeluarkan anggota.");
        });
}
break;

case 'promote': {
    if (!m.isGroup) return reply(msg.group);
    if (!isBotAdmins) return reply(msg.botAdmin);
    if (!isAdmins) return reply(msg.admin);
    
    // Jika perintah .promote diketik tanpa tag atau reply
    if (!m.mentionedJid[0] && !m.quoted && !text) {
        return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n*${prefix + command}* Tag Orangnya`);
    }

    let users = m.mentionedJid[0] 
        ? m.mentionedJid[0] 
        : m.quoted 
            ? m.quoted.sender 
            : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    await fox.groupParticipantsUpdate(from, [users], 'promote')
        .catch(err => {
            console.error("Gagal mempromosikan anggota", err);
            reply("Gagal mempromosikan anggota.");
        });
}
break;

case 'demote': {
    if (!m.isGroup) return reply(msg.group);
    if (!isBotAdmins) return reply(msg.botAdmin);
    if (!isAdmins) return reply(msg.admin);

    // Jika perintah .demote diketik tanpa tag atau reply
    if (!m.mentionedJid[0] && !m.quoted && !text) {
        return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n*${prefix + command}* Tag Orangnya`);
    }

    let users = m.mentionedJid[0] 
        ? m.mentionedJid[0] 
        : m.quoted 
            ? m.quoted.sender 
            : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    await fox.groupParticipantsUpdate(from, [users], 'demote')
        .catch(err => {
            console.error("Gagal menurunkan admin", err);
            reply("Gagal menurunkan admin.");
        });
}
break;

case 'closetime': {
    if (!m.isGroup) return reply(msg.group); 
    if (!isAdmins && !isCreator) return reply(msg.admin); 
    if (!isBotAdmins) return reply(msg.botAdmin); 

    const closed = `*Group Closed By Admin*\nMembers Cannot Send Messages`; 

    // Mendapatkan nama grup saat ini
    fox.groupMetadata(from).then(group => {
        const currentGroupName = group.subject;

        // Memeriksa apakah nama grup mengandung "|| Open"
        if (currentGroupName.includes("|| Open")) {
            const newGroupName = currentGroupName.replace(" || Open", " || Closed"); // Mengubah "|| Open" menjadi "|| Closed"

            // Mengubah nama grup
            fox.groupUpdateSubject(from, newGroupName)
                .then(() => {
                    reply(closed);
                    fox.groupSettingUpdate(from, 'announcement'); // Mengatur grup hanya admin yang bisa mengirim pesan
                    return; // Menghentikan eksekusi lebih lanjut
                })
                .catch(err => {
                    console.error("Gagal mengubah nama grup", err); // Menangani kesalahan jika gagal
                    reply("Gagal mengubah nama grup.");
                });
        } else if (!currentGroupName.includes("|| Closed")) {
            const newGroupName = `${currentGroupName} || Closed`; // Menambahkan "|| Closed" jika tidak ada keterangan sebelumnya

            fox.groupUpdateSubject(from, newGroupName)
                .then(() => {
                    reply(closed);
                    fox.groupSettingUpdate(from, 'announcement'); // Mengatur grup hanya admin yang bisa mengirim pesan
                    return; // Menghentikan eksekusi lebih lanjut
                })
                .catch(err => {
                    console.error("Gagal mengubah nama grup", err);
                    reply("Gagal mengubah nama grup.");
                });
        } else {
            reply("Group sudah dalam status tertutup."); // Pesan jika grup sudah tertutup
        }
    }).catch(err => {
        console.error("Gagal mendapatkan metadata grup", err); // Menangani kesalahan saat mengambil metadata grup
        reply("Gagal mengambil informasi grup.");
    });
    return;
}
break;

case 'opentime': {
    if (!m.isGroup) return reply(msg.group);
    if (!isAdmins && !isCreator) return reply(msg.admin);
    if (!isBotAdmins) return reply(msg.botAdmin); 

    const opened = `*Group Opened By Admin*\nMembers Can Send Messages`; 

    // Mendapatkan nama grup saat ini
    fox.groupMetadata(from).then(group => {
        const currentGroupName = group.subject;

        // Memeriksa apakah nama grup mengandung "|| Closed"
        if (currentGroupName.includes("|| Closed")) {
            const newGroupName = currentGroupName.replace(" || Closed", " || Open"); // Mengubah "|| Closed" menjadi "|| Open"

            // Mengubah nama grup
            fox.groupUpdateSubject(from, newGroupName)
                .then(() => {
                    reply(opened);
                    fox.groupSettingUpdate(from, 'not_announcement'); // Mengatur grup agar semua anggota bisa mengirim pesan
                    return; // Menghentikan eksekusi lebih lanjut
                })
                .catch(err => {
                    console.error("Gagal mengubah nama grup", err); // Menangani kesalahan jika gagal
                    reply("Gagal mengubah nama grup.");
                });
        } else if (!currentGroupName.includes("|| Open")) {
            const newGroupName = `${currentGroupName} || Open`; // Menambahkan "|| Open" jika tidak ada keterangan sebelumnya

            fox.groupUpdateSubject(from, newGroupName)
                .then(() => {
                    reply(opened);
                    fox.groupSettingUpdate(from, 'not_announcement'); // Mengatur grup agar semua anggota bisa mengirim pesan
                    return; // Menghentikan eksekusi lebih lanjut
                })
                .catch(err => {
                    console.error("Gagal mengubah nama grup", err);
                    reply("Gagal mengubah nama grup.");
                });
        } else {
            reply("Group sudah dalam status terbuka."); // Pesan jika grup sudah terbuka
        }
    }).catch(err => {
        console.error("Gagal mendapatkan metadata grup", err); // Menangani kesalahan saat mengambil metadata grup
        reply("Gagal mengambil informasi grup.");
    });
    return; // Menghentikan perintah lebih lanjut
}
break;
//╍╍╍╍╍╍╍╍╍╍╍╍╍╍FITUR PUSH╍╍╍╍╍╍╍╍╍╍╍╍╍//
case "listgc": case "cekid": case"listgrup": {
if (!isOwner) return reply(msg.owner)
let gcall = Object.values(await fox.groupFetchAllParticipating().catch(_=> null))
let listgc = `*｢ LIST ALL CHAT GRUP ｣*\n\n`
await gcall.forEach((u, i) => {
listgc += `*• Nama :* ${u.subject}\n*• ID :* ${u.id}\n*• Total Member :* ${u.participants.length} Member\n*• Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n*• Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
reply(listgc)
}
break

case "pushkontak": {
    if (!isCreator) return reply(msg.owner);
    if (!m.isGroup) return reply(msg.group);
    if (!text) return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n*${prefix + command}* Pesan|Jeda (konversi detik ke milidetik)`);

    // Memisahkan teks pesan dan jeda waktu
    const [pesan, customDelay] = text.split("|");
    const delayTime = customDelay ? parseInt(customDelay) : global.delaypushkontak; // Menggunakan customDelay atau default global delay

    if (!pesan) return reply("Pesannya Kosong");

    var teks = pesan.trim();
    const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
    reply(`Memproses Mengirim Pesan Ke *${halls.length}* Member Grup`);

    for (let mem of halls) {
        if (mem !== m.sender) {
            contacts.push(mem);
            await fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts));
            await fox.sendMessage(mem, { text: teks }, { quoted: fstatus });
            await sleep(delayTime); // Menggunakan delay kustom
        }
    }
    try {
        const uniqueContacts = [...new Set(contacts)];
        const vcardContent = uniqueContacts.map((contact, index) => {
            const vcard = [
                "BEGIN:VCARD",
                "VERSION:3.0",
                `FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
                `TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
                "END:VCARD",
                "",
            ].join("\n");
            return vcard;
        }).join("");

        fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
    } catch (err) {
        reply(err.toString());
    } finally {
        if (m.chat !== m.sender) await reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`);
        await fox.sendMessage(m.sender, {
            document: fs.readFileSync("./database/contacts.vcf"),
            fileName: "contacts.vcf",
            caption: "File Contact Berhasil Di Buat✅",
            mimetype: "text/vcard",
        }, { quoted: m });

        contacts.splice(0, contacts.length);
        await fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts));
        await fs.writeFileSync("./database/contacts.vcf", "");
    }
}
break;

case "pushkontakgc": {
    if (!isCreator) return reply(msg.owner);
    if (!text) return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n*${prefix + command}* idgrup|pesan|jeda (konversi detik ke milidetik)`);
    if (!text.split("|")) return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n*${prefix + command}* idgrup|pesan|jeda (konversi detik ke milidetik)`);

    // Memisahkan id grup, pesan, dan jeda waktu
    var [idnya, teks, customDelay] = text.split("|");
    const delayTime = customDelay ? parseInt(customDelay) : global.delaypushkontak; // Menggunakan customDelay atau default global delay

    if (!idnya || !teks) return reply("Format salah. Pastikan formatnya: idgrup|pesannya|jeda dalam ms");

    var groupMetadataa;
    try {
        groupMetadataa = await fox.groupMetadata(`${idnya}`);
    } catch (e) {
        return reply("*ID Grup* tidak valid!");
    }

    const participants = await groupMetadataa.participants;
    const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
    reply(`Memproses Mengirim Pesan Ke *${halls.length}* Member Grup`);

    for (let mem of halls) {
        if (mem !== m.sender) {
            contacts.push(mem);
            await fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts));
            await fox.sendMessage(mem, { text: teks }, { quoted: fdoc });
            await sleep(delayTime); // Menggunakan delay kustom
        }
    }
    try {
        const uniqueContacts = [...new Set(contacts)];
        const vcardContent = uniqueContacts.map((contact, index) => {
            const vcard = [
                "BEGIN:VCARD",
                "VERSION:3.0",
                `FN:Sv [${createSerial(2)}] ${contact.split("@")[0]}`,
                `TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
                "END:VCARD",
                "",
            ].join("\n");
            return vcard;
        }).join("");

        fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
    } catch (err) {
        reply(err.toString());
    } finally {
        if (m.chat !== m.sender) await reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`);
        await fox.sendMessage(m.sender, {
            document: fs.readFileSync("./database/contacts.vcf"),
            fileName: "contacts.vcf",
            caption: "File Contact Berhasil Di Buat✅",
            mimetype: "text/vcard",
        }, { quoted: m });

        contacts.splice(0, contacts.length);
        await fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts));
        await fs.writeFileSync("./database/contacts.vcf", "");
    }
}
break;

case "setteksjpm": {
if (!isCreator) return reply(msg.owner)
if (text || m.quoted) {
const newteks = m.quoted ? m.quoted.text : text
await fs.writeFileSync("./database/teksjpm.js", newteks.toString())
reply("Berhasil Mengatur Teks JPM ✅")
} else {
return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n*${prefix + command}* Reply/Kirim teksnya`);
}}
break;

case "startjpm": {
    if (!isCreator) return reply(msg.owner);
    var teksnya = await fs.readFileSync("./database/teksjpm.js").toString();
    if (teksnya.length < 1) return reply("Teks JPM Tidak Ditemukan, Silahkan Set Teksnya dengan .setteksjpm");

    // Menghapus parsing input untuk jeda kustom dan menggunakan global.jedajpm sebagai delay
    var teks = `${teksnya}`;
    let total = 0;
    let getGroups = await fox.groupFetchAllParticipating();
    let usergc = await Object.keys(getGroups);
    reply(`Memproses Mengirim Pesan *Text* Ke *${usergc.length}* Grup`);

    for (let jid of usergc) {
        try {
            await fox.sendMessage(jid, { text: teks }, { quoted: fdoc });
            total += 1;
        } catch {}
        await sleep(global.jedajpm); // Menggunakan delay dari global.jedajpm
    }

    reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`);
}
break;


case "jpm": {
    if (!isCreator) return reply(msg.owner);
    if (!m.quoted && !text) return reply("Reply Pesan Atau Kirim Pesan");

    // Mengambil teks dari pesan yang di-reply atau dari input langsung
    var teks = m.quoted ? m.quoted.text : text;
    
    const delayTime = global.jedajpm;

    let total = 0;
    let getGroups = await fox.groupFetchAllParticipating();
    let usergc = await Object.keys(getGroups);
    reply(`Memproses Mengirim Pesan *Text* Ke *${usergc.length}* Grup`);

    for (let jid of usergc) {
        try {
            await fox.sendMessage(jid, { text: teks }, { quoted: fdoc });
            total += 1;
        } catch {}
        await sleep(delayTime); // Menggunakan delay dari global.jedajpm
    }

    reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`);
}
break;
//╍╍╍╍╍╍╍╍╍╍╍╍╍╍RESELLER MENU╍╍╍╍╍╍╍╍╍╍╍╍╍//
//Cpanel Reseller 1
case '1gb':
case '2gb':
case '3gb':
case '4gb':
case '5gb':
case '6gb':
case '7gb':
case '8gb':
case '9gb':
case '10gb':
case 'unli': {
    if (!isCmd) return;
    if (!isReseller && !isCreator) return reply(msg.prem);

    let ram, disknya, cpu;
    switch (command) {
        case '1gb':
            ram = '1125';
            disknya = '1125';
            cpu = '40';
            break;
        case '2gb':
            ram = '2125';
            disknya = '2125';
            cpu = '60';
            break;
        case '3gb':
            ram = '3125';
            disknya = '3125';
            cpu = '80';
            break;
        case '4gb':
            ram = '4125';
            disknya = '4125';
            cpu = '100';
            break;
        case '5gb':
            ram = '5125';
            disknya = '5125';
            cpu = '120';
            break;
        case '6gb':
            ram = '6125';
            disknya = '6125';
            cpu = '140';
            break;
        case '7gb':
            ram = '7125';
            disknya = '7125';
            cpu = '160';
            break;
        case '8gb':
            ram = '8125';
            disknya = '8125';
            cpu = '180';
            break;
        case '9gb':
            ram = '9125';
            disknya = '9125';
            cpu = '200';
            break;
        case '10gb':
            ram = '10125';
            disknya = '10125';
            cpu = '220';
            break;
        case 'unli':
            ram = '0';
            disknya = '0';
            cpu = '0';
            break;
        default:
            ram = '0';
            disknya = '0';
            cpu = '0';
            break;
    }

    let t = text.split(',');
    if (t.length < 2) return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n*${prefix + command}* username,nomor`);

    let username = t[0].toLowerCase();
    let u = m.quoted ? m.quoted.sender : t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    let name = username + "Panel";
    let egg = global.egg;
    let loc = global.loc;
    let email = `${username}@leafz.id`;

    if (!u) return;
    let d = (await fox.onWhatsApp(u.split`@`[0]))[0] || {};
    let password = username + crypto.randomBytes(2).toString('hex');

    // Create User
    let f = await fetch(`${domain}/api/application/users`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apikey}`
        },
        body: JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
        })
    });

    let data = await f.json();
    if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));

    let user = data.attributes;
    let desc = tanggal(Date.now());
    let usr_id = user.id;

    // Get Egg Details
    let f1 = await fetch(`${domain}/api/application/nests/5/eggs/${egg}`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apikey}`
        }
    });

    reply('Sedang Membuat Server...');

    let startup_cmd = (await f1.json()).attributes.startup;

    // Create Server
    let f2 = await fetch(`${domain}/api/application/servers`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apikey}`,
        },
        body: JSON.stringify({
            "name": name,
            "description": desc,
            "user": usr_id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
                "INST": "npm",
                "USER_UPLOAD": "0",
                "AUTO_UPDATE": "0",
                "CMD_RUN": "npm start"
            },
            "limits": {
                "memory": ram,
                "swap": 0,
                "disk": disknya,
                "io": 500,
                "cpu": cpu
            },
            "feature_limits": {
                "databases": 0,
                "backups": 0,
                "allocations": 0
            },
            "deploy": {
                "locations": [parseInt(loc)],
                "dedicated_ip": false,
                "port_range": [],
            }
        })
    });

    let res = await f2.json();
    if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2));

    let server = res.attributes;

    // Success Message to Admin/Owner
    await reply(`SUKSES MEMBUAT PANEL DENGAN NAMA *${user.username}*\nData Akun Telah Dikirim Ke Nomor Tujuan`);

    // Prepare the Data Panel Message
    let teks = `╌┈┄╼ *DATA PANEL ANDA* ╾┈┄╌ ${more}
❏ *ID :* ${user.id}
❏ *Email :* ${email}
❏ *Username :* ${user.username}
❏ *Password :* ${password}
❏ *Spek :* RAM ${ram} MB, CPU ${cpu}%
❏ *Tanggal :* ${desc}
❏ *Link Login :* ${global.domain}

〢 ${grid}NOTE${grid} 〢
> *Dilarang Menggunakan SC DDoS*
> *Dilarang Bagikan Data Ini*
> *Claim Garansi Bawa Bukti*
> *Server Off 3 Hari+ Auto Delete*`;

    // Context info for the message
    const contextInfo = {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: global.idch,
            newsletterName: `${global.botname} - I N F O`,
            serverMessageId: null
        },
        externalAdReply: {
            title: `© ${global.botname}`,
            thumbnail: global.image,
            sourceUrl: global.ch,
            renderLargerThumbnail: false, 
            mediaType: 1
        }
    };

    // Send the Data Panel Message as a Simple Text Message with context info
    await fox.sendMessage(u, { text: teks, contextInfo: contextInfo });

    global.panel = null;
}
break;

case "addadmin": {
    if (!isCmd) return;
    if (!isCreator) return reply(msg.owner);

    let s = q.split(',');
    if (s.length < 3) return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n*${prefix + command}* email,username,nomornya`);

    let email = s[0].trim(); // Email yang diinput oleh user
    let username = s[1] ? s[1].trim() : email; // Jika username tidak disediakan, pakai email sebagai default
    let nomor = s[2] ? s[2].trim() : null;

    if (!username) return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n*${prefix + command}* email,username,nomornya`);
    if (!nomor) return reply(`Ex : ${prefix + command} email,username,nomor\n\nContoh :\n${prefix + command} example@example.com,example,628xxx`);

    let password = username + crypto.randomBytes(2).toString('hex');
    let nomornya = nomor.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    // Memeriksa apakah API key ada
    if (!apikey) return reply('API key tidak ditemukan. Pastikan API key sudah diatur dengan benar.');

    try {
        // Meminta API untuk membuat akun admin baru
        let f = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apikey // pastikan API key valid
            },
            body: JSON.stringify({
                "email": email,
                "username": username,
                "first_name": username,
                "last_name": "Memb",
                "language": "en",
                "root_admin": true,
                "password": password
            })
        });

        if (!f.ok) { // cek apakah respons dari server tidak ok (4xx, 5xx)
            let errorText = await f.text(); // ambil pesan error dalam bentuk teks
            return reply(`Gagal membuat akun admin. Error: ${f.status} - ${errorText}`);
        }

        let data = await f.json(); // Parsing data JSON
        if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));

        let user = data.attributes;
        let desc = tanggal(Date.now()); // Menggunakan fungsi tanggal untuk mendapatkan tanggal saat ini

        // Success Message to Admin/Owner
        await reply(`SUKSES MEMBUAT AKUN ADMIN DENGAN NAMA *${username}*`);

        // Prepare the Data Panel Message
        let teks = `╌┈┄╼ *DATA PANEL ANDA* ╾┈┄╌ ${more}
❏ *ID :* ${user.id}
❏ *Email :* ${email}
❏ *Username :* ${user.username}
❏ *Password :* ${password}
❏ *Tanggal :* ${desc}
❏ *Link Login :* ${global.domain}
        
〢 ${grid}NOTE${grid} 〢
> *Dilarang Menggunakan SC DDoS*
> *Dilarang Membuat Admin Panel Lagi*
> *Claim Garansi Bawa Bukti*
> *Rusuh? Delete + Kick NO REFF!!*`;

        // Context info for the message
        const contextInfo = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: global.idch,
                newsletterName: `${global.botname} - I N F O`,
                serverMessageId: null
            },
            externalAdReply: {
                title: `© ${global.botname}`,
                thumbnail: global.image,
                sourceUrl: global.ch,
                renderLargerThumbnail: false, 
                mediaType: 1
            }
        };

        // Mengirim Data Akun ke Nomor Target dengan context info
        await fox.sendMessage(nomornya, { text: teks, contextInfo: contextInfo });

    } catch (error) {
        return reply('Terjadi kesalahan: ' + error.message);
    }
}
break;


case "listpanel": case "listp": case "listserver": {
    if (!isCreator && !isReseller) return reply(msg.prem);
    if (global.apikey.length < 1) return reply("Apikey Tidak Ditemukan!");

    // Mendapatkan nomor halaman dari perintah, default ke halaman 1 jika tidak disebutkan
    let page = parseInt(q.trim()) || 1;

    let f = await fetch(`${domain}/api/application/servers?page=${page}`, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        }
    });

    let res = await f.json();
    let servers = res.data;
    if (servers.length < 1) return reply("Tidak Ada Server Di Panel untuk halaman ini");

    let messageText = `「 *LIST ALL SERVER PANEL* 」\n`;
    for (let server of servers) {
        let s = server.attributes;
        let f3 = await fetch(`${domain}/api/client/servers/${s.uuid.split`-`[0]}/resources`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + capikey
            }
        });

        let data = await f3.json();
        let status = data.attributes ? data.attributes.current_state : s.status;
        messageText += `
* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory > 1024 ? (s.limits.memory / 1024).toFixed(1) + "GB" : s.limits.memory + "MB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu + "%"}*
* Storage : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk > 1024 ? (s.limits.disk / 1024).toFixed(1) + "GB" : s.limits.disk + "MB"}*
* Status : ${status.toUpperCase()}\n`;
    }

    messageText += `\nGunakan \`${prefix}listpanel ${page + 1}\` untuk membuka halaman berikutnya.`;

    let externalAdReply = {
        externalAdReply: {
            showAdAttribution: true,
            mediaType: 1,
            mediaUrl: "https://files.catbox.moe/8z6vy8.jpg",
            thumbnailUrl: "https://whatsapp.com/channel/0029Vak5a1P6LwHiAJkd0M0q",
            sourceUrl: "https://whatsapp.com/channel/0029Vak5a1P6LwHiAJkd0M0q",
            title: `${global.botname}`,
            body: `${global.ownername}`,
            showLargethumbnail: false
        }
    };

    await reply(messageText, externalAdReply);
}
break;

case "listadmin": {
    if (!isCreator) return reply(msg.owner);
    
    let cek = await fetch(domain + "/api/application/users?page=1", {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        }
    });

    let res2 = await cek.json();
    let users = res2.data;
    let totaladmin = 0;

    if (users.length < 1) return reply("Tidak Ada Admin Panel");

    var teks = " *[ 📡List Admin Panel ]*\n\n";
    await users.forEach((i) => {
        if (i.attributes.root_admin !== true) return;
        totaladmin += 1;
        teks += `\`📡ID User ${i.attributes.id}\`
* *Nama : ${i.attributes.first_name}*
* *Created : ${i.attributes.created_at.split("T")[0]}\n\n*`;
    });

    teks += `Total Admin : *${totaladmin} Admin*`;

    let externalAdReply = {
        externalAdReply: {
            showAdAttribution: true,
            mediaType: 1,
            mediaUrl: "https://files.catbox.moe/8z6vy8.jpg",
            thumbnailUrl: "https://whatsapp.com/channel/0029Vak5a1P6LwHiAJkd0M0q",
            sourceUrl: "https://whatsapp.com/channel/0029Vak5a1P6LwHiAJkd0M0q",
            title: `${global.botname}`,
            body: `${global.ownername}`,
            showLargethumbnail: false // Set large thumbnail to false
        }
    };

    await fox.sendMessage(m.chat, { text: teks, ...externalAdReply });
}
break;

case "delpanel": case "hapuspanel": {
    if (!isCreator) return reply(msg.owner);
    if (global.apikey.length < 1) return reply("Apikey Tidak Ditemukan!");
    if (!args[0]) return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n*${prefix + command}* id servernya`);

    // Mendapatkan daftar server
    let f = await fetch(domain + "/api/application/servers?page=1", {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        }
    });

    let result = await f.json();
    let servers = result.data;
    let sections = [];
    
    // Mencari server yang akan dihapus
    for (let server of servers) {
        let s = server.attributes;
        if (args[0] == s.id.toString()) {
            sections.push(s.name.toLowerCase());
            let deleteServer = await fetch(domain + `/api/application/servers/${s.id}`, {
                "method": "DELETE",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey,
                }
            });
            let res = deleteServer.ok ? { errors: null } : await deleteServer.json();
        }
    }

    // Memeriksa dan menghapus user terkait server yang dihapus
    let cek = await fetch(domain + "/api/application/users?page=1", {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        }
    });

    let res2 = await cek.json();
    let users = res2.data;
    for (let user of users) {
        let u = user.attributes;
        if (sections.includes(u.username)) {
            let deleteUser = await fetch(domain + `/api/application/users/${u.id}`, {
                "method": "DELETE",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            });
            let res = deleteUser.ok ? { errors: null } : await deleteUser.json();
        }
    }

    if (sections.length == 0) return reply("*ID Server/User* Tidak Ditemukan");

    // Mengirim balasan berhasil
    reply(`Berhasil Menghapus Akun Panel *${capital(sections[0])}*`);
}
break;

case "deladmin": case "hapusadmin": {
    if (!isCreator) return reply(msg.owner);
    if (global.apikey.length < 1) return reply("Apikey Tidak Ditemukan!");
    if (!args[0]) return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n*${prefix + command}* id adminnya`);

    // Mendapatkan daftar admin
    let f = await fetch(domain + "/api/application/users?page=1", {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        }
    });

    let result = await f.json();
    let users = result.data;
    let sections = [];
    
    // Mencari admin yang akan dihapus
    for (let user of users) {
        let u = user.attributes;
        if (args[0] == u.id.toString() || args[0] == u.username.toLowerCase()) {
            sections.push(u.username.toLowerCase());
            let deleteUser = await fetch(domain + `/api/application/users/${u.id}`, {
                "method": "DELETE",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            });
            let res = deleteUser.ok ? { errors: null } : await deleteUser.json();
        }
    }

    if (sections.length == 0) return reply("*ID Admin/User* Tidak Ditemukan");

    // Mengirim balasan berhasil
    reply(`Berhasil Menghapus Akun Admin *${capital(sections[0])}*`);
}
break;
//CPANEL RESELLER 2
case '1gb2':
case '2gb2':
case '3gb2':
case '4gb2':
case '5gb2':
case '6gb2':
case '7gb2':
case '8gb2':
case '9gb2':
case '10gb2':
case 'unli2': {
    if (!isCmd) return;
    if (!isReseller2 && !isCreator) return reply(msg.prem);

    let ram, disknya, cpu;
    switch (command) {
        case '1gb2':
            ram = '1125';
            disknya = '1125';
            cpu = '40';
            break;
        case '2gb2':
            ram = '2125';
            disknya = '2125';
            cpu = '60';
            break;
        case '3gb2':
            ram = '3125';
            disknya = '3125';
            cpu = '80';
            break;
        case '4gb2':
            ram = '4125';
            disknya = '4125';
            cpu = '100';
            break;
        case '5gb2':
            ram = '5125';
            disknya = '5125';
            cpu = '120';
            break;
        case '6gb2':
            ram = '6125';
            disknya = '6125';
            cpu = '140';
            break;
        case '7gb2':
            ram = '7125';
            disknya = '7125';
            cpu = '160';
            break;
        case '8gb2':
            ram = '8125';
            disknya = '8125';
            cpu = '180';
            break;
        case '9gb2':
            ram = '9125';
            disknya = '9125';
            cpu = '200';
            break;
        case '10gb2':
            ram = '10125';
            disknya = '10125';
            cpu = '220';
            break;
        case 'unli2':
            ram = '0';
            disknya = '0';
            cpu = '0';
            break;
        default:
            ram = '0';
            disknya = '0';
            cpu = '0';
            break;
    }

    let t = text.split(',');
    if (t.length < 2) return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n*${prefix + command}* username,nomor`);

    let username = t[0].toLowerCase();
    let u = m.quoted ? m.quoted.sender : t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    let name = username + "Panel";
    let egg = global.egg;
    let loc = global.loc;
    let email = `${username}@leafz.id`;

    if (!u) return;
    let d = (await fox.onWhatsApp(u.split`@`[0]))[0] || {};
    let password = username + crypto.randomBytes(2).toString('hex');

    // Create User
    let f = await fetch(`${domain2}/api/application/users`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apikey2}`
        },
        body: JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
        })
    });

    let data = await f.json();
    if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));

    let user = data.attributes;
    let desc = tanggal(Date.now());
    let usr_id = user.id;

    // Get Egg Details
    let f1 = await fetch(`${domain2}/api/application/nests/5/eggs/${egg}`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apikey2}`
        }
    });

    reply('Sedang Membuat Server...');

    let startup_cmd = (await f1.json()).attributes.startup;

    // Create Server
    let f2 = await fetch(`${domain2}/api/application/servers`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apikey2}`,
        },
        body: JSON.stringify({
            "name": name,
            "description": desc,
            "user": usr_id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
                "INST": "npm",
                "USER_UPLOAD": "0",
                "AUTO_UPDATE": "0",
                "CMD_RUN": "npm start"
            },
            "limits": {
                "memory": ram,
                "swap": 0,
                "disk": disknya,
                "io": 500,
                "cpu": cpu
            },
            "feature_limits": {
                "databases": 0,
                "backups": 0,
                "allocations": 0
            },
            "deploy": {
                "locations": [parseInt(loc)],
                "dedicated_ip": false,
                "port_range": [],
            }
        })
    });

    let res = await f2.json();
    if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2));

    let server = res.attributes;

    // Success Message to Admin/Owner
    await reply(`SUKSES MEMBUAT PANEL DENGAN NAMA *${user.username}*\nData Akun Telah Dikirim Ke Nomor Tujuan`);

    // Prepare the Data Panel Message
    let teks = `╌┈┄╼ *DATA PANEL ANDA* ╾┈┄╌ ${more}
❏ *ID :* ${user.id}
❏ *Email :* ${email}
❏ *Username :* ${user.username}
❏ *Password :* ${password}
❏ *Spek :* RAM ${ram} MB, CPU ${cpu}%
❏ *Tanggal :* ${desc}
❏ *Link Login :* ${global.domain2}

〢 ${grid}NOTE${grid} 〢
> *Dilarang Menggunakan SC DDoS*
> *Dilarang Bagikan Data Ini*
> *Claim Garansi Bawa Bukti*
> *Server Off 3 Hari+ Auto Delete*`;

    // Context info for the message
    const contextInfo = {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: global.idch,
            newsletterName: `${global.botname} - I N F O`,
            serverMessageId: null
        },
        externalAdReply: {
            title: `© ${global.botname}`,
            thumbnail: global.image,
            sourceUrl: global.ch,
            renderLargerThumbnail: false, 
            mediaType: 1
        }
    };

    // Send the Data Panel Message as a Simple Text Message with context info
    await fox.sendMessage(u, { text: teks, contextInfo: contextInfo });

    global.panel = null;
}
break;

case "addadmin2": {
    if (!isCmd) return;
    if (!isCreator) return reply(msg.owner);

    let s = q.split(',');
    if (s.length < 3) return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n*${prefix + command}* email,username,nomornya`);

    let email = s[0].trim(); // Email yang diinput oleh user
    let username = s[1] ? s[1].trim() : email; // Jika username tidak disediakan, pakai email sebagai default
    let nomor = s[2] ? s[2].trim() : null;

    if (!username) return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n*${prefix + command}* email,username,nomornya`);
    if (!nomor) return reply(`Ex : ${prefix + command} email,username,nomor\n\nContoh :\n${prefix + command} example@example.com,example,628xxx`);

    let password = username + crypto.randomBytes(2).toString('hex');
    let nomornya = nomor.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    // Memeriksa apakah API key ada
    if (!apikey) return reply('API key tidak ditemukan. Pastikan API key sudah diatur dengan benar.');

    try {
        // Meminta API untuk membuat akun admin baru
        let f = await fetch(domain2 + "/api/application/users", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apikey2 // pastikan API key valid
            },
            body: JSON.stringify({
                "email": email,
                "username": username,
                "first_name": username,
                "last_name": "Memb",
                "language": "en",
                "root_admin": true,
                "password": password
            })
        });

        if (!f.ok) { // cek apakah respons dari server tidak ok (4xx, 5xx)
            let errorText = await f.text(); // ambil pesan error dalam bentuk teks
            return reply(`Gagal membuat akun admin. Error: ${f.status} - ${errorText}`);
        }

        let data = await f.json(); // Parsing data JSON
        if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));

        let user = data.attributes;
        let desc = tanggal(Date.now()); // Menggunakan fungsi tanggal untuk mendapatkan tanggal saat ini

        // Success Message to Admin/Owner
        await reply(`SUKSES MEMBUAT AKUN ADMIN DENGAN NAMA *${username}*`);

        // Prepare the Data Panel Message
        let teks = `╌┈┄╼ *DATA PANEL ANDA* ╾┈┄╌ ${more}
❏ *ID :* ${user.id}
❏ *Email :* ${email}
❏ *Username :* ${user.username}
❏ *Password :* ${password}
❏ *Tanggal :* ${desc}
❏ *Link Login :* ${global.domain2}
        
〢 ${grid}NOTE${grid} 〢
> *Dilarang Menggunakan SC DDoS*
> *Dilarang Membuat Admin Panel Lagi*
> *Claim Garansi Bawa Bukti*
> *Rusuh? Delete + Kick NO REFF!!*`;

        // Context info for the message
        const contextInfo = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: global.idch,
                newsletterName: `${global.botname} - I N F O`,
                serverMessageId: null
            },
            externalAdReply: {
                title: `© ${global.botname}`,
                thumbnail: global.image,
                sourceUrl: global.ch,
                renderLargerThumbnail: false, 
                mediaType: 1
            }
        };

        // Mengirim Data Akun ke Nomor Target dengan context info
        await fox.sendMessage(nomornya, { text: teks, contextInfo: contextInfo });

    } catch (error) {
        return reply('Terjadi kesalahan: ' + error.message);
    }
}
break;


case "listpanel2": case "listp2": case "listserver2": {
    if (!isCreator && !isReseller2) return reply(msg.prem);
    if (global.apikey.length < 1) return reply("Apikey Tidak Ditemukan!");

    // Mendapatkan nomor halaman dari perintah, default ke halaman 1 jika tidak disebutkan
    let page = parseInt(q.trim()) || 1;

    let f = await fetch(`${domain2}/api/application/servers?page=${page}`, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        }
    });

    let res = await f.json();
    let servers = res.data;
    if (servers.length < 1) return reply("Tidak Ada Server Di Panel untuk halaman ini");

    let messageText = `「 *LIST ALL SERVER PANEL* 」\n`;
    for (let server of servers) {
        let s = server.attributes;
        let f3 = await fetch(`${domain2}/api/client/servers/${s.uuid.split`-`[0]}/resources`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + capikey2
            }
        });

        let data = await f3.json();
        let status = data.attributes ? data.attributes.current_state : s.status;
        messageText += `
* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory > 1024 ? (s.limits.memory / 1024).toFixed(1) + "GB" : s.limits.memory + "MB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu + "%"}*
* Storage : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk > 1024 ? (s.limits.disk / 1024).toFixed(1) + "GB" : s.limits.disk + "MB"}*
* Status : ${status.toUpperCase()}\n`;
    }

    messageText += `\nGunakan \`${prefix}listpanel2 ${page + 1}\` untuk membuka halaman berikutnya.`;

    let externalAdReply = {
        externalAdReply: {
            showAdAttribution: true,
            mediaType: 1,
            mediaUrl: "https://files.catbox.moe/8z6vy8.jpg",
            thumbnailUrl: "https://whatsapp.com/channel/0029Vak5a1P6LwHiAJkd0M0q",
            sourceUrl: "https://whatsapp.com/channel/0029Vak5a1P6LwHiAJkd0M0q",
            title: `${global.botname}`,
            body: `${global.ownername}`,
            showLargethumbnail: false
        }
    };

    await reply(messageText, externalAdReply);
}
break;

case "listadmin2": {
    if (!isCreator) return reply(msg.owner);
    
    let cek = await fetch(domain2 + "/api/application/users?page=1", {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        }
    });

    let res2 = await cek.json();
    let users = res2.data;
    let totaladmin = 0;

    if (users.length < 1) return reply("Tidak Ada Admin Panel");

    var teks = " *[ 📡List Admin Panel ]*\n\n";
    await users.forEach((i) => {
        if (i.attributes.root_admin !== true) return;
        totaladmin += 1;
        teks += `\`📡ID User ${i.attributes.id}\`
* *Nama : ${i.attributes.first_name}*
* *Created : ${i.attributes.created_at.split("T")[0]}\n\n*`;
    });

    teks += `Total Admin : *${totaladmin} Admin*`;

    let externalAdReply = {
        externalAdReply: {
            showAdAttribution: true,
            mediaType: 1,
            mediaUrl: "https://files.catbox.moe/8z6vy8.jpg",
            thumbnailUrl: "https://whatsapp.com/channel/0029Vak5a1P6LwHiAJkd0M0q",
            sourceUrl: "https://whatsapp.com/channel/0029Vak5a1P6LwHiAJkd0M0q",
            title: `${global.botname}`,
            body: `${global.ownername}`,
            showLargethumbnail: false // Set large thumbnail to false
        }
    };

    await fox.sendMessage(m.chat, { text: teks, ...externalAdReply });
}
break;

case "delpanel2": case "hapuspane2l": {
    if (!isCreator) return reply(msg.owner);
    if (global.apikey.length < 1) return reply("Apikey Tidak Ditemukan!");
    if (!args[0]) return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n*${prefix + command}* id servernya`);

    // Mendapatkan daftar server
    let f = await fetch(domain2 + "/api/application/servers?page=1", {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        }
    });

    let result = await f.json();
    let servers = result.data;
    let sections = [];
    
    // Mencari server yang akan dihapus
    for (let server of servers) {
        let s = server.attributes;
        if (args[0] == s.id.toString()) {
            sections.push(s.name.toLowerCase());
            let deleteServer = await fetch(domain2 + `/api/application/servers/${s.id}`, {
                "method": "DELETE",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey2,
                }
            });
            let res = deleteServer.ok ? { errors: null } : await deleteServer.json();
        }
    }

    // Memeriksa dan menghapus user terkait server yang dihapus
    let cek = await fetch(domain2 + "/api/application/users?page=1", {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        }
    });

    let res2 = await cek.json();
    let users = res2.data;
    for (let user of users) {
        let u = user.attributes;
        if (sections.includes(u.username)) {
            let deleteUser = await fetch(domain2 + `/api/application/users/${u.id}`, {
                "method": "DELETE",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey2
                }
            });
            let res = deleteUser.ok ? { errors: null } : await deleteUser.json();
        }
    }

    if (sections.length == 0) return reply("*ID Server/User* Tidak Ditemukan");

    // Mengirim balasan berhasil
    reply(`Berhasil Menghapus Akun Panel *${capital(sections[0])}*`);
}
break;

case "deladmin2": case "hapusadmin2": {
    if (!isCreator) return reply(msg.owner);
    if (global.apikey.length < 1) return reply("Apikey Tidak Ditemukan!");
    if (!args[0]) return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n*${prefix + command}* id adminnya`);

    // Mendapatkan daftar admin
    let f = await fetch(domain2 + "/api/application/users?page=1", {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey2
        }
    });

    let result = await f.json();
    let users = result.data;
    let sections = [];
    
    // Mencari admin yang akan dihapus
    for (let user of users) {
        let u = user.attributes;
        if (args[0] == u.id.toString() || args[0] == u.username.toLowerCase()) {
            sections.push(u.username.toLowerCase());
            let deleteUser = await fetch(domain2 + `/api/application/users/${u.id}`, {
                "method": "DELETE",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey2
                }
            });
            let res = deleteUser.ok ? { errors: null } : await deleteUser.json();
        }
    }

    if (sections.length == 0) return reply("*ID Admin/User* Tidak Ditemukan");

    // Mengirim balasan berhasil
    reply(`Berhasil Menghapus Akun Admin *${capital(sections[0])}*`);
}
break;

//CPANEL RESELLER 3/PRIVATE
case '1gbr':
case '2gbr':
case '3gbr':
case '4gbr':
case '5gbr':
case '6gbr':
case '7gbr':
case '8gbr':
case '9gbr':
case '10gbr':
case 'unlir': {
    if (!isCmd) return;
    if (!isReseller3 && !isCreator) return reply(msg.prem);

    let ram, disknya, cpu;
    switch (command) {
        case '1gbr':
            ram = '1125';
            disknya = '1125';
            cpu = '40';
            break;
        case '2gbr':
            ram = '2125';
            disknya = '2125';
            cpu = '60';
            break;
        case '3gbr':
            ram = '3125';
            disknya = '3125';
            cpu = '80';
            break;
        case '4gbr':
            ram = '4125';
            disknya = '4125';
            cpu = '100';
            break;
        case '5gbr':
            ram = '5125';
            disknya = '5125';
            cpu = '120';
            break;
        case '6gbr':
            ram = '6125';
            disknya = '6125';
            cpu = '140';
            break;
        case '7gbr':
            ram = '7125';
            disknya = '7125';
            cpu = '160';
            break;
        case '8gbr':
            ram = '8125';
            disknya = '8125';
            cpu = '180';
            break;
        case '9gbr':
            ram = '9125';
            disknya = '9125';
            cpu = '200';
            break;
        case '10gbr':
            ram = '10125';
            disknya = '10125';
            cpu = '220';
            break;
        case 'unlir':
            ram = '0';
            disknya = '0';
            cpu = '0';
            break;
        default:
            ram = '0';
            disknya = '0';
            cpu = '0';
            break;
    }

    let t = text.split(',');
    if (t.length < 2) return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n*${prefix + command}* username,nomor`);

    let username = t[0].toLowerCase();
    let u = m.quoted ? m.quoted.sender : t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    let name = username + "Panel";
    let egg = global.egg;
    let loc = global.loc;
    let email = `${username}@leafz.id`;

    if (!u) return;
    let d = (await fox.onWhatsApp(u.split`@`[0]))[0] || {};
    let password = username + crypto.randomBytes(2).toString('hex');

    // Create User
    let f = await fetch(`${domainp}/api/application/users`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apikeyp}`
        },
        body: JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
        })
    });

    let data = await f.json();
    if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));

    let user = data.attributes;
    let desc = tanggal(Date.now());
    let usr_id = user.id;

    // Get Egg Details
    let f1 = await fetch(`${domainp}/api/application/nests/5/eggs/${egg}`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apikeyp}`
        }
    });

    reply('Sedang Membuat Server...');

    let startup_cmd = (await f1.json()).attributes.startup;

    // Create Server
    let f2 = await fetch(`${domainp}/api/application/servers`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apikeyp}`,
        },
        body: JSON.stringify({
            "name": name,
            "description": desc,
            "user": usr_id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
                "INST": "npm",
                "USER_UPLOAD": "0",
                "AUTO_UPDATE": "0",
                "CMD_RUN": "npm start"
            },
            "limits": {
                "memory": ram,
                "swap": 0,
                "disk": disknya,
                "io": 500,
                "cpu": cpu
            },
            "feature_limits": {
                "databases": 0,
                "backups": 0,
                "allocations": 0
            },
            "deploy": {
                "locations": [parseInt(loc)],
                "dedicated_ip": false,
                "port_range": [],
            }
        })
    });

    let res = await f2.json();
    if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2));

    let server = res.attributes;

    // Success Message to Admin/Owner
    await reply(`SUKSES MEMBUAT PANEL DENGAN NAMA *${user.username}*\nData Akun Telah Dikirim Ke Nomor Tujuan`);

    // Prepare the Data Panel Message
    let teks = `╌┈┄╼ *DATA PANEL ANDA* ╾┈┄╌ ${more}
❏ *ID :* ${user.id}
❏ *Email :* ${email}
❏ *Username :* ${user.username}
❏ *Password :* ${password}
❏ *Spek :* RAM ${ram} MB, CPU ${cpu}%
❏ *Tanggal :* ${desc}
❏ *Link Login :* ${global.domainp}

〢 ${grid}NOTE${grid} 〢
> *Dilarang Menggunakan SC DDoS*
> *Dilarang Bagikan Data Ini*
> *Claim Garansi Bawa Bukti*
> *Server Off 3 Hari+ Auto Delete*`;

    // Context info for the message
    const contextInfo = {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: global.idch,
            newsletterName: `${global.botname} - I N F O`,
            serverMessageId: null
        },
        externalAdReply: {
            title: `© ${global.botname}`,
            thumbnail: global.image,
            sourceUrl: global.ch,
            renderLargerThumbnail: false, 
            mediaType: 1
        }
    };

    // Send the Data Panel Message as a Simple Text Message with context info
    await fox.sendMessage(u, { text: teks, contextInfo: contextInfo });

    global.panel = null;
}
break;

case "addadmin3": {
    if (!isCmd) return;
    if (!isCreator) return reply(msg.owner);

    let s = q.split(',');
    if (s.length < 3) return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n*${prefix + command}* email,username,nomornya`);

    let email = s[0].trim(); // Email yang diinput oleh user
    let username = s[1] ? s[1].trim() : email; // Jika username tidak disediakan, pakai email sebagai default
    let nomor = s[2] ? s[2].trim() : null;

    if (!username) return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n*${prefix + command}* email,username,nomornya`);
    if (!nomor) return reply(`Ex : ${prefix + command} email,username,nomor\n\nContoh :\n${prefix + command} example@example.com,example,628xxx`);

    let password = username + crypto.randomBytes(2).toString('hex');
    let nomornya = nomor.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    // Memeriksa apakah API key ada
    if (!apikey) return reply('API key tidak ditemukan. Pastikan API key sudah diatur dengan benar.');

    try {
        // Meminta API untuk membuat akun admin baru
        let f = await fetch(domainp + "/api/application/users", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apikeyp // pastikan API key valid
            },
            body: JSON.stringify({
                "email": email,
                "username": username,
                "first_name": username,
                "last_name": "Memb",
                "language": "en",
                "root_admin": true,
                "password": password
            })
        });

        if (!f.ok) { // cek apakah respons dari server tidak ok (4xx, 5xx)
            let errorText = await f.text(); // ambil pesan error dalam bentuk teks
            return reply(`Gagal membuat akun admin. Error: ${f.status} - ${errorText}`);
        }

        let data = await f.json(); // Parsing data JSON
        if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));

        let user = data.attributes;
        let desc = tanggal(Date.now()); // Menggunakan fungsi tanggal untuk mendapatkan tanggal saat ini

        // Success Message to Admin/Owner
        await reply(`SUKSES MEMBUAT AKUN ADMIN DENGAN NAMA *${username}*`);

        // Prepare the Data Panel Message
        let teks = `╌┈┄╼ *DATA PANEL ANDA* ╾┈┄╌ ${more}
❏ *ID :* ${user.id}
❏ *Email :* ${email}
❏ *Username :* ${user.username}
❏ *Password :* ${password}
❏ *Tanggal :* ${desc}
❏ *Link Login :* ${global.domainp}
        
〢 ${grid}NOTE${grid} 〢
> *Dilarang Menggunakan SC DDoS*
> *Dilarang Membuat Admin Panel Lagi*
> *Claim Garansi Bawa Bukti*
> *Rusuh? Delete + Kick NO REFF!!*`;

        // Context info for the message
        const contextInfo = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: global.idch,
                newsletterName: `${global.botname} - I N F O`,
                serverMessageId: null
            },
            externalAdReply: {
                title: `© ${global.botname}`,
                thumbnail: global.image,
                sourceUrl: global.ch,
                renderLargerThumbnail: false, 
                mediaType: 1
            }
        };

        // Mengirim Data Akun ke Nomor Target dengan context info
        await fox.sendMessage(nomornya, { text: teks, contextInfo: contextInfo });

    } catch (error) {
        return reply('Terjadi kesalahan: ' + error.message);
    }
}
break;


case "listpanel3": case "listp3": case "listserver3": {
    if (!isCreator && !isReseller) return reply(msg.prem);
    if (global.apikey.length < 1) return reply("Apikey Tidak Ditemukan!");

    // Mendapatkan nomor halaman dari perintah, default ke halaman 1 jika tidak disebutkan
    let page = parseInt(q.trim()) || 1;

    let f = await fetch(`${domainp}/api/application/servers?page=${page}`, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikeyp
        }
    });

    let res = await f.json();
    let servers = res.data;
    if (servers.length < 1) return reply("Tidak Ada Server Di Panel untuk halaman ini");

    let messageText = `「 *LIST ALL SERVER PANEL* 」\n`;
    for (let server of servers) {
        let s = server.attributes;
        let f3 = await fetch(`${domainp}/api/client/servers/${s.uuid.split`-`[0]}/resources`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + capikeyp
            }
        });

        let data = await f3.json();
        let status = data.attributes ? data.attributes.current_state : s.status;
        messageText += `
* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory > 1024 ? (s.limits.memory / 1024).toFixed(1) + "GB" : s.limits.memory + "MB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu + "%"}*
* Storage : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk > 1024 ? (s.limits.disk / 1024).toFixed(1) + "GB" : s.limits.disk + "MB"}*
* Status : ${status.toUpperCase()}\n`;
    }

    messageText += `\nGunakan \`${prefix}listpanel3 ${page + 1}\` untuk membuka halaman berikutnya.`;

    let externalAdReply = {
        externalAdReply: {
            showAdAttribution: true,
            mediaType: 1,
            mediaUrl: "https://files.catbox.moe/8z6vy8.jpg",
            thumbnailUrl: "https://whatsapp.com/channel/0029Vak5a1P6LwHiAJkd0M0q",
            sourceUrl: "https://whatsapp.com/channel/0029Vak5a1P6LwHiAJkd0M0q",
            title: `${global.botname}`,
            body: `${global.ownername}`,
            showLargethumbnail: false
        }
    };

    await reply(messageText, externalAdReply);
}
break;

case "listadmin3": {
    if (!isCreator) return reply(msg.owner);
    
    let cek = await fetch(domainp + "/api/application/users?page=1", {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikeyp
        }
    });

    let res2 = await cek.json();
    let users = res2.data;
    let totaladmin = 0;

    if (users.length < 1) return reply("Tidak Ada Admin Panel");

    var teks = " *[ 📡List Admin Panel ]*\n\n";
    await users.forEach((i) => {
        if (i.attributes.root_admin !== true) return;
        totaladmin += 1;
        teks += `\`📡ID User ${i.attributes.id}\`
* *Nama : ${i.attributes.first_name}*
* *Created : ${i.attributes.created_at.split("T")[0]}\n\n*`;
    });

    teks += `Total Admin : *${totaladmin} Admin*`;

    let externalAdReply = {
        externalAdReply: {
            showAdAttribution: true,
            mediaType: 1,
            mediaUrl: "https://files.catbox.moe/8z6vy8.jpg",
            thumbnailUrl: "https://whatsapp.com/channel/0029Vak5a1P6LwHiAJkd0M0q",
            sourceUrl: "https://whatsapp.com/channel/0029Vak5a1P6LwHiAJkd0M0q",
            title: `${global.botname}`,
            body: `${global.ownername}`,
            showLargethumbnail: false // Set large thumbnail to false
        }
    };

    await fox.sendMessage(m.chat, { text: teks, ...externalAdReply });
}
break;

case "delpanel3": case "hapuspanel3": {
    if (!isCreator) return reply(msg.owner);
    if (global.apikey.length < 1) return reply("Apikey Tidak Ditemukan!");
    if (!args[0]) return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n*${prefix + command}* id servernya`);

    // Mendapatkan daftar server
    let f = await fetch(domainp + "/api/application/servers?page=1", {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikeyp
        }
    });

    let result = await f.json();
    let servers = result.data;
    let sections = [];
    
    // Mencari server yang akan dihapus
    for (let server of servers) {
        let s = server.attributes;
        if (args[0] == s.id.toString()) {
            sections.push(s.name.toLowerCase());
            let deleteServer = await fetch(domainp + `/api/application/servers/${s.id}`, {
                "method": "DELETE",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikeyp,
                }
            });
            let res = deleteServer.ok ? { errors: null } : await deleteServer.json();
        }
    }

    // Memeriksa dan menghapus user terkait server yang dihapus
    let cek = await fetch(domainp + "/api/application/users?page=1", {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikeyp
        }
    });

    let res2 = await cek.json();
    let users = res2.data;
    for (let user of users) {
        let u = user.attributes;
        if (sections.includes(u.username)) {
            let deleteUser = await fetch(domainp + `/api/application/users/${u.id}`, {
                "method": "DELETE",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikeyp
                }
            });
            let res = deleteUser.ok ? { errors: null } : await deleteUser.json();
        }
    }

    if (sections.length == 0) return reply("*ID Server/User* Tidak Ditemukan");

    // Mengirim balasan berhasil
    reply(`Berhasil Menghapus Akun Panel *${capital(sections[0])}*`);
}
break;

case "deladmin3": case "hapusadmin3": {
    if (!isCreator) return reply(msg.owner);
    if (global.apikey.length < 1) return reply("Apikey Tidak Ditemukan!");
    if (!args[0]) return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n*${prefix + command}* id adminnya`);

    // Mendapatkan daftar admin
    let f = await fetch(domainp + "/api/application/users?page=1", {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikeyp
        }
    });

    let result = await f.json();
    let users = result.data;
    let sections = [];
    
    // Mencari admin yang akan dihapus
    for (let user of users) {
        let u = user.attributes;
        if (args[0] == u.id.toString() || args[0] == u.username.toLowerCase()) {
            sections.push(u.username.toLowerCase());
            let deleteUser = await fetch(domainp + `/api/application/users/${u.id}`, {
                "method": "DELETE",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikeyp
                }
            });
            let res = deleteUser.ok ? { errors: null } : await deleteUser.json();
        }
    }

    if (sections.length == 0) return reply("*ID Admin/User* Tidak Ditemukan");

    // Mengirim balasan berhasil
    reply(`Berhasil Menghapus Akun Admin *${capital(sections[0])}*`);
}
break;
//╍╍╍╍╍╍╍╍╍╍╍╍╍╍DOMAIN MENU╍╍╍╍╍╍╍╍╍╍╍╍╍//
case 'listdomain': {
if (!isCreator && !isSelsub) return reply(msg.owner)
let teks = `📃「 *User Information* 」
▩ *Subdo : ${isSelsub ? 'Yes' : 'No'}*
▩ *Name : ${pushname}*
▩ *Status : ${isCreator ? 'Owner' : 'Member'}*

╭┄╼「 *LIST DOMAIN* 」╾┄
╎❏ domain1 hisokaaweb.site
╎❏ domain2 hisokamorrow.site
╎❏ domain3 leafzie.store
╎❏ domain4 leafzzhost.xyz
╎❏ domain5 panelleafz.biz.id
╎❏ domain6 panellhosting.xyz
╎❏ domain7 panellshop.cloud
╎❏ domain8 panelvvipp.my.id
╎❏ domain9 pantero.online
╰┄─┄┄───┄┄─┄┄┄─┄──┄─╼

> Untuk Membuat Subdomain, Ketik
> _Contoh : domainA ipvps,hostname_`
const contextInfo = {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363335802741292@newsletter',
            newsletterName: `${global.botname} - I N F O`,
            serverMessageId: null
        },
        externalAdReply: {
            title: `© ${global.botname}`,
            thumbnail: global.image,
            sourceUrl: global.ch,
            renderLargerThumbnail: false, 
            mediaType: 1
        }
    };

    await fox.sendMessage(
        m.chat, 
        { 
            image: thumbnail, 
            caption: teks, 
            contextInfo: contextInfo 
        }, 
        { quoted: fstatus }
    );
}
break;

case 'domain1': {
    if (!isCreator && !isSelsub) return reply(msg.prem);

    function subDomain1(host, ip) {
        return new Promise((resolve) => {
            let zone = "06dfb178828566f2f4ce13e38415bebb";
            let apitoken = "k6OZZ4r745dLeFxnbtny_tfjmWY1tJvcYKWbxJZl";
            let tld = "hisokaaweb.site";
            axios
                .post(
                    `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                    { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 1, priority: 10, proxied: false },
                    {
                        headers: {
                            Authorization: "Bearer " + apitoken,
                            "Content-Type": "application/json",
                        },
                    }
                )
                .then((e) => {
                    let res = e.data;
                    if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                })
                .catch((e) => {
                    let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                    let err1Str = String(err1);
                    resolve({ success: false, error: err1Str });
                });
        });
    }

    let raw1 = args?.join(" ")?.trim();
    if (!raw1) return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n*${prefix + command}* 0.0.0.0,panelhebat`);
    let [ip1, host1] = raw1.split(",").map(str => str.trim());
    if (!host1 || !/^[a-z0-9.-]+$/.test(host1)) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
    if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");

    subDomain1(host1, ip1).then((e) => {
        if (e['success']) reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
        else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
    });
}
break;

case 'domain2': {
    if (!isCreator && !isSelsub) return reply(msg.prem);

    function subDomain1(host, ip) {
        return new Promise((resolve) => {
            let zone = "6cb5f856a015eb1f21d950edfa1fb124";
            let apitoken = "mJQ4fQl2RtR0zSARa8JLRrCPy3T1HzrOfKNsmzGd";
            let tld = "hisokamorrow.site";
            axios
                .post(
                    `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                    { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 1, priority: 10, proxied: false },
                    {
                        headers: {
                            Authorization: "Bearer " + apitoken,
                            "Content-Type": "application/json",
                        },
                    }
                )
                .then((e) => {
                    let res = e.data;
                    if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                })
                .catch((e) => {
                    let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                    let err1Str = String(err1);
                    resolve({ success: false, error: err1Str });
                });
        });
    }

    let raw1 = args?.join(" ")?.trim();
    if (!raw1) return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n*${prefix + command}* 0.0.0.0,panelhebat`);
    let [ip1, host1] = raw1.split(",").map(str => str.trim());
    if (!host1 || !/^[a-z0-9.-]+$/.test(host1)) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
    if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");

    subDomain1(host1, ip1).then((e) => {
        if (e['success']) reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
        else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
    });
}
break;

case 'domain3': {
    if (!isCreator && !isSelsub) return reply(msg.prem);

    function subDomain1(host, ip) {
        return new Promise((resolve) => {
            let zone = "617c2aa09cf81490dec28d5e59701f7e";
            let apitoken = "Q7vF4o8XCFXpnnIYZe2-eOSLMVXCoKHxrEqF2qxV";
            let tld = "leafzie.store";
            axios
                .post(
                    `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                    { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 1, priority: 10, proxied: false },
                    {
                        headers: {
                            Authorization: "Bearer " + apitoken,
                            "Content-Type": "application/json",
                        },
                    }
                )
                .then((e) => {
                    let res = e.data;
                    if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                })
                .catch((e) => {
                    let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                    let err1Str = String(err1);
                    resolve({ success: false, error: err1Str });
                });
        });
    }

    let raw1 = args?.join(" ")?.trim();
    if (!raw1) return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n*${prefix + command}* 0.0.0.0,panelhebat`);
    let [ip1, host1] = raw1.split(",").map(str => str.trim());
    if (!host1 || !/^[a-z0-9.-]+$/.test(host1)) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
    if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");

    subDomain1(host1, ip1).then((e) => {
        if (e['success']) reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
        else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
    });
}
break;

case 'domain4': {
    if (!isCreator && !isSelsub) return reply(msg.prem);

    function subDomain1(host, ip) {
        return new Promise((resolve) => {
            let zone = "c9587a3088bbb2e1d6751534a68cb112";
            let apitoken = "-eKqXlb3i-MOBOEoNhjKhnQ4u2BNNQ3yUd8-pBIL";
            let tld = "leafzzhostt.xyz";
            axios
                .post(
                    `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                    { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 1, priority: 10, proxied: false },
                    {
                        headers: {
                            Authorization: "Bearer " + apitoken,
                            "Content-Type": "application/json",
                        },
                    }
                )
                .then((e) => {
                    let res = e.data;
                    if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                })
                .catch((e) => {
                    let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                    let err1Str = String(err1);
                    resolve({ success: false, error: err1Str });
                });
        });
    }

    let raw1 = args?.join(" ")?.trim();
    if (!raw1) return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n*${prefix + command}* 0.0.0.0,panelhebat`);
    let [ip1, host1] = raw1.split(",").map(str => str.trim());
    if (!host1 || !/^[a-z0-9.-]+$/.test(host1)) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
    if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");

    subDomain1(host1, ip1).then((e) => {
        if (e['success']) reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
        else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
    });
}
break;

case 'domain5': {
    if (!isCreator && !isSelsub) return reply(msg.prem);

    function subDomain1(host, ip) {
        return new Promise((resolve) => {
            let zone = "848b65f9f8fe2c07926eeb1253f0d8d1";
            let apitoken = "XL6K8eyzs09WomIzto9bDf4NaZwb96dl_OV9SKgg";
            let tld = "panelleafzz.biz.id";
            axios
                .post(
                    `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                    { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 1, priority: 10, proxied: false },
                    {
                        headers: {
                            Authorization: "Bearer " + apitoken,
                            "Content-Type": "application/json",
                        },
                    }
                )
                .then((e) => {
                    let res = e.data;
                    if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                })
                .catch((e) => {
                    let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                    let err1Str = String(err1);
                    resolve({ success: false, error: err1Str });
                });
        });
    }

    let raw1 = args?.join(" ")?.trim();
    if (!raw1) return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n*${prefix + command}* 0.0.0.0,panelhebat`);
    let [ip1, host1] = raw1.split(",").map(str => str.trim());
    if (!host1 || !/^[a-z0-9.-]+$/.test(host1)) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
    if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");

    subDomain1(host1, ip1).then((e) => {
        if (e['success']) reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
        else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
    });
}
break;

case 'domain6': {
    if (!isCreator && !isSelsub) return reply(msg.prem);

    function subDomain1(host, ip) {
        return new Promise((resolve) => {
            let zone = "1845acaa6efe5edbc7404425f4296adf";
            let apitoken = "nNo_-FBzn4mH8raixWn-KvvWf4C4LIAuWpFGQ0Bw";
            let tld = "panellhosting.xyz";
            axios
                .post(
                    `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                    { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 1, priority: 10, proxied: false },
                    {
                        headers: {
                            Authorization: "Bearer " + apitoken,
                            "Content-Type": "application/json",
                        },
                    }
                )
                .then((e) => {
                    let res = e.data;
                    if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                })
                .catch((e) => {
                    let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                    let err1Str = String(err1);
                    resolve({ success: false, error: err1Str });
                });
        });
    }

    let raw1 = args?.join(" ")?.trim();
    if (!raw1) return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n*${prefix + command}* 0.0.0.0,panelhebat`);
    let [ip1, host1] = raw1.split(",").map(str => str.trim());
    if (!host1 || !/^[a-z0-9.-]+$/.test(host1)) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
    if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");

    subDomain1(host1, ip1).then((e) => {
        if (e['success']) reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
        else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
    });
}
break;

case 'domain7': {
    if (!isCreator && !isSelsub) return reply(msg.prem);

    function subDomain1(host, ip) {
        return new Promise((resolve) => {
            let zone = "444a554b44576421a6e6f38c2725aa35";
            let apitoken = "ncUjB16Hi9IvbWn1d443hTSRWqzL4sFmV7_7k_ld";
            let tld = "panellshop.cloud";
            axios
                .post(
                    `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                    { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 1, priority: 10, proxied: false },
                    {
                        headers: {
                            Authorization: "Bearer " + apitoken,
                            "Content-Type": "application/json",
                        },
                    }
                )
                .then((e) => {
                    let res = e.data;
                    if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                })
                .catch((e) => {
                    let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                    let err1Str = String(err1);
                    resolve({ success: false, error: err1Str });
                });
        });
    }

    let raw1 = args?.join(" ")?.trim();
    if (!raw1) return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n*${prefix + command}* 0.0.0.0,panelhebat`);
    let [ip1, host1] = raw1.split(",").map(str => str.trim());
    if (!host1 || !/^[a-z0-9.-]+$/.test(host1)) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
    if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");

    subDomain1(host1, ip1).then((e) => {
        if (e['success']) reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
        else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
    });
}
break;

case 'domain8': {
    if (!isCreator && !isSelsub) return reply(msg.prem);

    function subDomain1(host, ip) {
        return new Promise((resolve) => {
            let zone = "6cc7b200be84336dfa5a9efe908aba12";
            let apitoken = "aHJ2CTjIqY-TAAqwIzpihTRxEp6-M_UZvxq6oAd0";
            let tld = "panelvvipp.my.id";
            axios
                .post(
                    `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                    { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 1, priority: 10, proxied: false },
                    {
                        headers: {
                            Authorization: "Bearer " + apitoken,
                            "Content-Type": "application/json",
                        },
                    }
                )
                .then((e) => {
                    let res = e.data;
                    if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                })
                .catch((e) => {
                    let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                    let err1Str = String(err1);
                    resolve({ success: false, error: err1Str });
                });
        });
    }

    let raw1 = args?.join(" ")?.trim();
    if (!raw1) return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n*${prefix + command}* 0.0.0.0,panelhebat`);
    let [ip1, host1] = raw1.split(",").map(str => str.trim());
    if (!host1 || !/^[a-z0-9.-]+$/.test(host1)) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
    if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");

    subDomain1(host1, ip1).then((e) => {
        if (e['success']) reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
        else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
    });
}
break;

case 'domain9': {
    if (!isCreator && !isSelsub) return reply(msg.prem);

    function subDomain1(host, ip) {
        return new Promise((resolve) => {
            let zone = "d8cf22cee01252511939127fe6b53558";
            let apitoken = "DTSn39G4nLnwxMUCB11a__il05RFRlPyhZhyX3yx";
            let tld = "pantero.online";
            axios
                .post(
                    `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                    { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 1, priority: 10, proxied: false },
                    {
                        headers: {
                            Authorization: "Bearer " + apitoken,
                            "Content-Type": "application/json",
                        },
                    }
                )
                .then((e) => {
                    let res = e.data;
                    if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                })
                .catch((e) => {
                    let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                    let err1Str = String(err1);
                    resolve({ success: false, error: err1Str });
                });
        });
    }

    let raw1 = args?.join(" ")?.trim();
    if (!raw1) return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n*${prefix + command}* 0.0.0.0,panelhebat`);
    let [ip1, host1] = raw1.split(",").map(str => str.trim());
    if (!host1 || !/^[a-z0-9.-]+$/.test(host1)) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
    if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");

    subDomain1(host1, ip1).then((e) => {
        if (e['success']) reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
        else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
    });
}
break;
//╍╍╍╍╍╍╍╍╍╍╍╍╍INSTALL MENU╍╍╍╍╍╍╍╍╍╍╍╍╍//
case 'installpanel': {
                if (!isCmd) return;
    if (!isCreator) return reply(msg.owner)
    let t = text.split(',');
    if (t.length < 5) return reply(`*Format salah!*\nPenggunaan: ${prefix}installpanel ipvps,password,domainpnl,domainnode,ramvps (Contoh 80000 8gb)`);
    let ipvps = t[0];
    let passwd = t[1];
    let subdomain = t[2];
    let domainnode = t[3];
    let ramvps = t[4];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };
    let password = generateRandomPassword();
    const commandPanel = 'bash <(curl -s https://pterodactyl-installer.se)';
    const commandWings = 'bash <(curl -s https://pterodactyl-installer.se)';
    const conn = new Client();

    conn.on('ready', () => {
        reply('*PROSES PENGINSTALLAN PANEL SEDANG BERLANGSUNG MOHON TUNGGU 5-10MENIT*');
        conn.exec(commandPanel, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Panel installation stream closed with code ' + code + ' and signal ' + signal);
                installWings(conn, domainnode, subdomain, password, ramvps);
            }).on('data', (data) => {
                handlePanelInstallationInput(data, stream, subdomain, password);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).connect(connSettings);

    async function installWings(conn, domainnode, subdomain, password, ramvps) {
        reply('*PROSES PENGINSTALLAN WINGS SEDANG BERLANGSUNG MOHON TUNGGU 5-10MENIT*');
        conn.exec(commandWings, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Wings installation stream closed with code ' + code + ' and signal ' + signal);
                createNode(conn, domainnode, ramvps, subdomain, password);
            }).on('data', (data) => {
                handleWingsInstallationInput(data, stream, domainnode, subdomain);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    async function createNode(conn, domainnode, ramvps, subdomain, password) {
        const command = `bash <(curl -s https://raw.githubusercontent.com/Leafzziee/TOOLS/refs/heads/main/install.sh)`;
        reply('*MEMULAI CREATE NODE & LOCATION*');

        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Node creation stream closed with code ' + code + ' and signal ' + signal);
                conn.end();
                sendPanelData(subdomain, password);
            }).on('data', (data) => {
                handleNodeCreationInput(data, stream, domainnode, ramvps);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    function sendPanelData(subdomain, password) {
        reply(`*DATA PANEL ANDA*\n\n*USERNAME:* admin\n*PASSWORD:* ${password}\n*LOGIN:* ${subdomain}\n\nNote: Semua Instalasi Telah Selesai Silahkan Create Allocation Di Node Yang Di buat Oleh Bot Dan Ambil Token Configuration dan ketik .startwings (token) \nNote: *HARAP TUNGGU 1-5MENIT BIAR WEB BISA DI BUKA*`);
    }

    function handlePanelInstallationInput(data, stream, subdomain, password) {
        if (data.toString().includes('Input')) {
            stream.write('0\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('Asia/Jakarta\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${password}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('yes\n');
        }
        if (data.toString().includes('Please read the Terms of Service')) {
            stream.write('A\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleWingsInstallationInput(data, stream, domainnode, subdomain) {
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('user\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${domainnode}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleNodeCreationInput(data, stream, domainnode, ramvps) {
        stream.write(`leafzzie\n`);
        stream.write('4\n');
        stream.write('SGP\n');
        stream.write('AUTO CNODE LEAFZ\n');
        stream.write(`${domainnode}\n`);
        stream.write('NODES\n');
        stream.write(`${ramvps}\n`);
        stream.write(`${ramvps}\n`);
        stream.write('1\n');
        console.log('STDOUT: ' + data);
    }
}

break;

case 'installtemastellar': {
                if (!isCmd) return;
        if (!isCreator) return reply(msg.owner)
        
        let t = text.split(',');
        if (t.length < 2) return reply(`*Format salah!*\nPenggunaan: ${prefix + command} ipvps,password`)
        
        let ipvps = t[0];
        let passwd = t[1];
        
        const connSettings = {
            host: ipvps,
            port: '22',
            username: 'root',
            password: passwd
        };
    
        // Fungsi untuk mendekode representasi byte kembali ke string asli
        function fox(opece) {
            return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
        }
    
        // Gunakan string terenkripsi di kode Anda
        const command = `bash <(curl -s https://raw.githubusercontent.com/Leafzziee/TOOLS/refs/heads/main/install.sh)`
    
        const conn = new Client();
        let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi
    
        conn.on('ready', () => {
            isSuccess = true; // Set flag menjadi true jika koneksi berhasil
            reply('*PROSES INSTALL THEME DIMULAI MOHON TUNGGU 5-10 MENIT KEDEPAN*');
            
            conn.exec(command, (err, stream) => {
                if (err) throw err;
                stream.on('close', (code, signal) => {
                    console.log('Stream closed with code ' + code + ' and signal ' + signal);
                    reply('`SUKSES INSTALL THEME PANEL ANDA, SILAHKAN CEK`')
                    conn.end();
                }).on('data', (data) => {
                    stream.write(`leafzzie\n`);
                    stream.write('1\n');
                    stream.write('1\n');
                    stream.write('y\n');
                    stream.write('x\n');
                    
                    console.log('STDOUT: ' + data);
                }).stderr.on('data', (data) => {
                    console.log('STDERR: ' + data);
                });
            });
        }).on('error', (err) => {
            console.log('Connection Error: ' + err);
            reply('Katasandi atau IP tidak valid');
        }).connect(connSettings);
       
       setTimeout(() => {
            if (isSuccess) {
                reply('*DONE INSTALL STELLAR THEME*');
            }
        }, 300000); // 180000 ms = 3 menit
       
    }
    break  
    
case 'installtemabilling': {
                if (!isCmd) return;
        if (!isCreator) return reply(msg.owner);
        
        let t = text.split(',');
        if (t.length < 2) return reply(`*Format salah!*\nPenggunaan: ${prefix + command} ipvps,password`)
        
        let ipvps = t[0];
        let passwd = t[1];
        
        const connSettings = {
            host: ipvps,
            port: '22',
            username: 'root',
            password: passwd
        };
    
        // Fungsi untuk mendekode representasi byte kembali ke string asli
        function fox(opece) {
            return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
        }
    
        // Gunakan string terenkripsi di kode Anda
        const command = `bash <(curl -s https://raw.githubusercontent.com/Leafzziee/TOOLS/refs/heads/main/install.sh)`
    
        const conn = new Client();
        let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi
    
        conn.on('ready', () => {
            isSuccess = true; // Set flag menjadi true jika koneksi berhasil
            reply('*PROSES INSTALL THEME DIMULAI MOHON TUNGGU 5-10 MENIT KEDEPAN*');
            
            conn.exec(command, (err, stream) => {
                if (err) throw err;
                stream.on('close', (code, signal) => {
                    console.log('Stream closed with code ' + code + ' and signal ' + signal);
                    reply('`SUKSES INSTALL THEME PANEL ANDA, SILAHKAN CEK`')
                    conn.end();
                }).on('data', (data) => {
                    stream.write(`leafzzie\n`);
                    stream.write('1\n');
                    stream.write('2\n');
                    stream.write('yes\n');
                    stream.write('x\n');
                    
                    console.log('STDOUT: ' + data);
                }).stderr.on('data', (data) => {
                    console.log('STDERR: ' + data);
                });
            });
        }).on('error', (err) => {
            console.log('Connection Error: ' + err);
            reply('Katasandi atau IP tidak valid');
        }).connect(connSettings);
       
       setTimeout(() => {
            if (isSuccess) {
                reply('*DONE INSTALL BILLING THEME*')
            }
        }, 300000); // 180000 ms = 3 menit
       
    }
    break

case 'installtemaenigma': {
    if (!isCmd) return;
    if (!isCreator) return reply(msg.owner);
    
    let t = text.split(',');
    if (t.length < 4) return reply(`*Format salah!*\nPenggunaan: ${prefix + command} ipvps,password,linkGrup,linkChannel`);
    
    let ipvps = t[0];
    let passwd = t[1];
    let linkGrup = t[2];
    let linkChannel = t[3];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };
    
    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function fox(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }
    
    // Gunakan string terenkripsi di kode Anda
    const command = `bash <(curl -s https://raw.githubusercontent.com/Leafzziee/TOOLS/refs/heads/main/install.sh)`;
    
    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi
    
    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        reply('*PROSES INSTALL THEME DIMULAI MOHON TUNGGU 5-10 MENIT KEDEPAN*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                reply('`SUKSES INSTALL THEME PANEL ANDA, SILAHKAN CEK`');
                conn.end();
            }).on('data', (data) => {
                stream.write(`leafzzie\n`);
                stream.write('1\n');
                stream.write('3\n');
                stream.write('\n');
                stream.write(`${linkGrup}\n`);
                stream.write(`${linkChannel}\n`);
                stream.write('yes\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        reply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            reply('*DONE INSTALL ENGIMA THEME*');
        }
    }, 300000); // 180000 ms = 3 menit
    
}
break;

case 'createnode': {
                if (!isCmd) return;
           if (!isCreator) return reply(msg.owner)
           let t = text.split(',');
           if (t.length < 2) return reply(`*Format salah!*\nPenggunaan: • createnode ipvps,password,domainnode,ramvps`)
           
           let ipvps = t[0];
           let passwd = t[1];
           let domainnode = t[2];
           let ramvps = t[3];
           const connSettings = {
               host: ipvps,
               port: '22',
               username: 'root',
               password: passwd
           };
       
           // Gunakan string terenkripsi di kode Anda
           const command = 'bash <(curl -s https://raw.githubusercontent.com/Leafzziee/TOOLS/refs/heads/main/install.sh)'
           const conn = new Client();
        
           conn.on('ready', () => {
               isSuccess = true; // Set flag menjadi true jika koneksi berhasil
               reply('*MEMULAI CREATE NODE & LOCATION*');
               
               conn.exec(command, (err, stream) => {
                   if (err) throw err;
                   stream.on('close', (code, signal) => {
                       console.log('Stream closed with code ' + code + ' and signal ' + signal);
                       reply('*NODE DAN LOCATION TELAH DI TAMBAHKAN SILAHAKAN TAMBAH KAN ALLOCATION MANUAL & AMBIL TOKEN CONFIGURE*')
                       conn.end();
                   }).on('data', (data) => {
                   stream.write('leafzzie\n');
                   stream.write('4\n');
                       stream.write('SGP\n');
                       stream.write('AUTO CNODE LEAFZ\n');
                       stream.write(`${domainnode}\n`)
                       stream.write('NODES\n');
                       stream.write(`${ramvps}\n`);
                       stream.write(`${ramvps}\n`);
                       stream.write('1\n');
                       console.log('STDOUT: ' + data);
                   }).stderr.on('data', (data) => {
                       console.log('STDERR: ' + data);
                   });
               });
           }).on('error', (err) => {
               console.log('Connection Error: ' + err);
               reply('Katasandi atau IP tidak valid');
           }).connect(connSettings);
          }
       break
    
case 'startwings': case 'configurewings': {
                if (!isCmd) return;
    if (!isCreator) return reply(msg.owner)
    
    let t = text.split(',');
    if (t.length < 2) return reply(`*Format salah!*\nPenggunaan: ${prefix}startwings ipvps,password,token (token configuration)`)
    
    let ipvps = t[0];
    let passwd = t[1];
    let token = t[2];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Gunakan string terenkripsi di kode Anda
    const command = `bash <(curl -s https://raw.githubusercontent.com/Leafzziee/TOOLS/refs/heads/main/install.sh)`
    const conn = new Client();
 
    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        reply(msg.wait)
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
reply('Sukses Start Wings, Silahkan Cek Nodenya');
                conn.end();
            }).on('data', (data) => {
            stream.write(`leafzzie\n`);
                stream.write('3\n');
                stream.write(`${token}\n`)
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        reply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   }

break

case 'uninstallpanel': {
                if (!isCmd) return;
    if (!isCreator) return reply(msg.owner);

    let t = text.split(',');
    if (t.length < 2) {
        return reply(`*Format salah!*\nPenggunaan: ${prefix}uninstallpanel ipvps,password`);
    }

    let ipvps = t[0].trim();
    let passwd = t[1].trim();
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    const command = 'bash <(curl -s https://pterodactyl-installer.se)';
    const conn = new Client();

    conn.on('ready', () => {
        reply('*PROSES UNINSTALL PANEL SEDANG BERLANGSUNG, MOHON TUNGGU 20 DETIK*');

        conn.exec(command, (err, stream) => {
            if (err) {
                console.error('Error executing command:', err);
                return reply('Terjadi kesalahan saat menjalankan perintah.');
            }

            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                conn.end();
                if (code === 0) {
                    reply('`SUKSES UNINSTALL PANEL ANDA, SILAHKAN CEK`');
                } else {
                    reply('`Gagal menjalankan perintah uninstall panel.`');
                }
            }).on('data', (data) => {
                console.log('STDOUT: ' + data);
                if (data.toString().includes('Input')) {
                    if (data.toString().includes('6')) {
                        stream.write('6\n');
                    } else if (data.toString().includes('y/n')) {
                        stream.write('y\n');
                    } else {
                        stream.write('\n');
                    }
                }
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
                reply('Terjadi kesalahan saat proses uninstall, cek log untuk detail.');
            });
        });
    }).on('error', (error) => {
        console.error('Connection error:', error);
        reply('Gagal terhubung ke server. Periksa kredensial Anda.');
    }).connect(connSettings);

    // Menunggu proses selama 20 detik
    await new Promise(resolve => setTimeout(resolve, 20000));
    }
    break;
    
    case 'uninstalltema': {
                if (!isCmd) return;
        if (!isCreator) return reply(msg.owner);
        let t = text.split(',');
         if (t.length < 2) return reply(`*Format salah!*\nPenggunaan: ${prefix}uninstalltheme ipvps,password`)
         
         let ipvps = t[0];
         let passwd = t[1];
         
         const connSettings = {
         host: ipvps,
         port: '22',
         username: 'root',
         password: passwd
         };
         function neroxz(opece) {
         return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
         }
         const command = `bash <(curl -s https://raw.githubusercontent.com/Leafzziee/TOOLS/refs/heads/main/install.sh)`
        
         const conn = new Client();
         let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi
        
         conn.on('ready', () => {
         isSuccess = true; // Set flag menjadi true jika koneksi berhasil
         reply('*PROSES UNINSTALL THEME DIMULAI MOHON TUNGGU 3 MENIT KEDEPAN*');
         
         conn.exec(command, (err, stream) => {
         if (err) throw err;
         stream.on('close', (code, signal) => {
         console.log('Stream closed with code ' + code + ' and signal ' + signal);
         conn.end();
         }).on('data', (data) => {
         stream.write(`leafzzie\n`);
         stream.write('2\n');
         stream.write('y\n');
         stream.write('yes\n');
         stream.write('x\n');
         
         console.log('STDOUT: ' + data);
         }).stderr.on('data', (data) => {
         console.log('STDERR: ' + data);
         });
         });
         }).on('error', (err) => {
         console.log('Connection Error: ' + err);
         reply('Katasandi atau IP tidak valid');
         }).connect(connSettings);
         
         // Tambahkan jeda 3 menit (180000 ms) sebelum mengirim pesan "success uninstall theme"
         setTimeout(() => {
         if (isSuccess) {
        reply('SUCCES UNINSTALL THEME PANEL ANDA COBA CEK');
         }
         }, 180000); // 180000 ms = 3 menit
         
         
        }
        
        break;
//╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍ANTI MENU╍╍╍╍╍╍╍╍╍╍╍╍╍╍//
case 'antilinkgc':
    if (!isCmd) return;
    if (!m.isGroup) return reply(msg.group);
    if (!isAdmins && !isCreator) return reply(msg.admin);
    if (!isBotAdmins) return reply(msg.botAdmin);
    if (args.length < 1) return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n*${prefix + command}* on/off?`);
    
    if (q == 'on') {
        global.db.data.chats[m.chat].fox_antigc = true;
        reply(`🦊 *Berhasil Mengaktifkan Anti Link Group Kick*`);
    } else if (q == 'off') {
        global.db.data.chats[m.chat].fox_antigc = false;
        reply(`🦊 *Berhasil Mematikan Anti Link Group Kick*`);
    }
    break;
    
case 'antilinkgc2':
    if (!isCmd) return;
    if (!m.isGroup) return reply(msg.group);
    if (!isAdmins && !isCreator) return reply(msg.admin);
    if (!isBotAdmins) return reply(msg.botAdmin);
    if (args.length < 1) return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n*${prefix + command}* on/off?`);
    
    if (q === 'on') {
        global.db.data.chats[m.chat].fox_antigc2 = true;
        reply(`🦊 *Berhasil Mengaktifkan Anti Link Group No Kick*`);
    } else if (q === 'off') {
        global.db.data.chats[m.chat].fox_antigc2 = false;
        reply(`🦊 *Berhasil Mematikan Anti Link Group No Kick*`);
    }
    break;
    
case 'antiwame':
    if (!isCmd) return;
    if (!m.isGroup) return reply(msg.group);
    if (!isAdmins && !isCreator) return reply(msg.admin);
    if (!isBotAdmins) return reply(msg.botAdmin);
    if (args.length < 1) return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n*${prefix + command}* on/off?`);
    
    if (q === 'on') {
        global.db.data.chats[m.chat].fox_antiwame = true;
        reply(`🦊 *Berhasil Mengaktifkan Anti Wame*`);
    } else if (q === 'off') {
        global.db.data.chats[m.chat].fox_antiwame = false;
        reply(`🦊 *Berhasil Mematikan Anti Wame*`);
    }
    break;
    
case 'antipanel':
    if (!isCmd) return;
    if (!m.isGroup) return reply(msg.group);
    if (!isAdmins && !isCreator) return reply(msg.admin);
    if (!isBotAdmins) return reply(msg.botAdmin);
    if (args.length < 1) return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n*${prefix + command}* on/off?`);
    
    if (q === 'on') {
        global.db.data.chats[m.chat].fox_antipanel = true;
        reply(`🦊 *Berhasil Mengaktifkan Anti Promosi*`);
    } else if (q === 'off') {
        global.db.data.chats[m.chat].fox_antipanel = false;
        reply(`🦊 *Berhasil Mematikan Anti Promosi*`);
    }
    break;
    
case 'anticall':
    if (!isCmd) return;
    if (!m.isGroup) return reply(msg.group);
    if (!isAdmins && !isCreator) return reply(msg.admin);
    if (!isBotAdmins) return reply(msg.botAdmin);
    if (args.length < 1) return reply(`*[ FORMAT SALAH ]*\n\nContoh Penggunaan :\n*${prefix + command}* on/off?`);
    
    if (q === 'on') {
        global.anticall = true;
        reply(`🦊 *Berhasil Mengaktifkan Anti Call*`);
    } else if (q === 'off') {
        global.anticall = false;
        reply(`🦊 *Berhasil Mematikan Anti Call*`);
    }
    break;
//╍╍╍╍╍╍╍╍╍╍╍╍DOWNLOAD MENU╍╍╍╍╍╍╍╍╍╍╍╍//
case 'tiktok':
case 'tt':
case 'tiktokdl': {
    if (args.length == 0) return reply(`Masukan URL!\n\ncontoh:\n*${prefix + command}* https://vm.tiktok.com/ZGJAmhSrp/`);
    if (!args[0].match(/tiktok/gi) && !args[0].match(/douyin/gi)) return reply(`URL Tidak Ditemukan!`);
    
    reply(msg.wait);
    
    try {
        const apiKey = 'xaklFfKM'; // Pastikan API key diisi dengan benar
        const response = await axios.get(`https://api.botcahx.eu.org/api/dowloader/tiktok?url=${args[0]}&apikey=${apiKey}`);
        const res = response.data.result;
        
        var { video, title, title_audio, audio } = res;
        if (!video[0] || !audio[0]) return reply('Error: Video atau audio tidak ditemukan.');
        
        let capt = `乂 *T I K T O K*\n\n`;
        capt += `◦ *Title* : ${title}\n`;
        capt += `◦ *Audio* : ${title_audio}\n`;
        capt += `\n`;

        // Mengirim video
        if (video.length > 1) {
            for (let v of video) {
                await fox.sendMessage(m.chat, { video: { url: v }, caption: capt }, { quoted: m });
            }
        } else {
            await fox.sendMessage(m.chat, { video: { url: video[0] }, caption: capt }, { quoted: m });
        }

        // Mengirim audio
        await fox.sendMessage(m.chat, { audio: { url: audio[0] }, mimetype: 'audio/mpeg' }, { quoted: m });
    } catch (e) {
        console.error(`Error processing TikTok download: ${e}`);
        reply('❌ Terjadi kesalahan saat mengunduh video TikTok. Coba lagi nanti.');
    }
}
break;

case 'play': {
    if (!text) return reply(`*Example :*\n\n*Play Mendua*`);
    reply(msg.wait);

    try {
        // Mengambil detail video menggunakan scraper
        const videoDetails = await youtubeDownloader.detail(`https://www.youtube.com/results?search_query=${encodeURIComponent(text)}`);
        
        // Periksa jika detail video ditemukan
        if (!videoDetails || !videoDetails.access) return reply('❌ *Lagu tidak ditemukan!*');

        // Mengambil media (audio) dari video
        const mediaResult = await youtubeDownloader.media('audio', '128', videoDetails.access);

        // Periksa jika URL download tersedia
        if (!mediaResult || !mediaResult.url) return reply('❌ *Download URL tidak ditemukan!*');

        // Kirim pesan audio
        await fox.sendMessage(m.chat, {
            audio: {
                url: mediaResult.url // Link MP3 dari scraper
            },
            fileName: videoDetails.title + '.mp3',
            mimetype: 'audio/mpeg',
            contextInfo: {
                externalAdReply: {
                    title: videoDetails.title,
                    body: packname,
                    thumbnailUrl: videoDetails.thumbnail,
                    sourceUrl: mediaResult.url,
                    mediaType: 1,
                    mediaUrl: videoDetails.url,
                }
            },
        }, {
            quoted: m
        });
    } catch (error) {
        reply(`❌ *Error:* ${error.message}`);
    }
}
break;
default:
if (isCmd && budy.toLowerCase() != undefined) {
if (m.isBaileys) return
if (from.endsWith('broadcast')) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
fox.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
console.log(util.format(err))
let e = String(err)
fox.sendMessage('6287858976852' + "@s.whatsapp.net", { text: `⚠️ *Ada Yang Error Nih! Di Bagian :* ` + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
}}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.bold.red(`📑  Update : ${__filename}`))
delete require.cache[file]
require(file)
})
