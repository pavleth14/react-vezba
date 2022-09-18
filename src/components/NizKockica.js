import GlupaKockica from "./GlupaKockica";
import KockicaZaBojanku from "./KockicaZaBojanku";

const NizKockica = (props) => {
  const niz = props.niz;

  return (
    <div>
      {niz.map((n, index) => {
        if (props.tip === 'bojanka') {
          return <KockicaZaBojanku key={index} broj={n} color={props.color} />;
        } else {
          return <GlupaKockica key={index} broj={n} />;
        }
      })}
    </div>
  );
};

export default NizKockica;
