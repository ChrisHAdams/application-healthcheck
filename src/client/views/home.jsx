import React from 'react';
import io from 'socket.io-client';
import Menu from '../menu.jsx';
import { getTimeStamp } from '../common/dateAndTimeFunctions';
import { getOptions, getDashboard, getLandscapes, getAllComponentChecks, runAllComponentChecks } from '../common/apiFunctions';
import DashboardPanelList from '../components/dashboardPanelList.jsx';
import '../css/coreStyles.css';
import { getSocketUrl } from '../common/common';

class Home extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      title: 'Loading Page...',
      subtitle: '',
      menutitle: '',
      footertext: '',
      componentChecks: [],
      lastCheckedTime: '',
      landscapes: [],
      port: '',
    };

  }

  componentDidMount() {

    getOptions()
      .then((res) => {
        this.setState({
          menutitle: res.menutitle,
          footertext: res.footertext,
          port: res.port,
        });

        const socketUrl = getSocketUrl(res.port);

        console.log(`Attempting to connect to sockets at ${socketUrl}.`);

        const socket = io(socketUrl, { path: `${res.basePath}socket.io` });
        socket.on('connect', function () { console.log(`Connected to ${socketUrl}`); });

        socket.on('message', (result) => {
          console.log(result);
        });

        socket.on('data', (result) => {
          const timeStamp = getTimeStamp();
          console.log(`${timeStamp} - Receiving next batch of healtchcheck results.`);

          this.setState({
            componentChecks: JSON.parse(result),
            lastCheckedTime: timeStamp,
          });

        });

      });

    getLandscapes()
      .then((res) => {
        this.setState({
          landscapes: res,
        });
      });

    getDashboard()
      .then((res) => {
        this.setState({
          dashboardTitle: res.dashboardTitle,
          dashboardSubTitle: res.dashboardSubTitle,
        });
      });

    getAllComponentChecks()
      .then((res) => {
        this.setState({
          componentChecks: res,
        });
        runAllComponentChecks()
          .then((checkResult) => {
            const timeStamp = getTimeStamp();
            this.setState({
              componentChecks: checkResult,
              lastCheckedTime: timeStamp,
            });
          });
      });
  }

  render() {
    return (
      <div>
        <div className="wrapper">

          <header className="main-head">
            <Menu/>
          </header>

          <div className="leftside" />

          <div className="rightside" />

          <div className="content">
            <h2>{this.state.dashboardTitle}</h2>
            <h3>{this.state.dashboardSubTitle}</h3>
            <p>Last checked at {this.state.lastCheckedTime}.</p>

            <DashboardPanelList
              landscapes={this.state.landscapes}
              componentChecks={this.state.componentChecks}
            />

          </div>

          <footer className="main-footer">
            <div className="smallText">{this.state.footertext}</div>
          </footer>

        </div>
      </div>
    );
  }
}

export default Home;
