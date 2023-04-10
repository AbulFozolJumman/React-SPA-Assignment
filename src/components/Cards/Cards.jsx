import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = ({readTimeHandler, bookmarkHandler}) => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch("data.json")
        .then(res => res.json())
        .then(data => setCards(data))
    }, [])
    return (
        <div>
            {
                cards.map(card => <Card bookmarkHandler={bookmarkHandler} readTimeHandler={readTimeHandler} card={card} key={card.id}></Card>)
            }
        </div>
    );
};

export default Cards;