import React from 'react';
import Card from './Card';
import './Cards.css';

class Cards extends React.Component {

    render(){
        return(
            <div className="Cards">
                <Card title="Ttilte 1"></Card>
            </div>
        );
    }
}

export default Cards;