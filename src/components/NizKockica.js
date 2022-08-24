import GlupaKockica from "./GlupaKockica";

const NizKockica = (props) => {

  const niz = props.niz;
  
  return (
    <div>
      {niz.map((n, index) => (
        <GlupaKockica key={index} broj={n} />
      ))}
    </div>
  )
}

export default NizKockica;