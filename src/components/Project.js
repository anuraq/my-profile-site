import React, { Component } from 'react'
import './style.css'

export class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {p_list: ["Socket Stream", "Tetris" , "Calculator", "B", "Socket Stream", "Tetris" , "Calculator", "B", "Socket Stream", "Tetris" , "Calculator", "B","Socket Stream", "Tetris" , "Calculator", "B"]};
    }
    
    render() {
        return (
            <div className="project-container">
                <div className="contact-title">Projects</div>
                <div className="project-design">
                    <div className="project-list">
                      {this.state.p_list.map((x,y) => <ProjectName name={x} key={y} />)}  
                    </div>
                    <div className="project-info"></div>
                </div>
            </div>
        )
    }
}

function ProjectName(props) {
    return (
    <div className="project-name">{props.name}</div>
    )
}


export default Project
