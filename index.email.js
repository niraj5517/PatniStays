const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.get("/", (req, res) => {
  res.send("war");

  console.log("to nodemailer");
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `<h5> <a href="google.com"> click here to google</a> </h5><br/>PatniStays<br/><p>test mail</p>`;

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      service: "gmail",
      port: 465,
      auth: {
        user: "patnistays@gmail.com",
        pass: "Patni@2019"
      }
    });

    let mailOptions = {
      from: "patnistays@gmail.com",
      to: "jainpiyush425@gmail.com",

      subject: "succes not in kolkata pg ",
      html: htmlEmail,
      text: "hello htfyjgukhiljjiukyjfthdyuk"
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log("stfdg");
      }
    });

    console.log("message url");
  });
});

app.get("/user", (req, res) => {
  res.send("love");
});

app.post("/api/form", (req, res) => {
  console.log(req.body);

  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
<!DOCTYPE html>
<html lang="">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Now Email Layout</title>
    <link rel="stylesheet" href="">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</head>
<body>
    <div class="container">
        <header style="border-bottom: 2px solid wheat;padding:2%;margin-top: 20px;">
            <div style="display: inline-block">
        <h1 style="color:orangered;font-family:cursive">PatniStays</h1>
            <small style="margin-top: -2%">Choose your own home...</small>
            </div>
        </header>
        
        <section style="font-family:serif">
            <div class="card">
<!--              <div class="card-header">Header</div>-->
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-4" style="display: inline-block">
                            <label style="display: inline-block;width:120px;font-weight: 900;" for="BedID">Bed ID</label>
                            <p name="BedID">
                            ${req.body.bedId}
                            </p>
                            
                        </div>
                        <div class="col-md-4" style="display: inline-block">
<!--
                            <label style="display: inline-block" for="name2">Name2</label>
                            <input class="form-control" name="name2" type="text">
                            <br>
-->
                        </div>
                        <div class="col-md-4" style="display: inline-block">
                            <label style="display: inline-block;width:120px;font-weight: 900;" for="CustId">Customer ID</label>
                            <p name="CustId">
                                2468
                            </p>
                            
                        </div>
                        
                        <div class="col-md-4">
                            <label style="display: inline-block;width:120px;font-weight: 900;" for="name">Name</label>
                            <p name="name"> ${req.body.name}
                            </p>
                            
                        </div>
                        <div class="col-md-4">
                           
                        </div>
                        <div class="col-md-4">
                            <label style="display: inline-block;width:120px;font-weight: 900;" for="date">Date</label>
                            <p name="date">08/07/19
                            </p>
                            
                        </div>
                        
                        <div class="col-md-4">
                            <label style="display: inline-block;width:120px;font-weight: 900;" for="month">Month</label>
                            <p name="date">June
                            </p>
                            
                        </div>
                        <div class="col-md-4">
                            <label style="display: inline-block;width:120px;font-weight: 900;" for="rent">Rent</label>
                            <p name="rent">Rs. 10500
                            </p>
                            
                        </div>
                        <div class="col-md-4">
                            <label style="display: inline-block;width:120px;font-weight: 900;" for="food">Food</label>
                            <p name="food">Rs. 3500
                            </p>
                            
                        </div>
                        
                        <div class="col-md-4">
                            <label style="display: inline-block;width:120px;font-weight: 900;" for="elec">Electricity</label>
                            <p name="elec">Rs. 500
                            </p>
                            
                        </div>
                        <div class="col-md-4">
                            <label style="display: inline-block;width:120px;font-weight: 900;" for="penalty">Penalty</label>
                            <p name="penalty">Rs. 600
                            </p>
                            
                        </div>
                        <div class="col-md-4">
                            <label style="display: inline-block;width:120px;font-weight: 900;" for="total">Total</label>
                            <p name="total">Rs. 15100
                            </p>
                            
                        </div>
                        
                    
                    </div>
                </div>
<!--              <div class="card-footer">Footer</div>-->
            </div>
        </section>
        
        <footer style="background-color: wheat;padding:2%;font-family: sans-serif">
            <div style="align-content:   right">
            <strong>Contact Us : </strong>
                <ul style="list-style: none;">
                    <li>1st Mobile Number</li>
                    <li>2nd Mobile Number</li>
                    <li>Email Address</li>
                </ul>
             </div>           
        </footer>
        
    </div>
        
</body>
</html>
 
        
        `;

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "patnistays@gmail.com",
        pass: "Patni@2019"
      }
    });

    let mailOptions = {
      from: "PatniStays",
      to: "vs10051998@gmail.com,niraj5517@gmail.com",

      subject: "Congrats",
      text: "booking Approved test 2",
      html: htmlEmail
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log("fgbfb    " + err);
      } else {
        console.log("stfdg");
      }
    });

    console.log("message url");
  });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
