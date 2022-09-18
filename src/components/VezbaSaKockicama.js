import BojankaWidget from "./BojankaWidget";
import GlupaKockica from "./GlupaKockica";
import MatrixKockica from "./MatrixKockica";
import MnogoKockica from "./MnogoKockica";
import NizKockica from "./NizKockica";
import PametnaKockica from "./PametnaKockica";

const VezbaSaKockicama = () => {
  return (
    <div>
      <BojankaWidget />      
      <h2>Matrix kockica</h2>
      <MatrixKockica kolikoKolona={5} kolikoRedova={3} saBrojem={15} />
      <MatrixKockica kolikoKolona={2} kolikoRedova={2} saBrojem={2} />
      <MatrixKockica kolikoKolona={3} kolikoRedova={3} saBrojem={3} />
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