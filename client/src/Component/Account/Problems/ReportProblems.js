import React, { Component } from 'react';
// import { Button } from 'react-bootstrap';
import Problems from './Problems';
import Panels from '../loginmenu/Panels';
class ReportProblems extends Component {
    constructor() {
        super();
        this.handleIfIssue = this.handleIfIssue.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }
    state = {
        ifIssue:'0',
    }

    handleIfIssue(event) {
        console.log(event.target.value);
        this.setState({
            ifIssue: event.target.value,
        })
        console.log(this.state.ifIssue);
    }  
    handleBack(event) {
        this.setState({
            ifIssue:'0',
        })
    }


    render() {
        
        return (
            < div className = "col-md-12" >

                {this.state.ifIssue==='0'? <Panels />
                :null}
               
                <br/>
                {/* Report  Problems Component */}
                {this.state.ifIssue==='0'?<button className="btn btn-outline-danger btn-block" onClick={this.handleIfIssue} value="1">Raise an Issue</button>
                :null}
                {/* this component will be rendered when the user clicks to add a new issue otherwise the component will show the existing (pending or solved ) issues */}
                {this.state.ifIssue === '1' ?
                    
                    
                    <div>
                        <button onClick={this.handleBack} className="btn btn-outline-warning btn-lg"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
                        <br/><br/>
                        <h3>Kindly fill the following details if you are facing any problems:</h3><br/>
                        <Problems/>
                </div>
                    
                    
                    
                    
                    
                    
                    : null}
                
            </div>
        )
    }
}
export default ReportProblems;