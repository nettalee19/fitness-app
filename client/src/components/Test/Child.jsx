import React, {useState} from 'react'
import "./style.css"

//export default function Child() {
export default function Child({ yourName }) {
    
    //const [text, setText] = useState(null)
    const [name, setName] = useState(null)
    const [final, setFinal] = useState(null)
    
    const handleSave = () =>{
        
        //setFinal(name)
        //yourName(final)

        yourName(name)
        
    }
    
    
    return (
        <div className="child">
            {/* <input onChange={e => setFinal(e.target.value)} type="text" /> */}
            <input onChange={e => setName(e.target.value)} type="text" />
            {/* <p>{name}</p> */}
            <button onClick={handleSave}>save</button>
            {/* <p>{text}</p> */}
            {/* <p>{final}</p> */}
        </div>
    )
}
