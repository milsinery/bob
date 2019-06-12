import React from 'react';
import './card.css';

class Card extends React.Component {

    render() {
        return(
            <div className="Pad">
                <div className="Icon"></div>
                <h2 className="Title">{this.props.title}</h2>
                <p className="Description">{this.props.description}</p>
            </div>
        );
    }
}

Card.defaultProps = {title: "Card Title", description: "Some text"};

export default Card;