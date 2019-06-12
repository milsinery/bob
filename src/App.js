import React from 'react';
import './App.css';
import './index.css';

class Card extends React.Component {

  render() {
    return(
      <div className="Card">
        <h2 className="Tilte">{this.props.title}</h2>
        <p className="Description">{this.props.description}</p>
      </div> 
    );
  }
}

Card.defaultProps = {title: "Title", description: "Hello, React!"};

export default Card;
