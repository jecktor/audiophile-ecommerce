import {
  createContext,
  useReducer,
  useContext,
  Dispatch,
  ReactNode,
} from 'react';
import { reducers, ActionTypes, CartActions, QtyActions } from './reducers';
import type { t_Cart } from '../typings/context';

interface State {
  cart: t_Cart;
  qty: number;
}

const initialState: State = {
  cart: {
    cartItems: [],
    totalPrice: 0,
    totalQuantities: 0,
    shippingCost: 0,
    vatCost: 0,
  },
  qty: 1,
};

const AppContext = createContext<{
  state: State;
  dispatch: Dispatch<ActionTypes>;
}>({
  state: initialState,
  dispatch: () => {},
});

const AppReducer = (state: State, action: ActionTypes): State => ({
  ...state,
  cart: reducers.cartReducer(state.cart, action as CartActions),
  qty: reducers.qtyReducer(state.qty, action as QtyActions),
});

export const StateContext = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useStateContext = () => useContext(AppContext);
