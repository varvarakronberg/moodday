import React, { useContext } from 'react';
import { SettingsContext } from '../context/SettingsContext';

const Random = () => {
    const { setColorSelection, setAngle, setSpeed } = useContext(SettingsContext);

    const goRandom = () => {
        const numColors = 3 + Math.round(Math.random() * 3);
        const colors = [...Array(numColors)].map(() => {
            return '#' + Math.floor(Math.random() * 16777215).toString(16);
        });
        setColorSelection(colors);
        // setAngle(Math.floor(Math.random() * 361));
        // setSpeed(Math.floor(Math.random() * 10) + 1);
    };

    return (
        <div style={{ padding: '16px 0 16px' }}>
            <button
                onClick={goRandom}
                style={{
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '16px',
                    cursor: 'pointer',
                    lineHeight: 1,
                    fontFamily: 'Spilled Ink',
                    fontSize: '24px',
                    background: 'white',
                    color: 'black',
                }}
            >
                RANDOM
            </button>
        </div>
    );
};

export default Random;