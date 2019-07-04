import React, { Component } from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Profile from './profile/Profile';
import Header from '../Header/Header';
import AccHome from './AccHome/AccHome';
import Review from './Review/Review';
import Problems from './Problems/Problems';


export default class Account extends Component {
    constructor() {
        super();
        this.state = {
            option:'home/profile',
        }
    }
    
    render() {
        return (
            <div>
                <div>
                <Header/>
                </div>
                <div style={{ paddingRight: '20px', }}>
                    
                
                
                    {/* <Sidebar /> */}
                    
                    <SideNav style={{background:'white',}}
                        
                        onSelect={(selected) => {
                            // Add your code here
                                    console.log(selected);
                                    this.setState({
                                        option:selected,
                                    })
                            
                        }}>
                        
                        <SideNav.Toggle style={{ marginTop: '68px', backgroundColor: 'wheat', }} />
                        
                        <SideNav.Nav defaultSelected="home/profile">
                            
{/*                     <NavItem onSelect eventKey="home">
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em',color:'red', }} />
                            </NavIcon>
                            <NavText style={{color:'black',}}>
                                Home
                            </NavText>
                        </NavItem> */}
                            
                            <NavItem eventKey="home">
                                <NavIcon>
                                    <i eventKey="home" clickable className="fa fa-fw fa-home" style={{ fontSize: '1.75em',color:'red', }} />
                                </NavIcon>
                                <NavText style={{color:'black',}}>
                                    My Account
                                </NavText>
                                <NavItem eventKey="home/profile">
                                    <NavText style={{color:'black',}}>
                                        My Profile
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="home/visits">
                                    <NavText style={{color:'black',}}>
                                        Scheduled Visits
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="home/checklist">
                                    <NavText style={{color:'black',}}>
                                        Checklist
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="home/bookings">
                                    <NavText style={{color:'black',}}>
                                        My Bookings
                                    </NavText>
                                </NavItem>
                            </NavItem>



                        <NavItem eventKey="problems">
                        <NavIcon>
                            <i className="fa fa-fw fa-bolt" style={{ fontSize: '1.75em',color:'red', }} />
                        </NavIcon>
                        <NavText style={{color:'black',}}>
                            Report Problems
                        </NavText>
                        </NavItem>
                            

                    {/* <NavItem eventKey="payment">
                        <NavIcon>
                            <i className="fa fa-fw fa-money" style={{ fontSize: '1.75em',color:'red', }} />
                        </NavIcon>
                        <NavText style={{color:'black',}}>
                            Payment
                        </NavText>
                    </NavItem> */}
                    
                    <NavItem eventKey = "payment" >
                        <NavIcon>
                            <i className="fa fa-fw fa-money" style={{ fontSize: '1.75em',color:'red', }} />
                        </NavIcon>
                        <NavText style={{color:'black',}}>
                            Payment
                        </NavText>
                        <NavItem eventKey="payment/rent">
                            <NavText style={{color:'black',}}>
                                Rent
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="payment/security">
                            <NavText style={{color:'black',}}>
                                Security
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="payment/penalty">
                            <NavText style={{color:'black',}}>
                                Penalty
                            </NavText>
                        </NavItem>
                    </NavItem>
                            
                    {/* <NavItem eventKey="notices">
                        <NavIcon>
                            <i className="fa fa-fw fa-bell" style={{ fontSize: '1.75em',color:'red', }} />
                        </NavIcon>
                        <NavText style={{color:'black',}}>
                            Notices
                        </NavText>
                    </NavItem> */}


                    <NavItem eventKey = "notices" >
                        <NavIcon>
                            <i className="fa fa-fw fa-bell" style={{ fontSize: '1.75em',color:'red', }} />
                        </NavIcon>
                        <NavText style={{color:'black',}}>
                            Notices
                        </NavText>
                        <NavItem eventKey="notices/admin">
                            <NavText style={{color:'black',}}>
                                From Admin
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="notices/exit">
                            <NavText style={{color:'black',}}>
                                Exit Notice
                            </NavText>
                        </NavItem>
                    </NavItem>
                            





                    <NavItem eventKey="policy">
                        <NavIcon>
                            <i className="fa fa-fw fa-briefcase" style={{ fontSize: '1.75em',color:'red', }} />
                        </NavIcon>
                        <NavText style={{color:'black',}}>
                            Policy
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="reviews">
                        <NavIcon>
                            <i className="fa fa-fw fa-star" style={{ fontSize: '1.75em',color:'red', }} />
                        </NavIcon>
                        <NavText style={{color:'black',}}>
                            Reviews
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="charts">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em',color:'red', }} />
                        </NavIcon>
                        <NavText style={{color:'black',}}>
                            Charts
                        </NavText>
                        <NavItem eventKey="charts/linechart">
                            <NavText style={{color:'black',}}>
                                Line Chart
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts/barchart">
                            <NavText style={{color:'black',}}>
                                Bar Chart
                            </NavText>
                        </NavItem>
                    </NavItem>
                    <NavItem eventKey="Logout">
                        <NavIcon>
                            <i className="fa fa-fw fa-sign-out" style={{ fontSize: '1.75em',color:'red', }} />
                        </NavIcon>
                        <NavText style={{color:'black',}}>
                            Logout
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
                </SideNav>

                </div>
                <div style={{marginLeft:'60px',}}>
                     {this.state.option === 'home' ? <AccHome/> : null}
                     
                    {this.state.option === 'home/profile' ? <Profile /> : null}
                    {this.state.option === 'reviews' ? <Review /> : null}
                    {this.state.option === 'problems' ? <Problems/> : null}
                    {/* 
                    {this.state.option === 'payment' ? < /> : null}
                    {this.state.option === 'notices' ? < /> : null}
                    {this.state.option === 'policy' ? < /> : null}
                    
                    {this.state.option === 'charts/linechart' ? < /> : null}
                    {this.state.option === 'charts/barchart' ? < /> : null} */}
                    {/* {this.state.option === 'reviews' ? <Profile /> : null}
                    {this.state.option === 'reviews' ? <Profile /> : null} */}
                    
                    
                </div>
                </div>
        )
    }
}
