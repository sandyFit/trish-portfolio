const VerticalSlidingText = ({ text }) => {
  // Convert the text into an array of single characters
  const characters = text.split('');

  return (
    <svg width="50" height={`${characters.length * 20}`} xmlns="http://www.w3.org/2000/svg" style={{overflow: 'visible'}}>
      {characters.map((char, index) => (
        <text
          key={index}
          x="0"
          y={index * 20}
          fontSize="20"
          fontFamily="Arial"
          style={{ animation: 'slideLeft 10s linear infinite' }}
        >
          {char}
        </text>
      ))}
      
      <style>
        {`
          @keyframes slideLeft {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </svg>
  );
};

export default VerticalSlidingText;
