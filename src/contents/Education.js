import React, { Component } from 'react'
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="PhD, Geography" where="UNC-Chapel Hill" compl="2006"/>
                <Widecard title="MA, Geography" where="UNC-Chapel Hill" compl="1997"/>
                <Widecard title="BA, Geography" where="UNC-Chapel Hill" compl="1995"/>
                <Widecard title="AA, College Transfer" where="Central Piedmont Community College" compl="1992"/>
                <Widecard title="AAS, Architectural Technology" where="Central Piedmont Community College" compl="1981"/>
            </div>
        )
    }
}

export default Education