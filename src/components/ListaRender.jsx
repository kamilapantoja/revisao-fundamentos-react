import React, { useState } from 'react'

const ListaRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias", "Maria"]);
  return (
    <div>
        {list.map((i) => (
            <li>{i}</li>
        ))}
    </div>
  )
}

export default ListaRender