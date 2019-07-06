import React from 'react'

// export default function Bill(props) {
    
//     return (
           
//             <tr>
//             <td >{props.bedId}</td>
//             <td >{props.name}</td>
//             <td >10500</td>
//             <td >3500</td>
//             <td ><div className="ui input"><input min="0" onChange={props.changedElectricity} type="number" name="electricity"  placeholder="Electricity Bill" /></div></td>
//             <td ><div className="ui input"><input min="0"
//                 // onChange={props.changePenalty}
//                 type="number" name="penalty" 
//                 placeholder="Penalty" /></div></td>
//             <td ><div className="ui input"><input min="0"
//                 // onChange={props.changeDiscount}
//                 type="number" name="discount" 
//                 placeholder="Discount" /></div></td>
//             <td >Total {props.disabling}</td>
//             <td><button   onClick={props.generatedBill} className="btn btn-outline-success">Generate Bill</button>
                
//             </td>
//             </tr>
            
//     )
// }



export default class Bill extends React.Component {
    constructor() {
        super();
        this.state = {
            flag:0,
        }
        this.handleDisable = this.handleDisable.bind(this);
        this.bill = this.bill.bind(this);
    }
    handleDisable = (e) => {
        console.log('handle disable');
        this.setState({ flag: 1 });
        console.log(this.state.flag);
    }
    bill(e) {
        this.setState({
            flag:1,
        })
        this.props.generatedBill();
    }
    render() {
    
        return (
           
            <tr>
                <td >{this.props.bedId}</td>
                <td >{this.props.name}</td>
                <td >10500</td>
                <td >3500</td>
                <td ><div className="ui input"><input min="0" onChange={this.props.changedElectricity} type="number" name="electricity" placeholder="Electricity Bill" /></div></td>
                <td ><div className="ui input"><input min="0"
                    onChange={this.props.changePenalty}
                    type="number" name="penalty"
                    placeholder="Penalty" /></div></td>
                <td ><div className="ui input"><input min="0"
                    onChange={this.props.changeDiscount}
                    type="number" name="discount"
                    placeholder="Discount" /></div></td>
                <td >Total {this.props.disabling}</td>
                <td><button  disabled={this.state.flag===1?true:false} onClick={this.bill} className="btn btn-outline-success">Generate Bill</button>
                
                </td>
            </tr>
            
        )
    }
}
