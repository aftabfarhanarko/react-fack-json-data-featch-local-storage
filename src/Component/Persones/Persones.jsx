import React, { use, useEffect, useState } from "react";
import Botle from "../Botle/Botle";
import "./Persones.css";
import { addCardID, findCard } from "../../StordLocal/LoaclStoreag";

const Persones = ({ personesPromise }) => {
  const promises = use(personesPromise);
  const [cart, setCart] = useState([]);

  //   UseEffect kaj bake...?
  useEffect(() => {
     const allStoredcard = findCard()
     console.log(allStoredcard);

     for (let id of allStoredcard) {
        console.log(id,promises);
        const cardFinds = promises.find(promises.id === id);
        console.log(cardFinds);
        
     }
  },[promises])

  const haldealeCarts = (personwerw) => {
    const newArray = [...cart, personwerw];
    setCart(newArray);
    addCardID(personwerw.id);
  };

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
