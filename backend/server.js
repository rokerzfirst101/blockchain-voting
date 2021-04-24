const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3001
const cors = require('cors')

const user = require('./routes/user')

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.use('/api/user', user);

app.listen(port, () => {
    console.log(`Voting app listening at http://localhost:${port}`)
})