const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const userAdapter = new FileSync('./localdb/users.json')
const userdb = low(userAdapter);

const chainAdapter = new FileSync('./localdb/blockchain.json')
const chaindb = low(chainAdapter);

module.exports = {
    userdb,
    chaindb
}