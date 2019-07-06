// import React from 'react';

const MonthlyBill = (e,p,d) => {
    e = parseFloat(e);
    p = parseFloat(p);
    d = parseFloat(d);
    return (e+p-d);
}

export {
    MonthlyBill,

}

