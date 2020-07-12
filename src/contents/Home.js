import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/grd2019crop.jpg';
import Social from '../components/Social'

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} className="profilepic" alt="G R Dobbs in 2019"></img>
        
                <ReactTypingEffect className="typingeffect" text={['I am G. Rebecca Dobbs', 'I am a professional geographer']} speed={100} eraseDelay={700}/>
                <Social />
            </div>
        )
    }
}

export default Home