// import React from 'react';

export const valPhone =(phone) => {

    // console.log('phone validation '+ phone +'\n');

    var numbers = /^[0-9]+$/;
    
      if(phone.match(numbers))
      { 
        return true;}
      else{return false;}
  
}

export const ValidateEmail = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return (true);
  }
  return (false);
}


