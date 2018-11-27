const express= require('express')
const bodyParser = require('body-parser')
const app = express()

var levels = require('./Levels.js')
var ths = require('./Threshold.js')
app.get('/',(req,res) => {
  res.send('Online')
})

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.listen(8000,()=>{console.log("Server started")})

app.use('/level',levels)
app.use('/ths',ths)
