/*  

  Made By Lenwy
  Base : Lenwy
  WhatsApp : wa.me/6283829814737
  Telegram : t.me/ilenwy
  Youtube : @Lenwy

  Channel : https://whatsapp.com/channel/0029VaGdzBSGZNCmoTgN2K0u

  Copy Code?, Recode?, Rename?, Reupload?, Reseller? Taruh Credit Ya :D

*/

const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')

//Bot Setting
global.owner = '6287858976852'
global.botnumber = '6285813947075'
global.ownername = 'LeafzOffc'
global.botname = 'FOXX BOT'
global.version = '3.0'
global.wlcm = []
global.jedajpm = 5000 //milidetik

//Setting Sosmed dll
global.ch = 'https://whatsapp.com/channel/0029Vak5a1P6LwHiAJkd0M0q'
global.idch = '120363335802741292@newsletter'
global.ig = '-'
global.email = 'leafz@sigma.id'
global.region = 'Ohio'
global.thumbnail = fs.readFileSync("./data/image/menu.jpg")
global.image = fs.readFileSync("./data/image/gambar.jpg")
global.grid = "`"
global.keyopenai = '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'
global.ibeng = 'Yl4h5x9wiA'
global.packname = 'FOXXY'
global.author = `Creator : LeafzOffc/+62 878-5897-6852`
global.prefa = ['.']
global.sessionName = 'sessionnya'
global.anticall = false

//Setting Panel Reseller 1
global.domain = '-' // Hapus Tanda / Diakhir Link Domain Kalian
global.apikey = '-' // Plta
global.capikey = '-' // Pltc

//Setting Panel Reseller 2
global.domain2 = '-' // Hapus Tanda / Diakhir Link Domain Kalian
global.apikey2 = '-' // Plta
global.capikey2 = '-' // Pltc

//setting panel private
global.domainp = '-' // Hapus Tanda / Diakhir Link Domain Kalian
global.apikeyp = '-' // Plta
global.capikeyp = '-' // Pltc
global.egg = '15' // Sesuaikan Lokasi Egg
global.loc = '1'

//Setting Message
global.msg = {
    success: '🦊 *Sukses Bang...*',
    admin: '⚠️ *Fitur Khusus Admin Group!*',
    botAdmin: '⚠️ *Fitur Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group!*',
    owner: '⚠️ *Fitur Khusus Owner!*',
    prem: '⚠️ *Anda Tidak Punya Akses!*',
    group: '⚠️ *Fitur Ini Hanya Bisa Digunakan Di Group Chat!*',
    wait: '📦 *Dalam Proses*',
    error: '⚠️ *Kayaknya Ada Error, Coba Lagi Di Lain Waktu*',
    link: '⚠️ *Itu Bukan Link Yang Benar*',
    
    // Fitur Store & Report
    owner2: '6287858976852',
    qris: 'https://files.catbox.moe/6h3clm.jpg',
    format: '🎁 *Pembayaran*\n📣 *All Payment Bisa Scan Qr Diatas*\n\n📃 *Metode Lain*\n🏷️ *Ovo : 62*\n🏷️ *Dana : 62*\n🏷️ *Gopay : 62*\n\n⚠️ *Dimohon Untuk Mengirim Bukti Pembayaran*\n\n❤️ *Terimakasih*',
}

global.multiplier = 1000

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.bold.red(`📑  Update : ${__filename}`))
delete require.cache[file]
require(file)
})