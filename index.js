var express=require('express');
var app= express();
var port =process.env.PORT||4000;
var bodyParser = require('body-parser')
var cors = require('cors') 

var users = require('./routes/users')
var signup = require('./routes/signup')

// database config file to set connection
// var connection = require('./dbconfig');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 // parse application/json
app.use(bodyParser.json())

app.use(cors())

// app.use('/users',users);
app.use('/mob',signup);

// app.get('/users',(req,res)=>{

// var name=req.query.value;
// //  var name ='0';
// console.log('hello '+name);

// var q=`select password from users where id='${name}'`;
// // var q=`insert into  users values('2','niraj','5517')`;
// // var q=`delete from users where id='${name}'`;
// console.log(q);
// connection.query(q, function (err, result) {
//     if (err) { console.log('gfds'); throw err;}
//     console.log('h'+result+'nuber='+result.length);
//     // res.end('done');
//     if(result.length)
//    { console.log(result);
//     res.send(result); 
// }
//     else {console.log('not founf');res.send('not');}
//   });



// res.end('war');

// })
app.listen(port, () => {
    console.log("Server is running on port: " + port)
})