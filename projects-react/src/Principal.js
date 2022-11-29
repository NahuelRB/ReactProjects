import './componentes/Testimonios/Testimonio.css';
import Testimonio from './componentes/Testimonios/Testimonio'

function Principal() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Comentarios de los jugadores</h1>
      <Testimonio/>
      </div>   
    </div>
  );
}

export default Principal;
