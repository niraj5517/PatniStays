import React, { Component } from 'react'
import Bill from './Bill';
class Payment extends Component {

    constructor() {
        super();

        this.state = {
            constBill: 14000,
            arr: [{
                bedId: 'PS01-301A',
                residentName: 'Piyush',
                email: 'jainpiyush45@gmail.com',
                electricity: 0,
                penalty: 0,
                discount: 0,
                disable:0
                },
                {
                    bedId: 'PS01-301B',
                    residentName: 'Niraj',
                    email: 'niraj5517@gmail.com',
                    electricity: 0,
                    penalty: 0,
                    discount: 0,
                    disable:0
                },
                {
                    bedId: 'PS01-301C',
                    residentName: 'Vivek',
                    email: 'vs10051998@gmail.com',
                    electricity: 0,
                    penalty: 0,
                    discount: 0,
                    disable:0
                },

            ]
        }

    }
    
    handleChange = (e) => {
        
    }

    changeElectricity = (id, e) => {
        console.log(id);
        const index = this.state.arr.findIndex(item => {
            return item.bedId === id;
        })
        console.log(index);

        this.state.arr[index].electricity = e.target.value;
        console.log(e.target.value);
    }

    changePenalty = (id, e) => {
        const index = this.state.arr.findIndex(item => {
            return item.bedId === id;
        })
        console.log(index);

        this.state.arr[index].penalty = e.target.value;
        console.log(e.target.value);
        
     }


    changeDiscount = (id, e) => {
        const index = this.state.arr.findIndex(item => {
            return item.bedId === id;
        })
        console.log(index);

        this.state.arr[index].discount = e.target.value;
        console.log(e.target.value);
        
    }
    
    generateBill = (index,e) => {
        console.log(index);
        this.state.arr[index].disable = 1 ;

        console.log(this.state.arr[index]);

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
                                            bedId={item.bedId}
                                            key={item.bedId}
                                            name={item.residentName}
                                            email={item.email}
                                            generatedBill={this.generateBill.bind(this,index)}
                                            changedElectricity={this.changeElectricity.bind(this, item.bedId)}
                                            disabling={this.state.arr[index].disable === 0? false: true}
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