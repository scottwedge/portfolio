import React, { Component, useEffect } from 'react';
import Calculator from './../../images/Calculator.png'
import PiKapp from './../../images/PiKapp.png'
import MapleBay from './../../images/MapleBay.png'

function Projects(props) {

    useEffect(() => {
        document.title = "Trey Roche | Projects"
    });

    return <div className="Projects" style={{ marginLeft:'10em', marginRight:'10em'}}>
        <link rel="stylesheet" href="devicon.css"/><h2>Projects</h2>
        <span style={{ position:'relative', left:'17%' }}> 
            <i style={ iconStyle } className="devicon-html5-plain"></i>
            <i style={ iconStyle } className="devicon-css3-plain"></i>
            <i style={ iconStyle } className="devicon-bootstrap-plain"></i>
            <i style={ iconStyle } className="devicon-javascript-plain"></i>
            <i style={ iconStyle } className="devicon-react-plain"></i>
            <i style={ iconStyle } className="devicon-nodejs-plain"></i>
            <i style={ iconStyle } className="devicon-python-plain"></i>
            <i style={ iconStyle } className="devicon-php-plain"></i>
            <i style={ iconStyle } className="devicon-mysql-plain"></i>
            <i style={ iconStyle } className="devicon-mongodb-plain"></i>
            <i style={ iconStyle } className="devicon-heroku-plain"></i>
        </span>
        <span style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr'}}>
            <div className='card' style={ cardStyle }>
                <img src={ Calculator } style={ ImgStyle }/>
                <h3>Nutritional Calculator</h3>
                <button style={ btnStyle }><a style={ linkStyle } href="https://github.com/Troche4/nutritional-calculator" target="_blank">View code</a></button>
                <button style={ btnStyle }><a style={ linkStyle } href="https://comp424-nutrional-calculator.herokuapp.com" target="_blank">View project</a></button>
            </div>
            <div className='card' style={ cardStyle }>
                <img src={ PiKapp } style={ ImgStyle }/>
                <h3>Pi Kappa Phi Fraternity</h3>
                <button style={ btnStyle }><a style={ linkStyle } href="https://github.com/Troche4/piKappaPhi" target="_blank">View code</a></button>
                <button style={ btnStyle }><a style={ linkStyle } href="https://pikappluc.herokuapp.com" target="_blank">View project</a></button>
            </div>
            <div className='card' style={ cardStyle }>
                <img src={ MapleBay } style={ ImgStyle }/>
                <h3>Maple Bay Consulting</h3>
                <button style={ btnStyle }><a style={ linkStyle } href="https://github.com/Troche4/MapleBayConsulting" target="_blank">View code</a></button>
                <button style={ btnStyle }><a style={ linkStyle } href="http://www.maplebayconsulting.com" target="_blank">View project</a></button>
            </div>
        </span>
    </div>
}

const iconStyle = {
    fontSize:'3em',
    padding:'5px'
}

const cardStyle = {
    backgroundColor:'#278ea5',
    flexDirection:'vertical',
    margin:'5%',
    textAlign:'center',
}

const ImgStyle = {
    width:'100%',
    opacity:'0.6'
}

const btnStyle = {
    backgroundColor:"#21e6c1",
    borderRadius:'16px',
    fontSize:'1.5em',
    alignment:'center',
    margin:'3%',
    position:'relative'
}

const linkStyle = {
    padding:'16px',
}

export default Projects;