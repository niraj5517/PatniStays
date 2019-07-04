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

var q=`select customerPassword from CustomerInfo where customerMOB='${number}'`;

let object={bool:true,password:""};

connection.query(q, function (err, result) {
    if (err) { console.log('gfds'); throw err;}
    console.log('number='+result.length+'\n');
    // res.end('done');
    console.log(result);
    if(result.length)
   { console.log('found'+result);
   object.password='niraj';
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