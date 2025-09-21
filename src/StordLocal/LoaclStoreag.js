const getTheLocalIiitem = () => {
  const getItem = localStorage.getItem("cart");
  if (getItem) {
    const convart = JSON.parse(getItem);
    return convart;
  }
  return [];
};

const seavedCard = cartsd => {
  const cardStringeyFey = JSON.stringify(cartsd);
  localStorage.setItem("cart", cardStringeyFey);
}

const addes = (id) => {
  const getItemas = getTheLocalIiitem();
  const newCard = [...getItemas,id];
  seavedCard(newCard);
};


export{getTheLocalIiitem as findCard ,
    addes as addCardID 
};


// const getTheCard = () => {
//   const carts = localStorage.getItem("cart");
//   if(carts){
//     const convartString = JSON.parse(carts);
//     return convartString; 
//   }
//   return [];
// }

// const setLSLocal = (carts) =>{
//   const stringifySet = JSON.stringify(carts)
//  localStorage.setItem("cart", stringifySet)
// }

// const setTheStorCart = id => {
//   const lsStord = getTheCard();
//   lsStord.push(id)
//   setLSLocal(lsStord);

// }

// export { getTheCard as lsFind , setTheStorCart as setitems}