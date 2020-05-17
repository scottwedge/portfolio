import React, { Component } from 'react';
import Github from "../../images/Github.png"
import LinkedIn from "../../images/LinkedIn.png"
import ReactDOM from 'react-dom';

class Footer extends Component {

    render(){
        return(
            <div className='Footer' style={{ position:'fixed', bottom:'0', margin:'1em', width:'10%'}}>
                <span>
                    <a href='https://www.linkedin.com/in/trey-roche-587b7717a/' target='_blank'><img align='bottom' style={{ width:'40%', paddingBottom:'0.8em'}} src={ LinkedIn } alt='My LinkedIn profile'/></a>
                    <a href='https://github.com/Troche4' target='_blank'><img align='bottom' style={{ width:'58%' }} src={ Github } alt='My GitHub profile'/></a>
                </span>
            </div>
        );
    }
}

export default Footer;