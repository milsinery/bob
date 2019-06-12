import React from 'react';
import './card.css';

class Card extends React.Component {

    render() {
        return(
            <div className="Pad">
                <div class="Tilte">
                    <h2>{this.props.title}</h2>
                </div>
            </div>
        );
    }
}

Card.defaultProps = {title: "Title"};
