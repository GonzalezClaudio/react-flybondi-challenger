
import {dataset as data} from '../dataset';
import {useState,useEffect} from 'react';
import "./components/App.css"

import InfoVuelo from './components/Vuelo'

import React from 'react';
import ScrollingImage from './components/ScrollingImage';






function App() {
  const [info, setInfo] = useState([])

  useEffect(() => {
    setInfo(data)
  
  }, [])  
  

  return (
    <div className='Vuelo-container'>
        <h1 className='titulo'>Bienvenido a <span>Flybondi!</span> </h1>
        <div className='subtitulo'>
            <h4>Consulte la disponibilidad de su viaje ingresando los datos solicitados.</h4>
        </div>

        
    <InfoVuelo info={info}/>
    <div>
      
      <ScrollingImage />
    </div>
    

   </div>
  )
}

export default App
