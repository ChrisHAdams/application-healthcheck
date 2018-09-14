import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './views/home.jsx';
import Play from './views/play.jsx';
import List from './views/list.jsx';
import Layout from './views/layout.jsx';

render(
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/list" component={List}/>
      <Route path="/play" component={Play}/>
      <Route path="/layout" component={Layout}/>
    </div>
  </Router>,
  document.getElementById('index'),
);

