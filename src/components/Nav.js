import React from 'react'
import './Nav.css'

export default function Nav() {
    return (
        <>
        <div className="wrapper">
           <nav>
               <div className="logo">
                   <img src="/images/logo1.png" alt="logo" />
               </div>
               <div>
                    <ul className="nav__list">
                        <li><a href="/">Header</a></li>
                        <li><a href="/">Products</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
               </div>
           </nav> 
           {/* <div className="home__section">
           <div className="home__details">
                <h4>It's a good time for a taste of Buger</h4>
                <h2><span>Buger</span> for the week</h2>
                <p>loerm gsgtuao,a,adyyrysfsu</p>
                <button>Order Now</button>
           </div>
           </div>  */}
           </div>
        </>
    )
}
