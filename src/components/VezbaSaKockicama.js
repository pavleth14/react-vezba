import KockicaGlupa from "./KockicaGlupa";
import KockicaNiz from "./KockicaNiz";
import KockicaPametna from "./KockicaPametna";

const VezbaSaKockicama = ()=> {
    return (
        <div>
            <KockicaPametna />
            <KockicaPametna />
            <KockicaPametna />
            <KockicaPametna />
            <KockicaPametna />
            <br />
            <KockicaGlupa />
            <KockicaGlupa broj={5} />
            <KockicaGlupa broj={7} />
            <br />
            <KockicaNiz niz={[]} />
            <KockicaNiz niz={[1, 3, 5, 7]} />
            <KockicaNiz niz={[5, 6, 7, 1, 4]} />
            
        </div>
    );
};

export default VezbaSaKockicama;