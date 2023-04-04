import React from 'react';
import { CardType } from '../../types';
import Card from '../Card/Card';
import { styled, Card as MUICard, Box, IconButton } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectRedeals } from '../../features/scoreSlice';
import { setMoveTo, redealCards, setMoveFrom } from '../../features/tableauSlice';
import { decrementRedeals } from '../../features/scoreSlice';
import { selectedRules } from '../../features/settingsSlice';

const StyledCard = styled(MUICard)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    background: 'rgba(39,110,23,1)',
    minWidth: 250,
    minHeight: 350,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledIconButton = styled(IconButton)(() => ({
    '& svg': {
        width: '3em',
        height: '3em',
    },
}));

type DeckdProps = {
    cardsArray: CardType[];
    allowEmpty?: boolean;
    tableauId?: number;
    smallShift?: boolean;
    styleOverride?: React.CSSProperties;
    showRedeal?: boolean;
    noShift?: boolean;
};

const Deck = ({
    cardsArray,
    allowEmpty = false,
    tableauId,
    smallShift,
    styleOverride,
    showRedeal = false,
    noShift = false,
}: DeckdProps) => {
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
    if (showRedeal && !cardsArray.length) {
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
            >
                <StyledCard>
                    <StyledIconButton
                        data-testid="redeal-btn"
                        aria-label="Redeal"
                        color="primary"
                        size="large"
                        onClick={() => {
                            dispatch(redealCards());
                            dispatch(decrementRedeals());
                        }}
                        disabled={!Boolean(useSelector(selectRedeals)) || useSelector(selectedRules) === 'Vegas'}
                    >
                        <RestartAltIcon />
                    </StyledIconButton>
                </StyledCard>
            </Box>
        );
    }
    const cardsArrayFaceDown = cardsArray.filter((card) => Boolean(card.isFaceDown));
    const cardsRevealed = cardsArray.filter((card) => !Boolean(card.isFaceDown));

    console.log(cardsArrayFaceDown, cardsRevealed);
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
            {/* TODO split this array and render separately face down and normal cards */}
            {cardsArrayFaceDown.map(
                ({ value, cardSuit, isFaceDown, image, canBePutOn, canBePutOnHome, stackId, id }: CardType, i) => (
                    <Card
                        value={value}
                        cardSuit={cardSuit}
                        isFaceDown={isFaceDown}
                        image={image}
                        key={`${value}${cardSuit}`}
                        isDraggable={cardsArray.length - 1 === i ? true : false}
                        // isDraggable={!isFaceDown}
                        id={id}
                        stackId={stackId}
                        canBePutOn={canBePutOn}
                        canBePutOnHome={canBePutOnHome}
                        index={i}
                        smallShift={smallShift}
                        noShift={noShift}
                    />
                ),
            )}
            {/* D-N-D STACK HERE */}
            {cardsRevealed[0]?.stackId <= 7 ? (
                <div
                    id="revealed-cards-wrapper"
                    style={{
                        position: 'absolute',
                        width: '234px',
                        height: '340px',
                    }}
                    draggable={true}
                    onDragStart={() =>
                        dispatch(
                            setMoveFrom({
                                stackId: cardsRevealed[0]?.stackId,
                                cardId: cardsRevealed[0]?.id,
                                canBePutOn: cardsRevealed[0]?.canBePutOn,
                                canBePutOnHome: false,
                                isStack: true,
                            }),
                        )
                    }
                    onDragOver={(e) => e.preventDefault()}
                >
                    <Box display={'flex'} alignItems="center" justifyContent="center">
                        <DragIndicatorIcon />
                    </Box>
                    {cardsRevealed.map(
                        (
                            { value, cardSuit, isFaceDown, image, canBePutOn, canBePutOnHome, stackId, id }: CardType,
                            i,
                        ) => (
                            <Card
                                value={value}
                                cardSuit={cardSuit}
                                isFaceDown={isFaceDown}
                                image={image}
                                key={`${value}${cardSuit}`}
                                isDraggable={cardsRevealed.length - 1 === i ? true : false}
                                id={id}
                                stackId={stackId}
                                canBePutOn={canBePutOn}
                                canBePutOnHome={canBePutOnHome}
                                index={i}
                                smallShift={smallShift}
                                noShift={noShift}
                            />
                        ),
                    )}
                </div>
            ) : (
                cardsRevealed.map(
                    ({ value, cardSuit, isFaceDown, image, canBePutOn, canBePutOnHome, stackId, id }: CardType, i) => (
                        <Card
                            value={value}
                            cardSuit={cardSuit}
                            isFaceDown={isFaceDown}
                            image={image}
                            key={`${value}${cardSuit}`}
                            // isDraggable={cardsArray.length - 1 === i ? true : false}
                            // isDraggable={!isFaceDown}
                            isDraggable={true}
                            id={id}
                            stackId={stackId}
                            canBePutOn={canBePutOn}
                            canBePutOnHome={canBePutOnHome}
                            index={i}
                            smallShift={smallShift}
                            noShift={noShift}
                        />
                    ),
                )
            )}
        </Box>
    );
};

export default React.memo(Deck);
