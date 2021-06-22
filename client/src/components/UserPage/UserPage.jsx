import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function UserPage() {
    const [dateToday, setDateToday] = useState(0)
    const [totalTime, setTotalTime] = useState(0)
    const [calories, setCalories] = useState(0)
    const [activity, setActivity] = useState(null)

    function saveNewActivity (dateToday){
        setDateToday(dateToday)
    }

    
    return (
        <div>
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
