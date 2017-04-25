const SimplePeer = require('simple-peer');

const peer = new SimplePeer({ initiator: location.hash === '#1', trickle: false });// eslint-disable-line

peer.on('signal', data => console.log(data));
