import React, { useState } from 'react'
import moment from 'moment';
import ActivityName from './ActivityName';
import api from "../ApiSource/api"

export default function AddNotLiveActivity() {
    const [time, setTime] = useState('')
    const [timeSaved, setTimeSaved] = useState('')
    let today = moment().format('DD.MM.YYYY')
    let calories = timeSaved*60*0.089
    const [activityName, setActivityName] = useState(null)

    const [token] = useState(localStorage.getItem("token"));

    const handleSave = () =>{
        setTimeSaved(time)
    }

    const saveActivityName = (n) =>{
        setActivityName(n)
    }



    const saveNewActivity = async(e) => {
        e.preventDefault();

        const config = {
			headers: { Authorization: `Bearer ${token}` }
		};

        const bodyParameters = {
            name: activityName,
            date: today,
            duration: timeSaved,
            calories: calories
         //    owner: 
        };

        await api.post( 
            '/activities',
            bodyParameters,
            config
        ).then(console.log).catch(console.log());
    }



    
    return (
        <div>
            
            <div className="ActivityBox">
                <p>Date: {today} </p>
                <p>Total Time : <input type="text" onChange={e => setTime(e.target.value)}/> <button onClick={handleSave}><i class="fas fa-check"></i></button></p>
                {/* <p>{timeSaved}</p> */}
                {/* <p>{time}</p> */}
                {/* <p>Total Time: {timerSave === 0 ? "00 : 00 : 00" : timerSave} </p> */}
                
                <p>Calories Burn:  {calories} </p>
                {/* <p>Calories Burn: { calMeas } </p> */}
                
                
                <ActivityName saveActivityName={saveActivityName}/>
                <p>{activityName}</p>
                <button onClick={saveNewActivity}>Save New Activity</button>

            </div>
            <div></div>
        </div>
    )
}
