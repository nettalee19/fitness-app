import React, { useState,useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
// import { BrowserRouter, Switch, Route } from 'react-router';

import Header from "./components/header/Header";
//import StopWatch from './components/Stopwatch/StopWatch'
import UserPage from "./components/UserPage/UserPage";
import Activity from "./components/ActivityPage/Activity";
import PassedActivity from "./components/History/PassedActivity";
//import Test from './components/Test/Test';
import api from "./components/ApiSource/api";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import MainPage from "./components/MainPage/MainPage";

import './components/Mobile/mobile.css'

function App() {
  const [user, setUser] = useState([]);
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await api("/users");
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    }
    const getActivity = async () => {
      try {
        const { data } = await api("/activities");
        setActivity(data);
      } catch (error) {
        console.log(error);
      }
    };
    getActivity();
    getUser();
  }, [])




  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/">
            {/* <Route exact path='/' component={Test}> */}
            {/* <Link to="/login">Login</Link> */}
            <MainPage/>
            {/* {user.map(u => <p>{u.name}</p>)}
          {user.map(u => <p>{u.age}</p>)} */}
            {/* {activity.map(a => <p>{a.name}</p>)} */}
          </Route>

          {/* <Route exact path='/myPage' component={UserPage}> */}
          <Route exact path="/myPage">
            {/* <UserPage /> */}
            <UserPage activity={activity} user={user} />
          </Route>

          <Route exact path="/myNewActivity" component={Activity}>
            {/* <Activity/> */}
          </Route>


          <Route exact path="/myHistoryPage" component={PassedActivity}>
            <PassedActivity activity={activity}/>
          </Route>

          <Route exact path="/login" component={Login}>
            
          </Route>
          <Route exact path="/register" component={Register}>
            
          </Route>

          {/* <StopWatch/> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
