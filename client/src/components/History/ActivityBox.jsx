import React, { useState } from 'react'
import api from '../ApiSource/api';
import DeleteBtn from './DeleteBtn';
import "./style/Style.css"

//export default function ActivityBox({activity}) {
export default function ActivityBox({activity, deleteAnActivity}) {
    const [token] = useState(localStorage.getItem("token"));

    const deleteActivity2 = async(id) =>{
        
        console.log(id)

        try{
            await api.delete(`/activities/${id}`,{
            headers: { Authorization: `Bearer ${token}` },
        })
                        
        }catch(e){
            console.log(e)
        }

    }

    return (
        <div >
            <div className="all-activities">
                {activity.map(a => {
                    return <div className="activity-box">
                        <h2>{a.name}</h2>
                        <div>
                            <p>{a.date}</p>
                            <p>{a.duration} min</p>
                            <p>{a.calories} cal</p>
                            <div>
                                <DeleteBtn id={a._id} deleteActivity2={ () => deleteActivity2(a._id)}/>

                            </div>
                        </div>
                    </div>
                        })
                }

            </div>

        </div>
    )
}
