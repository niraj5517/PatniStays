import React from 'react'

export default function Bill(props) {
    
    return (
           
            <tr>
            <td >{props.bedId}</td>
            <td >{props.name}</td>
            <td >10500</td>
            <td >3500</td>
            <td ><div className="ui input"><input min="0" onChange={props.changedElectricity} type="number" name="electricity"  placeholder="Electricity Bill" /></div></td>
            <td ><div className="ui input"><input min="0"
                // onChange={props.changePenalty}
                type="number" name="penalty" 
                placeholder="Penalty" /></div></td>
            <td ><div className="ui input"><input min="0"
                // onChange={props.changeDiscount}
                type="number" name="discount" 
                placeholder="Discount" /></div></td>
            <td >Total {props.disabling}</td>
            <td><button   onClick={props.generatedBill} className="btn btn-outline-success">Generate Bill</button>
                
            </td>
            </tr>
            
    )
}
