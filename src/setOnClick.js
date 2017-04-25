const $ = require('jquery');

const setOnClick = peer => {
    $('#btnGetText').click(() => {
        const id = $('#txtFriendId').val();
        const obj = JSON.parse(id);
        peer.signal(obj);
    });  

    $('#btnSend').click(() => {
        peer.send(Math.random());
    }); 
};

module.exports = setOnClick;

/*

    Step 1: Connect to server and got id on the list
    Step 2: Call an person in the list
        -> call.js 
            1. Open camera and get the signal
            2. Send the signal to other socket
        -> receiveSignal.js
            1. Ask for Connect
            2. If ok, open your peer, and call signal to sender
*/
