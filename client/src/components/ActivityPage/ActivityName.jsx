import React, {useState} from 'react'

export default function ActivityName({saveActivityName}) {
    const [name, setName] = useState(null)

    const handleSave = () =>{
        saveActivityName(name)
    }

    return (
        <div>
            <p>Activity: <input type="text" onChange={e => setName(e.target.value)}/><button onClick={handleSave}>Save Name</button></p>
            {/* {name} */}




            {/* <select name="activity" id="activity">
                    <option value="aerobics">Aerobics</option>
                    <option value="yoga">Yoga</option>
                    <option value="pilaties">Pilaties</option>
                    <option value="tennis">Tennis</option>
                </select> */}
            
        </div>
    )
}
