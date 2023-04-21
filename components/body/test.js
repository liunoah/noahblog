import React, { useEffect } from 'react';

function ScrollDetector() {
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollThreshold = Math.floor((2 / 3) * (pageHeight - windowHeight));

    if (scrollPosition >= scrollThreshold) {
      console.log('You have scrolled 2/3 of the page');
    }

    if (scrollPosition >= pageHeight - windowHeight) {
      console.log('You have reached the bottom of the page');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div>Scroll Detector</div>;
}

export default ScrollDetector;
