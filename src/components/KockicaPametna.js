import { useState } from "react";


const KockicaPametna = () => {

  const [broj, setBroj] = useState(0);

  const handleClick = (e)=> {
    setBroj(broj + 1);
  };

  return <div className="kockica" onClick={handleClick}>{broj}</div>;
};

export default KockicaPametna;
