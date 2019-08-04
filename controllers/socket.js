
const socket = {};
socket.config = (server) => {
    const io = require('socket.io')(server);
    io.sockets.on('connection', (socket) => {
        socket.on('join', (username) => {
            socket.username = username;
            io.emit('is_online', '🔵 ' + socket.username + ' join the chat..');
        });

        socket.on('disconnect', (username) => {
            io.emit('is_online', '🔴 ' + socket.username + ' left the chat..');
        });

        socket.on('chat_message', (message) => {
            io.emit('chat_message', message);
        });

    });
}

module.exports = socket;
