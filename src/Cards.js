import React from 'react';
import Card from './Card';
import CardsData from "./CardsData";

import './Cards.css';

class Cards extends React.Component {

    render(){

        return(
            <div className="Cards">
                {CardsData.map(content => 
                    <Card 
                        id={content.id} 
                        title={content.title} 
                        description={content.description}
                        links={content.link.map(links => <a className="Nav__Item" href={links}>{links}</a>)}
                    />
                )}
            </div>
        );
    }
}

export default Cards;