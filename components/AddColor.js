import React, { useState, useContext } from 'react';
import { ChromePicker } from 'react-color';
import { SettingsContext } from '../context/SettingsContext';

const AddColor = () => {
    const [color, setColor] = useState('white');
    const { colorSelection, setColorSelection } = useContext(SettingsContext);

    return (
        <>
            <div>
                <button
                    onClick={() => {
                        setColorSelection([...colorSelection, color]);
                    }}
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
                    + Add Color
                </button>
            </div>
            <div style={{ display: 'inline-block', padding: '32px' }}>
                <ChromePicker
                    header="Pick Colors"
                    color={color}
                    onChange={(newColor) => {
                        setColor(newColor.hex);
                    }}
                />
            </div>
        </>
    );
};

export default AddColor;