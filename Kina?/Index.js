const { makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');
const fs = require('fs');

let commandPrefix = '.';
let sock;
let groupMuted = false; // Status mute grup

async function startBot() {
    const { state, saveCreds } = await useMultiFileAuthState('./auth_info');
    sock = makeWASocket({ auth: state, printQRInTerminal: true });
    if(!sock, creds,authState, registered)
let gameActive = false;
let currentWord = '';
let currentClue = '';
let currentPlayer = '';
let playersScores = {};

const wordsAndClues = [
    { word: 'kucing', clue: 'Hewan peliharaan yang suka mengeong.' },
    { word: 'buku', clue: 'Benda yang berisi tulisan dan dibaca.' },
    { word: 'mobil', clue: 'Kendaraan yang digunakan untuk transportasi darat.' },
    { word: 'pantai', clue: 'Tempat yang ada pasir dan laut.' },
    { word: 'gunung', clue: 'Tempat tinggi yang biasanya terdapat salju di puncaknya.' },
    // Tambahkan kata dan petunjuk lainnya
];

const startGame = () => {
    const randomIndex = Math.floor(Math.random() * wordsAndClues.length);
    const selectedWord = wordsAndClues[randomIndex];
    currentWord = selectedWord.word;
    currentClue = selectedWord.clue;
    gameActive = true;
    return currentClue;
};

const endGame = () => {
    gameActive = false;
    return `Permainan selesai! Kata yang benar adalah: ${currentWord}`;
};

// Perintah untuk memulai permainan

    const allowedGroupId = '120363314990978054@g.us'; // ID grup yang diperbolehkan
    let antiLinkEnabled = false; // Status AntiLink default mati

    sock.ev.on('creds.update', saveCreds);

    // Welcome Message
    sock.ev.on('group-participants.update', async (update) => {
        const { id, participants, action } = update;
        if (id !== allowedGroupId) return; // Validasi grup

        if (action === 'add') {
            const newMember = participants[0];
            const welcomeMessage = `Selamat datang @${newMember.split('@')[0]} di grup ini! Jangan lupa baca deskripsi grup.`;
            await sock.sendMessage(id, {
                text: welcomeMessage,
                mentions: [newMember],
            });
        }
    });

    // Pesan Masuk
    sock.ev.on('messages.upsert', async (msg) => {
        const message = msg.messages[0];
        if (!message || !message.message) return;

        const sender = message.key.remoteJid;
        const isGroup = sender.endsWith('@g.us');
        const content = message.message.conversation || message.message.extendedTextMessage?.text;

        const sendQuotedMessage = (text) => sock.sendMessage(sender, { text, quoted: message });

        // Validasi hanya untuk grup tertentu
        if (isGroup && sender !== allowedGroupId) return;

        // Toggle AntiLink
        if (content?.toLowerCase() === `${commandPrefix}antilink`) {
            antiLinkEnabled = !antiLinkEnabled;
            return sendQuotedMessage(`Fitur AntiLink telah ${antiLinkEnabled ? 'diaktifkan' : 'dinonaktifkan'}.`);
        }

        // AntiLink
        if (isGroup && antiLinkEnabled && content && content.includes('http') && !message.key.fromMe) {
            try {
                await sock.groupParticipantsUpdate(sender, [message.key.participant], 'remove');
                await sendQuotedMessage('Link tidak diizinkan di grup ini. Anda telah dikeluarkan.');
            } catch (err) {
                sendQuotedMessage('Gagal mengeluarkan anggota. Pastikan bot memiliki hak admin.');
            }
        }

        // Mute Group
        if (content?.toLowerCase() === `${commandPrefix}mute`) {
            if (!isGroup) return sendQuotedMessage('Perintah ini hanya dapat digunakan di grup.');
            groupMuted = !groupMuted;
            return sendQuotedMessage(`Grup telah ${groupMuted ? 'dimute' : 'diunmute'}.`);
        }

        if (groupMuted && !message.key.fromMe) {
            // Hapus pesan yang dikirim selama mute aktif
            return await sock.sendMessage(sender, {
                delete: {
                    remoteJid: sender,
                    fromMe: false,
                    id: message.key.id,
                    participant: message.key.participant,
                },
            });
        }

        // Kick All
                // Kick All Command
        if (content?.toLowerCase() === `${commandPrefix}kickall`) {
            if (!isGroup) return sendQuotedMessage('Perintah ini hanya dapat digunakan di grup.');

            const ownerNumber = '6285792482210@s.whatsapp.net'; // Ganti dengan nomor owner bot

            if (message.key.participant !== ownerNumber) {
                return sendQuotedMessage('Hanya owner bot yang dapat menggunakan perintah ini.');
            }

            try {
                const groupMetadata = await sock.groupMetadata(sender);
                const participants = groupMetadata.participants;

                const nonAdmins = participants.filter(p => !p.admin); // Kick hanya non-admins
                const nonAdminIds = nonAdmins.map(p => p.id);

                if (nonAdminIds.length === 0) {
                    return sendQuotedMessage('Tidak ada anggota non-admin untuk dikeluarkan.');
                }

                // Kick semua non-admin
                for (const targetId of nonAdminIds) {
                    await sock.groupParticipantsUpdate(sender, [targetId], 'remove');
                }

                sendQuotedMessage('Semua anggota non-admin telah dikeluarkan dari grup.');
            } catch (err) {
                console.error('Error pada fitur kickall:', err);
                return sendQuotedMessage('Terjadi kesalahan saat mencoba mengeluarkan anggota.');
            }
        }
if (content?.toLowerCase() === `${commandPrefix}tebakkata`) {
    if (!isGroup) return sendQuotedMessage('Permainan ini hanya bisa dimainkan di grup.');

    if (gameActive) {
        return sendQuotedMessage('Permainan sedang berlangsung! Tunggu sampai selesai.');
    }

    currentPlayer = message.key.participant; // Menyimpan player yang memulai permainan
    const clue = startGame(); // Mulai permainan dan ambil petunjuk

    return sendQuotedMessage(`Permainan Tebak Kata dimulai! Petunjuk: "${clue}". Tebak kata yang tepat!`);
}

// Perintah untuk menjawab tebakan
if (content?.toLowerCase().startsWith(`${commandPrefix}jawabkata`)) {
    if (!gameActive) return sendQuotedMessage('Permainan Tebak Kata belum dimulai.');

    const answer = content.split(' ')[1];

    if (!answer) {
        return sendQuotedMessage('Tolong berikan jawaban Anda setelah perintah.');
    }

    if (answer.toLowerCase() === currentWord.toLowerCase()) {
        playersScores[currentPlayer] = (playersScores[currentPlayer] || 0) + 1; // Menambahkan skor
        const nextClue = startGame(); // Mengambil petunjuk baru untuk permainan berikutnya
        return sendQuotedMessage(`Selamat @${currentPlayer.split('@')[0]}! Jawaban Anda benar! Poin Anda: ${playersScores[currentPlayer]}. Petunjuk baru: "${nextClue}".`);
    } else {
        return sendQuotedMessage('Jawaban Anda salah! Coba lagi!');
    }
}

// Perintah untuk melihat skor pemain
if (content?.toLowerCase() === `${commandPrefix}skor`) {
    const playerScore = playersScores[currentPlayer] || 0;
    return sendQuotedMessage(`Skor Anda saat ini: ${playerScore}`);
}

// Perintah untuk mengakhiri permainan
if (content?.toLowerCase() === `${commandPrefix}akhiri`) {
    if (!gameActive) return sendQuotedMessage('Permainan belum dimulai.');

    const finalScore = playersScores[currentPlayer] || 0;
    return sendQuotedMessage(`${endGame()} Skor akhir Anda: ${finalScore}`);
}

        // Kick
        if (content?.toLowerCase().startsWith(`${commandPrefix}kick`)) {
            if (!isGroup) return sendQuotedMessage('Perintah ini hanya dapat digunakan di grup.');

            const args = content.split(' ');
            const targetTag = args[1]?.replace('@', '') + '@s.whatsapp.net';

            if (!targetTag || !args[1]) {
                return sendQuotedMessage('Harap tag anggota yang ingin dikeluarkan, contoh: *.kick @username*');
            }

            try {
                await sock.groupParticipantsUpdate(sender, [targetTag], 'remove');
                sendQuotedMessage(`@${targetTag.split('@')[0]} telah dikeluarkan.`);
            } catch (err) {
                sendQuotedMessage('Terjadi kesalahan saat mencoba mengeluarkan anggota.');
            }
        }

        // Hidetag
        if (content?.toLowerCase().startsWith(`${commandPrefix}hidetag`)) {
            if (!isGroup) return sendQuotedMessage('Perintah ini hanya dapat digunakan di grup.');

            const text = content.split(' ').slice(1).join(' ') || 'Hidetag!';
            const groupMetadata = await sock.groupMetadata(sender);
            const mentions = groupMetadata.participants.map((p) => p.id);

            return sock.sendMessage(sender, { text, mentions });
        }

        // Add
        if (content?.toLowerCase().startsWith(`${commandPrefix}add`)) {
            if (!isGroup) return sendQuotedMessage('Perintah ini hanya dapat digunakan di grup.');

            const args = content.split(' ');
            const targetNumber = args[1]?.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

            if (!targetNumber || !args[1]) {
                return sendQuotedMessage('Harap masukkan nomor yang ingin ditambahkan, contoh: *.add 6281234567890*');
            }

            try {
                await sock.groupParticipantsUpdate(sender, [targetNumber], 'add');
                sendQuotedMessage(`@${targetNumber.split('@')[0]} telah ditambahkan ke grup.`);
            } catch (err) {
                sendQuotedMessage('Terjadi kesalahan saat mencoba menambahkan anggota.');
            }
        }

        // Kiss Command
        if (content?.toLowerCase() === `${commandPrefix}kiss`) {
            if (!isGroup) return sendQuotedMessage('Perintah ini hanya dapat digunakan di grup.');

            try {
                const groupMetadata = await sock.groupMetadata(sender);
                const participants = groupMetadata.participants;
                
                // Pilih peserta secara acak
                const randomParticipant = participants[Math.floor(Math.random() * participants.length)].id;

                // Kirim pesan kiss
                return sock.sendMessage(sender, {
                    text: `Muach! 💋 @${randomParticipant.split('@')[0]} telah menerima ciuman!`,
                    mentions: [randomParticipant],
                });
            } catch (err) {
                console.error('Error pada fitur kiss:', err);
                return sendQuotedMessage('Terjadi kesalahan saat mencoba mengirim ciuman.');
            }
        }

        // Menu Command
        if (content?.toLowerCase() === `${commandPrefix}menu`) {
            return sendQuotedMessage(`
*Menu Bot (Prefix: ${commandPrefix}):*
1. ${commandPrefix}menu - Menampilkan menu
2. ${commandPrefix}kick - Mengeluarkan anggota
3. ${commandPrefix}add - Menambahkan anggota
4. ${commandPrefix}antilink - Hidupkan/Matikan AntiLink
5. ${commandPrefix}tagall - Tag semua anggota
6. ${commandPrefix}hidetag [text] - Kirim pesan tanpa terlihat
7. ${commandPrefix}mute - Hidupkan/Matikan mute grup
8. ${commandPrefix}kickall - Mengeluarkan semua anggota non-admin
9. ${commandPrefix}kiss - Mengirim pesan "Muach!"
            `);
        }
    });
}

// Start the bot
startBot();
