import React from 'react';
import './App.css'; // Importa el archivo de estilos CSS



const ScrollingImage = () => {
  return (
    <div className="scrolling-image-container">
      <img src="https://i.postimg.cc/TfwNftWm/puente-del-inca.png" alt="Puente el Inca" className="scrolling-image" />
      <img src="https://i.postimg.cc/YMSTnrr1/cataratas-iguazu.png" alt="Cataratas del Iguazu" className="scrolling-image" />
      <img src="https://i.postimg.cc/6wcDf2XW/las-grutas.png" alt="Las Grutas" className="scrolling-image" />
      
    </div>
  );
};

export default ScrollingImage;

