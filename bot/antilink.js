const fs = require('fs');
const path = require('path');

// Path untuk menyimpan status AntiLink
const statusFilePath = path.join(__dirname, 'antilink_status.json (3)');

// Fungsi untuk memeriksa status AntiLink
const isAntiLinkActive = () => {
    if (fs.existsSync(statusFilePath)) {
        const status = JSON.parse(fs.readFileSync(statusFilePath, 'utf-8'));
        return status.active || false;
    }
    return false;
};

// Fungsi untuk mengaktifkan AntiLink
const activateAntiLink = () => {
    const status = { active: true };
    fs.writeFileSync(statusFilePath, JSON.stringify(status));
};

// Fungsi untuk menonaktifkan AntiLink
const deactivateAntiLink = () => {
    const status = { active: false };
    fs.writeFileSync(statusFilePath, JSON.stringify(status));
};

// Fungsi untuk menangani AntiLink
const handleAntiLink = async (sock, message, sender) => {
    if (isAntiLinkActive()) {
        const content = message.message.conversation || message.message.extendedTextMessage?.text;
        if (content && content.includes('http') && !message.key.fromMe) {
            await sock.groupParticipantsUpdate(sender, [message.key.participant], 'remove');
            await sock.sendMessage(sender, { text: 'Link tidak diizinkan di grup ini. Anda telah dikeluarkan.' });
            await sock.sendMessage(message.key.participant, { text: 'KENA KICK YA DEK YA?, KASIAN' });
        }
    }
};

module.exports = {
    handleAntiLink,
    activateAntiLink,
    deactivateAntiLink,
};
