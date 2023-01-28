export interface CardType {
    value: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
    cardSuit: '♣' | '♦' | '♥' | '♠';
    isFaceDown: boolean;
    isDraggable?: boolean;
    image: JSX.Element;
}
