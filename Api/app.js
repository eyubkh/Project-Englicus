const express = require('express')
const cors = require('cors')
const app = express()
const irregularVerbRoute = require('./controller/irregularVerb')

app.use(cors())
app.use('/irregularVerb', irregularVerbRoute)

module.exports = app
