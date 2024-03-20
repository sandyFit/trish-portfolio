import React, { useState } from 'react';

const FlippingLinks = () => {
    // State to manage the text displayed on the button
    const [buttonText, setButtonText] = useState('Hover Over Me!');

    // Function to handle mouse enter event
    const handleMouseEnter = () => {
        setButtonText('Hovering!');
    };

    // Function to handle mouse leave event
    const handleMouseLeave = () => {
        setButtonText('Hover Over Me!');
    };

    return (
        <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className='flipOnHover'
            style={{
                
                fontSize: '16px',
                color: 'black',
            
                cursor: 'pointer',
                transition: 'transform 0.3s ease-in-out'
            }}
        >
        {buttonText}
        </button>
    );
}

export default FlippingLinks;
