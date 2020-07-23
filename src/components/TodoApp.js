import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './Home';
import SignIn from './SignIn';

class TodoApp extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sigin" component={SignIn} />
      </Switch>
    );
  }
}

export default TodoApp;
