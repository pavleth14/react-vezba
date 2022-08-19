import KockicaGlupa from "./KockicaGlupa";

const KockicaNiz = (props) => {
  const niz = props.niz;

  return <div className="kockica-niz">

    {
      niz.map((b)=>{
        return (
          <KockicaGlupa key={b} broj={b} />
        )
      })
    }

  </div>;
};

export default KockicaNiz;
