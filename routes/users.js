var express = require('express')
var router = express.Router()
var connection = require('../config/dbconfig');

router.get('/', function (req, res) {
   
    var name=req.query.value;
//  var name ='0';
console.log('hello '+name);

var q=`select password from users where id='${name}'`;
// var q=`insert into  users values('2','niraj','5517')`;
// var q=`delete from users where id='${name}'`;
console.log(q);
connection.query(q, function (err, result) {
    if (err) { console.log('gfds'); throw err;}
    console.log('h'+result+'nuber='+result.length);
    // res.end('done');
    if(result.length)
   { console.log(result);
    res.send(result); 
}
    else {console.log('not founf');res.send('not');}
  });


  })

  module.exports=router;