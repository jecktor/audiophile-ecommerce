import Image from 'next/image';
import { urlFor } from '../lib/client';

import { Counter } from '.';

interface Props {
  image: string;
  name: string;
  price: number;
  quantity: number;
}

const CartItem = ({ image, name, price, quantity }: Props) => (
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
    <div className="w-72">
      <strong className="uppercase font-bold tracking-wide">{name}</strong>
      <p className="font-bold text-secondary">{`$ ${price.toLocaleString()}`}</p>
    </div>
    <Counter
      isSmall
      onIncrease={() => {}}
      onDecrease={() => {}}
      displayNumber={quantity}
    />
  </div>
);

export default CartItem;
