import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Widgets from './components/Widgets/Widgets'
import Login from './components/Login/Login'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    //BEM
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="home">
              <Sidebar/>
              <Feed/>
              <Widgets/>
            </div>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
