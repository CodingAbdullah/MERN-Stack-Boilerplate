import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginForm from '../src/component/LoginForm/loginForm';
import SignUpForm from '../src/component/SignUpForm/signUpForm';
import HomePage from '../src/component/HomePage/homepage';


class App extends Component {

  constructor(props){
    super(props);
  }

  // Render react-router-dom elements BrowserRouter, Switch, and Route
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route path="/" exact={true} component={HomePage} />
              <Route path="/login" exact={true} component={LoginForm} />
              <Route path="/signUp" exact={true} component={SignUpForm} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
