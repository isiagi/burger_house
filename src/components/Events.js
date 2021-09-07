import React from 'react'
import about from '../images/about.png'
import './Event.css'

export default function Events() {
    return (
        <>
           <div className="events">
               <div className="event__detail">
               <h2>UPCOMING <br /> EVENTS</h2>
               <p>gddmxxxxxxxxxjssssssssssssssssssssueiiiiiiiiiiammmmmmm</p>
                <button>Read More</button>
               </div>
               <div className="event__image">
                <img src={about} alt="" width="600px"/>
               </div>
           </div> 
        </>
    )
}
