import { Link } from "react-router-dom";

function ServiciosLista({ servicios }) {
  return (
    <>
      <h2>Servicios Lista</h2>
      <ul>
        {servicios.map((servicio) => (
          <li key={servicio.id}>
            <Link to={`/servicios/${servicio.id}`}>{servicio.nombre}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ServiciosLista;
