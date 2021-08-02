import React, { useState, useEffect} from 'react'
import StopWatch from '../Stopwatch/StopWatch'
import moment from 'moment';
import "./Style/Style.css"
import api from '../ApiSource/api';
import ActivityName from './ActivityName';

export default function Activity({dateToday, totalTime, calories, activity}) {
    
    const [activityName, setActivityName] = useState(null) //name
    
    const [timerSave, setTimerSave] = useState(0) //duration
    const [timerSeconds, setTimerSeconds] = useState(0)
    
    const [dateSave, setDateSave] = useState(0)

    const [token] = useState(localStorage.getItem("token"));
    



    function timeSaver (timeMes){
        setTimerSave(timeMes)
    }

    function secondSaver (seconds){
        setTimerSeconds(seconds)
    }

    let today = moment().format('DD.MM.YYYY')


    
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
            duration: timerSave,
            calories: calMeas
         //    owner: 
        };

        await api.post( 
            '/activities',
            bodyParameters,
            config
        ).then(console.log).catch(console.log());
    }

    const calMeas = parseFloat(timerSeconds*0.089).toFixed(2)

    return (
        <div className="ActivityPage">
            {/* this is a new activity */}
            <StopWatch timeSaver={timeSaver} secondSaver={secondSaver}/>
            <div className="ActivityBox">
                <p>Date: {today} </p>
                <p>Total Time: {timerSave === 0 ? "00 : 00 : 00" : timerSave} </p>
                {/* <p>Calories Burn: { Math.round(timerSeconds*0.089)} </p> */}
                
                {/* <p>Calories Burn: { parseFloat(timerSeconds*0.089).toFixed(2)} </p> */}
                <p>Calories Burn: { calMeas } </p>
                
                {/* <p>Activity: <input type="text" onChange={e => setName(e.target.value)}/><button onClick={saveName()}>save</button></p> */}
                {/* {name} */}

                {/* {activityName} */}
                <ActivityName saveActivityName={saveActivityName}/>
                
                
                {/* <ActivityName saveActivityName={saveActivityName}/> */}


                <button onClick={saveNewActivity}>Save New Activity</button>
            </div>
            <div>
                <p>{dateToday}</p> 
                <p>{totalTime}</p> 
                <p>{calories}</p> 
                <p>{activity}</p> 
            </div>
        </div>
    )
}
