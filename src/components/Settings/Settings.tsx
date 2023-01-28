import React from 'react';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { styled, Typography } from '@mui/material';
import Abstract from '../../assets/backs/Abstract';
import Astronaut from '../../assets/backs/Astronaut';
import Blue from '../../assets/backs/Blue';
import Red from '../../assets/backs/Red';
import { useSelector, useDispatch } from 'react-redux';
import { selectPattern, changeCardPattern } from '../../features/score/settingsSlice';

const StyledCardWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-start',
    color: theme.palette.common.white,
}));
const StyledTypography = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    color: theme.palette.common.white,
}));

const StyledRadioGroup = styled(RadioGroup)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing(2),
    color: theme.palette.common.white,
}));

const Settings = () => {
    const imagePattern = useSelector(selectPattern);
    const dispatch = useDispatch();
    return (
        <Box
            style={{
                background:
                    'radial-gradient(circle, rgba(21,107,25,1) 0%, rgba(40,122,49,1) 45%, rgba(39,110,23,1) 100%)',
                padding: 16,
                height: '100vh',
            }}
        >
            <StyledTypography variant="h5">Settings:</StyledTypography>
            <FormControl onChange={(e) => dispatch(changeCardPattern((e.target as HTMLInputElement).value))}>
                <StyledRadioGroup>
                    <StyledCardWrapper>
                        <FormControlLabel
                            value="Blue"
                            control={<Radio />}
                            label="Blue"
                            checked={imagePattern === 'Blue'}
                        />
                        <Blue />
                    </StyledCardWrapper>
                    <StyledCardWrapper>
                        <FormControlLabel
                            value="Red"
                            control={<Radio />}
                            label="Red"
                            checked={imagePattern === 'Red'}
                        />
                        <Red />
                    </StyledCardWrapper>
                    <StyledCardWrapper>
                        <FormControlLabel
                            value="Astronaut"
                            control={<Radio />}
                            label="Astronaut"
                            checked={imagePattern === 'Astronaut'}
                        />
                        <Astronaut />
                    </StyledCardWrapper>
                    <StyledCardWrapper>
                        <FormControlLabel
                            value="Abstract"
                            control={<Radio />}
                            label="Abstract"
                            checked={imagePattern === 'Abstract'}
                        />
                        <Abstract />
                    </StyledCardWrapper>
                </StyledRadioGroup>
            </FormControl>
        </Box>
    );
};

export default Settings;