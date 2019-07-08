import React, { Component } from 'react';
import  { Navbar, Nav}  from 'react-bootstrap';
import { Sidebar } from 'semantic-ui-react';
import Login from '../../Home/Login/Login';
import DropdownExampleSelectionAdmin from './DropdownAdmin';


export default class HeaderAdmin extends Component {
    render() {
        return (
            <div style={{zIndex:'1024'}}>
                <nav style={{zIndex:'1024'}}>
                    
                    <Navbar style={{background:'wheat',position: 'relative',zIndex:'1024'}} >
                        < img src = ""
                        alt = "m" width="25px"/>
                        <Navbar.Brand to="/">Navbar</Navbar.Brand>
                        
                        <DropdownExampleSelectionAdmin />
                        <Nav className="ml-auto">
                        {/* <Nav.Link href="#home"><i className="fa fa-home">1</i></Nav.Link> */}
                        {/* <Nav.Link href="#features"><i className="fa fa-home" style={{fontSize:'40px',}}></i></Nav.Link> */}
                        <Nav.Link href=""><Login/></Nav.Link>
                        </Nav>
                       
                    </Navbar>
                     
                    <Sidebar />
                    
                    </nav>
                    
            </div>
        )
    }
}
