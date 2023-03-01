import React from 'react';
import { Box, Card as MUICard } from '@mui/material';
import Card from '../../Card/Card';
import Stack from '@mui/material/Stack';
import { styled, Typography } from '@mui/material';

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
    return cardsArray?.length ? (
        <Box style={{ position: 'relative', width: '200px', height: '300px', marginRight: 30 }}>
            {/* TODO Stack is causing some issues with dnd, need to be updated */}
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
