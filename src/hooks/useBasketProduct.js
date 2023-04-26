import { useState } from "react";
import { deepClone } from "../utils/array/array";

export const useBasketProduct = (menu) => {
  const [basket, setBasket] = useState([]);

  const handleBasketProduct = (event, productId) => {
    event.stopPropagation();
    // we make a copy of the basket
    const basketCopy = deepClone(basket);
    // we retrieve the information of the product to add
    const productInfos = menu.find((el) => el.id === productId);
    // we check by its index if the product is not already in the basket
    const indexProduct = basket.findIndex(
      (product) => product.id === productId
    );
    // if it is new, we add it and we set the quantity to 1
    if (indexProduct === -1) {
      const newProduct = { ...productInfos, quantity: 1 };
      const basketUpdated = [newProduct, ...basketCopy];
      setBasket(basketUpdated);
    } else {
      // otherwise if it is already present in basket we increment its quantity
      basketCopy[indexProduct].quantity++;
      setBasket(basketCopy);
    }
  };

  const handleDeleteBasketProduct = (productId) => {
    const basketCopy = deepClone(basket);
    const basketUpdated = basketCopy.filter(
      (product) => product.id !== productId
    );
    setBasket(basketUpdated);
  };

  return {
    basket,
    handleBasketProduct,
    handleDeleteBasketProduct,
  };
};
