import React, {useState} from 'react'

export default function ActivityName({saveActivityName}) {
    const [name, setName] = useState(null)

    const handleSave = () =>{
        saveActivityName(name)
        console.log(name)
    }

    return (
        <div>
            {/* <p>Activity:  
            
                <select name="activity" id="activity">
                        <option value="aerobics" onChange={e => setName(e.target.value)}>Aerobics</option>
                        <option value="yoga" onChange={e => setName(e.target.value)}>Yoga</option>
                        <option value="pilaties" onChange={e => setName(e.target.value)}>Pilaties</option>
                        <option value="tennis" onChange={e => setName(e.target.value)}>Tennis</option>
                </select>
                <button onClick={handleSave}><i class="fas fa-check"></i></button>
            </p> */}


            
            <p>Activity: <input type="text" onChange={e => setName(e.target.value)}/><button onClick={handleSave}><i class="fas fa-check"></i></button></p>
            
            
            
            
            {/* <p>Activity: <input type="text" onChange={e => setName(e.target.value)}/><button onClick={handleSave}>Save Name</button></p> */}
            {/* {name} */}




            
        </div>
    )
}
