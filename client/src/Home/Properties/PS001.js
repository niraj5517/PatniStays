import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link,withRouter } from "react-router-dom";
import ScheduleVisits from '../ScheduleVisits/ScheduleVisits';

 class PS001 extends Component {

    booknow=()=>
    
    {
        
        this.props.history.push("/booknow")


}


    render() {
        return (
            <div>
                

                   <ScheduleVisits/><br/>
               <button class="btn btn-success" value="name" type="submit "
                onClick={this.booknow}  >Book Now</button>
                 
               {/* <button class="btn btn-info" value="name" type="submit " onClick={()=>{this.setState({open:true})} } >visit</button> */}
               
            </div>
        )
    }
}

export default withRouter(PS001)