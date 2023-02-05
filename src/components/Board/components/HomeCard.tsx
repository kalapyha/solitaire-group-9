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
        <Box>
            {/* TODO Stack is causing some issues with dnd, need to be updated */}
            <Stack>
                {cardsArray.map(({ value, cardSuit, isFaceDown, image, id, canBePutOn, canBePutOnHome, stackId }) => (
                    <Card
                        value={value}
                        cardSuit={cardSuit}
                        isFaceDown={isFaceDown}
                        image={image}
                        key={`${value}${cardSuit}`}
                        id={id}
                        stackId={stackId}
                        canBePutOn={canBePutOn}
                        canBePutOnHome={canBePutOnHome}
                    />
                ))}
            </Stack>
        </Box>
    ) : (
        <StyledCard style={{ border: showHomeBorder ? `5px solid rgb(253,218,13)` : 'none' }}>
            {suitImage && <StyledTypography variant="h1">{suitImage}</StyledTypography>}
        </StyledCard>
    );
};

export default HomeCard;
