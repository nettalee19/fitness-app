import React, {useState} from 'react'
import moment from 'moment';
import Calender from '../Calender/Calender'
import ActivityBox from './ActivityBox';

export default function PassedActivity({activity}) {
    const [value, setValue] = useState(moment())

    return (
        <div>
            <h1>History:</h1>
            <ActivityBox activity={activity}/>

            {/* {activity.map(a => <p>{a.name}</p>)} */}
            {/* {activity.map(a => <p>{a.calories}</p>)} */}
            {/* <Calender value={value} onChange={setValue}/> */}
        </div>
    )
}
