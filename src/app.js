const $ = require('jquery');
const openCamera = require('./openCamera');
const createPeer = require('./createPeer');
const setOnClick = require('./setOnClick');
const playFriendStream = require('./playFriendStream');

$('document').ready(() => {
    $('#btnOpenCamera').click(() => {
        openCamera()
        .then(stream => {
            const peer = createPeer(stream);
            setOnClick(peer);
            peer.on('signal', data => $('#p-signal').html(JSON.stringify(data)));
            peer.on('connect', () => console.log('CONNECTED'));
            peer.on('data', (data) => {
                console.log(`data: ${data}`);
            });
            peer.on('stream', playFriendStream);
        });
    });
});

// peer.on('data', (data) => {
//     console.log(`data: ${data}`);
// });

// peer.on('stream', playFriendStream);
