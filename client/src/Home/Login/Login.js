import React, { Component } from 'react';
import { Button ,Image, Modal, Checkbox } from 'semantic-ui-react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import axios from 'axios';

// import { METHODS } from 'http';

class Login extends Component {
  constructor() {
    super()
    this.close = this.close.bind(this);
    this.aman = this.aman.bind(this);
  }
  state = { open: false, signInUp: 2 }
  //signInUp : 0 for login , 1 for SignUp
  
  aman() {
    this.setState({signInUp: 2});
  }

    show = dimmer => () => {
            this.setState({ dimmer, open: true})
    }
    
    close = (event) => {

        this.setState({ open: false})
        console.log(event.target.value);
    }
  
  processed = () => {
 

    axios.get('http://localhost:4000/signup', {
      params: {
        number: '12345'
      }
              // value:'dfghjk',
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });



    this.setState({ open: false,signInUp:0})
  }
    closeAll = (event) => {

        this.setState({ open: false, otherOpen:false })
        console.log(event.target.value);
    }
    closed = () => {
        this.setState({ open: false, otherOpen:false })
    }
    

  render() {
      const { open, dimmer } = this.state;

    return (
      <div>
     
        <i style={{fontSize:'40px',color:'white'}} onClick={this.show('blurring')} class="fa fa-fw fa-sign-in" aria-hidden="true"></i>
            
        <form className="ui form">
        <Modal style={{width:'74%',height:'75%',margin:'0 13%',overflowY:'auto'}} dimmer={dimmer} open={open} onClose={this.closeAll} >
          <Modal.Header>Login / Sign Up <span style={{float:"right",cursor:'pointer',}}><i onClick={this.closeAll} class="fa fa-times" aria-hidden="true"></i></span> </Modal.Header>
          
          <Modal.Content image>
            <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
                <Modal.Description>
    
                {/* <Header>Default Profile Image</Header> */}
                
                <div style={{float:'right',overlayY:'auto'}}>
                <div className="field">
                    <label>Enter your mobile number:</label>
                    <input className="form-control" placeholder="Mobile Number" onChange={ this.handleChange }
                     required/>
                </div>
                {/* <div className="field">
                    <label>Last Name</label>
                    <input placeholder="Last Name" />
                </div> */}
                <div className="field">
                    <div className="ui checkbox">
                    {/* <input type="checkbox" id="checkboxTick" class="hidden" readonly="" tabindex="0" /> */}
                     
                    <br/><br/>
                    <Checkbox label='I agree to the Terms and Conditions' />
                    {/* <label for="checkboxTick">I agree to the Terms and Conditions.</label> */}
                    </div>
                </div>
                </div>
                {/* <button type="submit" className="ui button">Submit</button> */}
                
                </Modal.Description>
          </Modal.Content>
          
          <Modal.Actions>
              <br/>
            <Button color='red' onClick={this.closeAll}>
              Close
            </Button>
            <Button
              positive
              icon='checkmark'
              labelPosition='right'
              content="Proceed"
              onClick={this.processed}
              value="modal to be closed"
            />
          </Modal.Actions>
        </Modal>
            </form>
            










            <form className="ui form">
          {this.state.signInUp === 0 ? <SignIn condition={this.aman} /> : null}
          
        {this.state.signInUp === 1 ? <SignUp condition={this.aman} /> : null}
          
        </form>
      </div>
    )
  }
}

export default Login;