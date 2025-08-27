import React, { useRef, useEffect, useState } from 'react';
import './stylee.css';

function Trustedcompany()  {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [animationStyle, setAnimationStyle] = useState({});

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (!container || !content) return;

    const containerWidth = container.offsetWidth;
    const contentWidth = content.scrollWidth;


    if (contentWidth > containerWidth) {
      const distance = containerWidth - contentWidth; 
      const speed = 100;
      const duration = Math.abs(distance) / speed;

      setAnimationStyle({
        animation: `moveLeftRight ${duration}s linear infinite alternate`,
        '--move-distance': `${distance}px`,
      });
    }
  }, []);

  return (
    <div className="img-trusted-comp" ref={containerRef}>
               <div className="sec4_Trusted-comp">
          <h2>Trusted Company Arround The World!</h2>
        </div>
        <div
        className="scroll"
        ref={contentRef}
        style={animationStyle}
      >

        <img src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/1.png" alt="logo1" />
        <img src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/2.png" alt="logo2" />
        <img src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/3.png" alt="logo3" />
        <img src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/4.png" alt="logo4" />
        <img src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/5.png" alt="logo5" />
         <img src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/4.png" alt="logo4" />
         <img src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/1.png" alt="logo1" />
         <img src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/3.png" alt="logo3" />

      </div>
    </div>
  );
};

export default Trustedcompany;
