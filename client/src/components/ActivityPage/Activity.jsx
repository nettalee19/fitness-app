import React, { useState, useEffect} from 'react'
import StopWatch from '../Stopwatch/StopWatch'
import moment from 'moment';
import "./Style/Style.css"

export default function Activity({dateToday, totalTime, calories, activity}) {
    const [timerSave, setTimerSave] = useState(0)
    const [dateSave, setDateSave] = useState(0)
    
    function timeSaver (timeMes){
        setTimerSave(timeMes)
    }

    let today = moment().format('DD.MM.YYYY')

    function saveNewActivity(){
        dateToday = today;
        // totalTime = timerSave;
        // calories = 300;
        // activity = "Tennis"
    }

    return (
        <div className="ActivityPage">
            {/* this is a new activity */}
            <StopWatch timeSaver={timeSaver}/>
            <div className="ActivityBox">
                <p>Date: {today} </p>
                <p>Total Time: {timerSave === 0 ? "00 : 00 : 00" : timerSave} </p>
                <p>Calories Burn: calories </p>
                {/* <p>Activity: Dancing </p> */}
                <p>
                <select name="activity" id="activity">
                    <option value="aerobics">Aerobics</option>
                    <option value="yoga">Yoga</option>
                    <option value="pilaties">Pilaties</option>
                    <option value="tennis">Tennis</option>
                </select>

                </p>
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
