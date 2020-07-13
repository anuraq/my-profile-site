import React, { Component } from 'react'
import './style.css'

export class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {key: 0, p_list: ["Socket Stream", "Tetris" , "Calculator", "B", "Socket Stream", "Tetris" , "Calculator", "B", "Socket Stream", "Tetris" , "Calculator", "B","Socket Stream", "Tetris" , "Calculator", "B"]};
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
                        {this.state.p_list[this.state.key]}
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
