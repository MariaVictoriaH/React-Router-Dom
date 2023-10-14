import { Outlet, Link } from "react-router-dom";

function Servicios() {
  return (
    <>
      <h1>Estas son mis sub Rutas</h1>
      <nav className="menu">
        <Link to="/servicios/homeservice">Inicio</Link>
        <Link to="/servicios/garantia">Garantia</Link>
        <Link to="/servicios">Politica</Link>
        <Link to="/servicios/lista">Lista</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Servicios;
