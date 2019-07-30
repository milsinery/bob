import React from 'react';
import Card from './Card';
import CardsData from "./CardsData";

import './Cards.css';

class Cards extends React.Component {

    render(){

        return(
            <div className="Cards">
                {CardsData.map(content => <Card id={content.id} link={content.link} title={content.title} description={content.description}/>)}
            </div>
        );
    }
}

export default Cards;