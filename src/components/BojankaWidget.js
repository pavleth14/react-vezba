import { useState } from "react";
import MatrixKockica from "./MatrixKockica";

const BojankaWidget = (props) => {
  const [color, setColor] = useState(null);

  return (
    <div className="bojanka-widget">
      <h2>Bojanka widget</h2>

      <h4>Izaberi boju</h4>

      <button
        onClick={() => {
          setColor("red");
        }}
      >
        Crvena
      </button>

      <button
        onClick={() => {
          setColor("blue");
        }}
      >
        plava
      </button>

      <button
        onClick={() => {
          setColor("green");
        }}
      >
        Zelena
      </button>

      <button
        onClick={() => {
          setColor("");
        }}
      >
        Bela
      </button>

      <p>
        Odabrana boja: <b>{color}</b>
      </p>

      <h4>Klikni da obiojis kockicu</h4>
      <MatrixKockica
        kolikoKolona={5}
        kolikoRedova={10}
        saBrojem={0}
        color={color}
        tip="bojanka"
      />
    </div>
  );
};

export default BojankaWidget;
