import React from 'react';
import io from 'socket.io-client';
import CheckComponentCard from '../components/checkComponentCard.jsx';
import Menu from '../menu.jsx';
import { getOptions } from '../common/apiFunctions';

const responseCode = 200;
const responseTime = 500;

class Play extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: 'Loading Page...',
      subtitle: '',
      menutitle: '',
      footertext: '',
    };

  }

  componentDidMount() {

    getOptions()
      .then((res) => {
        this.setState({
          title: res.title,
          subtitle: res.subtitle,
          menutitle: res.menutitle,
          footertext: res.footertext,
        });
      });

    const socket = io();
    socket.on('connect', function () { console.log('Connecting...'); });
    socket.on('message', function (data) { console.log(`Message Received ${data}`); });

  }

  render() {
    return <div>
      <div className="wrapper">

        <header className="main-head">
        <Menu menuTitle={this.state.menutitle}/>
        </header>

        <div className="leftside" />
        <div className="rightside" />
        <div className="content">
          <div className="contentGrid">
          <CheckComponentCard
            name='BBC'
            description='Check the BBC Website'
            type='website'
            expectedResponseTime={responseTime}
            expectedResponseCode={responseCode} />
          <CheckComponentCard
            name='Sky'
            description='Check the Sky Website'
            type='website'
            expectedResponseTime={responseTime}
            expectedResponseCode={responseCode} />
          <CheckComponentCard
            name='Google'
            description='Check the Google Website'
            type='website'
            expectedResponseTime={responseTime}
            expectedResponseCode={responseCode} />
          <CheckComponentCard
            name='Google'
            description='Check the Google Website'
            type='website'
            expectedResponseTime={responseTime}
            expectedResponseCode={responseCode} />
          <CheckComponentCard
            name='Google'
            description='Check the Google Website'
            type='website'
            expectedResponseTime={responseTime}
            expectedResponseCode={responseCode} />
          <CheckComponentCard
            name='Google'
            description='Check the Google Website'
            type='website'
            expectedResponseTime={responseTime}
            expectedResponseCode={responseCode} />
          <CheckComponentCard
            name='Google'
            description='Check the Google Website'
            type='website'
            expectedResponseTime={responseTime}
            expectedResponseCode={responseCode} />
          <CheckComponentCard
            name='BBC'
            description='Check the BBC Website'
            type='website'
            expectedResponseTime={responseTime}
            expectedResponseCode={responseCode} />
          <CheckComponentCard
            name='Sky'
            description='Check the Sky Website'
            type='website'
            expectedResponseTime={responseTime}
            expectedResponseCode={responseCode} />
          <CheckComponentCard
            name='Google'
            description='Check the Google Website'
            type='website'
            expectedResponseTime={responseTime}
            expectedResponseCode={responseCode} />
          <CheckComponentCard
            name='Google'
            description='Check the Google Website'
            type='website'
            expectedResponseTime={responseTime}
            expectedResponseCode={responseCode} />
          <CheckComponentCard
            name='Google'
            description='Check the Google Website'
            type='website'
            expectedResponseTime={responseTime}
            expectedResponseCode={responseCode} />
          <CheckComponentCard
            name='Google'
            description='Check the Google Website'
            type='website'
            expectedResponseTime={responseTime}
            expectedResponseCode={responseCode} />
          <CheckComponentCard
            name='Google'
            description='Check the Google Website'
            type='website'
            expectedResponseTime={responseTime}
            expectedResponseCode={responseCode} />
        </div>
        </div>
        <footer className="main-footer">
            <div className="smallText">{this.state.footertext}</div>
        </footer>

      </div>
  </div>;
  }

}

export default Play;
