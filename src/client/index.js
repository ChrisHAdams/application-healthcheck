import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './views/home.jsx';
import AllChecks from './views/allChecks.jsx';
import List from './views/list.jsx';
import Layout from './views/layout.jsx';
import LandscapeMonitor from './views/landscapeMonitor.jsx';
import { getLandscapes } from './common/apiFunctions';

getLandscapes()
  .then((res) => {
    console.log(res);
    let routesVar = res.map((landscape) =>

      <Route
        key={landscape.key}
        path={"/landscapeMonitor-"+landscape.key}
        render={(props) => <LandscapeMonitor {...props} landscape={landscape} />}
      />
    );

    console.log(routesVar);

    render(
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          {routesVar}
          <Route path="/allChecks" component={AllChecks}/>
          <Route path="/list" component={List}/>
          <Route path="/layout" component={Layout}/>
        </div>
      </Router>,
      document.getElementById('index'),
    );
  });


  /*
render(
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      {routesVar}
      <Route path="/allChecks" component={AllChecks}/>
      <Route path="/list" component={List}/>
      <Route path="/layout" component={Layout}/>
    </div>
  </Router>,
  document.getElementById('index'),
);

*/
