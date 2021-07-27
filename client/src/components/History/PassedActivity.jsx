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


    return (
        <div>
            <h1>History:</h1>

            <ActivityBox activity={activities} deleteAnActivity={deleteAnActivity}/>

        </div>
    )
}
