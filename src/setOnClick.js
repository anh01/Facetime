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
