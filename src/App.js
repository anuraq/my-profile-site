import React, { Component } from 'react'
import Contact from './components/Contact'
import Project from './components/Project'
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
                    <div className="bottom-grid">
                        <div className="info-me">
                            <div className="info-title">Info // About Me</div>
                            <div className="info-text">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum</div>
                        </div>
                        <div className="contact">
                            <Contact />
                        </div>
                        <div className="projects">
                            <Project />
                        </div>
                    </div>
                    <div className="footer">
                        <div className="footer-text">anuraq &copy; , c is cool</div>
                    </div>
                </div>
            </>
        )
    }
}

export default App
