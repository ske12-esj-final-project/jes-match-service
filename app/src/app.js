require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next()
})

const db = require('./db')
const port = process.env.PORT || 8080
const VERSION = process.env.VERSION || '1'
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Kill service is running...")
})

let server = app.listen(port, () => {
    let port = server.address().port
    console.log(`jes-kill-service version : ${VERSION}`)
    console.log('running at http://' + 'localhost' + ':' + port)
})

module.exports = server
