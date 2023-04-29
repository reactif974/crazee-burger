import { findInArray } from "../array/array";

export const calculSumToPay = (basket, menu) => {
  return basket.reduce((total, basketProduct) => {
    const menuProduct = findInArray(basketProduct.id, menu);
    if (isNaN(menuProduct.price)) return total;
    const currentValue = menuProduct.price * basketProduct.quantity;
    return total + currentValue;
  }, 0);
};
