import React from 'react';
import io from 'socket.io-client';
import Menu from '../components/menu.jsx';
import { getTimeStamp } from '../common/dateAndTimeFunctions';
import { getOptions, getAllComponentChecks, runAllComponentChecks } from '../common/apiFunctions';
import '../css/coreStyles.css';
import { getSocketUrl } from '../common/common';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip } from 'recharts';


class LiveView extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      title: 'Loading Page...',
      subtitle: '',
      menutitle: '',
      footertext: '',
      graphData: [],
      lastCheckedTime: 'Checking',
    };

    this.socket = null;

  }

  renderColorfulLegendText(value, entry) {
  	const { color } = entry;

    return <span style={{ color }}>{value}</span>;
  }

  componentDidMount() {

    getOptions()
      .then((res) => {
        this.setState({
          footertext: res.footertext,
        });

        const socketUrl = getSocketUrl(res.port);

        console.log(`Attempting to connect to sockets at ${socketUrl}.`);

        this.socket = io(socketUrl, { path: `${res.basePath}socket.io` });
        this.socket.on('connect', function () { console.log(`Connected to ${socketUrl}`); });

        this.socket.on('message', (result) => {
          console.log(result);
        });

        this.socket.on('disconnect', (reason) => {
          console.log(reason);
        });

        this.socket.on('data', (result) => {
          const timeStamp = getTimeStamp();
          console.log(`${timeStamp} - Receiving next batch of healtchcheck results.`);

          const graphUpdate = this.createGraphData(JSON.parse(result), timeStamp);

          this.setState({
            componentChecks: JSON.parse(result),
            lastCheckedTime: timeStamp,
            graphData: [...this.state.graphData, graphUpdate]
          });

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

            const graphUpdate = this.createGraphData(checkResult, timeStamp);

            this.setState({
              componentChecks: checkResult,
              lastCheckedTime: timeStamp,
              graphData: [...this.state.graphData, graphUpdate]

            });
          });
      });

  }

  componentWillUnmount() {
    this.socket.close();
  }

  createGraphData(latestResults, timeStamp){

    let obj = {"name": timeStamp};

    for (let i = 0; i < latestResults.length; i += 1) {

      obj[latestResults[i].name] = latestResults[i].actualResponseTime;

    }

    return obj;

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
            <h2>Live View</h2>

            <LineChart
              width={1000}
              height={350} data={this.state.graphData}
              margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>

              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend formatter={this.renderColorfulLegendText}  />
                <Line type="monotone" dataKey="BBC" stroke="#8884d8" />
                <Line type="monotone" dataKey="Google Website" stroke="#82ca9d" />
                <Line type="monotone" dataKey="Sky Website" stroke="#FF0000" />
                <Line type="monotone" dataKey="Penguin" stroke="#0000FF" />
                <Line type="monotone" dataKey="Google Server" stroke="#FFFF00" />
              </LineChart>
          </div>

          <footer className="main-footer">
            <div className="smallText">{this.state.footertext}</div>
          </footer>

        </div>
      </div>
    );
  }
}

export default LiveView;
