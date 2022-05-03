import { Button } from '.';
import CartItem from './CartItem';

const Cart = () => (
  <div className="absolute left-1/2 -translate-x-1/2 top-full bg-white rounded-lg shadow-xl min-h-[18rem] w-[90%] mt-3 md:mr-3 md:max-w-lg md:left-auto md:translate-x-0 md:right-0 lg:mr-0">
    <div className="m-6 h-full">
      <div className="flex items-center justify-between">
        <strong className="uppercase font-bold tracking-wider text-lg">
          Cart (1)
        </strong>
        <button type="button" className="text-secondary hover:text-primary">
          Remove all
        </button>
      </div>
      <div className="flex flex-col gap-3 my-4">
        <CartItem />
      </div>
      <div>
        <div className="flex items-center justify-between mb-8">
          <p className="uppercase text-secondary">Total</p>
          <strong className="font-bold text-lg">$ 2,999</strong>
        </div>
        <Button
          isLink
          isLarge
          url="/checkout"
          content="Checkout"
          color="main"
        />
      </div>
    </div>
  </div>
);

export default Cart;
