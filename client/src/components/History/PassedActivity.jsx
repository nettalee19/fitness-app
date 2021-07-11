import React, {useState, useEffect} from 'react'
import moment from 'moment';
import Calender from '../Calender/Calender'
import ActivityBox from './ActivityBox';
import api from '../ApiSource/api';

// export default function PassedActivity({activity}) {
// const [value, setValue] = useState(moment())

export default function PassedActivity() {

    const [token] = useState(localStorage.getItem("token"));
    const [activities, setActivities] = useState([])
    const [deleteActivity, setDeleteActivity] = useState("")

    //
    const getActivities = async() =>{
        const data = await api.get("/activities/me", {
            headers: { Authorization: `Bearer ${token}` },
        })
        setActivities(data.data)
        //console.log(activities) //returns all user's activities
        //console.log(activities.id) //returns all user's activities
    }

    useEffect(() => {
        getActivities()
    }, [])

    const deleteAnActivity = async(_id) =>{
        try{
            await api.delete(`/activities/${_id}`,{
                headers: { Authorization: `Bearer ${token}` },
            })
            
            setDeleteActivity(_id)
            
        }catch(e){
            console.log(e)
        }
    }

    // useEffect(() => {
    //     deleteAnActivity()
    // }, [])
    

    return (
        <div>
            <h1>History:</h1>
            {/* {activities.map(a => {
                return <>
                <div>
                    <div className="activity-box">
                        <button className="activity-box-btn" onClick={deleteAnActivity}><i class="fas fa-trash"></i></button>
                        
                        <h2>{a.name}</h2>
                        <div>
                            <p><i class="fas fa-calendar-day"></i>  {a.date} </p>
                            <p><i class="fas fa-stopwatch"></i>  {a.duration} min</p>
                            <p>{a.calories} cal</p>

                        </div>
                    </div>
                </div>
                </>
            })} */}

            <ActivityBox activity={activities} deleteAnActivity={deleteAnActivity}/>
            
            
            
            {/* <ActivityBox activity={activity} id={activity.id} deleteAnActivity={() => deleteAnActivity(activity.id)}/> */}
            
            
            {/* {activity.map (a =>{
                if(a.owner === user._id)
            })} */}
            
            {/* <ActivityBox activity={activity}/> */}




            {/* {activity.map(a => <p>{a.name}</p>)} */}
            {/* {activity.map(a => <p>{a.calories}</p>)} */}
            {/* <Calender value={value} onChange={setValue}/> */}
        </div>
    )
}
