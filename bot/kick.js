async function kick(sock, groupId, message) {
    try {
        // Mendapatkan pengirim dan tag yang disebutkan
        const sender = message.key.remoteJid;
        const tag = message.message.extendedTextMessage?.contextInfo.mentionedJid[0];

        // Mendapatkan informasi peserta grup
        const participants = await sock.groupMetadata(groupId).then((metadata) => metadata.participants);
        const isAdmin = participants.some((participant) => participant.id === sender && participant.isAdmin);

        // Cek apakah pengirim adalah admin
        if (!isAdmin) {
            await sock.sendMessage(groupId, { text: 'Hanya admin yang dapat menggunakan perintah ini!' });
            return;
        }

        // Cek apakah ada tag pengguna dan pengirim bukan diri mereka sendiri
        if (tag && sender !== tag) {
            // Kick pengguna yang disebutkan
            await sock.groupRemove(groupId, [tag]);

            // Kirim pesan di grup bahwa user telah dikick
            await sock.sendMessage(groupId, { text: `User ${tag} has been kicked.` });

            // Kirim pesan pribadi ke orang yang dikick
            await sock.sendMessage(tag, { text: 'KENA KICK YA DEK YA?, KASIAN' });
        } else {
            await sock.sendMessage(groupId, { text: `Anda tidak dapat menendang diri sendiri atau tidak ada pengguna yang valid untuk ditendang.` });
        }
    } catch (error) {
        console.error('Error kicking user:', error);
    }
}

module.exports = { kick };
