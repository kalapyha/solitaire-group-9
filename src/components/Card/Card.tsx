import React from 'react';
import Blue from '../../assets/backs/Blue';
import Red from '../../assets/backs/Red';
import Abstract from '../../assets/backs/Abstract';
import Astronaut from '../../assets/backs/Astronaut';
import { CardType } from '../../types';
import { useSelector } from 'react-redux';
import { selectPattern } from '../../features/settingsSlice';
import { useDispatch } from 'react-redux';
import { moveCardToHome, setMoveFrom, makeMove, moveToFlipped } from '../../features/tableauSlice';
import { Box, styled } from '@mui/material';
import './Card.scss';

const StyledBox = styled(Box)(({}) => ({
    cursor: 'grab',
    position: 'absolute',
    bottom: 0,
    transformOrigin: 'bottom center',
    marginRight: '20px',
}));

interface CardProps extends CardType {
    index?: number | string;
    isPlaceholder?: boolean;
    smallShift?: boolean;
}

const Card = (props: CardProps): JSX.Element => {
    const imagePattern = useSelector(selectPattern);
    const dispatch = useDispatch();
    const renderCardBackPattern = () => {
        switch (imagePattern) {
            case 'Blue':
                return <Blue />;
            case 'Red':
                return <Red />;
            case 'Abstract':
                return <Abstract />;
            case 'Astronaut':
                return <Astronaut />;

            default:
                return <Blue />;
        }
    };

    if (props.isPlaceholder) {
        return (
            <StyledBox
                onDragOver={(e) => e.preventDefault()} // need to be here
                onDrop={(e) => {
                    e.preventDefault();
                    dispatch(makeMove());
                }}
                style={{ width: '100%', height: '100%', margin: 0 }}
            ></StyledBox>
        );
    }
    return props.isFaceDown ? (
        <StyledBox
            onClick={() => {
                if (props.stackId === 8) {
                    dispatch(moveToFlipped());
                }
            }}
            style={{ transform: props.smallShift ? `translateY(${props.index}px)` : `translateY(${props.index}0px)` }}
        >
            {renderCardBackPattern()}
        </StyledBox>
    ) : (
        <StyledBox
            id={`${props.stackId}-${props.id}`}
            onDoubleClick={() =>
                dispatch(
                    moveCardToHome({
                        cardSuit: props.cardSuit,
                        value: props.value,
                        stackId: props.stackId,
                        cardId: props.id,
                        canBePutOnHome: props.canBePutOnHome,
                    }),
                )
            }
            draggable={props.isDraggable}
            onDragStart={() =>
                dispatch(
                    setMoveFrom({
                        stackId: props.stackId,
                        cardId: props.id,
                        canBePutOn: props.canBePutOn,
                        canBePutOnHome: props.canBePutOnHome,
                    }),
                )
            }
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
                e.preventDefault();
                dispatch(makeMove());
            }}
            style={{
                transform: `translateY(${Number(props.index)}em)`,
            }}
        >
            <div>{props.image}</div>
        </StyledBox>
    );
};

export default Card;
