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
            <Stack spacing={-42}>
                {cardsArray.map(({ value, cardSuit, isFaceDown, image }: CardType, i) => (
                    <Card
                        value={value}
                        cardSuit={cardSuit}
                        isFaceDown={cardsArray.length - 1 === i && autoReveal ? false : isFaceDown}
                        image={image}
                        key={`${value}${cardSuit}`}
                    />
                ))}
            </Stack>
        </Box>
    );
};

export default React.memo(Deck);
