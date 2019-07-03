import React, { Component } from 'react';
import { Button ,Image, Modal, Checkbox } from 'semantic-ui-react';

export default class SignIn extends Component {

     constructor() {
        super()
         this.state = { otherOpen: true }
         console.log('constructor called');
    }
  
    show = dimmer => () => {
        this.setState({ dimmer, otherOpen: true})
    }
   
    closeAll = (event) => {

        this.setState({  otherOpen:false })
        console.log(event.target.value);
    }
    signin= () => {
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
                <Modal style={{width:'74%',height:'75%',margin:'0 13%',overflowY:'auto'}} dimmer={'blurring'} open={otherOpen}  onClose={this.closeAll}>
            
                    <Modal.Header>Log In <span style={{float:"right",cursor:'pointer',}}><i onClick={this.closeAll} class="fa fa-times" aria-hidden="true"></i></span></Modal.Header>
          
          <Modal.Content image>
            <Image wrapped size = 'medium'
            src = 'https://react.semantic-ui.com/images/avatar/large/rachel.png'/>
                <Modal.Description>
                
                <div style={{float:'right',overlayY:'auto'}}>
                    
                    <div >
                <div className="field">
                    <label>Enter your Password:</label>
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
                                  
                <div className="field">
                    <div className="ui checkbox"> 
                    <br /><br />
                     <Checkbox label='I agree to the Terms and Conditions' />
                </div>
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
              positive
              icon='checkmark'
              labelPosition='right'
              content= "Log In"
              onClick={this.signin}
              value="modal to be closed"
            />
          </Modal.Actions>
       </Modal>
            </React.Fragment>
        )
    }
}
