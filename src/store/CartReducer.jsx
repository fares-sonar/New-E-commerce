/* eslint-disable react-refresh/only-export-components */
export const totalPrice = (cart) => {
  return cart.reduce(
    (acc, product) => acc + product.quantity * product.price,
    0
  );
};
const CartReducer = (state, action) => {
  switch (action.type) {
    case "add":
      // eslint-disable-next-line no-case-declarations
      const existingItem = state.find((item) => item.id === action.products.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.products.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, action.products]; 
    case "remove":
      return state.filter((p) => p.id !== action.id);
    case "increase":
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    case "decrease":
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity - 1 } : item
      );
    default:
      state;
  }
};

export default CartReducer;
