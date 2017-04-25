const openCamera = require('./openCamera');
const createReceivePeer = require('./createReceivePeer');
const playFriendVideo = require('./playFriendVideo');

const onReceiveSignal = (socket, data) => {
    const { senderSignal, senderId } = data;
    openCamera()
    .then(stream => {
        const peer = createReceivePeer(stream);
        peer.signal(senderSignal);
        peer.on('signal', signal => {
            socket.emit('ACCEPT_CALL', { receiverId: senderId, signal });
        });
        peer.on('stream', friendStream => {
            console.log('GOT AN STREAM HERE');
            playFriendVideo(friendStream);
        });
    });
};

module.exports = onReceiveSignal;

// socket.emit('CALL_OTHER', idReceiver);
