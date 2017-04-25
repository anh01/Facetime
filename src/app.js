const SimplePeer = require('simple-peer');
const $ = require('jquery');

const initOption = { initiator: location.hash === '#1', trickle: false };// eslint-disable-line

$('document').ready(() => {
    const peer = new SimplePeer(initOption);
    peer.on('signal', data => $('#p-signal').html(JSON.stringify(data)));

    $('#btnGetText').click(() => {
        const id = $('#txtFriendId').val();
        const obj = JSON.parse(id);
        console.log(obj);
    });   
});
