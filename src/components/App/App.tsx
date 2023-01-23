import React from 'react';
import Blue from '../../assets/backs/Blue';
import Red from '../../assets/backs/Red';
import Astronaut from '../../assets/backs/Astronaut';
import Clubs2 from '../../assets/clubs/Clubs2';

function App() {
    return (
        <div
            style={{
                // TODO: move to scss or use styled component for this
                background:
                    'radial-gradient(circle, rgba(21,107,25,1) 0%, rgba(40,122,49,1) 45%, rgba(39,110,23,1) 100%)',
            }}
        >
            <div>
                Some backs for the cards
                <br />
                <br />
                <Blue />
                <Red />
                <Astronaut />
            </div>
            <div>
                <br />
                <br />
                Some cards:
                <br />
                <br />
                <Clubs2 />
            </div>
        </div>
    );
}

export default App;
