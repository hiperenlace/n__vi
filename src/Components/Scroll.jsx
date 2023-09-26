import {scroller } from 'react-scroll';
    const scrollToSection = (sectionId) => {
      scroller.scrollTo(sectionId, {
        duration: 800, 
        delay: 0, 
        smooth: 'easeInOutQuart', 
      });
    };
export default scrollToSection;