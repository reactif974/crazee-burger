import { findInArray } from "../array/array";
import { convertStringToBoolean } from "../string/string";

export const calculSumToPay = (basket, menu) => {
  return basket.reduce((total, basketProduct) => {
    const menuProduct = findInArray(basketProduct.id, menu);
    const currentValue = menuProduct.price * basketProduct.quantity;
    if (convertStringToBoolean(menuProduct.isAvailable) === false) return total;
    return total + currentValue;
  }, 0);
};
