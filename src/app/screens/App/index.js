import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeContainer from './screens/Home';
import Book from './screens/Book';
import Landing from './screens/Landing';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/dashboard" component={HomeContainer} />
        <Route path="/books/:id" component={Book} />
      </Switch>
    );
  }
}

export default App;
