const { makeWASocket, useMultiFileAuthState, downloadMediaMessage, messageType } = require('@whiskeysockets/baileys');
const moment = require('moment-timezone');
const fs = require('fs');
const path = require('path');
const ffmpeg = require('fluent-ffmpeg');

let antiLinkEnabled = false; // Status AntiLink default: mati
let commandPrefix = '.'; // Awalan default
const allowedGroupIds = ['120363314990978054@g.us']; // Ganti dengan ID grup yang diizinkan

let sock;

async function startBot() {
    const { state, saveCreds } = await useMultiFileAuthState('./auth_info');
    const sock = makeWASocket({ auth: state, printQRInTerminal: true });
const botId = sock.user.id;  // ID bot yang benar
    sock.ev.on('creds.update', saveCreds);

    // Welcome Message
    sock.ev.on('group-participants.update', async (update) => {
        if (!allowedGroupIds.includes(update.id)) return; // Cek apakah grup diizinkan

        if (update.action === 'add') {
            const newMemberId = update.participants[0];
            const groupMetadata = await sock.groupMetadata(update.id);

            const welcomeMessage = `Selamat datang @${newMemberId.split('@')[0]} di grup *${groupMetadata.subject}*! Semoga betah ya! 😊`;
            await sock.sendMessage(update.id, {
                text: welcomeMessage,
                mentions: [newMemberId],
            });
        }
    });

    // Pesan masuk
    sock.ev.on('messages.upsert', async (msg) => {
        const message = msg.messages[0];
        if (!message || !message.message) return;

        const sender = message.key.remoteJid;
        const isGroup = sender.endsWith('@g.us');
        const content = message.message.conversation || message.message.extendedTextMessage?.text;

        // Batasi ke grup tertentu
        if (isGroup && !allowedGroupIds.includes(sender)) return;

        const sendQuotedMessage = (text) => sock.sendMessage(sender, { text, quoted: message });

        // Fungsi untuk mengecek status admin
        const isUserAdmin = async (groupMetadata, userId) => {
    const participant = groupMetadata.participants.find((p) => p.id === userId);
    return participant && (participant.admin === 'admin' || participant.admin === 'superadmin');
};


        // AntiLink
        if (isGroup && antiLinkEnabled && content?.includes('http') && !message.key.fromMe) {
            try {
                const groupMetadata = await sock.groupMetadata(sender);
                const botIsAdmin = await isUserAdmin(groupMetadata, sock.user.id);

                if (!botIsAdmin) {
                    return sendQuotedMessage('Bot harus menjadi admin untuk mengaktifkan fitur AntiLink.');
                }

                // Mengeluarkan pengirim pesan yang mengandung link
                await sock.groupParticipantsUpdate(sender, [message.key.participant], 'remove');
                sendQuotedMessage(`Link tidak diizinkan di grup ini. @${message.key.participant.split('@')[0]} telah dikeluarkan.`);
            } catch (err) {
                console.error('Error AntiLink:', err);
                sendQuotedMessage('Gagal mengeluarkan anggota. Pastikan bot memiliki hak admin.');
            }
        }

        // Perintah .antilink
        if (content?.toLowerCase() === `${commandPrefix}antilink`) {
            antiLinkEnabled = !antiLinkEnabled;
            sendQuotedMessage(`Fitur AntiLink telah ${antiLinkEnabled ? 'diaktifkan' : 'dinonaktifkan'}.`);
        }

        // Perintah .kick
        if (content?.toLowerCase().startsWith(`${commandPrefix}kick`)) {
    if (!isGroup) return sendQuotedMessage('Perintah ini hanya dapat digunakan di grup.');

    

        // Perintah .menu
        if (content?.toLowerCase() === `${commandPrefix}menu`) {
            return sendQuotedMessage(`
*Menu Bot (Prefix: ${commandPrefix})*
1. ${commandPrefix}menu - Menampilkan menu
2. ${commandPrefix}kick - Mengeluarkan anggota
3. ${commandPrefix}antilink - Hidupkan/Matikan AntiLink
4. ${commandPrefix}tagall - Tag semua anggota (admin saja)
5. ${commandPrefix}quote - Menampilkan kutipan acak
6. ${commandPrefix}groupinfo - Informasi grup
7. ${commandPrefix}count - Hitung jumlah anggota grup
8. ${commandPrefix}sticker - Ubah media menjadi stiker
9. ${commandPrefix}hidetag
            `);
        }

        // Perintah .sticker
        

if (content?.toLowerCase().startsWith(`${commandPrefix}hidetag`)) {
            if (!isGroup) return sendQuotedMessage('Perintah ini hanya dapat digunakan di grup.');

            try {
                const groupMetadata = await sock.groupMetadata(sender);
                const isAdmin = await isUserAdmin(groupMetadata, message.key.participant);

                if (!isAdmin) return sendQuotedMessage('Hanya admin yang dapat menggunakan perintah ini.');

                const hidetagMessage = content.split(' ').slice(1).join(' ');
                if (!hidetagMessage) return sendQuotedMessage('Harap masukkan teks yang ingin dikirim. Contoh: `.hidetag Selamat pagi semua!`');

                const mentions = groupMetadata.participants.map((p) => p.id);
                return sock.sendMessage(sender, { text: hidetagMessage, mentions });
            } catch (err) {
                console.error('Error pada fitur hidetag:', err);
                sendQuotedMessage('Terjadi kesalahan saat menggunakan perintah hidetag.');
            }
        }

        // Pesan Selamat Pagi (berdasarkan waktu lokal Jakarta)
        const now = moment().tz('Asia/Jakarta').format('HH:mm');
        if (now === '06:00') {
            const groupMetadata = await sock.groupMetadata(sender);
            const mentions = groupMetadata.participants.map((p) => p.id);
            sock.sendMessage(sender, { text: `Selamat pagi semuanya! 🌅`, mentions });
        }
    })
}

startBot();

