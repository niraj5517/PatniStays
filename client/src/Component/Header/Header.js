import React, { Component } from 'react';
import DropdownExampleSelection from './Dropdown';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import  { Navbar, Nav}  from 'react-bootstrap';
import { Sidebar, Sticky } from 'semantic-ui-react';
import Login from '../../Home/Login/Login';
import HeaderAdmin from './Header1';
// import logo from './logo.png'
// import logo2 from './logo2.png';
import logoWhite2 from './logoWhite2.png';

 class Header extends Component {
    state={
        flag:0,
    }
   
    render() {

        if (window.location.pathname.match('/admin')) {
            return <HeaderAdmin/>;
        }

        else {return (
            <Sticky><div style={{zIndex:'1024'}}>
                <nav style={{zIndex:'1024'}}>
                    
                    <Navbar style={{background:'linear-gradient(360deg,#d11450,#df293a)',position: 'relative',zIndex:'1024'}} >
                        {/* <img src = ""
                        alt = "m" width=""/> */}
                        <Navbar.Brand to="/"><img src={logoWhite2} width="150px" alt="logo"/></Navbar.Brand>
                        
                        <DropdownExampleSelection />
                        <Nav className="ml-auto">
<<<<<<< HEAD
                       
                    {(window.localStorage.getItem('user'))?<h2><Link to={'/account'}>{window.localStorage.getItem('user')}</Link></h2>:<Nav.Link href=""><Login/></Nav.Link>}
                    {/* </Nav.Link>} */}
=======
                        {/* <Nav.Link href="#home"><i className="fa fa-home">1</i></Nav.Link> */}
                        {/* <Nav.Link href="#features"><i className="fa fa-home" style={{fontSize:'40px',}}></i></Nav.Link> 
//                         <Nav.Link href=""><Login/></Nav.Link>*/}
            {(window.localStorage.getItem('user'))?
                    <h2><Link to={'/account'}>{window.localStorage.getItem('user')}</Link></h2>: <Nav.Link href=""><Login/></Nav.Link>}
                        
>>>>>>> 774bec8cbca75359fba254bc51241ad26c082d3b
                        </Nav>
                       
                    </Navbar>
                     
                    <Sidebar />
                    
                    </nav>
                    
            </div></Sticky>
        )}
    }
}
export default Header;