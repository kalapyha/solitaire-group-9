import React from 'react';
import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import { styled } from '@mui/material';
// import SpadesAce from '../../assets/spades/SpadesAce';
// import SpadesJack from '../../assets/spades/SpadesJack';
// import SpadesKing from '../../assets/spades/SpadesKing';
// import SpadesQueen from '../../assets/spades/SpadesQueen';
import HomeCard from './components/HomeCard';
import { Box } from '@mui/system';

const Board = () => {
    return (
        <Box
            style={{
                background:
                    'radial-gradient(circle, rgba(21,107,25,1) 0%, rgba(40,122,49,1) 45%, rgba(39,110,23,1) 100%)',
                padding: 0,
            }}
        >
            <Grid container spacing={2} p={3} height="100vh">
                <Grid
                    item
                    xs={4}
                    display="flex"
                    flexDirection="row"
                    alignItems="flex-start"
                    justifyContent="center"
                    alignContent="center"
                >
                    <HomeCard />
                </Grid>
                <Grid
                    item
                    xs={8}
                    display="flex"
                    flexDirection="row"
                    alignItems="flex-start"
                    justifyContent="flex-end"
                    alignContent="center"
                    gap={3}
                >
                    <HomeCard showHomeBorder />
                    <HomeCard showHomeBorder />
                    <HomeCard showHomeBorder />
                    <HomeCard showHomeBorder />
                </Grid>
                <Grid
                    item
                    xs={12}
                    display="flex"
                    flexDirection="row"
                    alignItems="flex-start"
                    justifyContent="flex-end"
                    alignContent="center"
                    gap={4.5}
                >
                    <HomeCard />
                    <HomeCard />
                    <HomeCard />
                    <HomeCard />
                    <HomeCard />
                    <HomeCard />
                    <HomeCard />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Board;
