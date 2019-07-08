import React, { Component } from 'react';
import { Button ,Image, Modal, Checkbox, TransitionablePortal } from 'semantic-ui-react';
import axios from 'axios';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class scheduleVisits extends Component {
  
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
    this.state = { open: true ,otherOpen:false  ,  disable:false , selectedDay: new Date(),slot:'1'}
   
  }
 slot1=()=>{
     this.setState({slot:'1'});
 }
 slot2=()=>{
    this.setState({slot:'2'});
}
  
    
  
  show = dimmer => () => {
    this.setState({ dimmer, open: true})
}
close = (event) => {
  this.setState({ open: false})
}

closeNotice=()=>{
    this.setState({ otherOpen: false})
}



processed = () => {
  
  let property =this.props.property;
  let id= this.props.id;
let slot= this.state.slot=='1'?'09am-12pm':'02pm-05pm';
let date= this.state.selectedDay.toString();
console.log(date +'fd');
// let timestamp=new Date(date).getTime();console.log(timestamp+'ts');
let timestamp=Date.parse(date);
console.log(timestamp+'tzzs');

// let ndate= new Date(timestamp);
// console.log(ndate+'aa');
// console.log(ndate.toDateString()+'kj'+ndate.toLocaleDateString());
date=new Date();
console.log(Date.parse(date)+'rews');





property='PS001';
id =12;


  axios.post('http://localhost:4000/scheduleVisits/client', {
     slot: slot,
     date: timestamp,
     property: property,
     id: id
    
  })
  .then(response =>{
    console.log(response.data);
      if(response.data.bool){console.log('sucessfull')}
      else{console.log('some error')}
    
  }).catch(error =>{
    console.log(error);
  })
  .then( () =>{
    // always executed
  }); 

  this.setState({ open: false,otherOpen:true});
  
}

handleDayClick=(day)=> {
    this.setState({ selectedDay: day },()=>{

        console.log(this.state.selectedDay.toLocaleString()+'csf')
        // this.state.selectedDay.toLocaleString
        let date =new Date(this.state.selectedDay.toString());
        console.log(this.state.selectedDay.toUTCString()+'gf')
        console.log(date+'  '+date.getUTCFullYear() +'gfd');
        let d=new Date();
        console.log(d.toUTCString())

    });
   
  }
  
  
  
  render() 
  
  {
      const { open, dimmer } = this.state;
      var date = new Date();
date.setDate(date.getDate() + 7);

console.log(date);
      
    return (
        
      <div>
         
     <button class="btn btn-info" value="name" onClick={this.show('blurring')} type="submit " 
     onClick={()=>{this.setState({open:true})} } >Schedule Visit</button>
        {/* <i style={{fontSize:'40px',color:'red'}} onClick={this.show('blurring')} className="fa fa-fw fa-sign-in" aria-hidden="true"></i> */}
            
        <form className="ui form">
        <TransitionablePortal open={this.state.open}  transition={{ animation:'scale', duration: 800 }}> 
        <Modal style={{width:'85%',height:'85%',margin:'0 7%',overflowY:'auto'}} dimmer={dimmer} open={open} onClose={this.close} >
          <Modal.Header>Schedule A Visit <span style={{float:"right",cursor:'pointer',}}>

             
            <i onClick={this.close} className="fa fa-times" aria-hidden="true"></i></span>
             </Modal.Header>
          
          
           <Modal.Content>
           <div className="row" style={{paddingLeft:"10%",paddingRight:'8%'}}>

                <div className='col-md' >
               <p> When do you want to Visit the Property?</p>
               <hr/>

{/* // Calender */}
               <div>
<h3 style={{marginLeft:'6%'}}>{this.state.selectedDay.toLocaleDateString()}     </h3>
                <DayPicker  
                onDayClick={this.handleDayClick}
                selectedDays={this.state.selectedDay}
                initialMonth={new Date()}
                disabledDays={[
                    {
                      after: date,
                      before: new Date(),
                    },
                  ]}
                /> 
                
                
                </div>

                </div>




                <div className='col-md'>
               
                <p> Select a time slot which fits the best for you.</p>
                <hr/><br/>
                <i  style={{paddingLeft:"2%",paddingRight:'6%'}} >
                <button type="button"  className={this.state.slot=='1'?'btn btn-dark':'btn btn-outline-dark'}
                 onClick={this.slot1}>09am-12pm</button>
                </i>
               <i style={{paddingLeft:"6%",paddingRight:'2%'}}>
                <button type="button" onClick={this.slot2}
                className={this.state.slot=='2'?'btn btn-dark':'btn btn-outline-dark'}
                >02pm-05pm</button></i>
                </div>


           </div>

           
          </Modal.Content>
          <Modal.Actions>
          <Button color='red' onClick={this.close}>
              Close
            </Button>
            <Button
              disabled={this.state.disable}
              positive
              icon='checkmark'
              labelPosition='right'
              content="Confirm Visit"
              onClick={this.processed}
              value="modal to be closed"
            />
            
          </Modal.Actions>
        </Modal>
        </TransitionablePortal>
            </form>


           <TransitionablePortal open={this.state.otherOpen}  transition={{ animation:'scale', duration: 800 }}> 
      <Modal style={{width:'60%',top:'150px',height:'30%',margin:'35% 20%',overflowY:'hidden'}} dimmer={dimmer} open={this.state.otherOpen} onClose={this.close} >
           <Modal.Header>Congrats<span style={{float:"right",cursor:'pointer',}}>

             
             <i onClick={this.closeNotice} className="fa fa-times" aria-hidden="true"></i></span>
              </Modal.Header>
              <div style={{textAlign:'center'}}>
              <h4>your schedule for </h4>
           <h2>See you on  Sunday  </h2>
           </div>
          
          
         </Modal>
         </TransitionablePortal>
            
          
      </div>
    )
  }
}

export default scheduleVisits;

