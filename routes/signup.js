var express = require('express')
var router = express.Router()
var connection = require('../config/dbconfig');
var bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())
router.get('/', function (req, res) {
   
   let number =req.query.number;
  // var number=req.body.value;

console.log('hell87o '+ number);

var q=`select customerPassword from customerInfo where customerMOB='${number}'`;

let object={bool:true,password:""};

connection.query(q, function (err, result) {
    if (err) { console.log('gfds'); res.end();}
    console.log('number='+result.length+'\n');
    // res.end('done');
    console.log(result);
    if(result.length)
   { console.log('found'+result);
   object.password=result[0].customerPassword; 
    res.send(object); 
}
    else {
         console.log('not founf');
         object.bool=false;
       res.send(object);}
 
  });


  })

  router.post('/signup', function (req, res) {
   
    let number =req.body.number;
    let email=req.body.email;
    let password=req.body.password;
   
 console.log('hello '+number+' '+email+' '+password);

 var q=`insert into customerInfo(customerMOB,customerEmail,customerPassword) values('${number}','${email}','${password}')`;
 
 let object={bool:true,insertId:""};
 
 connection.query(q, function (err, result) {
     if (err) {object.bool=false;
        console.log('gfds');res.send(object); }
     
     // res.end('done');
     else
     {console.log(result);console.log('number='+result.insertId+'\n');
     object.insertId=result.insertId;
     res.send(object);

 }
   });
 
 
   })


module.exports=router;