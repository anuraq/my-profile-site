import React, { Component } from 'react'
import './App.css'

export class App extends Component {
    render() {
        return (
            <>
                <div className="main-screen-top">
                    <div className="center-text">
                        <span class="title-text">anuraq</span>
                        <div className="info-buttons">
                            <div id="insta" className="social-btn"><img src={require('./assets/insta.png')} alt="instagram"></img></div>
                            <div id="github" className="social-btn"><img src={require('./assets/github.png')} alt="github"></img></div>
                            <div id="twitter" className="social-btn"><img src={require('./assets/twitter.png')} alt="twitter"></img></div>
                            <div id="mail" className="social-btn"><img src={require('./assets/mail.png')} alt="mail"></img></div>
                        </div>
                    </div>
                    <div className="bottom-arrow">

                    </div>
                </div>
                <div className="bottom-screen">
                    <div className="info-me">
                        <div className="info-title">Info // About Me</div>
                        <div className="info-text">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum</div>
                    </div>
                    <div className="contact">
                        <div className="contact-title">Contact</div>
                        <div className="contact-form"></div>
                    </div>
                    <div className="projects">
                        <div className="projects-title">Projects</div>
                    </div>
                </div>
            </>
        )
    }
}

export default App
