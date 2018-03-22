import React, { Component } from 'react';
//import ReactDom from 'react-dom';
import { Grid } from 'react-bootstrap';
//import logo from './logo.svg';
import Home from './Components/Home/Home';
import EventsAll from './Components/EventsAll'
import './App.css';


class App extends Component {
  render() {
    return (
        <Grid fluid className="container-app">
          <Home />
          <EventsAll/> 
        </Grid>   
    );
  }
}

export default App;
