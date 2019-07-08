import React, { Component } from 'react'
import BedAllocationModal from './BedAllocationModal';

export default class BedAllocation extends Component {
    
    render() {

        return (
             <React.Fragment>
                 <div className="container">
                <div className="card" style={{ margin: '10px' }}>
                    <div className="card-content ">
                        <div className="row container">
                            <div className="col-md-4">
                                <div className="ui input" style={{ display: 'inline-block' }}>
                                    <label htmlFor="bookingId" style={{ width: '100px' }}>Booking ID</label>
                                    <input style={{ margin: '6px' }} name="bookingId" type="text" placeholder="Booking ID" /><br />
                                </div>
                            </div>
                
                
                            <div className="col-md-4">
                                <div className="ui input" style={{ display: 'inline-block' }}>
                                    <label htmlFor="bookingDate" style={{ width: '100px' }}>Booking Date</label>
                                    <input style={{ margin: '6px' }} name="bookingDate" type="text" placeholder="Booking Date" /><br />
                                </div>
                            </div>
                                
                            <div className="col-md-4">
                                <div className="ui input" style={{ display: 'inline-block' }}>
                                    <label htmlFor="checkinDate" style={{ width: '100px' }}>Check In Date</label>
                                    <input style={{ margin: '6px' }} name="checkinDate" type="text" placeholder="Check In Date" /><br />
                                </div>
                            </div>
                            
                            <div className="col-md-4">
                                    <div className="ui input" style={{ display: 'inline-block' }}>
                                    <label htmlFor="customerId" style={{ width: '100px' }}>Customer ID</label>
                                    <input style={{ margin: '6px' }} name="customerId" type="text" placeholder="Customer ID" /><br />
                                </div>
                            </div>
                                
                            <div className="col-md-4">
                                <div className="ui input" style={{ display: 'inline-block' }}>
                                    <label htmlFor="name" style={{ width: '100px' }}>Name</label>
                                    <input style={{ margin: '6px' }} name="name" type="text" placeholder="Name" /><br />
                                </div>
                            </div>
                            
                            <div className="col-md-4">
                                <div className="ui input" style={{ display: 'inline-block' }}>
                                    <label htmlFor="gender" style={{ width: '100px' }}>Gender</label>
                                    <input style={{ margin: '6px' }} name="gender" type="text" placeholder="Gender" /><br />
                                </div>
                            </div>
                
                            <div className="col-md-4">
                                <div className="ui input" style={{ display: 'inline-block' }}>
                                    <label htmlFor="contactNo" style={{ width: '100px' }}>Contact No.</label>
                                    <input style={{ margin: '6px' }} name="contactNo" type="text" placeholder="Contact Number" /><br />
                                </div>
                            </div>
                            
                            <label className="col-md-4">
                                <label className="ui input" style={{ display: 'inline-block' }}>
                                    <label htmlFor="property" style={{ width: '100px' }}>Property Selected</label>
                                    <input style={{ margin: '6px' }} name="property" type="text" placeholder="Property Selected" /><br />
                                </label>
                            </label>
                            <div className="col-md-4">
                                <div className="ui input" style={{ display: 'inline-block' }}>
                                    <label htmlFor="preference" style={{ width: '100px' }}>Sharing Preference</label>
                                    <input style={{ margin: '6px' }} onChange={this.handleElecBillChange} name="preference" type="text" placeholder="Sharing Preference" /><br />
                                </div>
                            </div>
                
                            {/* <div className="col-md-4">
                                <div className="ui input" style={{ display: 'inline-block' }}>
                                    <label htmlFor="Food" style={{ width: '100px' }}>Food</label>
                                    <input style={{ margin: '6px' }} name="Food"  type="text" placeholder="Food"  /><br />
                                </div>
                            </div>
                
                        
                            <div className="col-md-4">
                                <div className="ui input" style={{ display: 'inline-block' }}>
                                    <label htmlFor="penalty" style={{ width: '100px' }}>Penalty</label>
                                    <input style={{ margin: '6px' }} name="penalty" type="text" placeholder="Penalty"  /><br />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="ui input" style={{ display: 'inline-block' }}>
                                    <label htmlFor="discount" style={{ width: '100px' }}>Discount</label>
                                    <input style={{ margin: '6px' }} name="discount"  type="text" placeholder="Discount"  /><br />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="ui input" style={{ display: 'inline-block' }}>
                                    <label htmlFor="T" style={{ width: '100px' }}>Total Bill</label>
                                    <input style={{ margin: '6px' }} name="T"  type="text" placeholder="Total Bill" /><br />
                                </div>
                            </div> */}

                        
                            {/* <div className="col-md-4"><br />
                                <button disabled={this.state.ifApproved===1?true:false} className="btn btn-block btn-warning">{this.state.ifApproved?'Paid':'Pending'}</button>
                            </div>
                            <div className="col-md-4">
                                <br />
                                {this.state.ifToUpdate===0?<button className="btn btn-block btn-success" onClick={this.handleUpdate}>Update</button>: <button onClick={this.handleModify} className="btn btn-block btn-success">Modify</button>}
                                
                            </div>
                            <div className="col-md-4">
                                <br />
                                <button className="btn btn-block btn-primary" disabled={this.state.ifApproved===1?true:false} onClick={this.handleApprove.bind(this)}>{this.state.ifApproved?'Approved':'Approve'}</button>
                            </div> */}
                                
                                <div className="col-md-12">
                                    {/* <Button onClick={this.show(true)}>Default</Button> */}

                                    <BedAllocationModal/>
                                </div>   
            
                        </div>
                    </div>
                    </div>
                    


                </div>
                
            </React.Fragment>
      
        )
    }
}
