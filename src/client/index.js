import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { getLandscapes } from './common/apiFunctions';
import LandscapeMonitor from './views/landscapeMonitor.jsx';
import Home from './views/home.jsx';
import AllChecks from './views/allChecks';
import List from './views/list';
import Layout from './views/layout';
import LiveView from './views/liveView';
import SingleCheckMonitor from './views/singleCheckMonitor';

getLandscapes()
  .then((res) => {

    let routesVar = res.map((landscape) =>

    <Route
      key={landscape.key}
      path={"/landscapeMonitor-"+landscape.key}
      render={(props) => <LandscapeMonitor {...props} landscape={landscape} />}
    />
  );

    render(
      <>

            <Router>
            <div>
              <Route exact path="/" component={Home}/>
              {routesVar}
              <Route path="/allChecks" component={AllChecks}/>
              <Route path="/liveView" component={LiveView}/>
              <Route path="/list" component={List}/>
              <Route path="/layout" component={Layout}/>
              <Route path="/singleCheckMonitor" component={SingleCheckMonitor} />
    />
            </div>
          </Router>
      </>,
      document.getElementById('app'),
    );

  });
