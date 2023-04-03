import React from 'react';
import Chip from '@mui/material/Chip';
import { useSelector } from 'react-redux';
import { selectCount } from '../../../features/scoreSlice';
import { selectedRules, selectedThemeMode } from '../../../features/settingsSlice';

const Score = () => {
    const count = useSelector(selectCount);
    const currentRule = useSelector(selectedRules);
    const isDarkMode = useSelector(selectedThemeMode);

    return (
        <Chip
            label={`Score: ${currentRule === 'Klondike' ? '-' : count}`}
            variant={isDarkMode ? 'outlined' : 'filled'}
            color="success"
            disabled={currentRule === 'Klondike'}
            style={isDarkMode ? { backgroundColor: 'white' } : {}}
        />
    );
};

export default Score;
