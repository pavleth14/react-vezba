import MnogoKockica from "./MnogoKockica";

const MatrixKockica = (props) => {
  let nizRedova = [];
  for (let i = 0; i < props.kolikoRedova; i++) {
    nizRedova.push(
      <MnogoKockica
        key={i}
        koliko={props.kolikoKolona}
        saBrojem={props.saBrojem}
        tip={props.tip}
        color={props.color}
      />
    );
  }

  return <div className="matrix-kockica">{nizRedova}</div>;
};

export default MatrixKockica;
