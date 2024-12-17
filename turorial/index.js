const { default: makeWASocket, useMultiFileAuthState } =
require  ("@whiskeysockets/baileys")
const pino = require ("pino")
const readline = require ("readline")

const pairing = process.argv.includes("--pairing")

   async function connectToWhatsapp() {
     const auth = await useMultiFileAuthState("sessions")
     const socket = makeWASocket ({
       printQRInTerminal: !pairing,
       browser: ["MacOs", "Safari", "1.0.0"],
       auth: auth.state,
       logger: pino({ level: "silent" })
     })
     if (pairing && !socket.authState.creds.registered) {
       const question = (pertanyaan) => new Promise((resolve) => {
         const rl = readline.createInterface({
           input: process.stdin,
           output: process.stdout
         })
         rl.question(pertanyaan, (answer) => {
           resolve(answer),
           rl.close()
         })
       })
       const nomorWa = await question("Masukan Nomor Telepon Anda :")
       setTimeout(async function() {
         const pairingcode = await socket.requestPairingCode(nomorWa)
         console.log("Pairing Code Anda : ", pairingcode)
       }, 3000)
     }
     socket.ev.on("creds.update", auth. saveCreds)
     socket.ev.on("connection.update", ({ connection }) => {
     if (connection === "close") connectToWhatsapp()
     if (connection === "open") console.log("Bot Lu Idup Sat")
     })
     case'desah':{
       reply("Hai, ada yg bisa saya bantu?")
   }
     break
   }
   connectToWhatsapp()