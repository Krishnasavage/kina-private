const { makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');
const { allowedGroupId } = require('./config');
const { hello } = require('./hello');
const { kick } = require('./kick');
const { sticker } = require('./sticker');
const { help } = require('./help');

// Define the startBot function
async function startBot() {
    const { state, saveCreds } = await useMultiFileAuthState('./auth_info');
    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: true,
    });

    // Handle connection events
    sock.ev.on('connection.update', (update) => {
        const { connection } = update;
        if (connection === 'close') {
            console.log('Koneksi terputus. Mencoba menyambungkan kembali...');
            startBot(); // Recursively restart the bot if the connection is closed
        } else if (connection === 'open') {
            console.log('Bot berhasil terhubung ke WhatsApp!');
        }
    });

    // Save credentials to maintain session
    sock.ev.on('creds.update', saveCreds);

    // Handle incoming messages
    sock.ev.on('messages.upsert', async (msg) => {
        const message = msg.messages[0];
        if (!message || !message.message) return;

        const groupId = message.key.remoteJid;

        // Check if the group ID is allowed
        if (groupId !== allowedGroupId) {
            console.log(`Message received from unallowed group: ${groupId}`);
            return;
        }

        const content = message.message.conversation || message.message.extendedTextMessage?.text;

        // Command: .hello
        if (content?.toLowerCase() === '.hello') {
            await hello(sock, groupId);
        }

        // Command: .kick
        if (content?.toLowerCase() === '.kick') {
            await kick(sock, groupId, message);
        }

        // Command: .sticker
        if (content?.toLowerCase() === '.sticker' && message.message.imageMessage) {
            await sticker(sock, groupId, message);
        }

        // Command: .help
        if (content?.toLowerCase() === '.help') {
            await help(sock, groupId);
        }
    });
}

// Call the startBot function to initialize the bot
startBot();
