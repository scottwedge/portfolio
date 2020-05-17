import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

class App extends Component{

  render(){
    return (
      <div className="Nav" style={this.getStyle()}>
        <Link style={this.getLinkStyle()} to="/">Home</Link>
        <Link style={this.getLinkStyle()} to="/about">About</Link>
        <Link style={this.getLinkStyle()} to="/blog">Blog</Link>
        <Link style={this.getLinkStyle()} to="/resume">Resume</Link>
        <Link style={this.getLinkStyle()} to="/projects">Projects</Link>
        <Link style={this.getLinkStyle()} to="/contact">Contact</Link>
      </div>
    );
  }
  
  getStyle = () => {
      return {
        textAlign: 'right',
        fontSize: '1.5em',
        marginTop: '1em',
        color: '#909090',
      }
  }

  getLinkStyle = () => {
      return {
          padding: '1em',
          color: '#909090'
      }
  }
}

export default App;
