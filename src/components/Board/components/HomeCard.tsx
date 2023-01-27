import React from 'react';
import Card from '@mui/material/Card';
import { styled } from '@mui/material';

const StyledCard = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    background: 'rgba(39,110,23,1)',
    minWidth: 250,
    minHeight: 350,
}));

type HomeCardProps = {
    showHomeBorder?: boolean;
};

const HomeCard = ({ showHomeBorder = false }: HomeCardProps) => {
    return <StyledCard style={{ border: showHomeBorder ? `5px solid rgb(253,218,13)` : 'none' }}></StyledCard>;
};

export default HomeCard;
