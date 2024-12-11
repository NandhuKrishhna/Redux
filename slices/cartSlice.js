import { produce } from "immer";

// Action Types
export const CART_ADD_ITEM = "cart/addItem";
const CART_REMOVE_ITEM = "cart/removeItem";
const CART_ITEM_INCREASE_QUANTITY = "cart/increaseItemQuantity";
const CART_ITEM_DECREASE_QUANTITY = "cart/decreaseItemQuantity";

// Action Creators
export function addCartItem(productData) {
  return { type: CART_ADD_ITEM, payload: productData };
}

export function removeCartItem(productId) {
  return { type: CART_REMOVE_ITEM, payload: { productId } };
}

export function decreaseCartItemQuantity(productId) {
  return {
    type: CART_ITEM_DECREASE_QUANTITY,
    payload: { productId },
  };
}

export function increaseCartItemQuantity(productId) {
  return {
    type: CART_ITEM_INCREASE_QUANTITY,
    payload: { productId },
  };
}

// Reducer
export default function cartReducer(baseState = [], action) {
  return produce(baseState, (draftState) => {
    const existingItemIndex = baseState.findIndex(
      (cartItem) => cartItem.productId === action.payload.productId
    );
    switch (action.type) {
      case CART_ADD_ITEM:
        if (existingItemIndex !== -1) {
          draftState[existingItemIndex].quantity += 1;
        }
        draftState.push({ ...action.payload, quantity: 1 });

        break;
      case CART_REMOVE_ITEM:
        draftState.splice(existingItemIndex, 1);
        break;
      case CART_ITEM_INCREASE_QUANTITY:
        draftState[existingItemIndex].quantity += 1;
        break;
      case CART_ITEM_DECREASE_QUANTITY:
        draftState[existingItemIndex].quantity -= 1;
        draftState[existingItemIndex].quantity === 0
          ? draftState.splice(existingItemIndex, 1)
          : draftState;
        break;
      default:
        return draftState;
    }
  });
}
