import React, { Component } from 'react';
import { Button, Image, Modal,} from 'semantic-ui-react';
import axios from 'axios';

class BookNow extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  state = { open: false,value:0,data:''}

  show = dimmer => () => {
            this.setState({ dimmer, open: true})
  }
    
  
  closeAll = (event) => {
    this.setState({ open: false, otherOpen: false, checked: false, mob: '', checklen: false,value:0 })
  }

   handleChange = (e) => {
       this.setState({value:e.target.value});
       console.log('in BookNow.js file '+e.target.value);

    axios.get('http://localhost:4000/booknow'
    ,{
     params:{
        beds:e.target.value,
     }
    }
    ).then( res =>{
      console.log('working in BookNow file '+ this.state.value);

      // console.log(res.data);
      this.setState({data:res.data});

      console.log(this.state.data);
    } )
    // .catch(error =>{
    //   console.log(error);
    // }).then(() => {
    //   //
    // });



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
            {!this.state.data?
            null:<p>data received</p>}
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