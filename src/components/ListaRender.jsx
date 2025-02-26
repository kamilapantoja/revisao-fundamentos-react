import React, { useState } from "react";

const ListaRender = () => {
  const [list] = useState(["Matheus", "Pedro", "Josias", "Maria"]);
  const [users, setUsers] = useState([
    { id: 1, name: "Kamila", age: 31 },
    { id: 2, name: "Antonia", age: 32 },
    { id: 3, name: "Julia", age: 33 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4)

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    })
  }

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListaRender;
