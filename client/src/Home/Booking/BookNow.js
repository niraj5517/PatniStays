import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import {Accordion,Icon, } from 'semantic-ui-react';
import Header from '../../Component/Header/Header';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { Dropdown } from 'semantic-ui-react'
import {  Checkbox} from 'semantic-ui-react';
import DropdownExampleClearable from './Dropdown';
import axios from 'axios';


export default class BookNow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedDay: new Date(),activeIndex: -1,type:'1',checkBox:false,disable:true
    };
    
    
   

    }

    
    handleDayClick=(day)=> {
      this.setState({ selectedDay: day },()=>{
  
      });
     
    }

clickDate=()=>{console.log('sdfgh');
  this.setState({activeIndex:this.state.activeIndex+1})}

  clickBox=()=>{
    this.setState({checkBox:!this.state.checkBox},()=>{
      if(this.state.checkBox){this.setState({disable:false})}
      else { this.setState({disable:true}) }
    })
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }


  componentDidMount=()=>{
    let id=window.localStorage.getItem('user');
    id=12;

    axios.post('http://localhost:4000/bookNow/client', {
     
      property: 'PS001',
      id: id
     
   })
   .then(response =>{
     console.log(response.data);
       if(response.data.bool){console.log('sucessfull');
       this.setState({name:response.data.name,mob:response.data.mob,type1:response.data.type1,
        type2:response.data.type2,type3:response.data.type3,type4:response.data.type4,
        rent1:response.data.rent1,rent:response.data.rent1,
        rent2:response.data.rent2,rent3:response.data.rent3,rent4:response.data.rent4
      
      })
      }
       else{console.log('some error')}
     
   }).catch(error =>{
     console.log(error);
   })
   .then( () =>{
     // always executed
   }); 

 }


booknow=()=>{
 
  let date=this.state.selectedDay.toString();
  console.log(date +'fd');
let timestamp1=Date.parse(date);
console.log(timestamp1+'tzzs');

date =new Date();
let timestamp2=Date.parse(date);
console.log(date +'fd senddc');
console.log(timestamp2+'tzzssecond');


let property =this.props.property;
let id= this.props.id;
let bookingAmount=parseFloat(this.state.rent)/2;
let bookingRequestDate= timestamp1;
let bookingDate=timestamp2;
let type=this.state.type;

property='PS001';
id='12';

console.log(property);
console.log(id);
console.log(bookingAmount);
console.log(bookingRequestDate);
console.log(bookingDate);
console.log(type);







  axios.post('http://localhost:4000/bookNow/clientRequest', {
     
   property:property,
   id:id,
   bookingAmount:bookingAmount,
   bookingRequestDate:bookingRequestDate,
   bookingDate:bookingDate,
   type:type
   
 })
 .then(response =>{
   console.log(response.data);
     if(response.data.bool){console.log('sucessfull booking');
     
    }
     else{console.log('some error')}
   
 }).catch(error =>{
   console.log(error);
 })
 .then( () =>{
   // always executed
 }); 






}







  render() {
    var date = new Date();
    date.setDate(date.getDate() + 7);
    let type =this.state.type;
    let preference;let rent;
    if(type=='1'){preference='Single sharing';rent=this.state.rent1};
    if(type=='2'){preference='Double sharing';rent=this.state.rent2};
    if(type=='3'){preference='Triple sharing';rent=this.state.rent3};
    if(type=='4'){preference='Quadraple sharing';rent=this.state.rent4};
    if(type=='0'){preference=''};

    

    const { activeIndex } = this.state
    return (
      <React.Fragment><Header/>
      <div className="container" style={{marginTop:'4%'}}>
      <div className=" row">
        <div className='col-sm-4'>
        <div className="card">
  <div className="card-header" style={{backgroundColor:'#f8f8ff'}}>
    <h3 style={{color:'#003763'}} > How booking works?</h3></div>
  <div className="card-body">
    <ol>
   <li>
   <h4 >Select your Joining date and room type to check availability.</h4>
   </li><br/>
   <li>
  <h4  > Get a confirmation of booking by paying a fully refundable amount of Rs 1,000.
And don't forget to check the offers section at the time of payment for amazing last minute booking discounts.
</h4> </li><br/>
   <li><h4 >
   Exact bed details would be sent 3 days before your joining date.
   </h4> </li>



    </ol>
    
    </div> 
 
</div>
<hr/>
        </div>
        <div className='col-sm-8'>  
      <Accordion style={{width:'100%' }}  styled>
      <Accordion.Title active={activeIndex === 0} index={0} 
      onClick={this.handleClick} style={{padding:'5%', backgroundColor:'#f8f8ff'}}>
       
        <h3 style={{color:'#003763' }}> <Icon name='dropdown'/>Select Joining Date</h3>
        <h4 style={{marginLeft:'6%'}}>{this.state.selectedDay.toLocaleDateString()}     </h4>
      </Accordion.Title>
      <Accordion.Content  active={activeIndex === 0}>
       <div  style={{marginBottom:'3%'}} >
         

      
       <i className="fa fa-calendar" aria-hidden="true" style={{fontSize:'35px', padding:'3%'}}> </i>
       
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

        <div>

        <div className="card-footer"><button onClick ={this.clickDate}
        className ="btn btn-info btn-block">Confirm Your Date
  
  </button></div>

       
        </div>
      </Accordion.Content>

      <Accordion.Title active={activeIndex === 1} index={1} 
      onClick={this.handleClick} style={{padding:'5%', backgroundColor:'#f8f8ff'}}>
       
        <h3 style={{color:'#003763' }}> <Icon name='dropdown'/>Select Room Preference</h3>
        <h4 style={{marginLeft:'6%'}}>{preference}     </h4>
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 1}>
      <div className="row" >

                {this.state.type1=='0'?null:
                <div style={{width:'21%',margin:'2%'}}><div style={{ textAlign: 'center' }}>
                <button  className={this.state.type=='1'?'btn btn-info':'btn btn-outline-dark'}
                onClick={()=>{this.setState({type:'1',rent:this.state.rent1})}}
                >
                  Single<hr/>Rent<br/>{this.state.rent1}
               </button>
                    </div></div>
                  
                  }

{this.state.type2=='0'?null:
                 <div style={{width:'21%',margin:'2%'}}><div style={{ textAlign: 'center' }}>
                <button  className={this.state.type=='2'?'btn btn-info':'btn btn-outline-dark'}
                onClick={()=>{this.setState({type:'2',rent:this.state.rent2})}}
                >
                  Double<hr/>Rent <br/>{this.state.rent2}
               </button>
                    </div></div>
                  
                  }

{this.state.type3=='0'?null:
                 <div style={{width:'21%',margin:'2%'}} ><div style={{ textAlign: 'center' }}>
                <button  className={this.state.type=='3'?'btn btn-info':'btn btn-outline-dark'}
                onClick={()=>{this.setState({type:'3',rent:this.state.rent3})}}
                >
                  Triple<hr/>Rent<br/>{this.state.rent3}
               </button>
                    </div></div>
                  
                  }


{this.state.type4=='0'?null:
                 <div style={{width:'21%',margin:'2%'}} ><div style={{ textAlign: 'center' }}>
                <button style={{paddingLeft:'4%',paddingRight:'4%'}} 
                onClick={()=>{this.setState({type:'4',rent:this.state.rent4})}}
                 className={this.state.type=='4'?'btn btn-info':'btn btn-outline-dark'}>
              Quadraple<hr/>Rent  {this.state.rent4}
           </button>
                </div></div>
                  
                  }
                          
                           
                            {/* <div style={{width:'21%',margin:'2%'}} ><div style={{ textAlign: 'center' }}>
                            <button  className={this.state.type=='3'?'btn btn-info':'btn btn-outline-dark'}
                            onClick={()=>{this.setState({type:'3'})}}
                            >
                              Triple<hr/>Rent 2000
                           </button>
                                </div></div>
                                <div style={{width:'21%',margin:'2%'}} ><div style={{ textAlign: 'center' }}>
                                <button style={{paddingLeft:'4%',paddingRight:'4%'}} 
                                onClick={()=>{this.setState({type:'4'})}}
                                 className={this.state.type=='4'?'btn btn-info':'btn btn-outline-dark'}>
                              Quadraple<hr/>Rent  2000
                           </button>
                                </div></div> */}
  
</div>

<div className="card-footer" style={{marginTop:'5%'}}> 
<h4>Your Booking Amount is Half the Monthly Rent</h4>  </div>
<div className="card-footer"><button onClick ={this.clickDate} className ="btn btn-info btn-block"
>Proceed
  
  </button></div> 
      </Accordion.Content>

      <Accordion.Title active={activeIndex === 2} index={2} 
      onClick={this.handleClick} style={{padding:'5%', backgroundColor:'#f8f8ff'}}>
       
        <h3 style={{color:'#003763' }}> <Icon name='dropdown'/>Occupant Details</h3>
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 2}>
        
         <label forhtml="name" style={{zoom:'1.2',color:'red',fontSize:'11px',
         marginTop: '12px',marginLeft:'10%'}} > Name:</label>
      <input id="name" placeholder="Text" type="text" className="form-control" value  ={this.state.name}
       style={{ outline: '0',borderWidth: '0 0 1px',borderColor: 'red',width:'60%', 
       marginTop: '5px', marginBottom: '5px',verticalAlign:"middle",marginLeft:'10%',fontSize:'18px'}} />


<label forhtml="mobile" style={{zoom:'1.2',color:'red',fontSize:'11px',
marginTop: '12px',marginLeft:'10%'}} > Mobile</label>
      <input id="mobile" placeholder="Text" type="text" className="form-control"
       value  ={this.state.mob} disabled
       style={{ outline: '0',borderWidth: '0 0 1px',borderColor: 'red',width:'60%',
        marginTop: '5px', marginBottom: '5px',verticalAlign:"middle",marginLeft:'10%',fontSize:'18px'}} />


      

<label forhtml="mobile" style={{zoom:'1.2',color:'red',fontSize:'11px',
marginTop: '12px',marginLeft:'10%'}} > Gender</label>
<div style={{marginLeft:'10%',marginTop: '19px'}}><DropdownExampleClearable /></div>





      </Accordion.Content>

      <Accordion.Title active={activeIndex === 3} index={3} 
      onClick={this.handleClick} style={{padding:'5%', backgroundColor:'#f8f8ff'}}>
       
        <h3 style={{color:'#003763' }}> <Icon name='dropdown'/>Booking Summary</h3>
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 3}>

        <div className="row">
          <div className="col-md">  
          <label forhtml="name" style={{zoom:'1.2',color:'red',fontSize:'12px',
          marginTop: '12px',marginLeft:'10%', color:'#61C0FF'}} > Name:  </label >
          <br/><label  style={{marginLeft:'10%',fontSize:'15px'}}>{this.state.name}</label><hr/>

          </div>
          
          <div className="col-md">
          <label forhtml="name" style={{zoom:'1.2',color:'red',fontSize:'12px',
          marginTop: '12px',marginLeft:'10%', color:'#61C0FF'}} > Mobile:  </label >
          <br/> <label  style={{marginLeft:'10%',fontSize:'15px'}}>{this.state.mob}</label>
         <hr/>
          </div>


        </div>
        
         <div className="row">
          <div className="col-md">  
          <label forhtml="name" style={{zoom:'1.2',color:'red',fontSize:'12px',
          marginTop: '12px',marginLeft:'10%', color:'#61C0FF'}} > Preference:   </label >
          <br/><label  style={{marginLeft:'10%',fontSize:'15px'}}>{preference}</label>
          <hr/>
          </div>
          <div className="col-md">
          <label forhtml="name" style={{zoom:'1.2',color:'red',fontSize:'12px',
          marginTop: '12px',marginLeft:'10%', color:'#61C0FF'}} > Booking Amount:  </label >
          <br/> <label  style={{marginLeft:'10%',fontSize:'15px'}}>{parseFloat(this.state.rent)/2}</label>
         <hr/>
          </div>
         </div>


         <div className="row">
          <div className="col-md">  
          <label forhtml="name" style={{zoom:'1.2',color:'red',fontSize:'12px',
          marginTop: '12px',marginLeft:'10%', color:'#61C0FF'}} > Check-In Date:   </label >
          <br/><label  style={{marginLeft:'10%',fontSize:'15px'}}>
          {this.state.selectedDay.toLocaleDateString()}</label>
          <hr/>
          </div>
          <div className="col-md">
            <button className="btn btn-outline-info" disabled={this.state.disable}
              onClick={this.booknow}
            style={{ marginTop: '17%',marginLeft:'10%'}}>Book now</button>
         
         <hr/>
          </div>
         </div>
        
        <div>


        <Checkbox onChange={this.clickBox} 
                    label='I agree to the Terms and Conditions' required />
        </div>





      </Accordion.Content>
    </Accordion>
    </div>
    

    </div>
  </div>
  <br/><br/><br/><br/><br/>
  </React.Fragment>
    )
    
  }
}
