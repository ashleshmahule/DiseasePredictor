import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import DiseasePrediction from './DiseasePrediction';
import Statistics from './Statistics';
import ShowMore from './ShowMore';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/DiseasePrediction' component={DiseasePrediction}></Route>
      <Route exact path='/Statistics' component={Statistics}></Route>
      <Route exact path='/ShowMore' component={ShowMore}></Route>
    </Switch>
  );
}

export default Main;