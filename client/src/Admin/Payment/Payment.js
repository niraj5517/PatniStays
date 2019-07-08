import React, { Component } from 'react'
import Bill from './Bill';
// import { MonthlyBill } from '../Helper';
class Payment extends Component {

    constructor() {
        super();
        

        this.state = {
            constBill: 14000,
            arr: [{
                ind:0,
                bedId: 'PS01-301A',
                residentName: 'Piyush',
                email: 'jainpiyush45@gmail.com',
                rent:10500,
                food:3500,
                electricity: 0,
                penalty: 0,
                discount: 0,
                total:0,
                disable:0
                },
                {
                    ind:1,
                    bedId: 'PS01-301B',
                    residentName: 'Niraj',
                    email: 'niraj5517@gmail.com',
                    rent:10500,
                    food:3500,
                    electricity: 0,
                    penalty: 0,
                    discount: 0,
                    total:0,
                    disable:0
                },
                {
                    ind:2,
                    bedId: 'PS01-301C',
                    residentName: 'Vivek',
                    email: 'vs10051998@gmail.com',
                    rent:10500,
                    food:3500,
                    electricity: 0,
                    penalty: 0,
                    discount: 0,
                    total:0,
                    disable:0
                },

            ]
        }
        
    }

     generateBill = (object) => {
        console.log('Object recieved from Bill.js '+ object);
        let total=object.total;
        let index=object.index;
        let elec = object.elec;
        let penalty = object.penalty;
        let disc = object.discount;

        let bedId = object.bedId;
        let email = object.email;
        console.log(total + ' ' + index + ' ' + elec + ' ' + penalty + ' ' + disc + ' ' + bedId + ' ' + email);
        
    }

    render() {
       
        return (
            <React.Fragment>
                <div  className="container">
                <table className="ui celled table">
                    <thead >
                        <tr >
                            <th >Bed Id</th>
                            <th >Resident Name</th>
                            <th >Rent</th>
                            <th >Food</th>
                            <th >Electricity</th>
                            <th >Penalty</th>
                            <th >Discount</th>
                            <th >Total</th>
                            <th ></th>
                        </tr>
                    </thead>
                    <tbody > 
                        
                                  { this.state.arr.map((item,index) => {
                                        return (<Bill
                                            ind={item.ind}
                                            bedId={item.bedId}
                                            rent={item.rent}
                                            food={item.food}
                                            key={item.ind}
                                            name={item.residentName}
                                            email={item.email}
                                            generatedBill={this.generateBill}
                                            ></Bill>);
                                    })}
                                
                        
                    </tbody>
                    </table>
                    </div>
            </React.Fragment>
        )
    }
}
export default Payment;