import Box from '@mui/material/Box';
import React from 'react';
import { styled } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import StarIcon from '@mui/icons-material/Star';
import CircleIcon from '@mui/icons-material/CircleOutlined';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const rulesArray: string[] = [
    'The game starts with a shuffled deck of cards dealt face-down in a specific pattern to form seven columns, called the tableau. The first column has one card, the second has two cards, and so on, until the seventh column has seven cards.',
    'The top card of each tableau column is dealt face-up. The remaining cards in the tableau are dealt face-down.',
    'The four foundation piles at the top right of the game board are empty at the start of the game.',
    'The player can only move cards that are face-up and can be moved to a foundation pile or another tableau pile.',
    'The player can only place a card on a foundation pile if it is the same suit and the next rank up from the card currently on the top of that pile. For example, a 2 of Hearts can only be placed on an Ace of Hearts.',
    'The player can only place a card on a tableau pile if it is the opposite color and the next rank down from the card currently on the top of that pile. For example, a black 10 can only be placed on a red Jack.',
    'The player can move a group of cards from one tableau pile to another if they are in sequence and of the opposite color.',
    'The player can flip over the face-down cards in the tableau to reveal them.',
    'The player wins the game when all cards have been moved to the foundation piles in order from Ace to King, by suit.',
];

const diffArray = [
    'Scoring: In Klondike, the objective is to move all the cards to the foundation piles, and the score is based on the time taken to finish the game. In Vegas, the player starts with a fixed number of points (e.g., 500), and the score is reduced for each card that is moved from the tableau to the foundation pile. The aim is to score as many points as possible before running out of cards.',
    'Redeals: In Klondike, players can only redeal the tableau cards three times, while in Vegas, there is no limit to the number of times players can redeal the tableau cards.',
    'Card movement: In Klondike, players can move one card at a time from the stockpile or the tableau, while in Vegas, players can move multiple cards from the tableau to the foundation pile at once.',
    'Winning: In Klondike, the game is won when all cards have been moved to the foundation piles in the correct order. In Vegas, the game is won when all cards have been moved to the foundation piles and the player has accumulated a high score.',
    'Overall, Vegas is a more challenging version of solitaire, as players need to strategize to accumulate a high score while avoiding running out of cards. Klondike is a classic version of the game and is generally considered to be easier to play.',
];
const StyledTypography = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    color: theme.palette.common.black,
}));

const Instructions = () => {
    return (
        <Box
            style={{
                background: '#f5f5f5',
                padding: 16,
                height: '100vh',
            }}
        >
            <StyledTypography variant="h5">Instructions:</StyledTypography>
            <StyledTypography variant="h6">
                Solitaire is a popular single player card game that has many variations. The most common version, also
                known as Klondike, is played with a standard deck of 52 cards.
            </StyledTypography>
            <StyledTypography variant="h6">
                The goal of the game is to move all of the cards from the tableau and foundation piles to the four
                foundation piles at the top right of the game board, in order from Ace to King, by suit.
            </StyledTypography>
            <Paper>
                <Box p={2}>
                    <Typography variant="h6">Here are the basic rules of Klondike solitaire:</Typography>
                    <List>
                        {rulesArray.map((rule, i) => {
                            return (
                                <ListItem key={i}>
                                    <ListItemIcon>
                                        <StarIcon color="disabled" />
                                    </ListItemIcon>
                                    <ListItemText primary={rule} />
                                </ListItem>
                            );
                        })}
                    </List>
                    <Typography variant="h6">
                        Here are some of the main differences between Vegas and Klondike rules for solitaire:
                    </Typography>
                    <List>
                        {diffArray.map((rule, i) => {
                            return (
                                <ListItem key={i}>
                                    <ListItemIcon>
                                        <CircleIcon color="disabled" />
                                    </ListItemIcon>
                                    <ListItemText primary={rule} />
                                </ListItem>
                            );
                        })}
                    </List>
                </Box>
            </Paper>
        </Box>
    );
};

export default Instructions;
