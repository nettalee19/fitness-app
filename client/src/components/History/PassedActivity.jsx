import React, {useState, useEffect} from 'react'
import moment from 'moment';
import Calender from '../Calender/Calender'
import ActivityBox from './ActivityBox';
import api from '../ApiSource/api';

// export default function PassedActivity({activity}) {
// const [value, setValue] = useState(moment())

export default function PassedActivity() {

    const [token] = useState(localStorage.getItem("token"));
    const [activity, setActivity] = useState([])

    const getActivity = async() =>{
        const data = await api.get("/activities/me", {
            headers: { Authorization: `Bearer ${token}` },
        })
        setActivity(data.data)
        console.log(activity)
    }

    useEffect(() => {
        getActivity()
    }, [])

    return (
        <div>
            <h1>History:</h1>
            <ActivityBox activity={activity}/>
            
            
            {/* <ActivityBox activity={activity}/> */}

            {/* {activity.map(a => <p>{a.name}</p>)} */}
            {/* {activity.map(a => <p>{a.calories}</p>)} */}
            {/* <Calender value={value} onChange={setValue}/> */}
        </div>
    )
}
