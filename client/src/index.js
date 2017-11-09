import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from './screens/Home';
import OrderScreen from './screens/OrderScreen';
import './index.css';
import store from './store';

ReactDOM.render(
  <Provider store ={store}>
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/#panaafican" component={Home}/>
        <Route exact path="/#contactus" component={Home}/>
        <Route exact path="/order" component={OrderScreen}/>
      </div>
    </Router>
  </Provider>
  , document.getElementById("root"));
