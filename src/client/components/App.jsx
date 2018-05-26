import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import GameRound from './GameRound';
import Instructions from './Instructions';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/round/:id" component={GameRound} />
      <Route path="/instructions" component={Instructions} />
    </Switch>
  </div>
);

export default App;
