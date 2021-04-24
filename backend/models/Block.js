const SHA256 = require('crypto-js/sha256')
class Block {
    constructor(timestamp, transactions, previousHash = 'Genesis Block') {
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateHash();  
        }
        console.log("Block Mined: " + this.hash);
    }

    calculateHash() {
        return SHA256(
            this.previousHash + 
            this.timestamp + 
            JSON.stringify(this.transactions) +
            this.nonce
        ).toString();
    }

    hasValidTransactions(){
        for (const tx of this.transactions){
            if(!tx.isValid()){
                return false;
            }
        }
        return true;
    }
}

module.exports = Block