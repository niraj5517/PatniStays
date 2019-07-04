import React, { Component } from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Profile from './profile/Profile';
import Header from '../Header/Header';
import AccHome from './AccHome/AccHome';


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
                    
                    <SideNav style={{background:'',}}
                        
                        onSelect={(selected) => {
                            // Add your code here
                                    console.log(selected);
                                    this.setState({
                                        option:selected,
                                    })
                            
                        }}>
                        <SideNav.Toggle style={{marginTop:'60px'}}/>
                        <SideNav.Nav defaultSelected="home/profile">
                            
{/*                     <NavItem onSelect eventKey="home">
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Home
                            </NavText>
                        </NavItem> */}
                            
                            <NavItem eventKey="home">
                                <NavIcon>
                                    <i eventKey="home" clickable className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    Home
                                </NavText>
                                <NavItem eventKey="home/profile">
                                    <NavText>
                                        My Profile
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="home/visits">
                                    <NavText>
                                        Scheduled Visits
                                    </NavText>
                                </NavItem>
                            </NavItem>



                        <NavItem eventKey="problems">
                        <NavIcon>
                            <i className="fa fa-fw fa-bolt" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Report Problems
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="payment">
                        <NavIcon>
                            <i className="fa fa-fw fa-money" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Payment
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="notices">
                        <NavIcon>
                            <i className="fa fa-fw fa-bell" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Notices
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="policy">
                        <NavIcon>
                            <i className="fa fa-fw fa-briefcase" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Policy
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="reviews">
                        <NavIcon>
                            <i className="fa fa-fw fa-star" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Reviews
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="charts">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Charts
                        </NavText>
                        <NavItem eventKey="charts/linechart">
                            <NavText>
                                Line Chart
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts/barchart">
                            <NavText>
                                Bar Chart
                            </NavText>
                        </NavItem>
                    </NavItem>
                    <NavItem eventKey="Logout">
                        <NavIcon>
                            <i className="fa fa-fw fa-sign-out" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Logout
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
                </SideNav>

                </div>
                <div style={{marginLeft:'60px',}}>
                     {this.state.option === 'home' ? <AccHome/> : null}
                     
                    {this.state.option === 'home/profile' ? <Profile /> : null}
                    {/* {this.state.option === 'problems' ? < /> : null}
                    {this.state.option === 'payment' ? < /> : null}
                    {this.state.option === 'notices' ? < /> : null}
                    {this.state.option === 'policy' ? < /> : null}
                    {this.state.option === 'reviews' ? < /> : null}
                    {this.state.option === 'charts/linechart' ? < /> : null}
                    {this.state.option === 'charts/barchart' ? < /> : null} */}
                    {/* {this.state.option === 'reviews' ? <Profile /> : null}
                    {this.state.option === 'reviews' ? <Profile /> : null} */}
                    
                    
                </div>
                </div>
        )
    }
}
