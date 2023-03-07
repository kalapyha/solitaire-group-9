import React from 'react';
import { CardType } from '../../types';
import Card from '../Card/Card';
import { styled, Card as MUICard, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setMoveTo } from '../../features/tableauSlice';

const StyledCard = styled(MUICard)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    background: 'rgba(39,110,23,1)',
    minWidth: 250,
    minHeight: 350,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

type DeckdProps = {
    cardsArray: CardType[];
    allowEmpty?: boolean;
    tableauId?: number;
    smallShift?: boolean;
    styleOverride?: React.CSSProperties;
};

const Deck = ({ cardsArray, allowEmpty = false, tableauId, smallShift, styleOverride }: DeckdProps) => {
    const dispatch = useDispatch();
    const lastCard = cardsArray[cardsArray.length - 1];

    if (allowEmpty && !cardsArray.length) {
        return (
            <Box
                style={{
                    position: 'relative',
                    width: '200px',
                    height: '300px',
                    marginRight: 45,
                    marginTop: -40,
                    ...styleOverride,
                }}
                onDragOver={() => {
                    dispatch(
                        setMoveTo({
                            stackId: tableauId,
                            moveOnEmptyTableau: true,
                        }),
                    );
                }}
            >
                <StyledCard>
                    {/* @ts-ignore */}
                    <Card isPlaceholder />
                </StyledCard>
            </Box>
        );
    }
    return (
        <Box
            style={{
                position: 'relative',
                width: '200px',
                height: '300px',
                marginRight: 30,
                ...styleOverride,
            }}
            onDragOver={() => {
                dispatch(
                    setMoveTo({
                        stackId: lastCard.stackId,
                        cardId: lastCard.id,
                        canBePutOn: lastCard.canBePutOn,
                        canBePutOnHome: lastCard.canBePutOnHome,
                    }),
                );
            }}
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
                        smallShift={smallShift}
                    />
                ),
            )}
        </Box>
    );
};

export default React.memo(Deck);
