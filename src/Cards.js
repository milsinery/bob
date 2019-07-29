import React from 'react';
import Card from './Card';
import CardsData from "./CardsData";

import './Cards.css';

class Cards extends React.Component {

    render(){
        const cardContent = CardsData.map(content => <Card id={content.id} title={content.title} description={content.description}/>)

        return(
            <div className="Cards">
                {cardContent}
            </div>
        );
    }
}

export default Cards;