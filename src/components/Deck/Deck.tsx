import React from 'react';
import { CardType } from '../../types';
import Card from '../Card/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

type DeckdProps = {
    cardsArray: CardType[];
    autoReveal?: boolean;
};

const Deck = ({ cardsArray, autoReveal = true }: DeckdProps) => {
    return (
        <Box>
            {/* TODO Stack is causing some issues with dnd, need to be updated */}
            <Stack spacing={-42}>
                {cardsArray.map(
                    ({ value, cardSuit, isFaceDown, image, id, canBePutOn, canBePutOnHome }: CardType, i) => (
                        <Card
                            value={value}
                            cardSuit={cardSuit}
                            isFaceDown={cardsArray.length - 1 === i && autoReveal ? false : isFaceDown}
                            image={image}
                            key={`${value}${cardSuit}`}
                            isDraggable={cardsArray.length - 1 === i ? true : false}
                            id={id}
                            canBePutOn={canBePutOn}
                            canBePutOnHome={canBePutOnHome}
                        />
                    ),
                )}
            </Stack>
        </Box>
    );
};

export default React.memo(Deck);
