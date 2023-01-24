import React from 'react';
import Blue from '../../assets/backs/Blue';
import Red from '../../assets/backs/Red';
import Astronaut from '../../assets/backs/Astronaut';
import Clubs2 from '../../assets/clubs/Clubs2';
import Clubs3 from '../../assets/clubs/Clubs3';
import Clubs4 from '../../assets/clubs/Clubs4';

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
                {/* TODO we can use .svg or we can convert them to jsx component, looks jsx works better... */}
                <Clubs2 />
                <Clubs3 />
                <Clubs4 />
            </div>
        </div>
    );
}

export default App;
