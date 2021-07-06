import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './style/Style.css'
import api from '../ApiSource/api'

export default function UserPage() {
    const [dateToday, setDateToday] = useState(0)
    const [totalTime, setTotalTime] = useState(0)
    const [calories, setCalories] = useState(0)
    // const [activity, setActivity] = useState(null)





    const [user, setUser] = useState([])
    const [token] = useState(localStorage.getItem("token"));

    const getUser = async() =>{
        const data = await api.get("/users/me", {
            headers: { Authorization: `Bearer ${token}` },
          });
      
        setUser(data.data);
        console.log("netttt");
        // console.log(user);
    }
    
    useEffect(() => {
        getUser();
      }, []);
    
    
    
    function saveNewActivity (dateToday){
        setDateToday(dateToday)
    }

    
    return (
        <div>
            <div className="user-page-layout">
                <div className="all-users">
                     <div className="user-box">
                            <h2><i class="fas fa-running"></i>  {user.name}</h2>
                            <div>
                                <p>{user.age}</p>
                                <p><i class="fas fa-weight"></i>  {user.weight} kg</p>
                                <p>{user.height} cm</p>
                                <p><i class="fas fa-envelope-open-text"></i>  {user.email}</p>

                            </div>
                        </div>

                </div>

                {/* <div className="all-users">
                    {user.map(u => {
                        return <div className="user-box">
                            <h2>{u.name}</h2>
                            <div>
                                <p>{u.age}</p>
                                <p>{u.weight} kg</p>
                                <p>{u.height} cm</p>
                                <p>{u.email}</p>

                            </div>
                        </div>
                    })}

                </div> */}
                

                <button className="user-buttons"><Link to="/myNewActivity" saveNewActivity={saveNewActivity}>Start new Activity</Link></button>
                {/* <button><Link to="/myPassedActivity">add passed Activity</Link></button> */}
                <button className="user-buttons"><Link to="/myHistoryPage">Activties' History</Link></button>
            </div>



            {/* {user.map(u => <p>{u.name}</p>)} */}


            
        </div>
    )
}
