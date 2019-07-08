import React, { Component } from 'react'
import MonthSelect from './MonthSelect';
import YearSelect from './YearSelect';

export default class Generate extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                <div className=" row">
                    <div className="col-md-4">
                        <label htmlFor="Month">Select Month</label>
                        <MonthSelect  id='Month'/>
                    </div>
                    <div className="col-md-4">
                            
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="Year">Select Year</label>
                        <YearSelect  id='Year'/>
                    </div>

                    <div className="col-md-4"></div>

                        <div className="col-md-4">
                            <br/><br/>
                        <button class="btn btn-danger btn-block"> Display Ungenerated Bills</button>
                    </div>

                    <div className="col-md-4"></div>


                </div>

                </div>
            </React.Fragment>
        )
    }
}
