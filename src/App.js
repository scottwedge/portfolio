import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import { render } from '@testing-library/react';

class App extends Component{

  state = {
    subscribed: false
  }

  render(){
    return (
      <Router>
        <div className="App" style={{  }}>
          < Nav />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Home />
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          < Footer />
        </div>
      </Router>
    );
  }
}

export default App;
