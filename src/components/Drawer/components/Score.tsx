import React from 'react';
import Chip from '@mui/material/Chip';
import { useSelector } from 'react-redux';
import { selectCount } from '../../../features/score/scoreSlice';

const Score = () => {
    const count = useSelector(selectCount);
    return <Chip label={`Score: ${count}`} variant="outlined" />;
};

export default Score;
