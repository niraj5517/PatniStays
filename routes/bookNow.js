var express = require('express')
var router = express.Router()
var connection = require('../config/dbconfig');
var bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())


  router.post('/client', function (req, res) {
     console.log('kjj');
   
    
     let date=new Date();
     
     let property=req.body.property;
    let  id = req.body.id;
   
 console.log('hello '+date+' \n'+id+' '+property);

 let object={bool:true,name:'',mob:'',gender:'',
             type1 :0,rent1:'',
             type2:0,rent2:'',
             type3:0,rent3:'',
             type4:0,rent4:'',

};

 var q=`select * from customerInfo where customerID='${id}'`;

 connection.query(q, function (err, result) {
    if (err) {object.bool=false;
       console.log('gfds');res.send(object); }
    
    // res.end('done');
    else
    {
        object.name=result[0].customerName;
        object.mob=result[0].customerMOB;
        object.gender=result[0].customerGender;
        
        console.log(result);console.log('number='+result.length+'\n');


        date=new Date();
        console.log(Date.parse(date));
        date=Date.parse(date);
        
        
         var q=`select count(b1.type) as count,b1.type,b2.rent FROM bedInfo as b1 inner 
         join rentInfo as b2 on b1.type=b2.type where b1.availableTime<'1663085800000' GROUP by b2.type`;

        connection.query(q, function (err, result) {
         if (err) {object.bool=false;
            console.log('gfds');res.send(object); }
         
            console.log(result);
            if(result.length)
    {
           for(let i=0;i<result.length;i++)
       {
          if(result[i].type=='1'){object.type1=result[i].count;object.rent1=result[i].rent;}
          else if(result[i].type=='2'){object.type2=result[i].count;object.rent2=result[i].rent;}
          else if(result[i].type=='3'){object.type3=result[i].count;object.rent3=result[i].rent;}
          else if(result[i].type=='4'){object.type4=result[i].count;object.rent4=result[i].rent;}
    
          }
          res.send(object); 
    
       }
    
    
     
           
        
            else {
                 console.log('not founf');
                 object.bool=false;
               res.send(object);}
    
     
       });        
   //  res.send(object);

   }
  });

   })



   router.post('/clientRequest',(req,res)=>{
let property =req.body.property;
let id= req.body.id;
let bookingAmount=req.body.bookingAmount;
let bookingRequestDate= req.body.bookingRequestDate;
let bookingDate=req.body.bookingDate;
let type=req.body.type;

console.log(property);
console.log(id);
console.log(bookingAmount);
console.log(bookingRequestDate);
console.log(bookingDate);
console.log(type);



var q=`insert into customerBookingRequest
(customerID,property,bookingAmount,bookingRequestDate,bookingDate,type)
 values('${id}','${property}','${bookingAmount}','${bookingRequestDate}','${bookingDate}','${type}')`;
 
 let object={bool:true,insertId:""};
 
 connection.query(q, function (err, result) {
     if (err) {object.bool=false;
        console.log('booking error');res.send(object); }
     
     // res.end('done');
     else
     {console.log(result);console.log('number='+result.insertId+'\n booking done');
     object.insertId=result.insertId;
     res.send(object);

 }
   });
 




   })


module.exports=router;