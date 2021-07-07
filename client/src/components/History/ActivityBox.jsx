import React, { useState } from 'react'
import api from '../ApiSource/api';
import "./style/Style.css"

export default function ActivityBox({activity}) {
// export default function ActivityBox({activity, deleteAnActivity}) {
    const [token] = useState(localStorage.getItem("token"));
    const [deleteActivity, setDeleteActivity] = useState("")

const deleteAnActivity = async(_id) =>{
        try{
            console.log("ofir")
            await api.delete(`/activities/${_id}`,{
                headers: { Authorization: `Bearer ${token}` },
            })
            // console.log(activities._id)
            setDeleteActivity(_id)
            console.log(deleteActivity)
            // console.log(deleteActivity)
        }catch(e){
            console.log(e)
        }
    }
    return (
        <div >
            <div className="all-activities">
                {activity.map(a => {
                    return <div className="activity-box">
                        <button className="activity-box-btn" onClick={deleteAnActivity}>XX</button>
                        <h2>{a.name}</h2>
                        <div>
                            <p>{a.date}</p>
                            <p>{a.duration} min</p>
                            <p>{a.calories} cal</p>

                        </div>
                    </div>
                        })

                }

            </div>
                {/* {activity.map(a => <p>{a.date}</p>)}
                {activity.map(a => <p>{a.duration}</p>)}
                {activity.map(a => <p>{a.calories}</p>)} */}

        </div>
    )
}
