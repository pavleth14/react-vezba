import { useState } from "react";

const KockicaZaBojanku = (props) => {
  const primljenaBoja = props.color;

  const [color, setColor] = useState('');

  const handleClick = ()=>{
    setColor(primljenaBoja);
  };

  return (
    <div className={'kockica-za-bojanku ' + color} onClick={handleClick}></div>
  )
}

export default KockicaZaBojanku;