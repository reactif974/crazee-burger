import { useState } from "react";
import { deepClone } from "../utils/array/array";
import { calcTotalBasketPrice } from "../utils/number/math";

export const useBasketProduct = (menu) => {
  const [basket, setBasket] = useState([]);
  const [totalBasketPrice, setTotalBasketPrice] = useState(0);

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

      // calculation of the total amount of the basket
      const amountTotalOfBasket = calcTotalBasketPrice(basketUpdated);
      setTotalBasketPrice(amountTotalOfBasket);
    } else {
      // otherwise if it is already present in basket we increment its quantity
      basketCopy[indexProduct].quantity++;

      setBasket(basketCopy);

      // calculation of the total amount of the basket
      const amountTotalOfBasket = calcTotalBasketPrice(basketCopy);
      setTotalBasketPrice(amountTotalOfBasket);
    }
  };

  const handleDeleteBasketProduct = (productId) => {
    const basketCopy = deepClone(basket);
    const basketUpdated = basketCopy.filter(
      (product) => product.id !== productId
    );
    const amountTotalOfBasket = calcTotalBasketPrice(basketUpdated);
    setBasket(basketUpdated);
    setTotalBasketPrice(amountTotalOfBasket);
  };

  return {
    basket,
    handleBasketProduct,
    handleDeleteBasketProduct,
    totalBasketPrice,
    setTotalBasketPrice,
  };
};
