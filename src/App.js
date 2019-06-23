import React from 'react';
import Card from './Card';
import './App.css';

class App extends React.Component {

  render() {
    return(<div className="Wrapper">
        <div className="Header">
          
        </div>

        <div className="Main">
          <div className="Cards">
            <Card title="Title 1"></Card>
          </div>

          <div className="Sidebar">
          </div>

        </div>

        <div className="Footer">
          <div className="copy"></div>
        </div>

      </div>
    );
  }
}

export default App;
