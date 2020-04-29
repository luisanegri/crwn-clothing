// cartItems are the items already in the cart array
// cartItemToAdd is the item to be added
export const addItemToCart = (cartItems, cartItemToAdd) => {
  // .find() returns the first item found in the array
  // based off a condition that is passed through
  // scans through each cartItem and checks if the id is the same
  // as the cartItem being added.
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    // returns new version of the state with map()
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? // create a new object with the cartItem and add the quantity to it
          { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // if the cartItem is not found inside the array
  // returns a new array with all cartItems
  // and add a new object and a base quantity of 1
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
