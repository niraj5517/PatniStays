import React, { Component } from 'react'
import { Button,  Modal } from 'semantic-ui-react';
// import Beds from './Beds';

export default class CheckInModal extends Component {

constructor() {
    super();
    this.close = this.close.bind(this);

    this.state = {
        open: false,
        FirstMonthRent:0,
        Security:0,
        
            bedTable: false,
            cot: false,
            mattress: false,
            AC: false,
            ACremote: false,
            wardrobe: false,
            wardrobeKeys: false,
            TV: false,
            TVremote: false,
            cableBox: false,
            cableRemote: false,
            extensionBoard: false,
            sideTable: false,
            chair: false,
            dressingTable: false,
            studyTable: false,

        
       

        
    }
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
      this.setState({ open: false, });

      let object = {
        //   bedId:this.props.bedId,
          firstMonthRent: this.state.FirstMonthRent,
          security: this.state.Security,
            bedTable:this.state.bedTable,
                cot:this.state.cot,
                mattress:this.state.mattress,
                AC:this.state.AC,
                ACremote:this.state.ACremote,
                wardrobe:this.state.wardrobe,
                wardrobeKeys:this.state.wardrobeKeys,
                TV:this.state.TV,
                TVremote:this.state.TVremote,
                cableBox:this.state.cableBox,
                cableRemote:this.state.cableRemote,
                extensionBoard:this.state.extensionBoard,
                sideTable:this.state.sideTable,
                chair:this.state.chair,
                dressingTable:this.state.dressingTable,
                studyTable:this.state.studyTable,

      }
      console.log(object);
  }
  handleChange = (e) =>{
      this.setState({
          [e.target.name]:e.target.value
      })
  }
  handleCheck(event){
    //   console.log(item);
    //   console.log(val);

    //   console.log(e.target)
      console.log('checked');
      console.log(event.target.name);
      console.log(event);
        // let name = event.target.name;
      this.setState({
          [event.target.name]:!this.state[event.target.name],
      })

      
      
  }
    
   

  

    render() {

    const { open, dimmer } = this.state
        return (
            <div>
                
                <Button onClick={this.show('blurring')}><i class="fa fa-forward"  aria-hidden="true"></i></Button>

    
        <Modal style={{width:'74%',top:'100px',height:'65%',margin:'0 13%',overflowY:'auto'}} dimmer={dimmer} open={open} onClose={this.close} >
          <Modal.Header>Check In <span style={{float:"right",cursor:'pointer',}}><i onClick={this.close} className="fa fa-times" aria-hidden="true"></i></span> </Modal.Header>
          
          <Modal.Content>
           <div className="row">
               <div className="col-md-6">
                <div className="ui input" style={{ display: 'inline-block' }}>
                                    <label htmlFor="BedId" style={{ width: '150px' }}>Bed ID</label>
                                    <input style={{ margin: '6px' }} name="BedID" type="text" placeholder="Bed ID" /><br />
                                </div>
            </div>


                            <div className="col-md-6">
                <div className="ui input" style={{ display: 'inline-block' }}>
                                    <label htmlFor="CustomerID" style={{ width: '150px' }}>Customer ID</label>
                                    <input style={{ margin: '6px' }} name="CustomerID" type="text" placeholder="Customer ID" /><br />
                                </div>
                    </div>
                            

            <div className="col-md-6">
                <div className="ui input" style={{ display: 'inline-block' }}>
                                    <label htmlFor="FirstMonthRent" style={{ width: '150px' }}>First Month Rent</label>
                                    <input onChange={this.handleChange.bind(this)} style={{ margin: '6px' }} name="FirstMonthRent" type="text" placeholder="First Month Rent" /><br />
                                </div>
            </div>
                            
                          
            <div className="col-md-6">
                <div className="ui input" style={{ display: 'inline-block' }}>
                                    <label htmlFor="Security" style={{ width: '150px' }}>Security Money</label>
                                    <input onChange={this.handleChange.bind(this)} style={{ margin: '6px' }} name="Security" type="text" placeholder="Security Money" /><br />
                                </div>
            </div>
            <br/>
            <div className="container">
            <h3>Check List <br/> </h3>
            <div className="row">
                
                <div className="col-md-3">
                    
                    <div className="checkbox" >
                         <label><input onClick={this.handleCheck.bind(this)} type="checkbox" name="bedTable"/>Bed</label>
                    </div>
                    
                </div>
                <div className="col-md-3">
                    
                    <div className="checkbox" >
                         <label><input onClick={this.handleCheck.bind(this)} type="checkbox" name="cot"/>Cot</label>
                    </div>
                    
                </div>
                <div className="col-md-3">
                    
                    <div className="checkbox" >
                         <label><input onClick={this.handleCheck.bind(this)} type="checkbox" name="mattress"/>Mattress</label>
                    </div>
                    
                </div>
                <div className="col-md-3">
                    
                    <div className="checkbox" >
                         <label><input onClick={this.handleCheck.bind(this)} type="checkbox" name="AC"/>AC</label>
                    </div>
                    
                </div>
                <div className="col-md-3">
                    
                    <div className="checkbox" >
                         <label><input onClick={this.handleCheck.bind(this)} type="checkbox" name="ACremote"/>AC Remote</label>
                    </div>
                    
                </div>
                <div className="col-md-3">
                    
                    <div className="checkbox" >
                         <label><input onClick={this.handleCheck.bind(this)} type="checkbox" name="wardrobe"/>Wardrobe</label>
                    </div>
                    
                </div>
                <div className="col-md-3">
                    
                    <div className="checkbox" >
                         <label><input onClick={this.handleCheck.bind(this)} type="checkbox" name="wardrobeKeys"/>Wardrobe Keys</label>
                    </div>
                    
                </div>
                <div className="col-md-3">
                    
                    <div className="checkbox" >
                         <label><input onClick={this.handleCheck.bind(this)} type="checkbox" name="TV"/>TV</label>
                    </div>
                    
                </div>
                
                <div className="col-md-3">
                    
                    <div className="checkbox" >
                         <label><input onClick={this.handleCheck.bind(this)} type="checkbox" name="TVremote"/>TV remote</label>
                    </div>
                    
                </div>
                <div className="col-md-3">
                    
                    <div className="checkbox" >
                         <label><input onClick={this.handleCheck.bind(this)} type="checkbox" name="cableBox"/>Cable Box</label>
                    </div>
                    
                </div>
                <div className="col-md-3">
                    
                    <div className="checkbox" >
                         <label><input onClick={this.handleCheck.bind(this)} type="checkbox" name="cableRemote"/>Cable Remote</label>
                    </div>
                    
                </div>
                <div className="col-md-3">
                    
                    <div className="checkbox" >
                         <label><input onClick={this.handleCheck.bind(this)} type="checkbox" name="extensionBoard"/>Extension Board</label>
                    </div>
                    
                </div>
                <div className="col-md-3">
                    
                    <div className="checkbox" >
                         <label><input onClick={this.handleCheck.bind(this)} type="checkbox" name="sideTable"/>Side Table</label>
                    </div>
                    
                </div>
                <div className="col-md-3">
                    
                    <div className="checkbox" >
                         <label><input onClick={this.handleCheck.bind(this)} type="checkbox" name="chair"/>Chair</label>
                    </div>
                    
                </div>
                <div className="col-md-3">
                    
                    <div className="checkbox" >
                         <label><input onClick={this.handleCheck.bind(this)} type="checkbox" name="dressingTable"/>Dressing Table</label>
                    </div>
                    
                </div>
                <div className="col-md-3">
                    
                    <div className="checkbox" >
                         <label><input onClick={this.handleCheck.bind(this)} type="checkbox" name="stydyTable"/>Study Table</label>
                    </div>
                    
                </div>
                          
            </div>       

            </div>
                            
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
