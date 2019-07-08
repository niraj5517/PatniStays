import React, { Component } from 'react';
import { Button ,Image, Modal, Checkbox,TransitionablePortal } from 'semantic-ui-react';
import {valPhone, valEmail} from './../../Validate.js';
import axios from 'axios';
export default class SignUp extends Component {

     constructor(props) {
        super(props)
         this.state = { otherOpen: true,checklen:false,disable:true , email:'',
          checkstatus:true,pass1:'',pass2:'',emailStatus:true,checkbox:false }
         console.log('constructor called'+this.props.number);
         this.handleChange=this.handleChange.bind(this);
    }

    handleChangeCheck=()=>{
      this.setState({checkbox:!this.state.checkbox},()=>{
        console.log(this.state.emailStatus+' '+this.state.checkstatus+' '+this.state.checklen+''+this.state.checkbox)
        if(this.state.emailStatus&&this.state.checklen&&
            this.state.checkbox&&this.state.checkstatus)
           {  console.log(this.state.emailStatus+' '+this.state.checkstatus+' '+this.state.checklen+''+this.state.checkbox)
               this.setState({disable:false});}

      });
    }

    handleChange(e){
        console.log('trtt');
        let pass1=e.target.value;
        this.setState({pass1:pass1,pass2:'',checkstatus:true})
        if(e.target.value.length<8){
            this.setState({checklen:false});
        }
        else{
            this.setState({checklen:true,disable:true}); 
        }

    }

    checkEmail=(e)=>{
        console.log();
        let email=e.target.value;
        
        console.log(email);
        if(valEmail(email)){this.setState({emailStatus:true},()=>{
            this.setState({email:email});
            if(this.state.checkstatus&&this.state.checklen&&this.state.checkbox)
            {this.setState({disable:false})}
            else{this.setState({disable:true})}

            });
        
        console.log('true'); }
        else {  this.setState({emailStatus:false,disable:true});console.log('false'); };
    }

    matchpassword=(e)=>{
        let password2=e.target.value;
        console.log(this.state.checklen+'t');
        this.setState({pass2:password2})
        if(password2==this.state.pass1){
            this.setState({checkstatus:true},()=>{
                console.log(this.state.emailStatus+' '+this.state.checkstatus+' '+this.state.checklen)
            if(this.state.emailStatus&&this.state.checklen&&this.state.checkbox)
            {this.setState({disable:false})}
            else{this.setState({disable:true})}

            })
        }
        else {this.setState({checkstatus:false,disable:true})}


    }
  
    show = dimmer => () => {
        this.setState({ dimmer, otherOpen: true})
    }
   
    closeAll = (event) => {

        this.setState({  otherOpen:false })
        console.log(event.target.value);
    }
    signin= () => {
        let number=this.props.number;
        let email=this.state.email;
        let password=this.state.pass1;
        console.log(number+''+ email+''+ password);

        axios.post('http://localhost:4000/mob/signup', {
    
      number: number,email:email,password:password
    
  })
  .then(response =>{
    console.log(response);
    if(!response.data.bool){alert('Email already exits!! Try another')}
    else {this.setState({ open: false,signInUp:1 });
  }
  })
  .catch(error =>{
    console.log(error);
  })
  .then( () =>{
    // always executed
  });

        this.setState({ otherOpen: false })
        
    }

    componentWillReceiveProps() {
        this.setState({ otherOpen: true });
        console.log('props recieved');
        this.props.condition();
  }
    render() {

        const { otherOpen } = this.state;
        return (
            <React.Fragment >
                <TransitionablePortal open={otherOpen}  transition={{ animation:'scale', duration: 800 }}> 
                <Modal style={{width:'74%',height:'75%',margin:'0 13%',overflowY:'auto'}} dimmer={'blurring'} open={otherOpen}  onClose={this.closeAll}>
            
                    <Modal.Header>Sign Up <span style={{float:"right",cursor:'pointer',}}><i onClick={this.closeAll} class="fa fa-times" aria-hidden="true"></i></span></Modal.Header>
          
          <Modal.Content image>
            <Image wrapped size = 'medium'
            src = 'https://react.semantic-ui.com/images/avatar/large/rachel.png'/>
                <Modal.Description>
                
                <div style={{float:'right',overlayY:'auto'}}>
                    
                <div>
                    <form>
                <div className="field">
                    <label>Enter your Email:</label>
                    <input type="email" className="form-control" placeholder="Email"
                    onChange={this.checkEmail} />
                </div>
                {(!this.state.emailStatus)?
                    <div className="alert alert-danger" role="alert">
                       Email format not correct!
                    </div>:null}
                <br/>
                <div className="field">
                    <label>Enter your Password:</label>
                    <input type="password" className="form-control" onChange={this.handleChange}
                     maxLength='15' minLength='8' placeholder="Password" />
                </div>
                {(!this.state.checklen)?
                    <div className="alert alert-danger" role="alert">
                        Please enter password between 8-15 characters.
                    </div>:null}
                <br/>
                <div className="field">
                    <label>Enter your Password Again:</label>
                    <input type="password" value={this.state.pass2} className="form-control" 
                     maxLength='15' onChange={this.matchpassword}
                    placeholder="Password Again" />
                </div>
                {(!this.state.checkstatus)?
                    <div className="alert alert-danger" role="alert">
                        Password not matched!
                    </div>:null}
                                  
                <div className="field">
                    <div className="ui checkbox">
                    <br /><br />
                     <Checkbox  onChange={this.handleChangeCheck} label='I agree to the Terms and Conditions' />
                </div>
                </div>
                      </form>                   
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
              content= "Sign Up"
              onClick={this.signin}
              value="modal to be closed"
            />
          </Modal.Actions>
       </Modal>
        </TransitionablePortal>
            </React.Fragment>
        )
    }
}
