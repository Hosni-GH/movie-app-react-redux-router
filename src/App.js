import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, } from "react-router-dom";
import './App.css'
import Header from './Header';
import Card from './Card';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (<div>
      <Router>
        <Route  exact path="/" render={()=><Header/>}/>
 
        <Route  path="/Movies" component={Card}/>
 
      </Router>
     
    </div>);
  }
}
 
export default App;