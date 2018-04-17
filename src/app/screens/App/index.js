import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeContainer from './screens/Home';
import Book from './screens/Book';
import Landing from './screens/Landing';
import Login from './screens/Login';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={HomeContainer} />
        <PrivateRoute path="/books/:id" component={Book} />
      </Switch>
    );
  }
}

export default App;
