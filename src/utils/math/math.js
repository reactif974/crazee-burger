import { findInArray } from "../array/array";

export const calculSumToPay = (basket, menu) => {
  return basket.reduce((total, basketProduct) => {
    const menuProduct = findInArray(basketProduct.id, menu);
    const currentValue = menuProduct.price * basketProduct.quantity;
    return total + currentValue;
  }, 0);
};
