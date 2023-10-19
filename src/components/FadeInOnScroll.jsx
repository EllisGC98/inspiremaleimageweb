import React, { useEffect, useRef, useState } from 'react';
import '../App.css'; 


const FadeInOnScroll = ({ children }) => {
  const componentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const onScroll = () => {
      if (componentRef.current) {
        const elementTop = componentRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight * 0.75) {
          setIsVisible(true);
        
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // Trigger it once to check the initial state


      return () => {
      window.removeEventListener('scroll', onScroll);
      setIsVisible(false);
    };
  }, []);

  return (
    <div
      ref={componentRef}
      className={`fade-in ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;
