export const totalItems = (cartItems) => {
    return cartItems.reduce((acc, current) => acc + current.quantity, 0);
  };

export const totalPrice = (cartItems) => {
    return cartItems.reduce(
      (acc, current) => acc + current.quantity * current.priceDetails.discountedPrice,
      0
    );
  };