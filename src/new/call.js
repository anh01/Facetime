const openCamera = require('./openCamera');
const createPeer = require('./createPeer');

const call = (socket, idReceiver) => {
    openCamera()
    .then(stream => {
        const peer = createPeer(stream);
        peer.on('signal', signal => {
            console.log('idReceiver === ', idReceiver);
            socket.emit('CALL_OTHER', { idReceiver, signal });
        });
    });
};

module.exports = call;

// socket.emit('CALL_OTHER', idReceiver);
