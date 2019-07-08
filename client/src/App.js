import React from 'react';
import Home from './Home/Home';
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import NotFound from './Component/NotFound/NotFound';
import Account from './Component/Account/Account';
import BookNow from './Home/Booking/BookNow';
import Header from './Component/Header/Header';
import ScheduleVisits from './Admin/ScheduleVisits'
import PS001 from './Home/Properties/PS001';
import 'semantic-ui-css/semantic.min.css'
import Payment from './Admin/Payment/Payment';
import Generate from './Admin/Payment/Generate';
import PendingBill from './Admin/Payment/PendingBill';
import DisplayBills from './Admin/Payment/DisplayBills';
import BedAllocation from './Admin/BedAllocation/BedAllocation';
import CheckIn from './Admin/CheckIn/CheckIn';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    window.localStorage.getItem('user')
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
)
function App() {

  return (
    <div className="App">
      <Router>
                <React.Fragment>
                    
                    
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <PrivateRoute exact path="/account" component={Account}/>
                        <Route exact path="/booknow" component={BookNow} />
                        <Route exact path="/PS001" component={PS001}/>
                        <Route exact path="/schedule" component={ScheduleVisits} />
                        <Route exact path="/payment" component={Payment} />
                        
                        <Route exact path="/generate" component={Generate} />
                        <Route exact path="/pending" component={PendingBill} />
                        <Route exact path="/displaybill" component={DisplayBills} />
                        <Route exact path="/checkin" component={CheckIn} />
                        
                        
            
                        <Route exact path="/bedallocation" component={BedAllocation} />
                        
                        <Route exact path="/admin"  />
                       
                        <Route component={NotFound} />
                    </Switch>   
                </React.Fragment>
                


            </Router>
    </div>
  );
}

export default App;
