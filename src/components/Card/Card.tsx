import React, { useState } from 'react';
import Blue from '../../assets/backs/Blue';
import { Card as CardType } from '../../types';
import './Card.scss';

const Card = ({ value, cardSuit, isFaceDown = true, image }: CardType): JSX.Element => {
    const [isActiveCard, setIsActiveCard] = useState(false);
    return isFaceDown ? (
        <Blue />
    ) : (
        <div onClick={() => setIsActiveCard((curr) => !curr)}>
            <div className={isActiveCard ? 'border' : ''}>{image}</div>
            <p>Value: {value}</p>
            <p>cardSuit: {cardSuit}</p>
        </div>
    );
};

export default Card;
