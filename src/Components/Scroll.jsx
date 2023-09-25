import React from 'react';
import { Link, Element, scroller } from 'react-scroll';
    const scrollToSection = (sectionId) => {
      scroller.scrollTo(sectionId, {
        duration: 800, // Duración de la animación en milisegundos
        delay: 0, // Retardo antes de iniciar la animación
        smooth: 'easeInOutQuart', // Función de animación de "ease"
      });
    };
export default scrollToSection;