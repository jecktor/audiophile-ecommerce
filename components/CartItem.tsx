import Image from 'next/image';
import { urlFor } from '../lib/client';
import { useStateContext } from '../context/StateContext';
import { ActionKind } from '../context/reducers';
import type { t_CartProduct } from '../typings/context';

import { Counter } from '.';

interface Props {
  product: t_CartProduct;
}

const CartItem = ({ product }: Props) => {
  const { dispatch } = useStateContext();
  const { _id, image, name, price, quantity } = product;

  return (
    <div className="flex items-center justify-between">
      <div className="relative w-16 h-16 p-2 bg-[#F1F1F1] rounded-lg overflow-hidden">
        <Image
          src={urlFor(image).url()}
          alt=""
          aria-hidden="true"
          width={48}
          height={48}
        />
      </div>
      <div className="w-32 md:w-60">
        <strong className="uppercase font-bold tracking-wide">{name}</strong>
        <p className="font-bold text-secondary">{`$ ${price.toLocaleString()}`}</p>
      </div>
      <Counter
        isSmall
        onIncrease={() =>
          dispatch({
            type: ActionKind.UpdateCartItem,
            payload: { _id: _id, quantity: 1, price: price },
          })
        }
        onDecrease={() =>
          dispatch({
            type: ActionKind.UpdateCartItem,
            payload: { _id: _id, quantity: -1, price: price },
          })
        }
        displayNumber={quantity}
      />
    </div>
  );
};

export default CartItem;
