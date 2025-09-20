import React from "react";
import "./Bolte.css";

const Botle = ({ person, haldealeCarts }) => {
  const { img, name, price, seller, stock } = person;
  return (
    <div className="card setImgs">
      <img src={img} alt={name}></img>
      <p>Name : {name}</p>
      <p>Price : ${price}</p>
      <p>Seller : {seller}</p>
      <p>In Skock : {stock} remining</p>
      <button onClick={() => haldealeCarts(person)}>Buy Now</button>
    </div>
  );
};

export default Botle;
