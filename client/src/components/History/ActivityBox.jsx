import React from 'react'
import "./style/Style.css"

export default function ActivityBox({activity, deleteAnActivity}) {
    
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
