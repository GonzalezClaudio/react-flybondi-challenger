import { useState } from "react";
import "./App.css";

function InfoVuelo({ info }) {
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [pasajero, setPasajero] = useState("");
  const [salida, setSalida] = useState("");
  const [mostrarResumen, setMostrarResumen] = useState(false);

  const clickSalida = (e) => {
    setSalida(e.target.value);
    setMostrarResumen(true); 
  };

  const selecOrigen = (e) => {
    setOrigen(e.target.value);
  };

  const selecDestino = (e) => {
    setDestino(e.target.value);
  };

  const selecPasajero = (e) => {
    setPasajero(e.target.value);
  };

  return (
    <div>
      {!mostrarResumen ? (
        // Renderizar selección y botón de fecha
        <div>
          <div className="opciones">
            <div className="opcion">
              <label className="label-select" htmlFor="origen">Origen:</label>
              <div>
                <select className="select-color" name="origen" id="origen" onChange={selecOrigen}>
                  <option value="">Ciudad o aeropuerto </option>
                  <option value="COR">Cordoba </option>
                  <option value="BRC">Bariloche </option>
                  <option value="EPA">El Palomar </option>
                  <option value="MDZ">Mendoza </option>
                </select>
              </div>  
            </div>
            <div className="opcion">
              <label className="label-select" htmlFor="destino">Destino:</label>
              <div>
                <select className="select-color" name="destino" id="destino" onChange={selecDestino}>
                  <option value="">Ciudad o aeropuerto </option>
                  <option value="COR">Cordoba </option>
                  <option value="BRC">Bariloche </option>
                  <option value="EPA">El Palomar </option>
                  <option value="MDZ">Mendoza </option>
                </select>
              </div>
            </div>  
            <div className="opcion">
              <label className="label-select" htmlFor="pasajero">Pasajeros:</label>
              <div>
                <select className="select-color" name="pasajero" id="pasajero" onChange={selecPasajero}>
                  <option value="">CANTIDAD DE PASAJEROS</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                </select>
              </div>
            </div>
          </div>

          {info.map((item, i) => {
            if (
              item.origin === origen &&
              item.destination === destino &&
              item.availability == pasajero
            )
              return (
                <div key={i}>
                  <h5>Indique la fecha que desee viajar.</h5>
                  <button className="round-button" value={item.data} onClick={clickSalida}>
                    Fecha: {item.data}
                  </button>
                  <h2>Precio: ${item.price}</h2>
                </div>
              );
          })}
        </div>
      ) : (
        // Renderizar resumen en otra pantalla después de seleccionar la fecha
        <div className="info-container">
          
          <h2> Usted ha seleccionado:</h2>
          <h3> Origen: {origen}</h3>
          <h3>Destino: {destino}</h3>
          <h3>Fecha del vuelo: {salida} </h3>

          
        </div>
      )}
    </div>
  );
}

export default InfoVuelo;



