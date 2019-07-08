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
    
<<<<<<< HEAD
calculateElec=(e)=>{
    let electricity=parseFloat(e.target.value);
    let total=parseFloat(this.props.rent)+parseFloat(this.props.food)+parseFloat(e.target.value);
    this.setState({ total: total, value: total, electricity: electricity, })
}
    
    
    calculatePenalty=(e)=>{
        let penalty = parseFloat(e.target.value);
        console.log(penalty);
        let value = parseFloat(this.props.rent) + parseFloat(this.props.food) + parseFloat(this.state.electricity) + parseFloat(e.target.value);
        // console.log(this.state.value);
        // let value = parseFloat(this.state.value);
    // let total=parseFloat(this.state.total)+parseFloat(e.target.value);
        this.setState({ total: value, penalty: penalty, });
    }
    
    calculateDiscount=(e)=>{
        let discount = parseFloat(e.target.value);
        console.log([e.target.name] + ' ' + e.target.value);
        console.log(this.state.value);
        let value = parseFloat(this.props.rent) + parseFloat(this.props.food) + parseFloat(this.state.electricity) + parseFloat(this.state.penalty) + parseFloat(-(e.target.value));
    // let total=value+parseFloat(e.target.value);
        this.setState({ total: value, discount: discount, });
}
    
    

    

    bill = (e) => {
        console.log(this.state);
        this.setState({
            flag:1,
        })
        let object={total:this.state.total,index:this.props.ind,elec:this.state.electricity, penalty:this.state.penalty,discount:this.state.discount,email:this.props.email,bedId:this.props.bedId};
=======
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
>>>>>>> 774bec8cbca75359fba254bc51241ad26c082d3b
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
<<<<<<< HEAD
                onChange={this.calculateElec} type="number" name="electricity" placeholder="Electricity Bill" /></div></td>
                
                <td ><div className="ui input"><input disabled={this.state.flag===1?true:false}  min="0"
                    onChange={this.calculatePenalty}
                    type="number" name="penalty"
                    placeholder="Penalty" /></div></td>
                <td ><div className="ui input"><input  disabled={this.state.flag===1?true:false}  min="0"
                    onChange={this.calculateDiscount}
=======
                onChange={this.calculate} type="number" name="electricity" placeholder="Electricity Bill" /></div></td>
                
                <td ><div className="ui input"><input disabled={this.state.flag===1?true:false}  min="0"
                    onChange={this.props.changePenalty}
                    type="number" name="penalty"
                    placeholder="Penalty" /></div></td>
                <td ><div className="ui input"><input  disabled={this.state.flag===1?true:false}  min="0"
                    onChange={this.props.changeDiscount}
>>>>>>> 774bec8cbca75359fba254bc51241ad26c082d3b
                    type="number" name="discount"
                    placeholder="Discount" /></div></td>
                <td>{this.state.total} </td>
                <td><button  disabled={this.state.flag===1?true:false} onClick={this.bill} className="btn btn-outline-success">{this.state.flag===1?'Bill Generated':'Generate Bill'}</button>
                
                </td>
            </tr>
            
        )
    }
}
