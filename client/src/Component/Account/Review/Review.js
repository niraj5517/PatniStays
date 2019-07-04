import React, { Component } from 'react'
import Stars from './Stars';

export default class Review extends Component {
    constructor() {
        super();
        this.state = {
            rate1: 0,
            rate2: 0,
        }
        this.updateRate1 = this.updateRate1.bind(this);
        this.updateRate2 = this.updateRate2.bind(this);
    }
    updateRate1(rating) {
        this.setState({
            rate1: rating,
        })
        console.log(this.state.rate1);
    }

    updateRate2(rating) {
        this.setState({
            rate2:rating,
        })
        console.log(this.state.rate2);
    }
   

    render() {
        return (
            <div className="row" style={{overflowX:'hidden',width:'95%'}} >
                <div className="col-md-3"></div>
                <div className="col-md-4" style={{ marginLeft:'20px'  }}>
                    <br />
                    <br/>
                    <div style={{ margin:'10px' , }}>
                         <Stars field=" &nbsp;&nbsp; Food" triggerParentUpdate={this.updateRate1} />
                    </div>
                    <br />
                    <br />
                    
                    <div style={{margin:'10px',}}>
                        <Stars field="&nbsp;&nbsp;  Stay" triggerParentUpdate={this.updateRate2} />
                    </div>
                    <br/>
                    <br/>
                    <textarea  style={{ border: '1px solid grey', }} placeholder="Please give some reviews :)" className="form-control" type="text" name="review" id="review" />

                     <br/>
                    <button style={{}} type="submit" className="btn btn-outline-primary btn-block">Send Reviews</button>
                    <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>  
                </div>

                <div className="back col-md-5" style={{backgroundImage:`url('https://t-ec.bstatic.com/images/hotel/max1024x768/527/52797307.jpg')`}}>

                </div>
                
                
            </div>
        )
    }
}
