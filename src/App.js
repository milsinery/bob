import React from 'react';
import Card from './Card';
import './App.css';

class App extends React.Component {

  render() {
    return(<div className="Wrapper">
        <div className="Header">
          Header
        </div>

        <div className="Main">
          <div className="Cards">
            <Card title="Title 1"></Card>
            <Card title="Title 2"></Card>
            <Card title="Title 3"></Card>
            <Card title="Title 4"></Card>
            <Card title="Title 5"></Card>
            <Card title="Title 6"></Card>
          </div>

          <div className="Sidebar">
            Sidebar
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
