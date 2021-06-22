import React from 'react'

export default function Child({yourName}) {
    
    
    
    return (
        <div>
            this is child
            <p>what is your name?</p>
            <input type="text" onChange={yourName} />
        </div>
    )
}
