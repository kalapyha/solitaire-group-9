import React from 'react';
import { CardType } from '../../types';
import Card from '../Card/Card';
import { styled, Card as MUICard, Box, IconButton } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectRedeals } from '../../features/scoreSlice';
import { setMoveTo, redealCards } from '../../features/tableauSlice';
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
};

const Deck = ({
    cardsArray,
    allowEmpty = false,
    tableauId,
    smallShift,
    styleOverride,
    showRedeal = false,
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
