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
            // console.log("ofir")
            await api.delete(`/activities/${_id}`,{
                headers: { Authorization: `Bearer ${token}` },
            })
            // console.log(activities._id)
            setDeleteActivity(_id)
            // console.log(deleteActivity)
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
            {activities.map(a => {
                return <>
                <div>
                    <div className="activity-box">
                        <button className="activity-box-btn" onClick={deleteAnActivity}>X</button>
                        <h2>{a.name}</h2>
                        <div>
                            <p>{a.date}</p>
                            <p>{a.duration} min</p>
                            <p>{a.calories} cal</p>

                        </div>
                    </div>
                </div>
                </>
            })}

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
