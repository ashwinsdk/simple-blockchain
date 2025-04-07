const Blockchain = require('./blockchain');
const Block = require('./block');

const tamperedChain = new Blockchain();
tamperedChain.addBlock(new Block(1, [{ from: "X", to: "Y", amount: 100 }], Date.now()));
tamperedChain.addBlock(new Block(2, [{ from: "Y", to: "Z", amount: 30 }], Date.now()));

// Tamper with data
tamperedChain.chain[1].transactions = [{ from: "X", to: "Y", amount: 9999 }];

console.log("Tampered Blockchain valid?", tamperedChain.isChainValid());
