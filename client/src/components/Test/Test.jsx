import React, {useState} from 'react'
import Child from './Child'
import "./style.css"

export default function Test() {
    const [myName, setMyName] = useState(null)
    
    const yourName = (n) => {
        setMyName(n)
    }
    

    return (
        <div class="parent">
           <p>Apparently your name is: {myName}</p> 
            <Child yourName={yourName}/>
        </div>
    )
}
