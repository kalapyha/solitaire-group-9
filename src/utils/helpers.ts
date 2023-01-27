import { CardType } from '~/types';

const shuffleArray = (array: CardType[]) => {
    const arrayToShuffle = [...array];

    if (arrayToShuffle.length === 1 || !arrayToShuffle.length) return arrayToShuffle;

    for (let i = arrayToShuffle.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arrayToShuffle[i];
        arrayToShuffle[i] = arrayToShuffle[j];
        arrayToShuffle[j] = temp;
    }
    return arrayToShuffle;
};

export { shuffleArray };
