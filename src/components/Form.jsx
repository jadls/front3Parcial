import { useState } from "react";
import Card from "./Card";

const Form = () => {
  const [info, setInfo] = useState({
    mascota: "",
    nombre: "",
  });
  const [showCard, setShowCard] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    function trimStart(str) {
      return str.replace(/^\s+/, "");
    }
    if (
      info.mascota.trim().length >= 3 && trimStart(info.mascota) === info.mascota &&
      info.nombre.trim().length >= 6
    ) {
      setShowCard(true);
      setError(false);
    } else {
      setError(true);
      setShowCard(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="mascota preferida"
            value={info.mascota}
            onChange={(e) => setInfo({ ...info, mascota: e.target.value })}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Ingresa   tu nombre"
            value={info.nombre}
            onChange={(e) => setInfo({ ...info, nombre: e.target.value })}
          />
        </div>
        <button>Enviar</button>
      </form>
      {showCard && <Card info={info} />}
      {error && (
        <p style={{ color: "red" }}>
          Por favor chequea que la información sea correcta
        </p>
      )}
    </div>
  );
};

export default Form;
