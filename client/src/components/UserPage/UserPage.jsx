import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './style/Style.css'
import api from '../ApiSource/api'

export default function UserPage({user}) {
    const [dateToday, setDateToday] = useState(0)
    const [totalTime, setTotalTime] = useState(0)
    const [calories, setCalories] = useState(0)
    // const [activity, setActivity] = useState(null)

    // const [user, setUser] = useState([])

    // const getUser = async() =>{
    //     try{
    //         const {data} = await api("/users")
    //         setUser(data)
    //     }
    //     catch(error){
    //         console.log(error)
    //     }
    // }
    // getUser()

    function saveNewActivity (dateToday){
        setDateToday(dateToday)
    }

    
    return (
        <div>
            <div >
            <div className="all-users">
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
                        })

                }

            </div>

        </div>



            {user.map(u => <p>{u.name}</p>)}

            <button><Link to="/myNewActivity" saveNewActivity={saveNewActivity}>add new Activity</Link></button>
            {/* <button><Link to="/myPassedActivity">add passed Activity</Link></button> */}
            <button><Link to="/myHistoryPage">Activties' History</Link></button>

            
        </div>
    )
}
