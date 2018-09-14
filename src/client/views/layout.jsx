import React from 'react';

class Layout extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <div className="wrapper">

          <header className="main-head">The header</header>

          <div className="leftside">
            <h3>Left Sidebar</h3>
            <p>Stuff in left side bar</p>
          </div>

          <div className="content">
              <h1>Main article area</h1>
              <p>In this layout, we display the areas in source order for any screen less
                that 500 pixels wide. We go to a two column layout, and then to a three
                column layout by redefining the grid, and the placement of items on the grid.</p>
          </div>

          <div className="rightside">
            <h3>Right Sidebar</h3>
            <p>Stuff in right side bar</p>
          </div>

          <footer className="main-footer">
            <h3>The footer</h3>
            <p>Footer Text</p>
          </footer>

        </div>
      </div>
    );
  }
}

export default Layout;
