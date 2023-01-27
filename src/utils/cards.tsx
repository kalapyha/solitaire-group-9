import React from 'react';
import { CardType } from '../types';
import ClubsAce from '../assets/clubs/ClubsAce';
import Clubs2 from '../assets/clubs/Clubs2';
import Clubs3 from '../assets/clubs/Clubs3';
import Clubs4 from '../assets/clubs/Clubs4';
import Clubs5 from '../assets/clubs/Clubs5';
import Clubs6 from '../assets/clubs/Clubs6';
import Clubs7 from '../assets/clubs/Clubs7';
import Clubs8 from '../assets/clubs/Clubs8';
import Clubs9 from '../assets/clubs/Clubs9';
import Clubs10 from '../assets/clubs/Clubs10';
import ClubsJack from '../assets/clubs/ClubsJack';
import ClubsQueen from '../assets/clubs/ClubsQueen';
import ClubsKing from '../assets/clubs/ClubsKing';
import DiamondsAce from '../assets/diamonds/DiamondsAce';
import Diamonds2 from '../assets/diamonds/Diamonds2';
import Diamonds3 from '../assets/diamonds/Diamonds3';
import Diamonds4 from '../assets/diamonds/Diamonds4';
import Diamonds5 from '../assets/diamonds/Diamonds5';
import Diamonds6 from '../assets/diamonds/Diamonds6';
import Diamonds7 from '../assets/diamonds/Diamonds7';
import Diamonds8 from '../assets/diamonds/Diamonds8';
import Diamonds9 from '../assets/diamonds/Diamonds9';
import Diamonds10 from '../assets/diamonds/Diamonds10';
import DiamondsJack from '../assets/diamonds/DiamondsJack';
import DiamondsQueen from '../assets/diamonds/DiamondsQueen';
import DiamondsKing from '../assets/diamonds/DiamondsKing';
import HeartsAce from '../assets/hearts/HeartsAce';
import Hearts2 from '../assets/hearts/Hearts2';
import Hearts3 from '../assets/hearts/Hearts3';
import Hearts4 from '../assets/hearts/Hearts4';
import Hearts5 from '../assets/hearts/Hearts5';
import Hearts6 from '../assets/hearts/Hearts6';
import Hearts7 from '../assets/hearts/Hearts7';
import Hearts8 from '../assets/hearts/Hearts8';
import Hearts9 from '../assets/hearts/Hearts9';
import Hearts10 from '../assets/hearts/Hearts10';
import HeartsJack from '../assets/hearts/HeartsJack';
import HeartsQueen from '../assets/hearts/HeartsQueen';
import HeartsKing from '../assets/hearts/HeartsKing';
import SpadesAce from '../assets/spades/SpadesAce';
import Spades2 from '../assets/spades/Spades2';
import Spades3 from '../assets/spades/Spades3';
import Spades4 from '../assets/spades/Spades4';
import Spades5 from '../assets/spades/Spades5';
import Spades6 from '../assets/spades/Spades6';
import Spades7 from '../assets/spades/Spades7';
import Spades8 from '../assets/spades/Spades8';
import Spades9 from '../assets/spades/Spades9';
import Spades10 from '../assets/spades/Spades10';
import SpadesJack from '../assets/spades/SpadesJack';
import SpadesKing from '../assets/spades/SpadesKing';
import SpadesQueen from '../assets/spades/SpadesQueen';

const deckArray: CardType[] = [
    // CLUBS ♣
    {
        value: 1,
        cardSuit: '♣',
        isFaceDown: true,
        image: <ClubsAce />,
    },
    {
        value: 2,
        cardSuit: '♣',
        isFaceDown: true,
        image: <Clubs2 />,
    },
    {
        value: 3,
        cardSuit: '♣',
        isFaceDown: true,
        image: <Clubs3 />,
    },
    {
        value: 4,
        cardSuit: '♣',
        isFaceDown: true,
        image: <Clubs4 />,
    },
    {
        value: 5,
        cardSuit: '♣',
        isFaceDown: true,
        image: <Clubs5 />,
    },
    {
        value: 6,
        cardSuit: '♣',
        isFaceDown: true,
        image: <Clubs6 />,
    },
    {
        value: 7,
        cardSuit: '♣',
        isFaceDown: true,
        image: <Clubs7 />,
    },
    {
        value: 8,
        cardSuit: '♣',
        isFaceDown: true,
        image: <Clubs8 />,
    },
    {
        value: 9,
        cardSuit: '♣',
        isFaceDown: true,
        image: <Clubs9 />,
    },
    {
        value: 10,
        cardSuit: '♣',
        isFaceDown: true,
        image: <Clubs10 />,
    },
    {
        value: 11,
        cardSuit: '♣',
        isFaceDown: true,
        image: <ClubsJack />,
    },
    {
        value: 12,
        cardSuit: '♣',
        isFaceDown: true,
        image: <ClubsQueen />,
    },
    {
        value: 13,
        cardSuit: '♣',
        isFaceDown: true,
        image: <ClubsKing />,
    },
    // DIAMONDS ♦
    {
        value: 1,
        cardSuit: '♦',
        isFaceDown: true,
        image: <DiamondsAce />,
    },
    {
        value: 2,
        cardSuit: '♦',
        isFaceDown: true,
        image: <Diamonds2 />,
    },
    {
        value: 3,
        cardSuit: '♦',
        isFaceDown: true,
        image: <Diamonds3 />,
    },
    {
        value: 4,
        cardSuit: '♦',
        isFaceDown: true,
        image: <Diamonds4 />,
    },
    {
        value: 5,
        cardSuit: '♦',
        isFaceDown: true,
        image: <Diamonds5 />,
    },
    {
        value: 6,
        cardSuit: '♦',
        isFaceDown: true,
        image: <Diamonds6 />,
    },
    {
        value: 7,
        cardSuit: '♦',
        isFaceDown: true,
        image: <Diamonds7 />,
    },
    {
        value: 8,
        cardSuit: '♦',
        isFaceDown: true,
        image: <Diamonds8 />,
    },
    {
        value: 9,
        cardSuit: '♦',
        isFaceDown: true,
        image: <Diamonds9 />,
    },
    {
        value: 10,
        cardSuit: '♦',
        isFaceDown: true,
        image: <Diamonds10 />,
    },
    {
        value: 11,
        cardSuit: '♦',
        isFaceDown: true,
        image: <DiamondsJack />,
    },
    {
        value: 12,
        cardSuit: '♦',
        isFaceDown: true,
        image: <DiamondsQueen />,
    },
    {
        value: 13,
        cardSuit: '♦',
        isFaceDown: true,
        image: <DiamondsKing />,
    },
    // HEARTS ♥
    {
        value: 1,
        cardSuit: '♥',
        isFaceDown: true,
        image: <HeartsAce />,
    },
    {
        value: 2,
        cardSuit: '♥',
        isFaceDown: true,
        image: <Hearts2 />,
    },
    {
        value: 3,
        cardSuit: '♥',
        isFaceDown: true,
        image: <Hearts3 />,
    },
    {
        value: 4,
        cardSuit: '♥',
        isFaceDown: true,
        image: <Hearts4 />,
    },
    {
        value: 5,
        cardSuit: '♥',
        isFaceDown: true,
        image: <Hearts5 />,
    },
    {
        value: 6,
        cardSuit: '♥',
        isFaceDown: true,
        image: <Hearts6 />,
    },
    {
        value: 7,
        cardSuit: '♥',
        isFaceDown: true,
        image: <Hearts7 />,
    },
    {
        value: 8,
        cardSuit: '♥',
        isFaceDown: true,
        image: <Hearts8 />,
    },
    {
        value: 9,
        cardSuit: '♥',
        isFaceDown: true,
        image: <Hearts9 />,
    },
    {
        value: 10,
        cardSuit: '♥',
        isFaceDown: true,
        image: <Hearts10 />,
    },
    {
        value: 11,
        cardSuit: '♥',
        isFaceDown: true,
        image: <HeartsJack />,
    },
    {
        value: 12,
        cardSuit: '♥',
        isFaceDown: true,
        image: <HeartsQueen />,
    },
    {
        value: 13,
        cardSuit: '♥',
        isFaceDown: true,
        image: <HeartsKing />,
    },
    // SPADES ♠
    {
        value: 1,
        cardSuit: '♠',
        isFaceDown: true,
        image: <SpadesAce />,
    },
    {
        value: 2,
        cardSuit: '♠',
        isFaceDown: true,
        image: <Spades2 />,
    },
    {
        value: 3,
        cardSuit: '♠',
        isFaceDown: true,
        image: <Spades3 />,
    },
    {
        value: 4,
        cardSuit: '♠',
        isFaceDown: true,
        image: <Spades4 />,
    },
    {
        value: 5,
        cardSuit: '♠',
        isFaceDown: true,
        image: <Spades5 />,
    },
    {
        value: 6,
        cardSuit: '♠',
        isFaceDown: true,
        image: <Spades6 />,
    },
    {
        value: 7,
        cardSuit: '♠',
        isFaceDown: true,
        image: <Spades7 />,
    },
    {
        value: 8,
        cardSuit: '♠',
        isFaceDown: true,
        image: <Spades8 />,
    },
    {
        value: 9,
        cardSuit: '♠',
        isFaceDown: true,
        image: <Spades9 />,
    },
    {
        value: 10,
        cardSuit: '♠',
        isFaceDown: true,
        image: <Spades10 />,
    },
    {
        value: 11,
        cardSuit: '♠',
        isFaceDown: true,
        image: <SpadesJack />,
    },
    {
        value: 12,
        cardSuit: '♠',
        isFaceDown: true,
        image: <SpadesQueen />,
    },
    {
        value: 13,
        cardSuit: '♠',
        isFaceDown: true,
        image: <SpadesKing />,
    },
];

export { deckArray };
