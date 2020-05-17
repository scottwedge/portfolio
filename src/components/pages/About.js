import React, { Component, useEffect } from 'react';
import Headshot from './../../images/Headshot.png'

function About(props) {

    useEffect(() => {
        document.title = "Trey Roche | About"
    });

    return <div  style={{ marginLeft:'20%', marginRight:'15%' }} className="About">
        <br/>
        <br/>
        <span style={ spanStyle }>
            <h2 style={{display:'inline'}}>About Me</h2>
            <img align='right' src={ Headshot } style={{ borderRadius:'50%',border:'2px solid #ffffff',width:'25%' }}/>
        </span>
        <p>
            <br/>
            I’m a senior at Loyola University Chicago, and I will graduate in May 2021 with a Bachelor's in Computer Science. I fell in love with software development because I am energized and motivated by the learning required to building a career in this field. I love to pick up new languages, tools, frameworks, as a growing developer.<br/><br/>
            A couple things I love to do outside of software development include running, traveling, and building computers. 
        </p>
    </div>;
}

const spanStyle = {
    display:'inline-block',
    width:'100%'
}

export default About;