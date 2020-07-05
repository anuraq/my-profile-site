import React, { Component } from 'react'
import './App.css'

export class App extends Component {
    render() {
        return (
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
            </div>
        )
    }
}

export default App
