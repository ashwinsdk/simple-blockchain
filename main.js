const Blockchain = require('./blockchain');
const Block = require('./block');

const demoCoin = new Blockchain();

// Add some dummy transactions
console.log("Mining block 1...");
demoCoin.addBlock(new Block(1, [{ from: "Alice", to: "Bob", amount: 50 }], Date.now()));

console.log("Mining block 2...");
demoCoin.addBlock(new Block(2, [{ from: "Bob", to: "Charlie", amount: 20 }], Date.now()));

// Output the full chain
console.log(JSON.stringify(demoCoin, null, 2));

// Check if chain is valid
console.log("Blockchain valid?", demoCoin.isChainValid());
