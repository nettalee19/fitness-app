import React, { useState, useEffect } from 'react'
import api from '../ApiSource/api'


export default function DeleteBtn({id, deleteActivity2}) {
    const [token] = useState(localStorage.getItem("token"));
    
    const DeleteActivity = async() =>{
        console.log(id)
        //deleteActivity2()

        try{
            const data = await api.delete(`/activities/${id}`,{
                headers: { Authorization: `Bearer ${token}` },
            })
        }catch(e){
            console.log(e)
        }
    }

    useEffect(() =>{
         
    }, [DeleteActivity])

    return (
        <div>
            <button onClick={DeleteActivity}>delete</button>
        </div>
    )
}
