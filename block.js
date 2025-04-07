const crypto = require('crypto');

class Block {
    constructor(index, transactions, timestamp, previousHash = '', nonce = 0) {
        this.index = index;
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.nonce = nonce;
        this.hash = this.computeHash();
    }

    computeHash() {
        const data = this.index + this.previousHash + this.timestamp + JSON.stringify(this.transactions) + this.nonce;
        return crypto.createHash('sha256').update(data).digest('hex');
    }
}

module.exports = Block;
