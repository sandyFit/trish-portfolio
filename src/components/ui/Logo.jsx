import React from "react";


// React component for circular and correctly oriented text
const Logo = ({ text }) => {
    return (
        <svg viewBox="0 0 220 240" width="900" height="900" xmlns="http://www.w3.org/2000/svg">
            
            {/* Group element to apply the rotation */}
            <g>
                {/* Define the circle path in a clockwise direction */}
                <path id="circlePath" fill="none" stroke="none"
                        d="M110,60 A50,50 0 1,1 109,60" />

                {/* Apply the text to the path with increased letter spacing */}
                <text fontSize="10" fontWeight='500' fontFamily="IBM Plex Mono" style={{ letterSpacing: '2.7px', zIndex: '2'}}>
                    <textPath xlinkHref="#circlePath" startOffset="50%" textAnchor="middle" dominantBaseline="hanging">
                    {text}
                    </textPath>
                </text>
                
                {/* Animation to rotate the <g> element */}
                <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="rotate"
                    from="0 110 110"  // Rotation from 0 degrees
                    to="360 110 110"  // Rotation to 360 degrees
                    dur="15s"
                    repeatCount="indefinite"/>
            </g>

            {/* Custom emoji image positioned at the center */}
            <image href="/happy-face.png" x="75" y="75" height="70" width="70"/>
                
            
            {/* Example to add more text on the inverted path */}
            {/* <text fontSize="12" style={{ letterSpacing: '2px' }}>
                <textPath xlinkHref="#circlePathInverted" startOffset="50%" textAnchor="middle" dominantBaseline="baseline">
                {text} (inverted)
                </textPath>
            </text> */}
        </svg>
  );
};

export default Logo;
