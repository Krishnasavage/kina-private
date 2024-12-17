const { Button, ButtonStyle } = require('@whiskeysockets/baileys');

// Fungsi untuk mengirim pesan sambutan dengan tombol
const sendWelcomeMessage = async (sock, groupId, participant) => {
    const welcomeMessage = `Selamat datang, @${participant.split('@')[0]}! 🎉
Klik tombol di bawah ini untuk mulai!`;

    const buttonMessage = {
        text: welcomeMessage,
        buttons: [
            {
                buttonId: 'join_group',
                buttonText: { displayText: 'Bergabung ke Grup' },
                type: 1
            },
            {
                buttonId: 'activate_antilink',
                buttonText: { displayText: 'Aktifkan AntiLink' },
                type: 1
            }
        ],
        footer: 'Klik tombol di bawah ini untuk melanjutkan',
        mentions: [participant]
    };

    await sock.sendMessage(groupId, buttonMessage);
};

// Fungsi untuk menangani tombol Welcome
const handleWelcomeButton = async (sock, button) => {
    const groupId = button.chatId;
    const participant = button.sender;

    if (button.buttonId === 'join_group') {
        await sock.sendMessage(groupId, { text: `@${participant.split('@')[0]} telah memilih untuk bergabung!`, mentions: [participant] });
    } else if (button.buttonId === 'activate_antilink') {
        await sock.sendMessage(groupId, { text: 'Fitur AntiLink diaktifkan!' });
    }
};

module.exports = { sendWelcomeMessage, handleWelcomeButton };
