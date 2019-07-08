// import React from 'react';

 const valPhone =(phone) => {

    console.log('phone validation '+ phone +'\n');

    var numbers = /^[0-9]+$/;
    
      if(phone.match(numbers))
      { 
        return true;}
      else{return false;}
  
}
const valEmail =(emailField) =>{

    
    var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   
    if (reg.test(emailField) == false) 

    {
      console.log(emailField +'false');
        // alert('Invalid Email Address');
        return false;
    }
    console.log(emailField+'true');

    return true;

}

export {
  valPhone,
  valEmail
}




