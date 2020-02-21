const logger = require('./logger');
const { Users } = require('../utils/users');
const socket = {};
socket.config = (server) => {
    let users = new Users();
    const io = require('socket.io')(server);
    socket.io = io;
    io.sockets.on('connection', (socket) => {
        var address = socket.request.connection.remoteAddress;
        logger.info(`New Connection`, { address, id: socket.id })
        socket.on('leave', (params) => {
            logger.info('leaved', { ...params, address, id: socket.id, method: 'leave' })
            socket.leave(params.room);
        });

        socket.on('join', (params, cb) => {
            if (!params.room) {
                params.room = 'public';
            }

            if (!params.username || !params.room) {
                cb('Bad Request')
                logger.warn('Bad Request', { ...params, method: 'join' })
            }
            logger.info('Joined', { ...params, address, id: socket.id, method: 'join' })

            socket.username = params.username;
            socket.join(`${params.room}`);
            users.removeUser(socket.id);
            users.addUser(socket.id, params.username, params.room);
            io.to(params.room).emit('updateUserList', users.getUserList(params.room));
            socket.emit('is_online', `Welcome to the m3ssenger app, ${socket.username} !`);
            socket.broadcast.to(params.room).emit('is_online', `🔵 ${params.username} has joined.`);

            cb();
        });

        socket.on('disconnect', () => {
            logger.info('disconnected', { address, id: socket.id, method: 'disconnect' })
            var user = users.removeUser(socket.id);
            if (user) {
                io.to(user.room).emit('updateUserList', users.getUserList(user.room));
                io.to(user.room).emit('is_online', '🔴 ' + socket.username + ' left the chat...');
            }
        });

        socket.on('newMessage', (message) => {
            var user = users.getUser(socket.id);
            if (user) {
                io.to(`${user.room}`).emit('newMessage', message);
                logger.info('newMessage', { user, address, id: socket.id, method: 'newMessage', message: JSON.stringify(message) })
            }
        });

    });
}

module.exports = socket;
