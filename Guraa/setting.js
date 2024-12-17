const fs = require('fs')
const { color } = require('./lib/myfunc')

//owner
global.owner = '6285693403858'
global.nomerowner = ["6285693403858"]

//watermark 
global.packname = 'Made With'
global.author = 'GawrGura-MD'
global.foter1 = 'Simple Bot By Putzz'
global.foter2 = 'Created By Putzz'
global.foter3 = 'GawrGura-MD'
global.foter4 = '© AlwaysPutzz - BDS'
global.idcennel = 'https://whatsapp.com/channel/0029VapQbYOJENy038ZzUP0o'
global.thumb = 'https://a.top4top.io/p_3237odfvl4.jpg'
global.url = 'https://whatsapp.com/channel/0029VapQbYOJENy038ZzUP0o'
//database 
global.urldb = 'mongodb+srv://nawdev01:putu0@botwa.q6bwloy.mongodb.net/?retryWrites=true&w=majority'; // kosongin aja tapi kalo mau pake database mongo db isi url mongo

// APIKEY

global.skizoapi = 'KiiCode'
global.lol = 'GataDios'

//mess
global.mess = {
    success: 'Done Kak <3',
    admin: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !*_',
    botAdmin: '_*❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !*_',
    owner: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !*_',
    group: '_*❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !*_',
    private: '_(❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !*_',
    wait: '_*Wait Tunggu Sebentar*_',
    notregist: '_*Kamu Belum Terdaftar Di Database Bot Silahkan Daftar Terlebih Dahulu_*',
    premium: '_*khusus Premium" Mau Prem? Chat Owner_*',
    endLimit: '_*Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB_*.',
}

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})