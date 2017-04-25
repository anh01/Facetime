const playMyVideo = require('./playMyVideo');

const openCamera = () => (
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })// eslint-disable-line
    .then(stream => {
        playMyVideo(stream);
        return stream;
    })
);
module.exports = openCamera;
