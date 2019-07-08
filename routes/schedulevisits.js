var express = require('express')
var router = express.Router()
var connection = require('../config/dbconfig');
var bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())


  router.post('/client', function (req, res) {
     console.log('kjj');
   
    let slot= req.body.slot;
     let date=req.body.date;
     let property=req.body.property;
    let  id = req.body.id;
    id=35;
   
 console.log('hello '+slot+' '+id+' '+date);

 var q=`insert into scheduleVisits values('${id}','${date}','${slot}','${property}')`;
 
 let object={bool:true};
 
 connection.query(q, function (err, result) {
     if (err) {object.bool=false;
        console.log('gfds');res.send(object); }
     
     // res.end('done');
     else
     {console.log(result);console.log('number='+result.length+'\n');
     res.send(object);

 }
   });
 
 
   })


module.exports=router;