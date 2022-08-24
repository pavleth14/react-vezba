import GlupaKockica from "./GlupaKockica";
import MnogoKockica from "./MnogoKockica";
import NizKockica from "./NizKockica";
import PametnaKockica from "./PametnaKockica";

const VezbaSaKockicama = () => {
  return (
    <div>
      <h2>Pametne kockice:</h2>
      <PametnaKockica />
      <PametnaKockica />
      <PametnaKockica />
      <PametnaKockica />
      <h2>Glupe kockice:</h2>
      <GlupaKockica broj={3} />
      <GlupaKockica broj={4} />
      <GlupaKockica broj={2} />
      <h2>Niz kockica:</h2>
      <NizKockica niz={[1, 3, 4, 6]} />
      <h2>Mnogo kockica:</h2>
      <MnogoKockica koliko={15} saBrojem={5} />
      <MnogoKockica koliko={120} saBrojem={12} />
    </div>
  )
}

export default VezbaSaKockicama;