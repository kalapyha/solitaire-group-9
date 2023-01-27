import { useState } from 'react';
import { shuffleArray } from '../utils/helpers';
import { CardType } from '../types';

export default function useShuffle(initialArray: CardType[]) {
    const [shuffledArray, setShuffledArray] = useState<CardType[]>(initialArray);

    function shuffle() {
        setShuffledArray([...shuffleArray(initialArray)]);
    }

    return [shuffledArray, shuffle];
}
