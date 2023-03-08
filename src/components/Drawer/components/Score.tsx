import React from 'react';
import Chip from '@mui/material/Chip';
import { useSelector } from 'react-redux';
import { selectCount } from '../../../features/scoreSlice';
import { selectedRules } from '../../../features/settingsSlice';

const Score = () => {
    const count = useSelector(selectCount);
    const currentRule = useSelector(selectedRules);
    return (
        <Chip
            label={`Score: ${currentRule === 'Klondike' ? '-' : count}`}
            variant="filled"
            color="success"
            disabled={currentRule === 'Klondike'}
        />
    );
};

export default Score;
