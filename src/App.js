import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login'

import './App.css';
import Header from './Header.js'
import Home from './Home.js'
import Checkout from './Checkout.js'

function App() {
  return (
    
    <Router>
      <div className="App">
      <Switch>

        <Route path="/checkout">
          <Header />  
          <Checkout />
        </Route>
          
        <Route path="/login">
          <Login />
        </Route>

        <Route part="/">
          <Header />
          <Home />
        </Route>

      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
