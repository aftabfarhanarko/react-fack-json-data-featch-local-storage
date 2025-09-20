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
