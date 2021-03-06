import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import HomeContainer from './screens/Home';
import Book from './screens/Book';
import Landing from './screens/Landing';
import Login from './screens/Login';
import PrivateRoute from './components/PrivateRoute';
import PublicOnlyRoute from './components/PublicOnlyRoute';
import Signup from './screens/Signup';

class App extends Component {
  render() {
    return (
      <Switch>
        <PublicOnlyRoute exact path="/" component={Landing} />
        <PublicOnlyRoute exact path="/login" component={Login} />
        <PublicOnlyRoute exact path="/signup" component={Signup} />
        <PrivateRoute exact path="/dashboard" component={HomeContainer} />
        <PrivateRoute path="/books/:id" component={Book} />
      </Switch>
    );
  }
}

export default App;
