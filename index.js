const express= require('express')
const app = express()

app.get('/',(req,res) => {
  res.send('INITIALIZED !')
})

app.listen(8000,()=>{console.log("Server started")})
