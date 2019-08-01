import React from 'react';
import Card from './Card';
import cardsData from "./CardsData";
import linksData from "./LinksData";
import './Cards.css';

class Cards extends React.Component {

    render(){

        function createCard() {
            
            return cardsData.map(content => 
                <Card 
                    id={content.id} 
                    title={content.title} 
                    description={content.description}
                    nav={linksData}
                />
            )
        }

        return(
            <div className="Cards">
                {createCard(cardsData)}
            </div>
        );
    }
}

export default Cards;