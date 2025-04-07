const Block = require('./block');

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 2;
    }

    createGenesisBlock() {
        return new Block(0, ["Genesis Block"], Date.now(), "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.computeHash();

        // Optional: proof of work
        while (!newBlock.hash.startsWith(Array(this.difficulty + 1).join("0"))) {
            newBlock.nonce++;
            newBlock.hash = newBlock.computeHash();
        }

        this.chain.push(newBlock);
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const current = this.chain[i];
            const prev = this.chain[i - 1];

            if (current.hash !== current.computeHash()) return false;
            if (current.previousHash !== prev.hash) return false;
        }
        return true;
    }
}

module.exports = Blockchain;
