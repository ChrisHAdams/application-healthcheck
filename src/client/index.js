import React from 'react';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Route , Routes} from 'react-router-dom';
import { getLandscapes } from './common/apiFunctions';
import LandscapeMonitor from './views/landscapeMonitor.jsx';
import Home from './views/home.jsx';
import AllChecks from './views/allChecks';
import List from './views/list';
import Layout from './views/layout';
import LiveView from './views/liveView';
import SingleCheckMonitor from './views/singleCheckMonitor';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);

getLandscapes()
  .then((res) => {


    let routesVar = res.map((landscape) =>

    <Route
      key={landscape.key}
      path={"/landscapeMonitor-"+landscape.key}
      render={(props) => <LandscapeMonitor {...props} landscape={landscape} />}
    />
  );

    root.render(
      <>

            <Router>
            <Routes>
              <Route exact path="/" element={< Home />}/>
              {routesVar}
              <Route path="/allChecks" element={< AllChecks />}/>
              <Route path="/liveView" element={< LiveView />}/>
              <Route path="/list" element={< List />}/>
              <Route path="/layout" element={< Layout />}/>
              <Route path="/singleCheckMonitor" element={< SingleCheckMonitor/>} />

            </Routes>
          </Router>
      </>
    );


  });
