import { BrowserRouter, Switch,  Route, Redirect } from 'react-router-dom';
// import { BrowserRouter, Switch, Route } from 'react-router';

import Header from './components/header/Header'
import StopWatch from './components/Stopwatch/StopWatch'
import UserPage from './components/UserPage/UserPage';
import Activity from './components/ActivityPage/Activity';
import PassedActivity from './components/ActivityPage/PassedActivity';
import Test from './components/Test/Test';
import api from './components/ApiSource/api'

function App() {
  return (
    <BrowserRouter>
      
      <div className="App">
        <Header/>
        
        <Switch>
          <Route exact path='/'>
          {/* <Route exact path='/' component={Test}> */}
          <p>your recent works:</p>
          </Route>

          <Route exact path='/myPage' component={UserPage}>
          {/* <UserPage/> */}
          </Route>

          <Route exact path='/myNewActivity' component={Activity}>
          {/* <Activity/> */}
          </Route>

          <Route exact path='/myHistoryPage' component={PassedActivity}>
          {/* <Activity/> */}
          </Route>
          
          {/* <StopWatch/> */}

        </Switch>
      
      </div>
    
    </BrowserRouter>
  );
}

export default App;
