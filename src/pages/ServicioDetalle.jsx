import { useParams } from "react-router-dom";

function ServicioDetalle({ servicios }) {
  const { id } = useParams();

  const servicio = servicios.find((servicio) => servicio.id.toString() === id);

  return (
    <section>
      <h2> Soy el detalle del servicio</h2>
      <h3>{servicio.nombre}</h3>
      <h3>{servicio.precio}</h3>
    </section>
  );
}

export default ServicioDetalle;
