const express= require('express')
const bodyParser = require('body-parser')
const app = express()

var levels = require('./Levels.js')
var ths = require('./Threshold.js')
app.get('/status',(req,res) => {
  res.send('Online')
})

app.use(bodyParser.urlencoded({ extended: false}))

app.listen(8000,()=>{console.log("Server started")})

app.use('/level',levels)
app.use('/ths',ths)
