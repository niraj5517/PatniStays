import React, { Component } from 'react';
import { Button ,Image, Modal, Checkbox } from 'semantic-ui-react';

class Login extends Component {
    constructor() {
        super()
        this.close = this.close.bind(this);
    }
  state = { open: false, otherOpen:false, signInUp:1 }
//signInUp : 0 for login , 1 for SignUp
    show = dimmer => () => {
            this.setState({ dimmer, open: true, otherOpen: false })
        
        // if (this.state.signInUp === 1) {
        //     this.setState({open: false, otherOpen: false })
        // }
        // else {
            
        // }
    }
    
    close = (event) => {

        this.setState({ open: false, otherOpen:true })
        console.log(event.target.value);
    }
    closeAll = (event) => {

        this.setState({ open: false, otherOpen:false })
        console.log(event.target.value);
    }
    closed = () => {
        this.setState({ open: false, otherOpen:false })
    }
    

  render() {
      const { open, dimmer, otherOpen } = this.state;

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
                    <input className="form-control" placeholder="Mobile Number" required/>
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
              onClick={this.close}
              value="modal to be closed"
            />
          </Modal.Actions>
        </Modal>
            </form>
            










            <form className="ui form">
        <Modal style={{width:'74%',height:'75%',margin:'0 13%',overflowY:'auto'}} dimmer={dimmer} open={otherOpen} onClose={this.close} >
         
         
          <Modal.Header>{this.state.signInUp===0?"Log In":"Sign Up"}<span style={{float:"right",cursor:'pointer',}}><i onClick={this.closeAll} class="fa fa-times" aria-hidden="true"></i></span></Modal.Header>
          
          {this.state.signInUp===0?<SignIn/>:<SignUp/>}
          
          


        </Modal>
        </form>
      </div>
    )
  }
}

export default Login;