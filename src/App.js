import React from 'react';
import './App.css';
import './index.css';

class App extends React.Component {

  render() {
    return(<div className="Wrapper">
        <div class="Header">
          Header
        </div>

        <div className="Content">

          <div className="Main">
            Main
            {this.props.left}
          </div>

          <div className="Sidebar">
            Sidebar
            {this.props.rigth}
          </div>

        </div>

        <div class="Footer">
          Footer
        </div>

      </div>
    );
  }
}

export default App;
