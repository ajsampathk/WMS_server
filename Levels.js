const express = require('express')
var mysql = require('mysql');

var con = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "watermanagement"
});

const router = express.Router()

router.post('/get',(req,res)=>{
  global.res=res

  con.query("SELECT * from tank_levels where id=(select max(id) from tank_levels)", function (err, result, fields) {
    if (err) {
      res.send(JSON.stringify({Test:true,Sucess:false,route:"Levels"}))

      throw err;
    }
    res.send(JSON.stringify(result[0]))
  // console.log(result);
  });
})

router.post('/update',(req,res)=>{
  //insert to databse
  console.log(req.body)
  var sql = "INSERT INTO tank_levels (id,tank_1,tank_2,tank_3,tank_4) values(0,"+req.body.tank_1+","+req.body.tank_2+","+req.body.tank_3+","+req.body.tank_4+")"
  // var values= [req.body.tank_1,req.body.tank_2,req.body.tank_3,req.body.tank_4]

  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    res.send(JSON.stringify(result))
    // console.log(result);
  });
  // res.send(JSON.stringify({Test:true,Sucess:true,route:"Levels"}))
});

module.exports = router
