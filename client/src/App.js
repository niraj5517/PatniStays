import React from 'react';
import Home from './Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './Component/NotFound/NotFound';
import Account from './Component/Account/Account';
function App() {
  return (
    <div className="App">
      <Router>
                <React.Fragment>
                    {/* <Header /> */}
                    
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/account" component={Account} />
                        {/* <Route exact path="/rooms" component={} />
                        <Route exact path="/:roomId" component={} /> */}
                        <Route component={NotFound} />
                    </Switch>   
                </React.Fragment>
                


            </Router>
    </div>
  );
}

export default App;
