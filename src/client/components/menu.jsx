import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { getOptions, getLandscapes } from '../common/apiFunctions';

class Menu extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      menutitle: 'Loading...',
      landscapes: [],
      navItems: '',
    };

  }

  componentDidMount() {

    getOptions()
      .then((res) => {
        this.setState({
          menutitle: res.menutitle,
        });
      });

    getLandscapes()
      .then((res) => {
        let navItemsVar = res.map((landscape) =>
          <Nav.Item key={landscape.key+1}>
            <Nav.Link id={landscape.key+2}
                      eventkey={landscape.key+2}
                      href={"#/landscapeMonitor-"+landscape.key}>{landscape.name}
            </Nav.Link>
          </Nav.Item>
        );
        this.setState({
          landscapes: res,
          navItems: navItemsVar,
        });

      });

  }

  render() {
    return <>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="#">{this.state.menutitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Item key="0">
              <Nav.Link  eventkey={1} href="#/allChecks">All Checks</Nav.Link>
            </Nav.Item>
            <Nav.Item key="99">
              <Nav.Link  eventkey={99} href="#/liveView">Live View</Nav.Link>
            </Nav.Item>
            {this.state.navItems}
          </Nav>
        </Navbar.Collapse >
      </Navbar>

    </>;
    }


}

export default Menu;

/* From old vers

  render() {
    return <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">{this.state.menutitle}</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#/allChecks">
          All Checks
        </NavItem>
        {this.state.navItems}
      </Nav>
    </Navbar.Collapse>
  </Navbar>;
  }

*/

/*
      <>
<Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">{this.state.menutitle}</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>

  </Navbar>
      </>

*/

/*

  render() {
    return <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">{this.state.menutitle}</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#/allChecks">
          All Checks
        </NavItem>
        {this.state.navItems}
      </Nav>
    </Navbar.Collapse>
  </Navbar>;
  }

*/
