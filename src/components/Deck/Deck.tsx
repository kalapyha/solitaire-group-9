import React from 'react';
import { CardType } from '../../types';
import Card from '../Card/Card';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { setMoveTo } from '../../features/tableauSlice';

type DeckdProps = {
    cardsArray: CardType[];
    autoReveal?: boolean;
};

const Deck = ({ cardsArray }: DeckdProps) => {
    const dispatch = useDispatch();
    const lastCard = cardsArray[cardsArray.length - 1];
    return (
        <Box
            style={{
                position: 'relative',
                width: '200px',
                height: '300px',
                marginRight: 30,
            }}
            onDragOver={() =>
                dispatch(
                    setMoveTo({
                        stackId: lastCard.stackId,
                        cardId: lastCard.id,
                        canBePutOn: lastCard.canBePutOn,
                        canBePutOnHome: lastCard.canBePutOnHome,
                    }),
                )
            }
        >
            {cardsArray.map(
                ({ value, cardSuit, isFaceDown, image, canBePutOn, canBePutOnHome, stackId, id }: CardType, i) => (
                    <Card
                        value={value}
                        cardSuit={cardSuit}
                        isFaceDown={isFaceDown}
                        image={image}
                        key={`${value}${cardSuit}`}
                        isDraggable={cardsArray.length - 1 === i ? true : false}
                        id={id}
                        stackId={stackId}
                        canBePutOn={canBePutOn}
                        canBePutOnHome={canBePutOnHome}
                        index={i}
                    />
                ),
            )}
        </Box>
    );
};

export default React.memo(Deck);
