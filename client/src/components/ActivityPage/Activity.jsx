import React, { useState, useEffect} from 'react'
import StopWatch from '../Stopwatch/StopWatch'
import moment from 'moment';
import "./Style/Style.css"
import api from '../ApiSource/api';

export default function Activity({dateToday, totalTime, calories, activity}) {
    const [timerSave, setTimerSave] = useState(0)
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



    const saveNewActivity = async(e) => {
        e.preventDefault();

        const config = {
			headers: { Authorization: `Bearer ${token}` }
		};

        const bodyParameters = {
            today,
            timerSave,
         //    owner: 
        };

        await api.post( 
            '/activities',
            bodyParameters,
            config
        ).then(console.log).catch(console.log());
    }

    return (
        <div className="ActivityPage">
            {/* this is a new activity */}
            <StopWatch timeSaver={timeSaver} secondSaver={secondSaver}/>
            <div className="ActivityBox">
                <p>Date: {today} </p>
                <p>Total Time: {timerSave === 0 ? "00 : 00 : 00" : timerSave} </p>
                {/* <p>Calories Burn: { Math.round(timerSeconds*0.089)} </p> */}
                <p>Calories Burn: { parseFloat(timerSeconds*0.089).toFixed(2)} </p>
                {/* <p>Activity: Dancing </p> */}
                {/* <p> Activity: {}
                <select name="activity" id="activity">
                    <option value="aerobics">Aerobics</option>
                    <option value="yoga">Yoga</option>
                    <option value="pilaties">Pilaties</option>
                    <option value="tennis">Tennis</option>
                </select>

                </p> */}
                <p>Activity: </p>
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
