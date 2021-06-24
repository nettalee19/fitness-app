import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import api from '../ApiSource/api'

export default function UserPage() {
    const [dateToday, setDateToday] = useState(0)
    const [totalTime, setTotalTime] = useState(0)
    const [calories, setCalories] = useState(0)
    const [activity, setActivity] = useState(null)

    const [user, setUser] = useState([])

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

    function saveNewActivity (dateToday){
        setDateToday(dateToday)
    }

    
    return (
        <div>
            {/* {user.map(u => <p>{u.name}</p>)}
            {user.map(u => <p>{u.age}</p>)} */}
           <p>this is me!</p> 
           <p>{dateToday}</p> 
           <p>{totalTime}</p> 
           <p>{calories}</p> 
           <p>{activity}</p>  

            <button><Link to="/myNewActivity" saveNewActivity={saveNewActivity}>add new Activity</Link></button>
            {/* <button><Link to="/myPassedActivity">add passed Activity</Link></button> */}
            <button><Link to="/myHistoryPage">Activties' History</Link></button>

            
        </div>
    )
}
