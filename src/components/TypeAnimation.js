import React, { useEffect, useState } from 'react';

const TypeAnimation = ({textToType}) => {
  
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingInterval = 30; // Adjust the typing speed (milliseconds)
    
    if (currentIndex < textToType.length) {
      setTimeout(() => {
        setTypedText(textToType.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, typingInterval);
    }
  }, [currentIndex, textToType]);

  return (
    <>
        
      {typedText}  
    </>
  );
};

export default TypeAnimation;
