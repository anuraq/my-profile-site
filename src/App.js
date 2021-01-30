import React, { Component } from 'react'
import Contact from './components/Contact'
import Project from './components/Project'
import './App.css'

export class App extends Component {
    socialclick(i){
        switch (i){
            case 1: window.open("https://www.instagram.com/anu.r.a.g");
            break;
            case 2: window.open("https://www.github.com/anuraq");
            break;
            case 3: window.open("https://www.twitter.com/anuraqk");
            break;
            case 4: window.location.href = "mailto:yoyoanusingh27@gmail.com";
            break; 
            default:
                console.log("no links found");
        }
    }

    render() {
        return (
            <>  
                <div className="main-screen-top">
                    <img id="top-logo" src={require('./assets/my-logo.png')}></img>
                    <div className="center-text">
                        <span className="title-text">anuraq</span>
                    </div>
                    <div className="info-buttons">
                        <div id="insta" className="social-btn" onClick={() => this.socialclick(1)}><img src={require('./assets/insta.png')} alt="instagram"></img></div>
                        <div id="github" className="social-btn" onClick={() => this.socialclick(2)}><img src={require('./assets/github.png')} alt="github"></img></div>
                        <div id="twitter" className="social-btn" onClick={() => this.socialclick(3)}><img src={require('./assets/twitter.png')} alt="twitter"></img></div>
                        <div id="mail" className="social-btn" onClick={() => this.socialclick(4)}><img src={require('./assets/mail.png')} alt="mail"></img></div>
                    </div>
                </div>
                <div className="bottom-screen">
                    <div className="bottom-grid">
                        <div className="info-me">
                            <div className="info-title">About Me</div>
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
