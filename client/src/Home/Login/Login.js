import React, { Component } from 'react';
import { Button ,Image, Modal, Checkbox } from 'semantic-ui-react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import {valPhone} from './../../Validate.js';

class Login extends Component {
  constructor() {
    super();
    this.close = this.close.bind(this);
    this.aman = this.aman.bind(this);
    this.handleMobile=this.handleMobile.bind(this);
    this.handleChangeCheck=this.handleChangeCheck.bind(this);
  }
  state = { open: false, signInUp: 2, checked: false, checklen:false, mob:'',MobError:true,  }
  
  handleMobile(e) {
    
    this.setState({ mob: e.target.value });
    console.log(e.target.value.length);
    if (valPhone(e.target.value) && e.target.value.length === 10) {
      
      this.setState({MobError:true,checklen:true})
    }
    else{
      this.setState({MobError:false});
    }

    
  }

  handleChangeCheck(e) {
      this.setState({
        checked: !this.state.checked,
        
      });
    
  }

  aman() {
    this.setState({signInUp: 2});
  }

  show = dimmer => () => {
            this.setState({ dimmer, open: true})
  }
    
  close = (event) => {
        this.setState({ open: false})
  }
  
  processed = () => {
    this.setState({ open: false,signInUp:1,checked: false, });
  }
  
  closeAll = (event) => {
    this.setState({ open: false, otherOpen: false, checked: false, mob: '', checklen: false, })
  }

  closed = () => {
    this.setState({ open: false, otherOpen:false })
  }
    

  render() {
      const { open, dimmer } = this.state;

    return (
      <div>
     
        <i style={{fontSize:'40px',color:'white'}} onClick={this.show('blurring')} className="fa fa-fw fa-sign-in" aria-hidden="true"></i>
            
        <form className="ui form">
        <Modal style={{width:'74%',height:'75%',margin:'0 13%',overflowY:'auto'}} dimmer={dimmer} open={open} onClose={this.closeAll} >
          <Modal.Header>Login / Sign Up <span style={{float:"right",cursor:'pointer',}}><i onClick={this.closeAll} class="fa fa-times" aria-hidden="true"></i></span> </Modal.Header>
          
          <Modal.Content image>
            <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
                <Modal.Description>
                
                <div style={{float:'right',overlayY:'auto'}}>
                <div className="field">
                    <label>Enter your mobile number:</label>
                    <input type="tel" pattern="[1-9]{1}[0-9]{9}" value={this.state.mob} onChange={this.handleMobile} maxlength="10" className="form-control" placeholder="Mobile Number" required />
                    {(!this.state.MobError)?
                    <div className="alert alert-danger" role="alert">
                        Please enter valid mobile number.
                    </div>:null}
                    
                </div>
              
                <div className="field">
                    <div className="ui checkbox">
                    
                    <br/><br/>
                    <Checkbox onChange={this.handleChangeCheck} label='I agree to the Terms and Conditions' />
                    </div>
                </div>
                </div>
                
                </Modal.Description>
          </Modal.Content>
          
          <Modal.Actions>
              <br/>
            <Button color='red' onClick={this.closeAll}>
              Close
            </Button>
            <Button
              disabled={!this.state.checked }
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