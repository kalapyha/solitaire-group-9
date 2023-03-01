import React from 'react';
import { CardType } from '../../types';
import Card from '../Card/Card';
import Box from '@mui/material/Box';

type DeckdProps = {
    cardsArray: CardType[];
    autoReveal?: boolean;
};

const Deck = ({ cardsArray }: DeckdProps) => {
    return (
        <Box
            style={{
                position: 'relative',
                width: '200px',
                height: '300px',
                marginRight: 30,
            }}
            onDragOver={(e) => console.log(e)} // Dispatch moveTo
            onDrop={() => console.log('DROPPED!')}
        >
            {cardsArray.map(
                ({ value, cardSuit, isFaceDown, image, canBePutOn, canBePutOnHome, stackId }: CardType, i) => (
                    <Card
                        value={value}
                        cardSuit={cardSuit}
                        isFaceDown={isFaceDown}
                        image={image}
                        key={`${value}${cardSuit}`}
                        isDraggable={cardsArray.length - 1 === i ? true : false}
                        id={String(i)}
                        stackId={stackId}
                        canBePutOn={canBePutOn}
                        canBePutOnHome={canBePutOnHome}
                    />
                ),
            )}
        </Box>
    );
};

export default React.memo(Deck);
