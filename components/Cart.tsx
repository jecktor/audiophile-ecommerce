import { toast } from 'react-hot-toast';
import { useStateContext } from '../context/StateContext';
import { ActionKind } from '../context/reducers';

import { Button } from '.';
import CartItem from './CartItem';

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = useStateContext();

  const handleEmptyCart = () => {
    dispatch({ type: ActionKind.EmptyCart });
    toast.error('Emptied the cart.');
  };

  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-full bg-white rounded-lg shadow-xl min-h-[18rem] w-[90%] mt-3 md:mr-3 md:max-w-lg md:left-auto md:translate-x-0 md:right-0 lg:mr-0">
      <div className="m-6 h-full">
        <div className="flex items-center justify-between">
          <strong className="uppercase font-bold tracking-wider text-lg">
            {`Cart${
              cart.totalQuantities > 0 ? ' (' + cart.totalQuantities + ')' : ''
            }`}
          </strong>
          {cart.cartItems.length > 0 && (
            <button
              type="button"
              className="text-secondary hover:text-primary"
              onClick={handleEmptyCart}
            >
              Remove all
            </button>
          )}
        </div>
        <div className="flex flex-col gap-3 my-4">
          {cart.cartItems.length > 0 ? (
            cart.cartItems.map(item => (
              <CartItem key={item._id} product={item} />
            ))
          ) : (
            <p className="my-16 text-center font-semibold text-black/50">
              Your cart is empty.
            </p>
          )}
        </div>
        {cart.cartItems.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <p className="uppercase text-secondary">Total</p>
              <strong className="font-bold text-lg">{`$ ${cart.totalPrice.toLocaleString()}`}</strong>
            </div>
            <Button
              isLink
              isLarge
              url="/checkout"
              content="Checkout"
              color="main"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
