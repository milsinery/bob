import React from 'react';
import Icon from './icon';
import './Card.css';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: true,
            title: "Title",
            description: "Description"
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({flag: !this.state.flag});
    }

    render() {
        return(
            <div className={this.state.flag ? "Card" : "Card Expand"} onClick={this.handleClick}>
                <Icon/>
                <div className="Content">
                    <h2 className="Title">{this.props.title || this.state.title}</h2>

                    <p className="Descritpion">{this.props.description || this.state.description}</p>
                </div>
            </div>
        );
    }
}

export default Card;