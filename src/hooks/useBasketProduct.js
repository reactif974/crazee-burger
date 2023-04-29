import { useState } from "react";
import { deepClone, findInArray, removeObjectById } from "../utils/array/array";

export const useBasketProduct = () => {
  const [basket, setBasket] = useState([]);

  const handleBasketProduct = (productId) => {
    const basketCopy = deepClone(basket);
    const basketProductAllreadyInBasket = findInArray(productId, basketCopy);

    if (basketProductAllreadyInBasket) {
      incrementeProductAllReadyInBasket(productId, basketCopy);
      return;
    }

    createNewProductInBasket(productId, basketCopy);
  };

  const incrementeProductAllReadyInBasket = (productId, basketCopy) => {
    const indexProductAllreadyInBasket = basketCopy.findIndex(
      (product) => product.id === productId
    );
    basketCopy[indexProductAllreadyInBasket].quantity++;
    setBasket(basketCopy);
  };

  const createNewProductInBasket = (productId, basketCopy) => {
    const newBasketProduct = { id: productId, quantity: 1 };
    const newBasket = [newBasketProduct, ...basketCopy];
    setBasket(newBasket);
  };

  const handleDeleteBasketProduct = (idBasketProduct) => {
    const basketUpdated = removeObjectById(idBasketProduct, basket);
    setBasket(basketUpdated);
  };

  return {
    basket,
    handleBasketProduct,
    handleDeleteBasketProduct,
  };
};
