import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

export default class Beds extends Component {
    
    bedAllocation = (e) => {
        console.log('bed allocation by clicking button');
        console.log(e.target.value);
        this.props.allocation(e.target.value);
    }
    render() {
        return (
            <React.Fragment>
                
                {this.props.type === '1' ?
                    <React.Fragment>
                        single bed
                    <div className="col-md-3">
                        
                        <Button value={this.props.bedId} onClick={this.bedAllocation.bind(this)} inverted color='olive'>
                            {this.props.bedId} &nbsp;&nbsp; &nbsp;&nbsp; {this.props.type}
                        </Button>
                        
                        </div>
                    </React.Fragment>
                    : null}
                <br /><br /><br />
                
                {this.props.type === '2' ?
                    <React.Fragment>
                        double bed
                    <div className="col-md-3">
                        
                        <Button value={this.props.bedId} onClick={this.bedAllocation.bind(this)} inverted color='olive'>
                            {this.props.bedId} &nbsp;&nbsp; &nbsp;&nbsp; {this.props.type}
                        </Button>
                        
                        </div>
                    </React.Fragment>
                    : null}
                <br /><br /><br />

                {this.props.type === '3' ?
                    <React.Fragment>
                        triple bed
                    <div className="col-md-3">
                        
                        <Button value={this.props.bedId} onClick={this.bedAllocation.bind(this)} inverted color='olive'>
                            {this.props.bedId} &nbsp;&nbsp; &nbsp;&nbsp; {this.props.type}
                        </Button>
                        
                        </div>
                    </React.Fragment>
                    : null}



                </React.Fragment>
        )
    }
}
