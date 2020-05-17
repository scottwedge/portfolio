import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import responsiveGrid from './../../images/responsiveGrid.png'

class Home extends Component {

    render(){
        return(
            <div className='Home' style={{ marginLeft:'4em', height:'100%' }}>
                <br/>
                <h1 style={{ color:'#21e6c1', fontSize:'7em' }}>Trey Roche</h1>
                <p style={{ color:'#278ea5', fontSize:'2em' }}>I'm a full-stack software developer in Chicago.</p>
                <img src={ responsiveGrid } alt='Responsive Grid Design' align='right' style={{ width:'60%', marginRight:'1em' }}/>
            </div>
        );
    }

}

export default Home;