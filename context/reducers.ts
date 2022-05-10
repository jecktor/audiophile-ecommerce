import type { t_Cart, t_CartProduct } from '../typings/context';

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum ActionKind {
  IncreaseQty = 'INCREASE_QTY',
  DecreaseQty = 'DECREASE_QTY',
  AddToCart = 'ADD_TO_CART',
  RemoveFromCart = 'REMOVE_FROM_CART',
  UpdateCartItem = 'UPDATE_CART_ITEM',
  EmptyCart = 'EMPTY_CART',
}

// Cart

interface CartPayload {
  [ActionKind.AddToCart]: t_CartProduct;
  [ActionKind.RemoveFromCart]: t_CartProduct;
  [ActionKind.UpdateCartItem]: {
    _id: string;
    quantity: number;
    price: number;
  };
  [ActionKind.EmptyCart]: undefined;
}

export type CartActions = ActionMap<CartPayload>[keyof ActionMap<CartPayload>];

const cartReducer = (cart: t_Cart, action: CartActions): t_Cart => {
  switch (action.type) {
    case ActionKind.AddToCart:
      let newCart: t_Cart = {
        ...cart,
        totalPrice:
          cart.totalPrice + action.payload.price * action.payload.quantity,
        totalQuantities: cart.totalQuantities + action.payload.quantity,
        shippingCost: 30,
        vatCost: cart.totalPrice * 0.2,
      };

      const productIndex = cart.cartItems.findIndex(
        product => product._id === action.payload._id
      );

      if (productIndex !== -1) {
        const updatedCartItems = cart.cartItems.slice();

        updatedCartItems.splice(productIndex, 1, {
          ...cart.cartItems[productIndex],
          quantity:
            cart.cartItems[productIndex].quantity + action.payload.quantity,
        });

        newCart = {
          ...newCart,
          cartItems: updatedCartItems,
        };
      } else {
        newCart = {
          ...newCart,
          cartItems: [...cart.cartItems, action.payload],
        };
      }
      return newCart;
    case ActionKind.RemoveFromCart:
      return {
        ...cart,
        cartItems: cart.cartItems.filter(
          product => product._id !== action.payload._id
        ),
      };
    case ActionKind.UpdateCartItem:
      const newCartItems = cart.cartItems.slice();
      const updatedProductIndex = cart.cartItems.findIndex(
        product => product._id === action.payload._id
      );
      const productQuantity = cart.cartItems[updatedProductIndex].quantity;

      productQuantity + action.payload.quantity < 1
        ? newCartItems.splice(updatedProductIndex, 1)
        : newCartItems.splice(updatedProductIndex, 1, {
            ...cart.cartItems[updatedProductIndex],
            quantity:
              productQuantity + action.payload.quantity > 99
                ? 99
                : productQuantity + action.payload.quantity,
          });

      return {
        cartItems: newCartItems,
        totalPrice:
          cart.totalPrice + action.payload.price * action.payload.quantity,
        totalQuantities: cart.totalQuantities + action.payload.quantity,
        shippingCost: cart.totalPrice > 0 ? 30 : 0,
        vatCost: cart.totalPrice * 0.2,
      };
    case ActionKind.EmptyCart:
      return {
        cartItems: [],
        totalPrice: 0,
        totalQuantities: 0,
        shippingCost: 0,
        vatCost: 0,
      };
    default:
      return cart;
  }
};

// Qty

interface QtyPayload {
  [ActionKind.IncreaseQty]: undefined;
  [ActionKind.DecreaseQty]: undefined;
}

export type QtyActions = ActionMap<QtyPayload>[keyof ActionMap<QtyPayload>];

const qtyReducer = (qty: number, action: QtyActions): number => {
  switch (action.type) {
    case ActionKind.IncreaseQty:
      return qty + 1 > 99 ? 99 : qty + 1;
    case ActionKind.DecreaseQty:
      return qty - 1 < 1 ? 1 : qty - 1;
    default:
      return qty;
  }
};

export type ActionTypes = CartActions | QtyActions;

export const reducers = {
  cartReducer,
  qtyReducer,
};
