// help.js
async function help(sock, groupId) {
    const helpText = `
╭───❨ *Bantuan MD Bot* ❩
│
│ *1.* *.hello* - Menyapa bot.
│ *2.* *.kick* - Kick user yang menandai bot.
│ *3.* *.sticker* - Kirim gambar sebagai stiker.
│ *4.* *.help* - Menampilkan bantuan.
│
╰─────────────────`;

    await sock.sendMessage(groupId, { text: helpText });
}

module.exports = { help };
