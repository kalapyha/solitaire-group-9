import React from 'react';
import Blue from '../../assets/backs/Blue';
import Red from '../../assets/backs/Red';
import Abstract from '../../assets/backs/Abstract';
import Astronaut from '../../assets/backs/Astronaut';
import { CardType } from '../../types';
import { useSelector } from 'react-redux';
import { selectPattern } from '../../features/settingsSlice';
import { useDispatch } from 'react-redux';
import { setActiveCard, activeCard, moveCardToHome } from '../../features/tableauSlice';
import { Box, styled } from '@mui/material';
import './Card.scss';

const StyledBox = styled(Box)(({}) => ({
    cursor: 'grab',
    position: 'absolute',
    bottom: 0,
    transformOrigin: 'bottom center',
    marginRight: '20px',
}));

const Card = (props: CardType): JSX.Element => {
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
        <StyledBox style={{ transform: `translateY(${props.id}0px)` }}>{renderCardBackPattern()}</StyledBox>
    ) : (
        <StyledBox
            id={`${props.stackId}-${props.id}`}
            onClick={() => dispatch(setActiveCard({ ...props, image: {} }))}
            onDoubleClick={() => dispatch(moveCardToHome(props))}
            draggable={props.isDraggable}
            onDrag={(e) => console.log(e)}
            // className="card"
            style={{ transform: `translateY(${props.id}0px)` }}

            // style={
            //     (curActiveCard as CardType).id === props.id
            //         ? { border: '2px solid yellow', marginTop: '-300px' }
            //         : props.isFaceDown
            //         ? {}
            //         : { paddingTop: '35px' }
            // }
        >
            {/* TODO, update with redux active cards state here */}
            {/* <div className={`card ${isActiveCard ? 'border' : ''}`}>{image}</div> */}
            <div>{props.image}</div>
        </StyledBox>
    );
};

export default Card;
