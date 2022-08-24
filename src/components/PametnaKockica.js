import React, {useState} from "react";

const PametnaKockica = () => {

  const [broj, setBroj] = useState(0);

  const brojHandler = () => {
    setBroj(prevState => prevState + 1);
  }

  return (
    <div onClick={brojHandler} className="kockica">{broj}</div>
  )
}

export default PametnaKockica;