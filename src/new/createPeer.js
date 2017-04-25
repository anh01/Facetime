const SimplePeer = require('simple-peer');

const createPeer = stream => {
    const initOption = { initiator: true, trickle: false, stream };// eslint-disable-line
    return new SimplePeer(initOption);
};

module.exports = createPeer;
