import React, { Component } from 'react'
import './style.css'

export class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {key: 0, p_list: ["Calc", "Student_RDBMS" , "tetris-html", "Socket-Stream", "Shrink-Link_server", "CovidApp-rn" , "e-comm-site"]};
        this.p_info = [
                    {'desc': 'A basic android Calcular app.'},
                    {'desc': 'A java Application with MySQL using jdbc to store information about Students.'},
                    {'desc': 'tetris implementation using js and html.'},
                    {'desc': 'Using Sockets to send files data through same network.'},
                    {'desc': 'Link Shortner API which manages database to link random text to urls.'},
                    {'desc': 'CovidApp made using react native which shows information about current covid status.'},
                    {'desc': 'A E-Commerce site made using Angular with admin panel to cusomize the webpages.'}
        ];
    }
    
    handleClick(k){
        this.setState({key: k});
    }

    render() {
        return (
            <div className="project-container">
                <div className="contact-title">Projects</div>
                <div className="project-design">
                    <div className="project-list">
                      {this.state.p_list.map((x,y) => <ProjectName handleClick={(k) =>this.handleClick(k)}name={x} key={y} k={y} />)}  
                    </div>
                    <div className="project-info">
                        <span className="project-name-title">{this.state.p_list[this.state.key]}</span>
                        <div className="project-text">{this.p_info[this.state.key].desc}</div>
                        <div className="project-img">img</div>
                        <div className="project-link">Live Link:</div>
                    </div>
                </div>
            </div>
        )
    }
}

function ProjectName(props) {
    return (
    <div className="project-name" onClick={() => props.handleClick(props.k)}>{props.name}</div>
    )
}


export default Project
