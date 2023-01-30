import React from 'react';
import Blue from '../../assets/backs/Blue';
import Red from '../../assets/backs/Red';
import Abstract from '../../assets/backs/Abstract';
import Astronaut from '../../assets/backs/Astronaut';
import { CardType } from '../../types';
import { useSelector } from 'react-redux';
import { selectPattern } from '../../features/settingsSlice';
import './Card.scss';

const Card = ({ isFaceDown = true, isDraggable = false, image, id }: CardType): JSX.Element => {
    const imagePattern = useSelector(selectPattern);
    const renderCardBackPattern = () => {
        switch (imagePattern) {
            case 'Blue':
                return <Blue />;
            case 'Red':
                return <Red />;
            case 'Abstract':
                return <Abstract />;
            case 'Astronaut':
                return <Astronaut />;

            default:
                return <Blue />;
        }
    };
    return isFaceDown ? (
        renderCardBackPattern()
    ) : (
        <div
            id={id}
            onClick={(e) => console.log(e.currentTarget)}
            draggable={isDraggable}
            onDrag={(e) => console.log(e)}
        >
            {/* TODO, update with redux active cards state here */}
            {/* <div className={`card ${isActiveCard ? 'border' : ''}`}>{image}</div> */}
            <div>{image}</div>
        </div>
    );
};

export default Card;
