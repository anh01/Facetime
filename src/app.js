const $ = require('jquery');
const io = require('socket.io-client');
const handleList = require('./new/socketListHandle');
const call = require('./new/call');
const onReceiveSignal = require('./new/onReceiveSignal');

$('document').ready(() => {
    const socket = io();
    handleList(socket);// Handle list event, add remove render socket id

    $('#ul-socket-id').on('click', 'li', function () {
        const id = $(this).text();
        call(socket, id);
    });

    socket.on('SOMEONE_CALL', data => onReceiveSignal(socket, data));
});
