const bcrypt = require("bcrypt")
const express = require('express')
const router = express.Router()
const User = require('../models/User')
const userdb = require('../models/Databases').userdb

userdb.defaults({ users: [], count: 0 }).write();

router.post('/register', async (req, res) => {
    const body = req.body;
    
    if (!body.name || !body.adhaar || !body.password){
        return res.status(400).send({ error: "Incomplete Data"})
    }
    
    const salt = await bcrypt.genSalt(5);
    const password = await bcrypt.hash(body.password, salt);
    const user = new User(body.name, body.adhaar, password, userdb.get('count').value()+1);

    userdb.get('users').push(user).write();
    userdb.update('count', n => n + 1).write();
    return res.status(200).send(user.id)
})

router.post('/login', async (req, res) => {
    const body = req.body;

    if (!body.id || !body.password) {
        return res.status(400).send({ error: "Incomplete Data"})
    }

    const user = userdb.get('users').find({id: body.id}).value()
    if (!user) return res.status(400).send({ error: "No user found." })

    const pass = await bcrypt.compare(body.password, user.password)
    if (pass)
        return res.status(200).send(user)
    else
        return res.status(400).send({ error: "Wrong Password." })
})

module.exports = router;
