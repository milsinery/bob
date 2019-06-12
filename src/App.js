import React from 'react';
import './App.css';
import './index.css';
import './Card';

class App extends React.Component {

  render() {
    return(<div className="Wrapper">
        <div class="Header">
          Header
        </div>

        <div className="Content">

          <div className="Main">
            <div className="Card"></div>
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
