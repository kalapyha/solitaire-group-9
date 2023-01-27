import React, { useState } from 'react';
import Blue from '../../assets/backs/Blue';
import { CardType } from '../../types';
import './Card.scss';

const Card = ({ isFaceDown = true, image }: CardType): JSX.Element => {
    const [isActiveCard, setIsActiveCard] = useState(false);
    return isFaceDown ? (
        <Blue />
    ) : (
        <div onClick={() => setIsActiveCard((curr) => !curr)}>
            <div className={isActiveCard ? 'border' : ''}>{image}</div>
        </div>
    );
};

export default Card;
