import React from 'react'
import Child from './Child'

export default function Test() {
    
    function yourName(e){
        console.log(e.target.value)
        const name = e.target.value
        // return name
    }
    // yourName(e)

    return (
        <div>
            Apparently your name is: 
            <Child yourName={yourName}/>
        </div>
    )
}
