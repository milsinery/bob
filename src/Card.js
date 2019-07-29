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

    handleClick() {
        this.setState({flag: !this.state.flag});
    }

    render() {
        return(
            <div className={this.state.flag ? "card" : "card card_expand"}>
                <Icon/>
                <div className="content">
                    <h2 className="title">{this.props.title || this.state.title}</h2>

                    <p className="descritpion">{this.props.description || this.state.description}</p>
                </div>
                <div className="card__expander" onClick={this.handleClick}></div>
            </div>
        );
    }
}

export default Card;