export const calcTotalBasketPrice = (basket) => {
  let sum = 0;
  basket.forEach((item) => {
    if (!isNaN(item.price)) {
      sum += item.price * item.quantity;
    }
  });
  return sum;
};
