const moment = require("moment-timezone");
const fs = require("fs");
const chalk = require('chalk')
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
const { color, bgcolor } = require('../lib/color')
const {kyun} = require("../lib/myfunc");
moment.tz.setDefault("Asia/Jakarta").locale("id");

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 


let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)

let dot = new Date(new Date + 3600000)
const dateIslamic = Intl.DateTimeFormat("id" + '-TN-u-ca-islamic', {day: 'numeric',month: 'long',year: 'numeric'}).format(dot)

const feat = (q) => {
    let status = false
    Object.keys(db.data.listerror).forEach((i) => {
        if (db.data.listerror[i].cmd === q) {
            status = true
        }
    })
    return status
}

exports.allmenu =  ( isPremium,thisHit, sender, prefix, pushname) => {

return `⩽⩾ *${botName}*
⩽⩾ ${week}, ${calender} 
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
│⩽⩾ *Nama* : ${pushname}
│⩽⩾ *Status* : ${isPremium ? 'Premium':'Free'}
│⩽⩾ .*Limit* : ${isPremium ? 'Unlimited' : `${db.data.users[sender].limit}`}
│⩽⩾ *Limit game* : ${isPremium ? 'Unlimited' : `${db.data.users[sender].glimit}`}
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧𝗭 」
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
│⩽⩾ *Nama Bot* : ${botName}
│⩽⩾ *Running* : panel
│⩽⩾ *Total Error* : ${db.data.listerror.length} 
│⩽⩾ *User Banned* : ${db.data.banned.length}
│⩽⩾ *Cmd Blocked* : ${db.data.blockcmd.length} 
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
`}

exports.fitur = (prefix) => {
return``+readmore+`
╰┈➤ ❌ : Sedang Perbaikan

❍┈┈「 *MENU GROUP* 」
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢.setnamegc
╎│•⟢.setdesc
╎│•⟢.setppgc 
╎│•⟢.infogc
╎│•⟢.getppgc
╎│•⟢.cekmember
╎│•⟢.closegroup
╎│•⟢.opengroup
╎│•⟢.hidetag
╎│•⟢.tagall
╎│•⟢.promote
╎│•⟢.demote
╎│•⟢.kick
╎│•⟢.add
╎│•⟢.resetlinkgc
╎│•⟢.linkgc
╎│•⟢.ban
╎│•⟢.unban
╎│•⟢.listgc
╎│•⟢.afk
╎│•⟢.delete
╎│•⟢.profil
╎│•⟢.intro
╎│•⟢.topbalance
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU DOWNLOAD* 」
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢.play
╎│•⟢.playmp4
╎│•⟢.ytmp3
╎│•⟢.instagram
╎│•⟢.ttpoto
╎│•⟢.tiktok
╎│•⟢.ttaudio
╎│•⟢.song
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU TOOLS* 」
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢.translate
╎│•⟢.kalkulator
╎│•⟢.nobg
╎│•⟢.pinterest
╎│•⟢.gimage
╎│•⟢.remini
╎│•⟢.jarak ❌
╎│•⟢.get
╎│•⟢.flaming1 - 6
╎│•⟢.wattpad
╎│•⟢.playstore
╎│•⟢.brainly
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU PRIMBON* 」
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢.artinama
╎│•⟢.artimimpi
╎│•⟢.kecocokanpasangan
╎│•⟢.ramalancinta
╎│•⟢.kecocokannama
╎│•⟢.jadiannikah
╎│•⟢.sifatusaha
╎│•⟢.rezeki
╎│•⟢.pekerjaan
╎│•⟢.nasib
╎│•⟢.penyakit
╎│•⟢.artitarot
╎│•⟢.fengshui
╎│•⟢.haribaik
╎│•⟢.harisangar
╎│•⟢.harisial
╎│•⟢.harinaga
╎│•⟢.peruntungan
╎│•⟢.weton
╎│•⟢.karakter
╎│•⟢.masasubur
╎│•⟢.zodiak
╎│•⟢.wangy
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU STICKER* 」
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢.s
╎│•⟢.smeme
╎│•⟢.swm
╎│•⟢.qc
╎│•⟢.ttp
╎│•⟢.attp
╎│•⟢.mukelu
╎│•⟢.gurastick
╎│•⟢.lovestick
╎│•⟢.dogestick
╎│•⟢.paimon
╎│•⟢.tele
╎│•⟢.cry
╎│•⟢.kill
╎│•⟢.hug
╎│•⟢.pat
╎│•⟢.lick
╎│•⟢.kiss
╎│•⟢.bite
╎│•⟢.yeet
╎│•⟢.bully
╎│•⟢.bonk
╎│•⟢.wink
╎│•⟢.poke
╎│•⟢.nom
╎│•⟢.slap
╎│•⟢.smile
╎│•⟢.wave
╎│•⟢.awoo
╎│•⟢.blush
╎│•⟢.smug
╎│•⟢.glomp
╎│•⟢.happy
╎│•⟢.dance
╎│•⟢.cringe
╎│•⟢.cuddle
╎│•⟢.highfive
╎│•⟢.handhold
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU FUN* 」
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢.bucinserti
╎│•⟢.pacarsertifikat
╎│•⟢.tololsertifikat
╎│•⟢.bisakah
╎│•⟢.bagaimanakah
╎│•⟢.apakah
╎│•⟢.kapankah
╎│•⟢.cekwatak
╎│•⟢.cekhobby
╎│•⟢.cekmenek
╎│•⟢.cekkontol
╎│•⟢.cebelapaimutciaku
╎│•⟢.tiktokghea
╎│•⟢.tiktokpanrika
╎│•⟢.tiktokbocil
╎│•⟢.tiktokkayes
╎│•⟢.cosplayangel
╎│•⟢.videogalau
╎│•⟢.wibuvid
╎│•⟢.chinese
╎│•⟢.hijab
╎│•⟢.indo
╎│•⟢.japanese
╎│•⟢.korean
╎│•⟢.malay
╎│•⟢.randomgirl
╎│•⟢.randomboy
╎│•⟢.thai
╎│•⟢.vietnamese
╎│•⟢.cecan
╎│•⟢.cogan
╎│•⟢.hacker
╎│•⟢.pubg
╎│•⟢.boneka
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU GAME* 」
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢.tebakkata
╎│•⟢.matematika
╎│•⟢.tekateki
╎│•⟢.susunkata
╎│•⟢.tebakkimia
╎│•⟢.tebakgambar
╎│•⟢.tebaklirik
╎│•⟢.caklontong
╎│•⟢.family100
╎│•⟢.tebaklirik
╎│•⟢.shop
╎│•⟢.claim
╎│•⟢.transfer
╎│•⟢.limit
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *ANONYMOUS* 」
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢.confes
╎│•⟢.menfes
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU CONVERT* 」
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢.kodebahasa
╎│•⟢.tts
╎│•⟢.toimg
╎│•⟢.tovn
╎│•⟢.tovideo
╎│•⟢.tomp3
╎│•⟢.togif
╎│•⟢.tourl
╎│•⟢.terbalik
╎│•⟢.bass
╎│•⟢.deep
╎│•⟢.earrape
╎│•⟢.fast
╎│•⟢.fat
╎│•⟢.nightcore
╎│•⟢.reverse
╎│•⟢.robot
╎│•⟢.slow
╎│•⟢.smooth
╎│•⟢.tupai
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU ISLAMIC* 」
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢.kisahnabi
╎│•⟢.alquran ❌
╎│•⟢.islamic
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU ANIME* 」
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢.anime
╎│•⟢.randomanime
╎│•⟢.naotomori
╎│•⟢.loli
╎│•⟢.cosplay
╎│•⟢.husbu
╎│•⟢.milf
╎│•⟢.wallml
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU TEXT PRO* 」
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢.pornhub
╎│•⟢.glitch
╎│•⟢.avenger
╎│•⟢.space
╎│•⟢.ninjalogo
╎│•⟢.marvelstudio
╎│•⟢.lionlogo
╎│•⟢.wolflogo
╎│•⟢.steel3d
╎│•⟢.wallgravity
╎│•⟢.blackpink
╎│•⟢.neon
╎│•⟢.greenneon
╎│•⟢.advanceglow
╎│•⟢.futureneon
╎│•⟢.sandwriting
╎│•⟢.sandsummer
╎│•⟢.sandengraved
╎│•⟢.metaldark
╎│•⟢.neonlight
╎│•⟢.holographic
╎│•⟢.text1917
╎│•⟢.minion
╎│•⟢.deluxesilver
╎│•⟢.newyearcard
╎│•⟢.bloodfrosted
╎│•⟢.halloween
╎│•⟢.jokerlogo
╎│•⟢.fireworksparkle
╎│•⟢.natureleaves
╎│•⟢.bokeh
╎│•⟢.toxic
╎│•⟢.strawberry
╎│•⟢.bok3d
╎│•⟢.breakwall
╎│•⟢.icecold
╎│•⟢.luxury
╎│•⟢.cloud
╎│•⟢.summersand
╎│•⟢.horrorblood
╎│•⟢.thunder
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈「 *MENU RANDOM* 」
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢.nsfw
╎│•⟢.walpaper
╎│•⟢.memeindo
╎│•⟢.ppcp
╎│•⟢.pantun
╎│•⟢.motivasi
╎│•⟢.katabijak
╎│•⟢.dilanquote
╎│•⟢.truth
╎│•⟢.dare
╎│•⟢.infocuaca
╎│•⟢.mountain
╎│•⟢.programing
╎│•⟢.technology
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU SETTINGS* 」
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢.setbio
╎│•⟢.setppbot ❌
╎│•⟢.setnamebot
╎│•⟢.clearsesi
╎│•⟢.delsampah
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU STORAGE* 」
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢.addvn
╎│•⟢.delvn
╎│•⟢.listvn
╎│•⟢.addimage
╎│•⟢.delimage
╎│•⟢.listimage
╎│•⟢.addvideo
╎│•⟢.delvideo
╎│•⟢.listvideo
╎│•⟢.addsticker
╎│•⟢.delsticker
╎│•⟢.liststicker
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU OWER* 」
╎╭୧⍤⃝───────────┈◦•◦❥•◦
╎│•⟢.getcase
╎│•⟢.addprem
╎│•⟢.delprem
╎│•⟢.public
╎│•⟢.self
╎│•⟢.addsewa
╎│•⟢.listsewa
╎│•⟢.ceksewa
╎│•⟢.bcgc
╎│•⟢.join
╎│•⟢.joincall
╎│•⟢.adderror
╎│•⟢.delerror
╎│•⟢.clearerror
╎│•⟢.listerror
╎│•⟢.addcmdowner
╎│•⟢.delcmdowner
╎│•⟢.listcmdowner
╎│•⟢.addcmdprem
╎│•⟢.delcmdprem
╎│•⟢.listcmdprem
╎│•⟢.addcmdlimit
╎│•⟢.delcmdlimit
╎│•⟢.listcmdlimit
╎꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
`
}
  



let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
console.log(chalk.bgGreen(color("[  UPDATE ]", "black")),chalk.white(`${__filename}`) )
	delete require.cache[file]
	require(file)
})


