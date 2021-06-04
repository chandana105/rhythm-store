export const priceCal = (priceDetails) => {
  const discountApplied = parseFloat(priceDetails.discount) / 100; //0.82
  const discountOnPrice = discountApplied * priceDetails.originalPrice; // 0.82 * 799
  const discountedPrice = Math.ceil(
    priceDetails.originalPrice - discountOnPrice
  ); // 799 -  (0.82 * 799)
  return discountedPrice;
};

export const totalItems = (cartItems) => {
  return cartItems.reduce((acc, current) => acc + current.quantity, 0);
};

export const totalPrice = (cartItems) => {
  return cartItems.reduce(
    (acc, current) => acc + current.quantity * priceCal(current.priceDetails),
    0
  );
};

export const totalOriginalPrice = (cartItems) => {
  return cartItems.reduce(
    (acc, current) =>
      acc + current.quantity * current.priceDetails.originalPrice,
    0
  );
};

export const totalDiscountOnOriginalPrice = (cartItems) => {
  return cartItems.reduce(
    (acc, current) =>
      acc +
      current.quantity *
        (current.priceDetails.originalPrice - current.discountedPrice),
    0
  );
};

export const finalAmountToBePaid = (cartItems) => {
  return totalOriginalPrice(cartItems) - totalDiscountOnOriginalPrice(cartItems)
}