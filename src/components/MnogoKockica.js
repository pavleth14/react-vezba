import NizKockica from "./NizKockica";

const MnogoKockica = (props) => {

  let niz = [];
  for (let index = 0; index < props.koliko; index++) {
    niz.push(props.saBrojem);
  }

  return (
    <div className='mnogo-kockica'>
      <NizKockica niz={niz} />
    </div>
  )
}

export default MnogoKockica;