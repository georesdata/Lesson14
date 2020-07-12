import React, { Component } from 'react'

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'myskills':['Research in Human Geography', 'GIS as a Research Tool', 'Cartography', 'Teaching of Human Geography, Cartography, and GIS', 'Scholarly Writing and Editing', 'HTML, CSS, JS, and Python']
        };
    }

    render() {
        return (
            <div className="condiv skills">
                <h1 className="subtopic">My Skills</h1>
                <ul>
                    {this.state.myskills.map((value)=>{
                        return <li>{value}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Skills;