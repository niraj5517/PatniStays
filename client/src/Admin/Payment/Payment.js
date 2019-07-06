import React, { Component } from 'react'
import Bill from './Bill';
import { MonthlyBill } from '../Helper';
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
    
     

    changeElectricity = (id, e) => {
        console.log(id);
        const index = this.state.arr.findIndex(item => {
            return item.bedId === id;
        })
        // eslint-disable-next-line
        this.state.arr[index].electricity = e.target.value;

        // let elec = parseFloat(this.state.arr[index].electricity);
        // total = parseFloat(this.state.arr[index].total);
        // total = total + elec;
        


        
    }

    changePenalty = (id, e) => {
        const index = this.state.arr.findIndex(item => {
            return item.bedId === id;
        })
        console.log(index);
        // eslint-disable-next-line
        this.state.arr[index].penalty = e.target.value;
        console.log(e.target.value);
        
     }


    changeDiscount = (id, e) => {
        const index = this.state.arr.findIndex(item => {
            return item.bedId === id;
        })
        console.log(index);
        // eslint-disable-next-line
        this.state.arr[index].discount = e.target.value;
        console.log(e.target.value);
        
    }
    // totalB(e) {
        
    // }
    
    generateBill = (object) => {
        let total=object.total;
        let index=object.index;
        let elec=object.elec;
        console.log(total+''+index);
//         eslint-disable-next-line
        this.state.arr[index].disable = 1;
        this.state.arr[index].electricity = elec;
        console.log(this.state.arr[index]);

        const Bill = MonthlyBill(this.state.arr[index].electricity, this.state.arr[index].penalty, this.state.arr[index].discount);
        console.log(Bill);

        // eslint-disable-next-line
        this.state.arr[index].total = Bill;





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
                                            changedElectricity={this.changeElectricity.bind(this, item.bedId)}
                                            // totalB = {this.totalBill.bind(this)}
                                            // disabling={this.state.arr[index].disable === 0? false: true}
                                            changePenalty={this.changePenalty.bind(this,item.bedId)}
                                            changeDiscount={this.changeDiscount.bind(this,item.bedId)}
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