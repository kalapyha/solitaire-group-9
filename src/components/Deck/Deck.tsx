import React from 'react';
import Clubs2 from '../../assets/clubs/Clubs2';
import Clubs3 from '../../assets/clubs/Clubs3';
import ClubsAce from '../../assets/clubs/ClubsAce';
import { Card as CardType } from '../../types';
import Card from '../Card/Card';

const deckArray: CardType[] = [
    {
        value: 1,
        cardSuit: '♣',
        isFaceDown: false,
        image: <ClubsAce />,
    },
    {
        value: 2,
        cardSuit: '♣',
        isFaceDown: false,
        image: <Clubs2 />,
    },
    {
        value: 3,
        cardSuit: '♣',
        isFaceDown: false,
        image: <Clubs3 />,
    },
];

const Deck = () => {
    return (
        <div style={{ display: 'flex' }}>
            {deckArray.map(({ value, cardSuit, isFaceDown, image }: CardType) => (
                <Card
                    value={value}
                    cardSuit={cardSuit}
                    isFaceDown={isFaceDown}
                    image={image}
                    key={`${value}${cardSuit}`}
                />
            ))}
        </div>
    );
};

export default Deck;
