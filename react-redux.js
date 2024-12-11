// export default function cartReducer(baseState = [], action) {
//     // -------------------- using switch case -------------
//     // switch (action.type) {
//     //   case CART_ADD_ITEM:
//     //     const existingItem = state.find(
//     //       (cartItem) => cartItem.productId === action.payload.productIdreact-redux.js
//     //     )
//     //     if (existingItem) {
//     //       return state.map((cartItem) => {
//     //         if (cartItem.productId === existingItem.productId) {
//     //           return { ...cartItem, quantity: cartItem.quantity + 1 }
//     //         }
//     //         return cartItem
//     //       })
//     //     }
//     //     return [...state, { ...action.payload, quantity: 1 }]
//     //   case CART_REMOVE_ITEM:
//     //     return state.filter(
//     //       (cartItem) => cartItem.productId !== action.payload.productId
//     //     )
//     //   case CART_ITEM_INCREASE_QUANTITY:
//     //     return state.map((cartItem) => {
//     //       if (cartItem.productId === action.payload.productId) {
//     //         return { ...cartItem, quantity: cartItem.quantity + 1 }
//     //       }
//     //       return cartItem
//     //     })
  
//     //   case CART_ITEM_DECREASE_QUANTITY:
//     //     return state
//     //       .map((cartItem) => {
//     //         if (cartItem.productId === action.payload.productId) {
//     //           return { ...cartItem, quantity: cartItem.quantity - 1 }
//     //         }
//     //         return cartItem
//     //       })
//     //       .filter((cartItem) => cartItem.quantity > 0)
//     //   default:
//     //     return state
//     // }
//     //-----------------------------------------------------\\
  
//     //<<<<<<<<<<<<<<<<<< USING IMMER >>>>>>>>>>>>>>>>>>>>>>>
//     return  produce(baseState , (draftState)=>{
     
//     })
//   }