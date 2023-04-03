import React from 'react';
import Grid from '@mui/material/Grid';
import HomeCard from './components/HomeCard';
import Box from '@mui/material/Box';
import Deck from '../Deck/Deck';
import { useSelector } from 'react-redux';
import {
    deckStack,
    deckStackFlipped,
    tableau1,
    tableau2,
    tableau3,
    tableau4,
    tableau5,
    tableau6,
    tableau7,
    homeHearts,
    homeClubs,
    homeDiamonds,
    homeSpades,
} from '../../features/tableauSlice';
import { selectedThemeMode } from '../../features/settingsSlice';

const Board = (): JSX.Element => {
    const { cards } = useSelector(deckStack);
    const flippedCards = useSelector(deckStackFlipped).cards;
    const isDarkMode = useSelector(selectedThemeMode);
    const cards1 = useSelector(tableau1);
    const cards2 = useSelector(tableau2);
    const cards3 = useSelector(tableau3);
    const cards4 = useSelector(tableau4);
    const cards5 = useSelector(tableau5);
    const cards6 = useSelector(tableau6);
    const cards7 = useSelector(tableau7);
    const home1 = useSelector(homeHearts);
    const home2 = useSelector(homeClubs);
    const home3 = useSelector(homeDiamonds);
    const home4 = useSelector(homeSpades);
    return (
        <Box
            style={{
                background: isDarkMode
                    ? 'rgba(39,110,23,0.95)'
                    : 'radial-gradient(circle, rgba(21,107,25,1) 0%, rgba(40,122,49,1) 45%, rgba(39,110,23,1) 100%)',
                padding: 0,
            }}
        >
            <Grid container spacing={2} p={3} height="100vh">
                <Grid
                    item
                    xs={2}
                    display="flex"
                    flexDirection="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    alignContent="center"
                >
                    <Deck
                        cardsArray={cards}
                        smallShift
                        styleOverride={{ marginTop: cards.length ? '30px' : '-5px' }}
                        showRedeal={true}
                    />
                </Grid>
                <Grid
                    item
                    xs={2}
                    display="flex"
                    flexDirection="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    alignContent="center"
                    mt={4}
                >
                    <Deck cardsArray={flippedCards} allowEmpty noShift />
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
                    <HomeCard showHomeBorder suitImage="♥" cardsArray={home1.cards as []} />
                    <HomeCard showHomeBorder suitImage="♣" cardsArray={home2.cards as []} />
                    <HomeCard showHomeBorder suitImage="♦" cardsArray={home3.cards as []} />
                    <HomeCard showHomeBorder suitImage="♠" cardsArray={home4.cards as []} />
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
                    <Deck cardsArray={cards1.cards} allowEmpty tableauId={1} />
                    <Deck cardsArray={cards2.cards} allowEmpty tableauId={2} />
                    <Deck cardsArray={cards3.cards} allowEmpty tableauId={3} />
                    <Deck cardsArray={cards4.cards} allowEmpty tableauId={4} />
                    <Deck cardsArray={cards5.cards} allowEmpty />
                    <Deck cardsArray={cards6.cards} allowEmpty />
                    <Deck cardsArray={cards7.cards} allowEmpty />
                </Grid>
            </Grid>
        </Box>
    );
};

export default React.memo(Board);
