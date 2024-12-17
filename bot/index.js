const { makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');
const readline = require('readline');
const pino = require("pino");
async function startBot() {
    const { state, saveCreds } = await useMultiFileAuthState('./auth_info');
    const sock = makeWASocket({
        auth: state,
        
        logger: pino({level: "fatal"}),
    });

    const askQuestion = (query) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        return new Promise((resolve) => rl.question(query, (ans) => {
            rl.close();
            resolve(ans);
        }));
    };

    try {
        // Masukkan nomor telepon
        const phoneNumber = await askQuestion('Masukkan nomor telepon Anda (dengan kode negara, contoh: +6281234567890): ');

        console.log(`Meminta kode pairing untuk nomor: ${phoneNumber}...`);
        const pairingCode = await sock.requestPairingCode(phoneNumber);

        console.log('Kode pairing Anda:', pairingCode);
        console.log('Masukkan kode ini ke WhatsApp untuk menyelesaikan pairing.');

    } catch (err) {
        console.error('Terjadi kesalahan:', err.message);
    }

    sock.ev.on('creds.update', saveCreds);

    sock.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            console.log('Koneksi terputus:', lastDisconnect.error?.output?.statusCode || 'Unknown');
        } else if (connection === 'open') {
            console.log('Bot terhubung ke WhatsApp!');
        }
    });
}

startBot();
