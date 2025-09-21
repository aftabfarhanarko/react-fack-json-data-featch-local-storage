import React, { use, useEffect, useState } from "react";
import Botle from "../Botle/Botle";
import "./Persones.css";
import { addCardID, findCard, removedLS } from "../../StordLocal/LoaclStoreag";
import DisplayCart from "../../DIsplayShopingAddCart/DisplayCart";

const Persones = ({ personesPromise }) => {
  const promises = use(personesPromise);
  const [cart, setCart] = useState([]);

  // UseEffect FInd Out Side Value
  useEffect(() => {
    const findtheStoredValue = findCard();
    const mtArrays = [];

    for (const id of findtheStoredValue) {
      const cartBottle = promises.find((botal) => botal.id === id);
      if (cartBottle) {
        mtArrays.push(cartBottle);
      }
    }
    setCart(mtArrays);
  }, [promises]);

  const haldealeCarts = (personwerw) => {
    const newArray = [...cart, personwerw];
    setCart(newArray);
    // Saved The Bottle id In The Local Storages
    addCardID(personwerw.id);
  };

  const heandalRemovedAddItems = (clears) => {
    console.log("FInd The Buttons ", clears);
    const filteres = cart.filter((bottle) => bottle.id !== clears);
    setCart(filteres);
    removedLS(clears);
  };
  return (
    <div>
      <h1>Hello React</h1>
      <h2>Total Bottles : {promises.length ? promises.length : 0}</h2>
      <p>Total Shoping Card Add : {cart.length}</p>
      <DisplayCart
        cart={cart}
        heandalRemovedAddItems={heandalRemovedAddItems}
      ></DisplayCart>
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

//  Pricktise Codes
// useEffect(() => {
//   const lsStored = findCard();
//   const displayCart = [];
//   for (const id of lsStored) {
//      const findItems = promises.find(item => item.id === id);
//      if(findItems){
//        displayCart.push(findItems);
//      }
//   }

//   setCart(displayCart);
// } , [promises])
