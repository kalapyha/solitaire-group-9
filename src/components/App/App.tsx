import React from 'react';
// import Blue from '../../assets/backs/Blue';
// import Red from '../../assets/backs/Red';
// import Astronaut from '../../assets/backs/Astronaut';
// import Clubs2 from '../../assets/clubs/Clubs2';
// import Clubs3 from '../../assets/clubs/Clubs3';
// import Clubs4 from '../../assets/clubs/Clubs4';
// import Clubs10 from '../../assets/clubs/Clubs10';
// import Clubs5 from '../../assets/clubs/Clubs5';
// import Clubs6 from '../../assets/clubs/Clubs6';
// import Clubs7 from '../../assets/clubs/Clubs7';
// import Clubs8 from '../../assets/clubs/Clubs8';
// import Clubs9 from '../../assets/clubs/Clubs9';
// import ClubsAce from '../../assets/clubs/ClubsAce';
// import ClubsJack from '../../assets/clubs/ClubsJack';
// import ClubsKing from '../../assets/clubs/ClubsKing';
// import ClubsQueen from '../../assets/clubs/ClubsQueen';
// import Abstract from '../../assets/backs/Abstract';
// import Diamonds10 from '../../assets/diamonds/Diamonds10';
// import Diamonds2 from '../../assets/diamonds/Diamonds2';
// import Diamonds3 from '../../assets/diamonds/Diamonds3';
// import Diamonds4 from '../../assets/diamonds/Diamonds4';
// import Diamonds5 from '../../assets/diamonds/Diamonds5';
// import Diamonds6 from '../../assets/diamonds/Diamonds6';
// import Diamonds7 from '../../assets/diamonds/Diamonds7';
// import Diamonds8 from '../../assets/diamonds/Diamonds8';
// import Diamonds9 from '../../assets/diamonds/Diamonds9';
// import DiamondsAce from '../../assets/diamonds/DiamondsAce';
// import DiamondsJack from '../../assets/diamonds/DiamondsJack';
// import DiamondsKing from '../../assets/diamonds/DiamondsKing';
// import DiamondsQueen from '../../assets/diamonds/DiamondsQueen';
// import Hearts10 from '../../assets/hearts/Hearts10';
// import Hearts2 from '../../assets/hearts/Hearts2';
// import Hearts3 from '../../assets/hearts/Hearts3';
// import Hearts4 from '../../assets/hearts/Hearts4';
// import Hearts5 from '../../assets/hearts/Hearts5';
// import Hearts6 from '../../assets/hearts/Hearts6';
// import Hearts7 from '../../assets/hearts/Hearts7';
// import Hearts8 from '../../assets/hearts/Hearts8';
// import Hearts9 from '../../assets/hearts/Hearts9';
// import HeartsAce from '../../assets/hearts/HeartsAce';
// import HeartsJack from '../../assets/hearts/HeartsJack';
// import HeartsKing from '../../assets/hearts/HeartsKing';
// import HeartsQueen from '../../assets/hearts/HeartsQueen';
// import Spades10 from '../../assets/spades/Spades10';
// import Spades2 from '../../assets/spades/Spades2';
// import Spades3 from '../../assets/spades/Spades3';
// import Spades4 from '../../assets/spades/Spades4';
// import Spades5 from '../../assets/spades/Spades5';
// import Spades6 from '../../assets/spades/Spades6';
// import Spades7 from '../../assets/spades/Spades7';
// import Spades8 from '../../assets/spades/Spades8';
// import Spades9 from '../../assets/spades/Spades9';
// import SpadesAce from '../../assets/spades/SpadesAce';
// import SpadesJack from '../../assets/spades/SpadesJack';
// import SpadesKing from '../../assets/spades/SpadesKing';
// import SpadesQueen from '../../assets/spades/SpadesQueen';
// import Deck from '../Deck/Deck';
import Board from '../Board/Board';
import Drawer from '../Drawer/Drawer';

function App() {
    return (
        <Drawer>
            <Board />
        </Drawer>
    );

    // return (
    //     <div
    //         style={{
    //             // TODO: move to scss or use styled component for this
    //             background:
    //                 'radial-gradient(circle, rgba(21,107,25,1) 0%, rgba(40,122,49,1) 45%, rgba(39,110,23,1) 100%)',
    //         }}
    //     >
    //         <div>
    //             Some backs for the cards
    //             <br />
    //             <br />
    //             <Blue />
    //             <Red />
    //             <Astronaut />
    //             <Abstract />
    //         </div>
    //         <div>
    //             <br />
    //             <br />
    //             Set for Clubs:
    //             <br />
    //             <br />
    //             <Clubs2 />
    //             <Clubs3 />
    //             <Clubs4 />
    //             <Clubs5 />
    //             <Clubs6 />
    //             <Clubs7 />
    //             <Clubs8 />
    //             <Clubs9 />
    //             <Clubs10 />
    //             <ClubsJack />
    //             <ClubsQueen />
    //             <ClubsKing />
    //             <ClubsAce />
    //         </div>
    //         <div>
    //             <br />
    //             <br />
    //             Set for Diamonds:
    //             <br />
    //             <br />
    //             <Diamonds2 />
    //             <Diamonds3 />
    //             <Diamonds4 />
    //             <Diamonds5 />
    //             <Diamonds6 />
    //             <Diamonds7 />
    //             <Diamonds8 />
    //             <Diamonds9 />
    //             <Diamonds10 />
    //             <DiamondsJack />
    //             <DiamondsQueen />
    //             <DiamondsKing />
    //             <DiamondsAce />
    //         </div>
    //         <div>
    //             <br />
    //             <br />
    //             Set for Hearts:
    //             <br />
    //             <br />
    //             <Hearts2 />
    //             <Hearts3 />
    //             <Hearts4 />
    //             <Hearts5 />
    //             <Hearts6 />
    //             <Hearts7 />
    //             <Hearts8 />
    //             <Hearts9 />
    //             <Hearts10 />
    //             <HeartsJack />
    //             <HeartsQueen />
    //             <HeartsKing />
    //             <HeartsAce />
    //         </div>
    //         <div>
    //             <br />
    //             <br />
    //             Set for Spades:
    //             <br />
    //             <br />
    //             <Spades2 />
    //             <Spades3 />
    //             <Spades4 />
    //             <Spades5 />
    //             <Spades6 />
    //             <Spades7 />
    //             <Spades8 />
    //             <Spades9 />
    //             <Spades10 />
    //             <SpadesJack />
    //             <SpadesQueen />
    //             <SpadesKing />
    //             <SpadesAce />
    //         </div>
    //         <div>
    //             <br />
    //             <br />
    //             DECK:
    //             <br />
    //             <br />
    //             <Deck />
    //         </div>
    //     </div>
    // );
}

export default App;
