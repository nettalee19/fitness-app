import React, { useState, useEffect } from 'react'
import moment from 'moment';
import Build from './Build';
import "./Style/Style.css"
// import { identifier } from '@babel/types';
import Header from './Header'

export default function Calender({value, onChange}) {
    // let weekdayshort = moment.weekdaysShort();

    // const [dateObject, setDateObject] = useState(moment())

    // const firstDayOfMonth = () =>{
    //     const firstDay = moment(dateObject)
    //                     .startOf("month")
    //                     .format("d");
    //     return firstDay;
    // }

    const [calendar, setCalendar] = useState([])
    

    const startDay = value.clone().startOf("month").startOf("week")
    const endDay = value.clone().endOf("month").endOf("week")
    
    useEffect(() =>{
        
        setCalendar(Build(value))

    }, [value])

    function isSelected(day) {
        return value.isSame(day, "day")
    }

    function beforeToday(day) {
        return day.isBefore(new Date(), "day")
    }

    function isToday(day) {
        return day.isSame(new Date(), "day")
    }

    function dayStyles(day) {
       if(beforeToday(day)) return "before"
       if(isSelected(day)) return "selected"
       if(isToday(day)) return "today"
       return ""
    }

   
    
    return (
        <div className="calendar">
            <Header value={value} setValue={onChange}/>
            <div className="body">
                <div className="day-names">
                    {["s","m","t","w","t","f","s"].map(d => <div className="week">{d}</div>  )}
                </div>
                {calendar.map(week =>( 
                    <div>
                        {week.map(day =>(
                            <div className="day" onClick={() => onChange(day)}>
                                {/* <div className={value.isSame(day, "day") ? "selected" : ""}> */}
                                <div className={dayStyles(day)}>
                                    {day.format("D").toString()}

                                </div>
                                
                            </div>
                            ))}
                    </div>))
                }

            </div>



            {/* {day.format("MM/DD")} */}

            {/* {startDay.format("MM/DD")} -
            {endDay.format("MM/DD")} */}


           {/* {weekdayshort}
           {moment.locale()}
        <table>
           {weekdayshort.map(day =>{
               return (
                   <th className="week-day">
                       {day}
                   </th>
               )
           })}
            <td>{firstDayOfMonth}</td>
        </table> */}
        </div>
    )
}
