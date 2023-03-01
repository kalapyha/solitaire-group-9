import React from 'react';
import Blue from '../../assets/backs/Blue';
import Red from '../../assets/backs/Red';
import Abstract from '../../assets/backs/Abstract';
import Astronaut from '../../assets/backs/Astronaut';
import { CardType } from '../../types';
import { useSelector } from 'react-redux';
import { selectPattern } from '../../features/settingsSlice';
import { useDispatch } from 'react-redux';
import { setActiveCard, activeCard, moveCardToHome, setMoveFrom } from '../../features/tableauSlice';
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
}

const Card = (props: CardProps): JSX.Element => {
    const imagePattern = useSelector(selectPattern);
    const curActiveCard = useSelector(activeCard);
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
    return props.isFaceDown ? (
        <StyledBox style={{ transform: `translateY(${props.index}0px)` }}>{renderCardBackPattern()}</StyledBox>
    ) : (
        <StyledBox
            id={`${props.stackId}-${props.id}`}
            onClick={() => dispatch(setActiveCard({ ...props, image: {} }))}
            onDoubleClick={() => dispatch(moveCardToHome(props))}
            draggable={props.isDraggable}
            // onDrag={(e) => console.log(e)} // Dispatch moveFrom
            onDrag={() =>
                dispatch(
                    setMoveFrom({
                        stackId: props.stackId,
                        cardId: props.id,
                        canBePutOn: props.canBePutOn,
                        canBePutOnHome: props.canBePutOnHome,
                    }),
                )
            } // Dispatch moveFrom
            onDragEnd={() => {
                // dispatch(setMoveFrom({}));
                // Dispatch actual move HERE
            }}
            style={{ transform: `translateY(${props.index}0px)` }}
        >
            <div>{props.image}</div>
        </StyledBox>
    );
};

export default Card;
