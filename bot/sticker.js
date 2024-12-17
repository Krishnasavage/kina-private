const fs = require('fs');
const path = require('path');
const ffmpeg = require('fluent-ffmpeg');
const { writeFile } = require('fs/promises');

async function sticker(sock, groupId, message) {
    try {
        const messageType = Object.keys(message.message)[0];
        const imageMessage = message.message.imageMessage;

        if (messageType === 'imageMessage' && imageMessage.caption?.toLowerCase() === '.sticker') {
            console.log('Mendeteksi gambar dengan caption ".sticker"...');

            // Unduh media gambar
            const mediaBuffer = await sock.downloadMediaMessage(message, 'buffer');
            if (!mediaBuffer) throw new Error('Gagal mengunduh gambar.');

            const tempFilePath = path.join(__dirname, 'tempImage.jpg');
            await writeFile(tempFilePath, mediaBuffer);

            console.log('Gambar berhasil diunduh, mengonversi menjadi stiker...');

            // Mengonversi gambar menjadi stiker
            const stickerFilePath = path.join(__dirname, 'sticker.webp');
            await new Promise((resolve, reject) => {
                ffmpeg(tempFilePath)
                    .outputOptions(['-vf', 'scale=512:512:force_original_aspect_ratio=increase,crop=512:512'])
                    .format('webp')
                    .on('end', resolve)
                    .on('error', reject)
                    .save(stickerFilePath);
            });

            // Kirim stiker ke pengirim
            await sock.sendMessage(groupId, {
                sticker: { url: stickerFilePath },
                caption: 'Ini adalah sticker yang kamu buat!'
            });

            // Hapus file sementara
            fs.unlinkSync(tempFilePath);
            fs.unlinkSync(stickerFilePath);

            console.log('Sticker berhasil dikirim.');
        }
    } catch (err) {
        console.error('Terjadi kesalahan saat membuat sticker:', err.message);
    }
}

module.exports = { sticker };
