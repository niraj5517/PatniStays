import React from 'react';
// import nodemailer from 'nodemailer';
import axios from 'axios';
class PendingPanel extends React.Component {
    constructor() {
        super();
        this.state = {
            ifApproved:0,
            ifToUpdate:0,
            total: 1600,
            // electricity: this.props.electricity,
            // rent: this.props.rent,
            // food: this.props.food,
            // penalty: this.props.penalty,
            // discount: this.props.discount,

            electricity: 50,
            rent: 1000,
            food: 500,
            penalty: 50,
            discount: 0,
            bedId: 'PS001-101A',
            
           
        }
        // this.handleApprove = this.handleApprove.bind(this);
        this.handleElecBillChange=this.handleElecBillChange.bind(this);
        this.handleDiscountChange=this.handleDiscountChange.bind(this);
        this.handleModify = this.handleModify.bind(this);
    }
    handleApprove = (e) => {
        this.setState({
            ifApproved:1,
        })
        
    //     nodemailer.createTestAccount((err, account) => {
    //     const htmlEmail = `<h5> <a href="http://192.168.0.111:4000/user"> click here</a> </h5><br/>PatniStays<br/><p>Test mail</p>`;

    //     let transporter = nodemailer.createTransport({
    //         host: 'smtp.gmail.com',
    //         service: 'gmail',
    //         port:465,
    //         auth: {
    //             user: 'patnistays@gmail.com',
    //             pass: 'Patni@2019'
    //         }
    //     });

    //     let mailOptions = {
    //         from: 'patnistays@gmail.com',
    //         to: 'vs10051998@gmail.com',

    //         subject: 'Payment Approved',
    //         html: htmlEmail,
    //         text: 'Auto generated bill when Approve button is clicked',
    //     }
    //     transporter.sendMail(mailOptions, (err, info) => {
    //         if (err) {
    //             console.log(err);    
    //         } else {
    //             console.log('stfdg');
    //         }
    //     })

    //     console.log('message url');

    // })

    axios.post('http://localhost:4000/api/form',{
        name: 'Piyush',
        bedId:this.state.bedId
    }).then((res) => {
      console.log(res);
    }).then(err => {
      if (err) throw err;
    }).then(() =>{
        console.log('mail sent');
    })
    



    }
    handleElecBillChange=(e)=>{
        console.log([e.target.name] + '  ' + e.target.value);
        let fixed = parseFloat(this.state.rent) + parseFloat(this.state.food) + parseFloat(this.state.penalty);
        console.log(parseFloat(fixed));
        let newTotal = parseFloat(fixed) + parseFloat(e.target.value);
        this.setState({
            total:newTotal,
            electricity:e.target.value,
        })
    }
    handleDiscountChange=(e)=>{
        console.log([e.target.name] + '  ' + e.target.value);
        console.log(this.state.electricity);
        let fixed = parseFloat(this.state.rent) + parseFloat(this.state.food) + parseFloat(this.state.penalty)+parseFloat(this.state.electricity) ;
        console.log(fixed);
        let newTotal = fixed + parseFloat(-(e.target.value));
        this.setState({
            total:newTotal,
            discount:e.target.value,
        })
    }
    handleUpdate=(e)=>{
        this.setState({
            ifToUpdate:1,
        })

        console.log(this.state);
    }
    handleModify=(e)=>{

        console.log(this.state);
    }

    render() {

        return (
            <React.Fragment>
                <label className="card" style={{ margin: '10px' }}>
                    <label className="card-content ">
                        <label className="row container">
                            <div className="col-md-4">
                                <div className="ui input" style={{ display: 'inline-block' }}>
                                    <label htmlFor="customerId" style={{ width: '100px' }}>Customer ID</label>
                                    <input style={{ margin: '6px' }} name="customerId" type="text" placeholder="Customer ID" disabled/><br />
                                </div>
                            </div>
                
                
                            <div className="col-md-4">
                                <div className="ui input" style={{ display: 'inline-block' }}>
                                    <label htmlFor="bedID" style={{ width: '100px' }}>Bed ID</label>
                                    <input style={{ margin: '6px' }} name="bedID" type="text" placeholder="Bed ID" disabled/><br />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="ui input" style={{ display: 'inline-block' }}>
                                    <label htmlFor="monthYear" style={{ width: '100px' }}>Month & Year</label>
                                    <input style={{ margin: '6px' }} name="monthYear" type="text" placeholder="Month & Year" disabled/><br />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="ui input" style={{ display: 'inline-block' }}>
                                    <label htmlFor="name" style={{ width: '100px' }}>Name</label>
                                    <input style={{ margin: '6px' }} name="name" type="text" placeholder="Name" disabled/><br />
                                </div>
                            </div>
                
                            <div className="col-md-4">
                                <div className="ui input" style={{ display: 'inline-block' }}>
                                    <label htmlFor="contactNo" style={{ width: '100px' }}>Contact No.</label>
                                    <input style={{ margin: '6px' }} name="contactNo" type="text" placeholder="Contact Number" disabled/><br />
                                </div>
                            </div>
                            <div className="col-md-4">
                    
                            </div>
                            <label className="col-md-4">
                                <label className="ui input" style={{ display: 'inline-block' }}>
                                    <label htmlFor="rent" style={{ width: '100px' }}>Rent</label>
                                    <input style={{ margin: '6px' }} name="rent" type="text" value={this.state.rent} placeholder="Rent" disabled/><br />
                                </label>
                            </label>
                            <div className="col-md-4">
                                <div className="ui input" style={{ display: 'inline-block' }}>
                                    <label htmlFor="electricity" style={{ width: '100px' }}>Electricity</label>
                                    <input style={{ margin: '6px' }} onChange={this.handleElecBillChange} name="electricity" type="text" value={this.state.electricity} placeholder="Electricity" disabled={this.state.ifToUpdate===0?true:false}  /><br />
                                </div>
                            </div>
                
                            <div className="col-md-4">
                                <div className="ui input" style={{ display: 'inline-block' }}>
                                    <label htmlFor="Food" style={{ width: '100px' }}>Food</label>
                                    <input style={{ margin: '6px' }} name="Food" value={this.state.food} type="text" placeholder="Food" disabled /><br />
                                </div>
                            </div>
                
                        
                            <div className="col-md-4">
                                <div className="ui input" style={{ display: 'inline-block' }}>
                                    <label htmlFor="penalty" style={{ width: '100px' }}>Penalty</label>
                                    <input style={{ margin: '6px' }} name="penalty" value={this.state.penalty} type="text" placeholder="Penalty" disabled /><br />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="ui input" style={{ display: 'inline-block' }}>
                                    <label htmlFor="discount" style={{ width: '100px' }}>Discount</label>
                                    <input style={{ margin: '6px' }} name="discount" onChange={this.handleDiscountChange} type="text" placeholder="Discount" value={this.state.discount} disabled={this.state.ifToUpdate===0?true:false} /><br />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="ui input" style={{ display: 'inline-block' }}>
                                    <label htmlFor="T" style={{ width: '100px' }}>Total Bill</label>
                                    <input style={{ margin: '6px' }} name="T" value={this.state.total} type="text" placeholder="Total Bill" disabled/><br />
                                </div>
                            </div>

                        
                            <div className="col-md-4"><br />
                                <button disabled={this.state.ifApproved===1?true:false} className="btn btn-block btn-warning">{this.state.ifApproved?'Paid':'Pending'}</button>
                            </div>
                            <div className="col-md-4">
                                <br />
                                {this.state.ifToUpdate===0?<button className="btn btn-block btn-success" onClick={this.handleUpdate}>Update</button>: <button onClick={this.handleModify} className="btn btn-block btn-success">Modify</button>}
                                
                            </div>
                            <div className="col-md-4">
                                <br />
                                <button className="btn btn-block btn-primary" disabled={this.state.ifApproved===1?true:false} onClick={this.handleApprove.bind(this)}>{this.state.ifApproved?'Approved':'Approve'}</button>
                            </div>
            
                        </label>
                    </label>
                </label>
            </React.Fragment>
        )
    }
}
export default PendingPanel;