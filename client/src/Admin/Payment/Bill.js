import React from 'react';

export default class Bill extends React.Component {
    constructor() {
        super();
        this.state = {
            total:0,
            flag: 0,
            electricity: 0,
            penalty: 0,
            discount:0,
        }
        this.handleDisable = this.handleDisable.bind(this);
        this.bill = this.bill.bind(this);

    }
    handleDisable = (e) => {
        console.log('handle disable');
        this.setState({ flag: 1 });
        console.log(this.state.flag);
    }
    
calculate=(e)=>{
    let electricity=parseFloat(e.target.value);
    let total=parseFloat(this.props.rent)+parseFloat(this.props.food)+parseFloat(e.target.value);
this.setState({total:total,value:total,electricity:electricity,})

}

    bill=(e)=> {
        this.setState({
            flag:1,
        })
        let object={total:this.state.total,index:this.props.ind,elec:this.state.electricity};
        this.props.generatedBill(object);
    }
    
    render() {
    
        return (
           
            <tr>
                <td >{this.props.bedId}</td>
                <td >{this.props.name}</td>
                <td >{this.props.rent}</td>
                <td >{this.props.food}</td>
                <td ><div className="ui input"><input disabled={this.state.flag === 1 ? true : false} min="0" 
                // onChange={this.props.changedElectricity} 
                onChange={this.calculate} type="number" name="electricity" placeholder="Electricity Bill" /></div></td>
                
                <td ><div className="ui input"><input disabled={this.state.flag===1?true:false}  min="0"
                    onChange={this.props.changePenalty}
                    type="number" name="penalty"
                    placeholder="Penalty" /></div></td>
                <td ><div className="ui input"><input  disabled={this.state.flag===1?true:false}  min="0"
                    onChange={this.props.changeDiscount}
                    type="number" name="discount"
                    placeholder="Discount" /></div></td>
                <td>{this.state.total} </td>
                <td><button  disabled={this.state.flag===1?true:false} onClick={this.bill} className="btn btn-outline-success">{this.state.flag===1?'Bill Generated':'Generate Bill'}</button>
                
                </td>
            </tr>
            
        )
    }
}
