import React from 'react';
import './FadeIn.css'

function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
  
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      });
  
      observer.observe(domRef.current);
  
      const currentRef = domRef.current;
  
      return () => {
        observer.unobserve(currentRef);
      };
    }, []);
  
    return (
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }
  
  

export default FadeInSection;