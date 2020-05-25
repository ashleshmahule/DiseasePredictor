import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';
import DiseasePrediction from './DiseasePrediction';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/DiseasePrediction' component={DiseasePrediction}></Route>
    </Switch>
  );
}

export default Main;