import React from 'react'
import './Book.css'

export default function Book() {
    return (
        <>
            <div className="book">
            <h2>Book Your Table</h2>
            <form>
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Enter Email" />
                <textarea placeholder="Text Here" />
                <button type="submit">Book</button>
            </form>

            </div>
        </>
    )
}
