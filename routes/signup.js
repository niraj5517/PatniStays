var express = require('express')
var router = express.Router()
var connection = require('../config/dbconfig');
var bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())
router.post('/users', function (req, res) {
   
   let number =req.body.number;
  
    // var name=req.body.value;
//  var name ='0';
console.log('hello '+number);

var q=`select password from customerInfo where customerMOB='${number}'`;



connection.query(q, function (err, result) {
    if (err) { console.log('gfds'); throw err;}
    console.log('number='+result.length+'\n');
    // res.end('done');
    console.log(result);
    if(result.length)
   { console.log('found'+result);
    // res.send(result); 
}
    else {console.log('not founf');res.send('not');}
  });


  })

  router.post('/signup', function (req, res) {
   
    let number =req.body.number;
    let name=req.body.name;
    let password=req.body.password;

   
     // var name=req.body.value;
 //  var name ='0';
 console.log('hello '+number);

 var q=`insert into customerInfo(customerID,customerMOB,customerName,customerPassword) values('','${number}','${name}','${password}')`;
 
 
 
 connection.query(q, function (err, result) {
     if (err) { console.log('gfds'); throw err;}
     console.log('number='+result.length+'\n');
     // res.end('done');
     console.log(result);
     if(result.length)
    { console.log('found'+result);
     // res.send(result); 
 }
     else {console.log('not founf');res.send('not');}
   });
 
 
   })


module.exports=router;