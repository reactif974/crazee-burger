import { useState } from "react";
import { deepClone, findInArray, removeObjectById } from "../utils/array/array";
import { fakeBasket } from "../fakeData/fakeBasket";
import { storeLocal } from "../utils/window/storage";

export const useBasketProduct = (name) => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

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
    storeLocal(name, "basket", basketCopy);
  };

  const createNewProductInBasket = (productId, basketCopy) => {
    const newBasketProduct = { id: productId, quantity: 1 };
    const newBasket = [newBasketProduct, ...basketCopy];
    setBasket(newBasket);
    storeLocal(name, "basket", newBasket);
  };

  const handleDeleteBasketProduct = (idBasketProduct) => {
    const basketUpdated = removeObjectById(idBasketProduct, basket);
    setBasket(basketUpdated);
    storeLocal(name, "basket", basketUpdated);
  };

  return {
    basket,
    setBasket,
    handleBasketProduct,
    handleDeleteBasketProduct,
  };
};
