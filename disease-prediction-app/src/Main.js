import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import DiseasePrediction from './DiseasePrediction';
import Statistics from './Statistics';
import ShowMore from './ShowMore';
import ShowDrug from './ShowDrug';
import ForChatBotAvuCeo from './ForChatBotAvuCeo';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/DiseasePrediction' component={DiseasePrediction}></Route>
      <Route exact path='/Statistics' component={Statistics}></Route>
      <Route exact path='/ShowMore' component={ShowMore}></Route>
      <Route exact path='/ShowDrug' component={ShowDrug}></Route>
      <Route exact path='/GetSymptoms' component={ForChatBotAvuCeo}></Route>
    </Switch>
  );
}

export default Main;