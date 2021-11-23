import React from 'react';
import "./mision.css";

const Mision = ({ misiones = [] }) => {
  return (
    <div className="misiones">
      <h1>Misiones pendientes</h1>
      <table border="1">
        <thead>
          <tr>
            <th>N° Misión</th>
            <th>Descripción Misión</th>
            <th>Fecha Misión</th>
            <th>Coordenadas</th>
          </tr>
        </thead>
        <tbody>
          {misiones.map((item) => {
            return <tr key={item.id_mision}>
                <td>{item.id_mision}</td>
                <td>{item.descripcion_mision}</td>
                <td>{item.fecha_mision}</td>
                <td>{item.ubicacion_mision}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Mision;
