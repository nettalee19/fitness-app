import React, { useState, useEffect } from 'react'
import api from '../ApiSource/api'

export default function UpdateAccount() {
    const [user, setUser] = useState('')
    const [token] = useState(localStorage.getItem("token"))

    const [optionalName, setOptionalName] = useState(null)
    const [updatedName, setUpdatedName] = useState(null)

    const getUser = async() =>{
        const data = await api.get("/users/me",{
            headers: { Authorization: `Bearer ${token}`}
        })

        setUser(data.data)
    }

    useEffect(() => {
        getUser()
    }, [])

    const updateMyName = () =>{
        const {data} = api.post("/users/me", {
            //headers: { Authorization: `Bearer ${token}` }
            
        })
        setUpdatedName(optionalName)
    }
    
    return (
        <div>
            <h3>UpdateAccount:</h3>
           
            <label htmlFor="">{user.name}</label><input type="text" onChange={e => setOptionalName(e.target.value)} />
            <button onClick={updateMyName}>save</button>
            <p>{optionalName}</p>
            <br />
            <p>{updatedName}</p>

        </div>
    )
}
