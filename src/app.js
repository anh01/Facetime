const SimplePeer = require('simple-peer');
const $ = require('jquery');
const openCamera = require('./openCamera');
const playFriendStream = require('./playFriendStream');

const initOption = { initiator: location.hash === '#1', trickle: false };// eslint-disable-line

$('document').ready(() => {
    const peer = new SimplePeer(initOption);
    peer.on('signal', data => $('#p-signal').html(JSON.stringify(data)));

    $('#btnGetText').click(() => {
        const id = $('#txtFriendId').val();
        const obj = JSON.parse(id);
        peer.signal(obj);
    });  

    $('#btnSend').click(() => {
        peer.send(Math.random());
    }); 
    
    $('#btnOpenCamera').click(() => openCamera());

    peer.on('connect', () => console.log('CONNECTED'));

    peer.on('data', (data) => {
        console.log(`data: ${data}`);
    });

    peer.on('stream', playFriendStream);
});

