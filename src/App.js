import "./App.css";
import Testimonial from "./components/Testimonial";
const data = require("./data.json");

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre Freecodecamp:</h1>
        {data.map((element, index) => {
          return (
            <Testimonial
              key={index}
              nombre={element.nombre}
              pais={element.pais}
              imagen={element.imagen}
              cargo={element.cargo}
              empresa={element.empresa}
              testimonio={element.testimonio}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
