const express = require('express')
//ADD SQL

const router = express.Router()

router.post('/get',(req,res)=>{
  global.res=res
  //connect sql query
  //send response
  res.send(JSON.stringify({Test:true,Sucess:true,route:"Levles"}))
})

router.post('/update',(req,res)=>{
  //insert to databse
  res.send(JSON.stringify({Test:true,Sucess:true,route:"Levels"}))

})


module.exports = router
