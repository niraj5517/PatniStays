import React, { Component } from 'react'
import PendingPanel from './PendingPanel';

class PendingBill extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                <form style={{marginTop:'2%'}} className="row">
                <div  className="col-md-6" style={{display:'inline-block'}}>    
                            <div className="ui input" style={{display:'inline-block'}}>
                                <label htmlFor="bedID" style={{width:'80px'}}> Bed ID</label>
                                <input style={{margin:'20px'}} name="bedID" type="text" placeholder="BedId" /><br/></div>
                            
                </div>
                <div  className="col-md-6" style={{display:'inline-block'}}>    
                <div className="ui input" style={{display:'inline-block'}}>
                    <label htmlFor="customerId" style={{width:'80px'}}>Customer ID </label>
                    <input style={{margin:'20px'}} name="customerId" type="text" placeholder="CustomerId" /><br/></div>
                        </div>
                      
                <div  className="col-md-6" style={{display:'inline-block'}}>    
                <div className="ui input" style={{display:'inline-block'}}>
                    <label htmlFor="month" style={{width:'80px'}}>Month</label>
                    <input style={{margin:'20px'}} name="month" type="text" placeholder="Month" /><br/></div>
                </div>
                <div  className="col-md-6" style={{display:'inline-block'}}>    
                <div className="ui input" style={{display:'inline-block'}}>
                    <label htmlFor="year" style={{width:'80px'}}>Year</label>
                    <input style={{margin:'20px'}} name="year" type="text" placeholder="Year" /><br/></div>
                </div>
                    <button className="btn btn-block btn-primary">Apply Filters</button>
                </form>
                 
                    {/* the panel below is to be passed with different props required */}
                    <PendingPanel/>
                </div>
            </React.Fragment>
        )
    }
}
export default PendingBill;
