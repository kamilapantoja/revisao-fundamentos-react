import React, { useState } from "react";

const CondicionalRender = () => {
  const [x] = useState(true);

  const [name, setName] = useState("Kamila");

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim</p>}
      {name === "João" ? <div>Nome é joão</div> : <div>Nome não é João</div>}
      <button onClick={() => setName("João")}>Muda estado do nome</button>
    </div>
  );
};

export default CondicionalRender;
