import React from 'react';
import Card from '@mui/material/Card';
import { styled, Typography } from '@mui/material';

const StyledCard = styled(Card)(({ theme }) => ({
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
};

const HomeCard = ({ showHomeBorder = false, suitImage = '' }: HomeCardProps) => {
    return (
        <StyledCard style={{ border: showHomeBorder ? `5px solid rgb(253,218,13)` : 'none' }}>
            {suitImage && <StyledTypography variant="h1">{suitImage}</StyledTypography>}
        </StyledCard>
    );
};

export default HomeCard;
