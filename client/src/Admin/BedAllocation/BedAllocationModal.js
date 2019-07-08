import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react';
import Beds from './Beds';

export default class BedAllocationModal extends Component {

constructor() {
    super();
    this.close = this.close.bind(this);

  }
    state = {
        open: false,
        unallocatedBeds: [{
            bedId: '1',
            type:'1'
        }, {
            bedId: '2',
            type:'1'
        }, {
            bedId: '3',
            type:'2'
        }, {
            bedId: '4',
            type:'2'
        }, {
            bedId: '5',
            type:'3'
        }, {
            bedId: '6',
            type:'3'    
        }],
    }
  
  
  componentDidMount() {
    
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
    
    allocateBed = (bedId) => {
        console.log('bed allocated');
        console.log(bedId);
        
    }
  

  

    render() {

    const { open, dimmer } = this.state
        return (
            <div>
                
                <Button onClick={this.show('blurring')}><i class="fa fa-forward"  aria-hidden="true"></i></Button>

    
        <Modal style={{width:'74%',height:'50%',margin:'0 13%',overflowY:'auto'}} dimmer={dimmer} open={open} onClose={this.close} >
          <Modal.Header>Bed Allocation <span style={{float:"right",cursor:'pointer',}}><i onClick={this.close} className="fa fa-times" aria-hidden="true"></i></span> </Modal.Header>
          
          <Modal.Content>
           <div className="row">
                            {/* the beds element is to be passed the mapped data from the query */}
                            {this.state.unallocatedBeds.map((item, key) => {
                                return (
                                    <Beds
                                   key={item.bedId}
                                   allocation={this.allocateBed.bind(this)}
                                   bedId={item.bedId}
                                   type={item.type}
                               />)
                            })}
                            
            </div>
          </Modal.Content>
          
          <Modal.Actions>
              <br/>
            <Button color='red' onClick={this.close}>
              Close
            </Button>
            <Button
            //   disabled={!this.state.checked}
              positive
              icon='checkmark'
              labelPosition='right'
              content="Proceed"
              onClick={this.processed}
              value="modal to be closed"
            />
          </Modal.Actions>
        </Modal>
            
            
            </div>
        )
    }
}
