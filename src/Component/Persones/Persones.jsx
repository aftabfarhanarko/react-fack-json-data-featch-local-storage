import React, { use, useState } from "react";
import Botle from "../Botle/Botle";
import "./Persones.css";

const Persones = ({ personesPromise }) => {
  const promises = use(personesPromise);

  const [cart, setCart] = useState([]);
  const haldealeCarts = (personwerw) => {
    const newArray = [...cart, personwerw];
    setCart(newArray);
    localStorage.setItem("card", JSON.stringify(cart));
  };
  console.log(localStorage.getItem("card"));
  return (
    <div>
      <h1>Hello React</h1>
      <h2>Total Bottles : {promises.length ? promises.length : 0}</h2>
      <p>Total Shoping Card Add : {cart.length}</p>
      <div className="cointners">
        {promises.map((person) => (
          <Botle
            key={person.id}
            person={person}
            haldealeCarts={haldealeCarts}
          ></Botle>
        ))}
      </div>
    </div>
  );
};

export default Persones;
