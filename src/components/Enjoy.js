import React from 'react'
import './Enjoy.css'

function Enjoy() {
    return (
        <>
        <div style={{boxShadow:"0px 3px 3px #888888", paddingBottom: "20px"}}>
           <div className="card__textz">
               <h2>Choose And Enjoy</h2>
               <p>I just wanna keep calling your Name, until you come back home</p>
           </div> 
           <div className="card__wrapper">
           <div className="card__container">
                <div className="card__image">
                    <img src="/images/s1.png" alt="" height="270px"/>
                </div>
                <div className="card__text">
                    <h4>Luger Burger</h4>
                </div>
                <div className="card__button">
                    <button>Order</button>
                </div>
           </div>
           <div className="card__container">
                <div className="card__image">
                    <img src="/images/s2.png" alt="" height="270px"/>
                </div>
                <div className="card__text">
                    <h4>Luger Burger</h4>
                </div>
                <div className="card__button">
                    <button>Order</button>
                </div>
           </div>
           <div className="card__container">
                <div className="card__image">
                    <img src="/images/s2.png" alt="" height="270px"/>
                </div>
                <div className="card__text">
                    <h4>Luger Burger</h4>
                </div>
                <div className="card__button">
                    <button>Order</button>
                </div>
           </div>
           </div>
           </div>
        </>
    )
}

export default Enjoy
