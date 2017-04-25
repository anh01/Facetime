const $ = require('jquery');

const handleList = socket => {
    socket.on('FIRST_TIME_LIST', arrId => {
        arrId.forEach(id => $('#ul-socket-id').append(`<li id="${id}">${id}</li>`));
    });
    socket.on('SOCKET_DISCONNECT', id => {
        $(`#${id}`).remove();
    });
    socket.on('NEW_SOCKET', id => $('#ul-socket-id').append(`<li id="${id}">${id}</li>`));
};

module.exports = handleList;
