import React, { Component } from 'react'
// import { Dropdown } from 'semantic-ui-react'



export default class ScheduleVisits extends Component {
    render() {
        return (
            <div class="container" style={{width:'80%'}}>
  <h2>Card titles, text, and links</h2>
 
  <div class="card" >
    <div class="card-body">
        <div class="row">
                            <div class="col-md" ><div style={{ float: 'left' }}>
                               <h4 class = "card-title" > NAME :NIRAJ OSWAL</h4>
                                </div></div>
                            <div class="col-md"><div style={{ float: 'center' }}>
                                <h4 class = "card-title" >ID:1234321</h4>
                                </div></div>
                            <div class="col-md" ><div style={{ float: 'right' }}>
                               <h4 class = "card-title" > GENDER: MALE </h4>
                                </div></div>
  
</div><br/><br/>
      <div class="row">
                            <div class="col-md" ><div style={{ float: 'left' }}>
                               <h4 class = "card-title" > SCHEDULE: 15-04-2019</h4>
                                </div></div>
                            <div class="col-md"><div style={{ float: 'center' }}>
                                <h4 class = "card-title" >SLOT: 9PM-12PM</h4>
                                </div></div>
                            <div class="col-md" ><div style={{ float: 'right' }}>
                               <h4 class = "card-title" > TYPE:<span>&nbsp;&nbsp;</span> 3 BED </h4>
                                </div></div>
  
</div>
<br/><br/>
<div class="row">
                            <div class="col-md" ><div style={{ float: 'left' }}>
                               <h4 class = "card-title" > CONTACT: 8786765654</h4>
                                </div></div>
                            
                            <div class="col-md" ><div style={{ float: 'right' }}>
                               <button type="button" class="btn btn-danger">Decline</button>
                                </div></div>
  
</div>
     
    
    </div>
  </div>
</div>

        )
    }
}
