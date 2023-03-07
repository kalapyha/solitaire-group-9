import React from 'react';
import Chip from '@mui/material/Chip';
import { useSelector } from 'react-redux';
import { selectCount } from '../../../features/scoreSlice';

const Score = () => {
    const count = useSelector(selectCount);
    return <Chip label={`Score: ${count}`} variant="filled" color="success" />;
};

export default Score;
