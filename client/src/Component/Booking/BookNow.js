import React, { Component } from 'react';
import { Button, Image, Modal,} from 'semantic-ui-react';

class BookNow extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  state = { open: false,value:0}

  show = dimmer => () => {
            this.setState({ dimmer, open: true})
  }
    
  
  closeAll = (event) => {
    this.setState({ open: false, otherOpen: false, checked: false, mob: '', checklen: false,value:0 })
  }

   handleChange = (e) => {
       this.setState({value:e.target.value});
       console.log(e.target.value);





    }

 
  
  render() {
      const { open, dimmer } = this.state;
    return (
      <div>
     
        {/* <i style={{fontSize:'40px',color:'black'}} onClick={this.show('blurring')} className="fa fa-fw fa-sign-in" aria-hidden="true"></i> */}
            <button onClick={this.show('blurring')} className="btn btn-outline-success">Book Now</button>
        <form className="ui form">
        <Modal style={{width:'74%',height:'auto',margin:'0 13%',overflowY:'auto'}} dimmer={dimmer} open={open} onClose={this.closeAll} >
          <Modal.Header>Book Now <span style={{float:"right",cursor:'pointer',}}><i onClick={this.closeAll} className="fa fa-times" aria-hidden="true"></i></span> </Modal.Header>
          
          <Modal.Content image>
              {/* <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' /> */}
      
                <Modal.Description>
                        <form className="ui form">
                                <div className="field">
                                    Selected value:{this.state.value===0?'none':this.state.value}
                                    <b></b>
                                </div>
                                <div className="row container">
                                    

                           <div className="field col-md-4">
                            <div className="ui radio checkbox">
                            <input type="radio" id="1"  onChange={this.handleChange} className="hidden" name="radioGroup"  readOnly="" tabIndex="0" value="1" />
                            <label htmlFor="1">1</label>
                            </div>
                        </div>
                        <div className="field col-md-4">
                            <div className="ui radio checkbox">
                            <input type="radio" id="2" onChange={this.handleChange} className="hidden" name="radioGroup" readOnly="" tabIndex="0" value="2" />
                            <label htmlFor="2">2</label>
                            </div>
                        </div>
                        <div className="field col-md-4">
                            <div className="ui radio checkbox">
                            <input type="radio" id="3" onChange={this.handleChange} className="hidden" name="radioGroup" readOnly="" tabIndex="0" value="3" />
                            <label htmlFor="3">3</label>
                            </div>
                            </div>
                        </div>
                    </form>                  
                    </Modal.Description>
                        

                        

            </Modal.Content>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque similique explicabo nulla, laboriosam odit adipisci a harum odio error quia veritatis, eius dolorum numquam magni? Corrupti ab autem perspiciatis quam?</p>
            <Modal.Actions>
                <br/>
                <Button color='red' onClick={this.closeAll}>
                Close
                </Button>
                    </Modal.Actions>
                    
            </Modal>
            </form>
            
            <form className="ui form">
         
        </form>
      </div>
    )
  }
}

export default BookNow;