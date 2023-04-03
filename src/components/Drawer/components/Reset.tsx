import React from 'react';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { scoreReset } from '../../../features/scoreSlice';
import { resetCards } from '../../../features/tableauSlice';
import { selectedThemeMode } from '../../../features/settingsSlice';

const Reset = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector(selectedThemeMode);

    return (
        <IconButton
            data-testid="reset-btn"
            aria-label="Reset"
            color="primary"
            onClick={() => {
                dispatch(resetCards());
                dispatch(scoreReset());
            }}
            style={isDarkMode ? { color: 'white' } : {}}
        >
            <RestartAltIcon />
        </IconButton>
    );
};

export default Reset;
