// hello.js
async function hello(sock, groupId) {
    await sock.sendMessage(groupId, { text: 'Hello from the bot!' });
}

module.exports = { hello };
