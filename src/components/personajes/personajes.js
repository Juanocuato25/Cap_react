import React, { useState } from "react";
import "./personajes.css";
import Axios from "axios";

const Personajes = ({ personajes = [] }) => {
  const url = "http://localhost:3001/personajes";
  const [data, setData] = useState({
    nombre_personaje: "",
    fk_id_tipo_personaje: 0,
    fk_id_pelicula: 0,
  });

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      nombre_personaje: data.nombre_personaje,
      fk_id_tipo_personaje: data.fk_id_tipo_personaje,
      fk_id_pelicula: data.fk_id_pelicula,
    }).then((res) => {
      console.log(res.data);
    });
    window.location.reload();
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  return (
    <div className="personajes">
      <div className="tabla-personaje">
        <h1 className="historial">Historial de Personajes</h1>
        <table className="tabla-per" border="1">
          <thead>
            <tr>
              <th>Nombre Personaje</th>
              <th>Categoria Personaje</th>
              <th>Pelicula</th>
            </tr>
          </thead>
          <tbody>
            {personajes.map((item) => {
              return (
                <tr key={item.personaje}>
                  <td>{item.Personaje}</td>
                  <td>{item.nombre_tipo_personaje}</td>
                  <td>{item.Pelicula}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="div-forms">
        <h1 className="registro">Registro de personajes</h1>
        <form className="formulario" onSubmit={(e) => submit(e)}>
          <br />
          <label>Nombre Personaje</label> <br />
          <input
            type="text"
            onChange={(e) => handle(e)}
            id="nombre_personaje"
            value={data.nombre_personaje}
            name="nombre_personaje"
            className="nombre"
          ></input>
          <br /> <br />
          <label>Elija el tipo de personaje </label> <br />
          <select
            onChange={(e) => handle(e)}
            id="fk_id_tipo_personaje"
            value={data.fk_id_tipo_personaje}
            name="fk_id_tipo_personaje"
          >
            <option value={0}></option>
            <option value={1}>Aliados</option>
            <option value={2}>Compañeros de equipo</option>
            <option value={3}>Enemigos</option>
            <option value={4}>Patrocinadores</option>
            <option value={5}>Personas Salvadas</option>
          </select>{" "}
          <br />
          <label className="label-peliculas">
            Pelicula del nuevo personaje
          </label>
          <br />
          <select
            onChange={(e) => handle(e)}
            id="fk_id_pelicula"
            value={data.fk_id_pelicula}
            name="fk_id_pelicula"
          >
            <option value={0}></option>
            <option value={1}>El primer Vengador</option>
            <option value={2}>Capitan America y el soldado de invierno</option>
            <option value={3}>Capitan America Civil War</option>
            <option value={4}>Avengers Infinity War</option>
            <option value={5}>Avengers EndGame</option>
            <option value={6}>Avengers</option>
          </select>{" "}
          <br />
          <input className="btn-submit" type="submit" value="Registrar"></input>
        </form>
      </div>
    </div>
  );
};

export default Personajes;
