import React, { Component } from 'react';
import DropdownExampleSelection from './Dropdown';
import  { Navbar, Nav}  from 'react-bootstrap';
import { Sidebar } from 'semantic-ui-react';
import Login from '../../Home/Login/Login';
// import logo from './logo.png'
// import logo2 from './logo2.png';
import logoWhite2 from './logoWhite2.png';


export default class Header extends Component {
    render() {
        return (
            <div style={{zIndex:'1024'}}>
                <nav style={{zIndex:'1024'}}>
                    
                    <Navbar style={{background:'linear-gradient(360deg,#d11450,#df293a)',position: 'relative',zIndex:'1024'}} >
                        {/* <img src = ""
                        alt = "m" width=""/> */}
                        <Navbar.Brand to="/"><img src={logoWhite2} width="150px" alt="logo"/></Navbar.Brand>
                        
                        <DropdownExampleSelection />
                        <Nav className="ml-auto">
                        {/* <Nav.Link href="#home"><i className="fa fa-home">1</i></Nav.Link> */}
                        {/* <Nav.Link href="#features"><i className="fa fa-home" style={{fontSize:'40px',}}></i></Nav.Link> 
//                         <Nav.Link href=""><Login/></Nav.Link>*/}
            {(window.localStorage.getItem('user'))?
                    <h2><Link to={'/account'}>{window.localStorage.getItem('user')}</Link></h2>: <Nav.Link href=""><Login/></Nav.Link>}
                        
                        </Nav>
                       
                    </Navbar>
                     
                    <Sidebar />
                    
                    </nav>
                    
            </div>
        )
    }
}
