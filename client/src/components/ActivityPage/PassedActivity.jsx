import React, {useState} from 'react'
import moment from 'moment';
import Calender from '../Calender/Calender'

export default function PassedActivity() {
    const [value, setValue] = useState(moment())

    return (
        <div>
            
            <Calender value={value} onChange={setValue}/>
        </div>
    )
}
