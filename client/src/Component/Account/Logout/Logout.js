import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link,withRouter } from "react-router-dom";

 class Logout extends Component {
    constructor() {
        super();
        console.log('fdxsxsf');
      }
  
      handle=()=>{
       
        console.log(localStorage.getItem('user'));
        localStorage.removeItem('user');
        this.props.history.push("/")

      }

    


    render() {
        return (
            <div>
                <h1>sfssfdsasdfgfdsdfdssdfgfddfg</h1>
                <button type="button" component={Link} to="/" className="btn btn-danger" onClick={this.handle}>Decline</button>
            </div>
        )
    }
}
export default withRouter(Logout)