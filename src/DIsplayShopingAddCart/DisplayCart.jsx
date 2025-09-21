import React from 'react';
import './Display.css'

const DisplayCart = ({cart,heandalRemovedAddItems}) => {

    console.log(cart)
    return (
        <div className='card-cointner'>
            {
                cart.map(bolat =>    <div>
                    <img src={bolat.img}></img>
                    <p>{bolat.name}</p>
                    <p>${bolat.price}</p>
                    <button onClick={() => heandalRemovedAddItems(bolat.id)}>x</button>
                </div>)
            }
        </div>
    );
};

export default DisplayCart;