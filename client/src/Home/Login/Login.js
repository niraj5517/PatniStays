import React, { Component } from 'react';
import { Button ,Image, Modal, Checkbox } from 'semantic-ui-react';
import SignIn from './SignIn';
import axios from 'axios';
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
  state = { open: false, signInUp: 2,
    checked: false, checklen:false,
     mob:'',password:'',
     MobError:false, disable:true }
  
    handleMobile(e) {
      console.log(e.target.value.length+'  '+ valPhone(e.target.value)+ '  '+this.state.checklen);
      this.setState({ mob: e.target.value });
      let length= e.target.value.length ;
      let value=e.target.value;
      // console.log(e.target.value.length);
      if (valPhone(e.target.value))
       {this.setState({MobError:true},()=>{
  
        if (length ===10)
           {this.setState({checklen:true},()=>{
            console.log(length+'  '+ value+ '  '+this.state.checklen);
            if(this.state.checked&&this.state.checklen&&this.state.MobError)
             { this.setState({disable:false}) ; }
           });
           }
        else 
          {this.setState({checklen:false});
          this.setState({disable:true}); }
       }) ;
      }
      else
      {this.setState({MobError:false});this.setState({disable:true}); }
  }

  handleChangeCheck(e) {
    this.setState({checked: !this.state.checked},()=>{
      if(this.state.checked&&this.state.checklen&&this.state.MobError)
      { this.setState({disable:false}) ; }
      else {this.setState({disable:true}) ;}

    });

  }

  
  aman() {
    this.setState({signInUp: 2,mob:'',disable:true ,checked:false,checklen:false});
  }

  show = dimmer => () => {
    this.setState({ dimmer, open: true})
}
close = (event) => {
  this.setState({ open: false})
}
processed = () => {

  axios.get('http://localhost:4000/mob', {
    params: {
      number: this.state.mob
    }
  })
  .then(response =>{
    console.log(response.data);
    if(response.data.bool){this.setState({ open: false,signInUp:0, 
      password:response.data.password});}
    else {this.setState({ open: false,signInUp:1, });
  }
  })
  .catch(error =>{
    console.log(error);
  })
  .then( () =>{
    // always executed
  }); 


  
}
  
  
closeAll = (event) => {
  this.setState({ open: false, otherOpen: false, checked: false, mob: '', checklen: false, })
}

closed = () => {
  this.setState({ open: false, otherOpen:false })
}
able=()=>{
  return false;
}
  
  
  render() {
      const { open, dimmer } = this.state;
      let propss = {condition:this.aman,password:this.state.password,number:this.state.mob};
      
    return (
      <div>
     
        <i style={{fontSize:'40px',color:'white'}} onClick={this.show('blurring')} className="fa fa-fw fa-sign-in" aria-hidden="true"></i>
            
        <form className="ui form">
        <Modal style={{width:'74%',height:'75%',margin:'0 13%',overflowY:'auto'}} dimmer={dimmer} open={open} onClose={this.closeAll} >
          <Modal.Header>Login / Sign Up <span style={{float:"right",cursor:'pointer',}}><i onClick={this.closeAll} className="fa fa-times" aria-hidden="true"></i></span> </Modal.Header>
          
          <Modal.Content image>
            <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
                <Modal.Description>
                
                <div style={{float:'right',overlayY:'auto'}}>
                <div className="field">
                    <label>Enter your mobile number:</label>
                    <input type="tel" pattern="[1-9]{1}[0-9]{9}" value={this.state.mob} 
                    onChange={this.handleMobile} maxlength="10" className="form-control" placeholder="Mobile Number" 
                    required />
                    {(!this.state.MobError||!this.state.checklen)?
                    <div className="alert alert-danger" role="alert">
                        Please enter valid mobile number.
                    </div>:null}
                    
                </div>
              
                <div className="field">
                    <div className="ui checkbox">
                    
                    <br/><br/>
                    <Checkbox onChange={this.handleChangeCheck} 
                    label='I agree to the Terms and Conditions' required />
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
              disabled={this.state.disable}
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
            {this.state.signInUp === 0 ? <SignIn {...propss} /> : null}
          
          {this.state.signInUp === 1 ? <SignUp {...propss} /> : null}
            
          
        </form>
      </div>
    )
  }
}

export default Login;