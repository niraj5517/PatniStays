        import React from 'react';
// import { Dropdown, Button, ButtonGroup } from 'react-bootstrap';

class Problems extends React.Component {
    
    constructor() {
        super();
        this.state={
            probDom: '',
            probSpec: '',
            probIssue:'',
        }
        // this.handleProbDom = this.handleProbDom.bind(this);
        this.handleProbSpec = this.handleProbSpec.bind(this);
        this.handleProbX = this.handleProbX.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleProbDom =(event) => {
        console.log(event.target.value);
        console.log('problem is related to');
        this.setState({
            probDom: event.target.value,
            
        })
    }
    handleProbSpec(event) {
        console.log(event.target.value);
        this.setState({
            probSpec: event.target.value,

        })

    }
    handleProbX(event) {
        console.log(event.target.value);
        this.setState({
            probIssue: event.target.value,
        })
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }
    
    render() {
        return (
            <div style={{width:'95%',marginLeft:'60px'}}>
              
            <form>
            <div  className="row">
                    <div className="col-md-4"> 
                    <br/>
                    <h1>Problem Related To:</h1>
                                
                       <select className="form-control" onClick={this.handleProbDom.bind(this)} name="idType" id="idType"> 
                            <option className="select-option" onClick={this.handleProbDom.bind(this)}  value="">Select</option>
                           <option className="select-option" onClick={this.handleProbDom.bind(this)}  value="Food" >Food</option>
                            <option className="select-option" onClick={this.handleProbDom.bind(this)} value="Repair & Maintenance">Repair & Maintenance</option>
                            {/* <option className="select-option" onClick={this.handleProbDom}  value="Guest Stay">Guest Stay</option> */}
                            <option className="select-option" onClick={this.handleProbDom.bind(this)} value="Notice" >Notice</option>
                            <option className="select-option" onClick={this.handleProbDom.bind(this)} value="Payment" >Payment</option>
                            <option className="select-option" onClick={this.handleProbDom.bind(this)} value="Service Request & Complaints" >Service Request & Complaints</option>
                        </select>
                        

                    </div>

                    <div className="col-md-4"></div>
                   
                    <div className="col-md-4"></div>
                </div>
                    <br />
                    <br />
                    
                <div className="row">
                    <div className="col-md-4"> 
                   <h1> Issue is about:</h1>
                        {this.state.probDom === ''? <select disabled className="form-control">
                        <option selected disabled>Select</option>
                        </select> : null}
                        

                    {this.state.probDom === 'Food' ? 
                    
                    <select className="form-control" onClick={this.handleProbSpec} name="idType" id="idType"> 
                            {/* <option className="select-option" disabled></option> */}
                            <option className="select-option" onClick={this.handleProbSpec}  value="">Select</option>
                            <option className="select-option" onClick={this.handleProbSpec} value="Quality not appropriate">Quantity not appropriate</option>
                            <option className="select-option" onClick={this.handleProbSpec}  value="Drinking Water" >Drinking Water</option>
                            <option className="select-option" onClick={this.handleProbSpec}  value="Menu related concerns">Menu related concerns</option>
                            <option className="select-option" onClick={this.handleProbSpec}  value="Quality & Taste issue" >Quality & Taste issue</option>
                        </select>
                    
                    : null}    

                        

                    {
                        this.state.probDom === 'Repair & Maintenance' ?
                    
                    <select className="form-control" onClick={this.handleProbSpec} name="idType" id="idType"> 
                            {/* <option className="select-option" disabled></option> */}
                            <option className="select-option" onClick={this.handleProbSpec}  value="">Select</option>
                            <option className="select-option" onClick={this.handleProbSpec} value="Bathroom">Bathroom</option>
                            <option className="select-option" onClick={this.handleProbSpec}  value="Common Areas" >Common Areas</option>
                            <option className="select-option" onClick={this.handleProbSpec}  value="Equipment & Appliances">Equipment & Appliances</option>
                            <option className="select-option" onClick={this.handleProbSpec}  value="Room" >Room</option>
                        </select>
                    
                    : null}
                    
                        
                        {
                        this.state.probDom === 'Notice' ?
                    
                    <select className="form-control" onClick={this.handleProbSpec} name="idType" id="idType">     
                            <option className="select-option" onClick={this.handleProbSpec}  value="">Select</option>
                            <option className="select-option" onClick={this.handleProbSpec} value="Invoice not Provided">Invoice not Provided</option>
                            <option className="select-option" onClick={this.handleProbSpec}  value="Miscalculation/Clarifications needed on Notice Charges" >Miscalculation/Clarifications needed on Notice Charges</option>
                            <option className="select-option" onClick={this.handleProbSpec}  value="Notice Cancellation Request">Notice Cancellation Request</option>
                            <option className="select-option" onClick={this.handleProbSpec}  value="Notice Extension Request">Notice Extension Request</option>
                            <option className="select-option" onClick={this.handleProbSpec}  value="Poliy Unclear" >Poliy Unclear</option>
                        </select>
                    
                    : null}
                        
                    
                    {
                        this.state.probDom === 'Payment' ?
                    
                    <select className="form-control" name="idType" onClick={this.handleProbSpec} id="idType">     
                            <option className="select-option" onClick={this.handleProbSpec}  value="">Select</option>
                            <option className="select-option" onClick={this.handleProbSpec} value="Deposit/Advance Payment">Deposit/Advance Payment</option>
                            <option className="select-option" onClick={this.handleProbSpec}  value="Deposit/Advance Refund" >Deposit/Advance Refund</option>
                            <option className="select-option" onClick={this.handleProbSpec}  value="Fine/Penalty" >Fine/Penalty</option>
                            {/* <option className="select-option" onClick={this.handleProbSpec}  value="Notice Cancellation Request">Notice Cancellation Request</option>
                            <option className="select-option" onClick={this.handleProbSpec}  value="Notice Extension Request">Notice Extension Request</option>
                            <option className="select-option" onClick={this.handleProbSpec}  value="Poliy Unclear" >Poliy Unclear</option> */}
                        </select>
                    
                    : null}    
                    
                        
                        
                    {
                        this.state.probDom === 'Service Request & Complaints' ?
                    
                    <select className="form-control" name="idType" onClick={this.handleProbSpec} id="idType">     
                            <option className="select-option" onClick={this.handleProbSpec}  value="">Select</option>
                            <option className="select-option" onClick={this.handleProbSpec} value="Agreement Related">Agreement Related</option>
                            <option className="select-option" onClick={this.handleProbSpec}  value="Room/Property change" >Room/Property change</option>
                            <option className="select-option" onClick={this.handleProbSpec}  value="Behavioural Issues" >Behavioural Issues</option>
                            <option className="select-option" onClick={this.handleProbSpec}  value="Electricity">Electricity</option>
                            <option className="select-option" onClick={this.handleProbSpec}  value="Housekeeping">Housekeeping</option>
                            <option className="select-option" onClick={this.handleProbSpec}  value="Water" >Water</option>
                            <option className="select-option" onClick={this.handleProbSpec}  value="Wifi" >Wifi</option>
                             <option className="select-option" onClick={this.handleProbSpec}  value="Others" >Others</option>
                        </select>
                    
                    : null}



                    </div>
                    <div className="col-md-4"></div>
                   
                    
                   
                    
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-6">
                        <textarea onChange={this.handleProbX} style={{border:'1px solid grey',}} placeholder="Please describe the problem" className="form-control" type="text" name="probDescp" id="probDescp"/>
                    </div>
                </div>
                        <br/>
                        <button type="submit" onClick={this.handleSubmit} className="btn btn-outline-success ">Submit Issue</button>
                </form>
            </div>
        )
    }
}
export default Problems;