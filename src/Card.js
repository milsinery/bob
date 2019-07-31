import React from 'react';
import './Card.css';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            link: null,
            icon: " ",
            title: "Title",
            description: "Description",

            flag: true
        };

        this.expandCard = this.expandCard.bind(this);
    }

    expandCard() {
        this.setState({flag: !this.state.flag})
    }

    render() {
        return(
            <div className={this.state.flag ? "card" : "card card_expand"}>

                <div className="content">
                    <a href={this.props.link}>
                        <div className="icon">

                        </div>
                        
                        <h2 className="title">
                            {this.props.title || this.state.title}
                        </h2>
                    </a>

                    <p className="descritpion">
                        {this.props.description || this.state.description}
                    </p>
                </div>
                
                <div
                    className="card__expander" 
                    onClick={this.expandCard}>
                </div>
            </div>
        );
    }
}

export default Card;