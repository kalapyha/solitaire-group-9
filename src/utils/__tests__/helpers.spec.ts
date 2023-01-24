import { shuffleArray } from '../helpers';

describe('shuffleArray', () => {
    test('should shuffle array', () => {
        const baseStr = 'group9test';
        const startArr = baseStr.split(''); // ['g', 'r', 'o', 'u', 'p', '9', 't', 'e', 's', 't']
        const shuffledArr = shuffleArray(startArr);
        expect(shuffledArr.join('')).not.toMatch(baseStr);
    });

    test('should return the same value if array length is 1', () => {
        const startArr = ['A'];
        const shuffledArr = shuffleArray(startArr);
        expect(shuffledArr.length).toEqual(1);
        expect(shuffledArr.join('')).toMatch(startArr[0]);
    });

    test('should return empty array', () => {
        const startArr: any[] = [];
        const shuffledArr = shuffleArray(startArr);
        expect(shuffledArr.length).toEqual(0);
    });
});
