import React from 'react';
import Cards from './Cards';

import './App.css';

class App extends React.Component {

  render() {
    return(<div className="Wrapper">
        <div className="Header"></div>

        <div className="Main">
          <Cards></Cards>
          <div className="Sidebar"></div>
        </div>

        <div className="Footer">
          <div className="copy"></div>
        </div>

      </div>
    );
  }
}

export default App;
