import Image from 'next/image';
import { useRouter } from 'next/router';
import { urlFor } from '../lib/client';
import { useStateContext } from '../context/StateContext';
import { ActionKind } from '../context/reducers';

import { Button } from '.';

const Success = () => {
  const router = useRouter();
  const {
    state: { cart },
    dispatch,
  } = useStateContext();

  const handleReturn = () => {
    dispatch({ type: ActionKind.EmptyCart });
    router.push('/');
  };

  const grandTotal = cart.totalPrice + cart.vatCost + cart.shippingCost;

  return (
    <div className="fixed inset-0 w-full h-full flex flex-wrap justify-center items-center bg-black/40 overflow-y-scroll z-[1]">
      <div className="p-8 bg-white rounded-lg max-w-sm md:max-w-none">
        <div className="flex items-center justify-center bg-primary w-16 h-16 rounded-full">
          <Image
            src="/shared/icon-check.svg"
            alt=""
            aria-hidden="true"
            width={32}
            height={32}
          />
        </div>
        <strong className="block my-4 uppercase font-bold text-2xl tracking-wider lg:text-3xl">
          Thank you
          <br />
          for your order
        </strong>
        <p className="font-semibold text-black/50">
          You will receive an email confirmation shortly.
        </p>
        <div className="my-4 rounded-lg overflow-hidden flex">
          <div className="py-6 px-1 bg-[#F1F1F1] w-2/3 md:p-6">
            <div className="pb-4 flex gap-4 lg:justify-between">
              <div className="relative w-16 h-16 p-2 overflow-hidden">
                <Image
                  src={urlFor(cart.cartItems[0].image).url()}
                  alt=""
                  aria-hidden="true"
                  width={48}
                  height={48}
                />
              </div>
              <div className="flex flex-col w-1/2 grow justify-center text-sm font-bold uppercase tracking-wide">
                <p>{cart.cartItems[0].name}</p>
                <p className="text-black/50">
                  {cart.cartItems[0].price.toLocaleString()}
                </p>
              </div>
              <p className="text-black/50 font-bold">
                x{cart.cartItems[0].quantity}
              </p>
            </div>
            {cart.cartItems.length > 1 && (
              <p className="pt-4 border-t border-black/10 text-center text-xs text-black/50 font-semibold">
                and {cart.cartItems.length - 1} another item(s)
              </p>
            )}
          </div>
          <div className="p-6 flex flex-col justify-center bg-black text-white w-1/3">
            <strong className="uppercase font-light text-white/50 tracking-wide">
              Grand Total
            </strong>
            <p className="font-bold tracking-wider">{`$ ${grandTotal.toLocaleString()}`}</p>
          </div>
        </div>
        <Button
          isLarge
          type="button"
          color="main"
          content="Back to home"
          onClick={handleReturn}
        />
      </div>
    </div>
  );
};

export default Success;
