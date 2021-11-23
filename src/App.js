import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/nav/nav";
import Mision from "./components/misiones/mision";
import Personajes from "./components/personajes/personajes";

function App() {

  const[misiones, setMisiones] = useState([])
  const[personajes, setPersonajes] = useState([])

  const urlMision = "http://localhost:3001/misiones";
  const urlPersonajes = "http://localhost:3001/aliados";


  const fetchMision = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((dataMision) => setMisiones(dataMision.Misiones)) 
      .catch((error) => console.log("Error: ", error));
  };

  console.log(misiones);

  const fetchPersonajes = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPersonajes(data.personaje)) 
      .catch((error) => console.log("Error: ", error));
  };

 
  useEffect(() => {
   fetchMision(urlMision);
   fetchPersonajes(urlPersonajes);
  },[]);

  return (
    <div>
      <Nav />
      <Mision misiones={misiones}/>
      <Personajes personajes={personajes}/>
    </div>
  );
}

export default App;
