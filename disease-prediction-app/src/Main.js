import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import DiseasePrediction from './DiseasePrediction';
import Statistics from './Statistics';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/DiseasePrediction' component={DiseasePrediction}></Route>
      <Route exact path='/Statistics' component={Statistics}></Route>
    </Switch>
  );
}

export default Main;