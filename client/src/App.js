import React, { useState } from 'react'
import { BrowserRouter, Switch,  Route, Redirect } from 'react-router-dom';
// import { BrowserRouter, Switch, Route } from 'react-router';

import Header from './components/header/Header'
//import StopWatch from './components/Stopwatch/StopWatch'
import UserPage from './components/UserPage/UserPage';
import Activity from './components/ActivityPage/Activity';
import PassedActivity from './components/ActivityPage/PassedActivity';
//import Test from './components/Test/Test';
import api from './components/ApiSource/api'


function App() {
  const [user, setUser] = useState([])
  const [activity, setActivity] = useState([])
  
  const getUser = async() =>{
    try{
        const {data} = await api("/users")
        setUser(data)
    }
    catch(error){
        console.log(error)
    }
  }
  getUser()

  const getActivity = async() =>{
    try{
        const {data} = await api("/activities")
        setActivity(data)
    }
    catch(error){
        console.log(error)
    }
  }
  getActivity()

  
  return (
    <BrowserRouter>
      
      <div className="App">
        <Header/>
        
        <Switch>
          <Route exact path='/'>
          {/* <Route exact path='/' component={Test}> */}
          <p>your recent works:</p>
          {/* {user.map(u => <p>{u.name}</p>)}
          {user.map(u => <p>{u.age}</p>)} */}
          {/* {activity.map(a => <p>{a.name}</p>)} */}
          </Route>

          <Route exact path='/myPage' component={UserPage} >
          
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
