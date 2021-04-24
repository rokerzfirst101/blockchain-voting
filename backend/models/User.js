const EC = require('elliptic').ec
const ec = new EC('secp256k1');

class User {
    constructor(name, adhaar, password, id) {
        const key = ec.genKeyPair()
        this.name = name;
        this.adhaar = adhaar;
        this.publicKey = key.getPublic('hex');
        this.privateKey = key.getPrivate('hex');
        this.password = password;
        var s = id+"";
        while (s.length < 4) s = "0"+s;
        this.id = `EC${s}`;
        this.balance = 1;
    }

    printKeys() {
        console.log(this.publicKey)
        console.log()
        console.log(this.privateKey)
    }
}

module.exports = User