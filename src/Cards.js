import React from 'react';
import Card from './Card';
import CardsData from "./CardsData";
import './Cards.css';

class Cards extends React.Component {

    render(){

        function createCard(data) {
            return data.map(content => 
                <Card 
                    id={content.id} 
                    title={content.title} 
                    description={content.description}
                    links={content.link.map(links => <a className="Nav__Item" href={links}>{links}</a>)}
                />
            )
        }

        return(
            <div className="Cards">
                {createCard(CardsData)}
            </div>
        );
    }
}

export default Cards;