import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
// import {Dropdown, Button, ButtonGroup } from 'react-bootstrap';
import './profile.css';

class Profile extends Component {
    state={
        imgId: '',
        idType:'',
    }
    constructor() {
        super();
        this.handleIdImg = this.handleIdImg.bind(this);
        this.handleId = this.handleId.bind(this);
        //  this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleIdImg = (event) => {
        console.log(event.target.value);
        this.setState({ imgId: event.target.value });
       
    }
    handleId = (event) => {
        console.log(event.target.value);
        console.log('selecting id type');
        this.setState({ idType: event.target.value });
       
    }
     handleSubmit = (event) => {
         console.log('submitted');
         
     }



    render(){
        
    return (
        < div className = "col-md-12" >
            <form>

    <p className="h4 mb-4"><strong>Personal Details:</strong> </p>

    <div className="form-row mb-4">
        <div className="col">
            
            <input type="text" id="defaultRegisterFormFirstName" className="form-control" placeholder="First name"/>
        </div>
        <div className="col">
            
            <input type="text" id="defaultRegisterFormLastName" className="form-control" placeholder="Last name"/>
        </div>
    </div>

   
    <input type="email" id="defaultRegisterFormEmail" className="form-control mb-4" value="abc@gmail.com" placeholder="E-mail" readOnly/>


    <input type="text" id="defaultRegisterPhonePassword" className="form-control" placeholder="Phone number" aria-describedby="defaultRegisterFormPhoneHelpBlock" readOnly/>
    
    <br/>
    <div className="form-row mb-4">
        <div className="col">
            
            <input type="text" id="defaultRegisterFormCompany" className="form-control" placeholder="Company/Institute"/>
        </div>
        <div className="col">
            
            <input type="text" id="defaultRegisterDesignation" className="form-control" placeholder="Designation"/>
        </div>
    </div>
    
            
    <input type="text" id="defaultRegisterFormCompanyAddress" className="form-control" placeholder="Company/Institute Address"/>
        
      <br/><br/>
   
<div className="form-row mb-4">
        <div className="col">
            
             {/* <Dropdown as={ButtonGroup}>
                <Button style={{width:'180px',}} variant="outline-success">{this.state.idType?this.state.idType:'Select an Id Type:'}</Button>
                      
                <Dropdown.Toggle split variant="success" id="dropdown-button-drop-right" />

                <Dropdown.Menu  style={{width:'140px',margin:'0',padding:'0',}}>
                    
                    <Button className="select-option" onClick={this.handleId} value="Aadhar Card" >Aadhar Card</Button>
                    <Button className="select-option" onClick={this.handleId}  value="PAN Card" >PAN Card</Button>
                    <Button className="select-option" onClick={this.handleId}  value="Driving License">Driving License</Button>
                    <Button className="select-option" onClick={this.handleId}  value="Passport" >Passport</Button>
                   
                </Dropdown.Menu>
            </Dropdown> */}

                        <select className="form-control" name="idType" id="idType"> 
                            {/* <option className="select-option" disabled></option> */}
                            <option className="select-option" onClick={this.handleId} value="Aadhar Card">Aadhar Card</option>
                            <option className="select-option" onClick={this.handleId}  value="PAN Card" >PAN Card</option>
                            <option className="select-option" onClick={this.handleId}  value="Driving License">Driving License</option>
                            <option className="select-option" onClick={this.handleId}  value="Passport" >Passport</option>
                        </select>
        </div>
        <br/>
        <div className="col">
            
            <input type="text" id="defaultRegisterId" className="form-control" placeholder="ID Number"/>
        </div>
    </div>
    
   
       


     <div className="form-row mb-4">
         <div className="col">
              <label htmlfor="id"/> Uplaod the ID proof:<br/>
              <img src="" alt="No ID present" width="150px"/>
         </div>
         <div className="col">
          <input type="file" name="id" id="id" onChange={this.handleIdImg} classame="form-control" />
         </div>
     </div>

     <button className="btn btn-info my-4 btn-block" onClick={this.handleSubmit} type="submit">Update</button>

    

     <hr/>

         </form>
         </div>
      
        
    )
}}
export default Profile;