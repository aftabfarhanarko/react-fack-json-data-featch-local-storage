import React from "react";
import './Bolte.css';

const Botle = ({ person }) => {
  console.log(person);
  const {img , name} = person
  return (
    <div className="card">
      <img src={img}></img>
      <h3>Name : {name}</h3>
    </div>
  );
};

export default Botle;
