import React from 'react';
import { Box, Card as MUICard } from '@mui/material';
import Card from '../../Card/Card';
import { styled, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setMoveTo } from '../../../features/tableauSlice';

const StyledCard = styled(MUICard)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    background: 'rgba(39,110,23,1)',
    minWidth: 250,
    minHeight: 350,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledTypography = styled(Typography)(() => ({
    color: 'rgba(0, 0, 0, 0.10)',
}));

type HomeCardProps = {
    showHomeBorder?: boolean;
    suitImage?: '♣' | '♦' | '♥' | '♠' | '';
    cardsArray: [];
};

const HomeCard = ({ showHomeBorder = false, suitImage = '', cardsArray }: HomeCardProps) => {
    // @ts-ignore
    const dispatch = useDispatch();
    const lastCard = cardsArray[cardsArray.length - 1];

    return cardsArray?.length ? (
        <Box
            style={{ position: 'relative', width: '250px', height: '300px', marginTop: 45, paddingLeft: '10px' }}
            onDragOver={() =>
                dispatch(
                    setMoveTo({
                        // @ts-ignore
                        stackId: lastCard.stackId,
                        // @ts-ignore
                        cardId: lastCard.id,
                        // @ts-ignore
                        canBePutOn: lastCard.canBePutOn,
                        // @ts-ignore
                        canBePutOnHome: lastCard.canBePutOnHome,
                    }),
                )
            }
        >
            {cardsArray.map(({ value, cardSuit, isFaceDown, image, canBePutOn, canBePutOnHome, stackId }, i) => (
                <Card
                    value={value}
                    cardSuit={cardSuit}
                    isFaceDown={isFaceDown}
                    image={image}
                    key={`${value}${cardSuit}`}
                    id={String(i)}
                    stackId={stackId}
                    canBePutOn={canBePutOn}
                    canBePutOnHome={canBePutOnHome}
                />
            ))}
        </Box>
    ) : (
        <StyledCard style={{ border: showHomeBorder ? `5px solid rgb(253,218,13)` : 'none' }}>
            {suitImage && <StyledTypography variant="h1">{suitImage}</StyledTypography>}
        </StyledCard>
    );
};

export default HomeCard;
