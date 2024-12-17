require("./Databases/module.js")

//========== Setting Owner ==========//
global.no = "6285693403858"
global.owner = "ᴘᴜᴛᴢᴢ - ᴍᴏᴏɴ ᴛᴇᴄʜ"
global.bot = "ᴀʀᴋ ᴍᴏᴏɴ"
global.v = "1.0.0"
global.welcome = false
global.autoread = false
global.anticall = false

//========= Setting Url Foto =========//
global.image = "https://i.postimg.cc/1tHyw0wH/zerodev.jpg"

global.msg = {
"error": "Maaf Adanya Sistem Error Pada Fitur Ini!!",
"done": "Berhasil🕊", 
"wait": "Wait To Proses🕊", 
"owner": "`You Now Owner`", 
"developer": "`You Now Development`"
}
global.own = "ᴘᴜᴛᴢᴢ - ᴍᴏᴏɴ ᴛᴇᴄʜ"
global.log = "𖣖"
global.ch = "https://whatsapp.com/channel/0029VapQbYOJENy038ZzUP0o"
global.bot = "ᴀʀᴋ ᴍᴏᴏɴ"
global.ver = "1.0.0"
global.wa = "https://wa.me/6285693403858"
global.logo = "https://i.postimg.cc/yxckxJsc/Logo.png"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})