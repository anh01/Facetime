const SimplePeer = require('simple-peer');

const createPeer = stream => {
    const initOption = { initiator: location.hash === '#1', trickle: false, stream };// eslint-disable-line
    return new SimplePeer(initOption);
};

module.exports = createPeer;
