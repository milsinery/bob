import React from 'react';
import './Card.css';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: true
        };
        this.expandCard = this.expandCard.bind(this);
    }

    expandCard() {
        this.setState({flag: !this.state.flag})
    }

    render() {
        return(
            <div className={this.state.flag ? "Card" : "Card Card_expand"}>

                <div className="Content">
                    <a class="Link" href=" ">
                        <svg typetype="text/css" href="Card.css" width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path class="Icon" fill-rule="evenodd" clip-rule="evenodd" d="M17 11.5C17 10.1193 18.1193 9 19.5 9C20.8807 9 22 10.1193 22 11.5C22 12.8807 20.8807 14 19.5 14C18.1193 14 17 12.8807 17 11.5ZM15.1928 10.1928C15.0674 10.6065 15 11.0454 15 11.5C15 13.9853 17.0147 16 19.5 16C19.9546 16 20.3935 15.9326 20.8072 15.8072C20.2472 17.655 18.5307 19 16.5 19C14.0147 19 12 16.9853 12 14.5C12 12.4693 13.345 10.7528 15.1928 10.1928ZM16.6564 8.01216C16.6054 8.00415 16.5532 8 16.5 8C12.9101 8 10 10.9101 10 14.5C10 15.9341 10.4644 17.2597 11.2511 18.3347L9.29289 20.2929C8.90237 20.6834 8.90237 21.3166 9.29289 21.7071C9.68342 22.0976 10.3166 22.0976 10.7071 21.7071L12.6653 19.7489C13.7403 20.5356 15.0659 21 16.5 21C20.0899 21 23 18.0899 23 14.5C23 14.4468 22.9958 14.3946 22.9878 14.3436C23.6205 13.5685 24 12.5786 24 11.5C24 9.01472 21.9853 7 19.5 7C18.4214 7 17.4315 7.37946 16.6564 8.01216Z" fill="#333333"/>
                        </svg>
                        <h2 className="Title">{this.props.title}</h2>
                    </a>

                    <p className="Description">
                        {this.props.description}
                    </p>

                    <div className="Nav">
                        {this.props.links}
                    </div>
                </div>
                
                <div
                    className="Card__expander" 
                    onClick={this.expandCard}>
                </div>
            </div>
        );
    }
}

export default Card;