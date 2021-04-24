const Block = require('./Block');
const Transaction = require('./Transaction');
class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 5;

        this.pendingTransactions = [];
        this.miningReward = 0;
    }

    createGenesisBlock() {
        return new Block(Date.now(), []);
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }
    
    addTransactions(transaction) {
        if (!transaction.fromAddress || !transaction.toAddress) {
            throw new Error('Transaction must include to and from address.')
        }

        if (!transaction.isValid()){
            throw new Error('Cannot add invalid transaction.')
        }

        this.pendingTransactions.push(transaction)
    }

    minePendingTransactions() {
        let block = new Block(Date.now(), this.pendingTransactions);
        block.mineBlock(this.difficulty);
        this.chain.push(block);
    }

    getBalanceOfAddress(address) {
        let balance = 0;

        for (const block of this.chain){
            for (const trans of block.trans){
                if(trans.fromAddress === address){
                    balance -= trans.amount;
                }
                if(trans.toAddress === address){
                    balance += trans.amount;
                }
            }
        }
        return balance;
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }

            if (!currentBlock.hasValidTransactions()) {
                return false;
            }
        }
        return true;
    }
}

module.exports = Blockchain