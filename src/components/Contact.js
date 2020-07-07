import React from 'react'
import  './style.css'

function Contact() {
    return (
        <>
            <div className="contact-title">Contact</div>
            <div className="contact-form">
                <input placeholder="Your name" className="input-box"></input>
                <input placeholder="Your e-mail" className="input-box"></input>
                <input placeholder="subject" className="input-box"></input>
                <textarea placeholder="message" className="input-box message"></textarea>
                <div className="Submit-btn">Submit</div>
            </div>
        </>
    )
}

export default Contact
