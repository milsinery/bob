import React from 'react';
import Icon from './icon';
import './card.css';

class Card extends React.Component {

    render() {
        return(
            <div className="Card">
                <Icon/>
                <div className="Content">
                    <h2 className="Title">{this.props.title}</h2>
                    <p className="Description">{this.props.description}</p>
                </div>
            </div>
        );
    }
}

Card.defaultProps = {title: "Card Title", description: "Some text"};

export default Card;