// import React from 'react';

export const valPhone =(phone) => {

    console.log('phone validation '+ phone +'\n');

    var numbers = /^[0-9]+$/;
    
      if(phone.match(numbers))
      { 
        return true;}
      else{return false;}
  
}



