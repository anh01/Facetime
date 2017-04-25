const express = require('express');

const app = express();
const server = require('http').Server(app);

const io = require('socket.io')(server);

server.listen(3000, () => console.log('Server started'));

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => res.render('home'));

const arrId = [];

io.on('connection', socket => {
    socket.broadcast.emit('NEW_SOCKET', socket.id);
    arrId.push(socket.id);
    socket.emit('FIRST_TIME_LIST', arrId);
    socket.on('disconnect', () => {
        const index = arrId.indexOf(socket.id);
        arrId.splice(index, 1);
        socket.broadcast.emit('SOCKET_DISCONNECT', socket.id);
    });
    socket.on('CALL_OTHER', (data) => {
        const { idReceiver, signal } = data;
        socket.broadcast.to(idReceiver).emit('SOMEONE_CALL', signal);
        console.log(`A CALL REQUEST RECEIVED: ${idReceiver}`);
    });
});
