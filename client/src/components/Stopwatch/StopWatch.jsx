import React, { useState, useRef } from 'react'
import "./Style/Style.css"

export default function StopWatch({timeSaver}) {
    const [timer, setTimer] = useState(0)
    const [isActive, setIsActive] = useState(false) //whether the timer is working
    const [isPaused, setIsPaused] = useState(false) //whther the timer is paused
    const countRef = useRef(null)
    // const [timerSave, setTimerSave] = useState(0)

    const handleStart = () => {
        
        setIsActive(true)
        setIsPaused(true)
        countRef.current = setInterval(() => {
            setTimer((timer) => timer+1)
        }, 1000)
    }

    const handlePause = () => {
        
        clearInterval(countRef.current)
        setIsPaused(false)
    }

    const handleResume = () => {
        
        setIsPaused(true)
        countRef.current = setInterval(() => {
            setTimer((timer) => timer+1)
        }, 1000)

    }
    const handleReset = () =>{
       
        clearInterval(countRef.current)
        setIsActive(false)
        setIsPaused(false)
        setTimer(0)
    }
    

    let timeTotal
    const formatTime = () => {
        // 0 is to add for 0-9, slice(-2 is to remove it once it above 10)
        const getSeconds = `0${(timer % 60)}`.slice(-2) //left of timer from 60
    
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
    
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

        // console.log(timeTotal)
        return timeTotal = `${getHours} : ${getMinutes} : ${getSeconds}`


    }

    const handleSave = () =>{
        timeSaver(timeTotal)
    }

    //TODO add stop&save activity: stop -> save/remove ->
    //Todo in app with server adding activites to database user<->activities
    


    return (
        <div className="stopwatch-app">
            <h3>Stopwatch</h3>
            <div className="stopwatch-card">
                <p>{formatTime()}</p>
                <div className="buttons">
                    {
                        !isActive && !isPaused ? 
                        <button onClick={handleStart}>Start</button> :
                        ( isPaused ? <button onClick={handlePause}>Pause</button> : <button onClick={handleResume}>Resume</button>)
                    }
                    
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleReset}>Reset</button>
                    {/* <input type="button" /> */}
                    <br />
                    
                </div>
            
            </div>
        </div>
    )
}
