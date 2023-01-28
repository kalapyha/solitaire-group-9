import React from 'react';
import Grid from '@mui/material/Grid';
import HomeCard from './components/HomeCard';
import Box from '@mui/material/Box';
import Deck from '../Deck/Deck';
import { deckArray } from '../../utils/cards';
import { shuffleArray } from '../../utils/helpers';

// TODO this shouldn't be here, move to store as a chunks for each deck
const shuffledArray = shuffleArray(deckArray);

const Board = (): JSX.Element => {
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
                    alignItems="center"
                    justifyContent="flex-start"
                    alignContent="center"
                >
                    <Deck cardsArray={shuffledArray.slice(0, 24)} autoReveal={false} />
                </Grid>
                <Grid
                    item
                    xs={8}
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="flex-end"
                    alignContent="center"
                    gap={3}
                >
                    <HomeCard showHomeBorder suitImage="♥" />
                    <HomeCard showHomeBorder suitImage="♣" />
                    <HomeCard showHomeBorder suitImage="♦" />
                    <HomeCard showHomeBorder suitImage="♠" />
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
                    <Deck cardsArray={shuffledArray.slice(24, 25)} />
                    <Deck cardsArray={shuffledArray.slice(25, 27)} />
                    <Deck cardsArray={shuffledArray.slice(27, 30)} />
                    <Deck cardsArray={shuffledArray.slice(30, 34)} />
                    <Deck cardsArray={shuffledArray.slice(34, 39)} />
                    <Deck cardsArray={shuffledArray.slice(39, 45)} />
                    <Deck cardsArray={shuffledArray.slice(45, 52)} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default React.memo(Board);
