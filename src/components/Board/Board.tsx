import React from 'react';
import Grid from '@mui/material/Grid';
import HomeCard from './components/HomeCard';
import Box from '@mui/material/Box';
import Deck from '../Deck/Deck';
import { useSelector } from 'react-redux';
import {
    deckStack,
    tableau1,
    tableau2,
    tableau3,
    tableau4,
    tableau5,
    tableau6,
    tableau7,
} from '../../features/tableauSlice';

const Board = (): JSX.Element => {
    const { cards } = useSelector(deckStack);
    const cards1 = useSelector(tableau1);
    const cards2 = useSelector(tableau2);
    const cards3 = useSelector(tableau3);
    const cards4 = useSelector(tableau4);
    const cards5 = useSelector(tableau5);
    const cards6 = useSelector(tableau6);
    const cards7 = useSelector(tableau7);
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
                    <Deck cardsArray={cards} autoReveal={false} />
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
                    <Deck cardsArray={cards1.cards} />
                    <Deck cardsArray={cards2.cards} />
                    <Deck cardsArray={cards3.cards} />
                    <Deck cardsArray={cards4.cards} />
                    <Deck cardsArray={cards5.cards} />
                    <Deck cardsArray={cards6.cards} />
                    <Deck cardsArray={cards7.cards} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default React.memo(Board);
