import React, { Component } from 'react';
import MonthSelect from './MonthSelect';
import YearSelect from './YearSelect';
import PaidPanels from './PaidPanels';

class DisplayBills extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                <div className=" row">
                    <div className="col-md-4" style={{display:'inline-block',}}>
                        <label htmlFor="Month" style={{width:'120px'}}>Select Month</label>
                            <MonthSelect id='Month' />
                            <br/>
                    </div>
                    <div className="col-md-4">
                            
                    </div>
                    <div className="col-md-4" style={{display:'inline-block',}}>
                        <label htmlFor="Year" style={{width:'120px'}}>Select Year</label>
                            <YearSelect id='Year' />
                            <br/>
                    </div>
                    
                    <div className="col-md-4" style={{display:'inline-block',}} >
                        <label htmlFor="bed" style={{width:'120px'}}>Enter Bed ID</label> 
                        <div class="ui input">
                                <input type="text" name="bed" placeholder="Bed ID" />
                                <br/>
                        </div>
                    </div>

                    <div className="col-md-4">

                    </div>

                    <div className="col-md-4" style={{display:'inline-block',marginTop:'10px'}}>
                        <label htmlFor="cust" style={{width:'120px'}}>Enter Customer ID</label> 
                        <div class="ui input">
                                <input type="text" name="cust" placeholder="Customer ID" />
                                <br/>
                        </div>
                    </div>

                    <div className="col-md-4"></div>

                        <div className="col-md-4">
                            <br/><br/>
                        <button class="btn btn-block btn-success"> Display All Bills</button>
                    </div>

                    <div className="col-md-4"></div>


                </div>
                    

                <PaidPanels/>
                    

                </div>

            </React.Fragment>
        )
    }
}

export default DisplayBills;