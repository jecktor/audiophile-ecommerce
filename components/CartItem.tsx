import Image from 'next/image';

import { Counter } from '.';

const CartItem = () => (
  <div className="flex items-center justify-between">
    <div className="relative w-16 h-16 p-2 bg-[#F1F1F1] rounded-lg overflow-hidden">
      <Image
        src="/shared/image-best-gear.jpg"
        alt=""
        aria-hidden="true"
        width={48}
        height={48}
      />
    </div>
    <div>
      <strong className="uppercase font-bold tracking-wide">
        XX99 Mark II Headphones
      </strong>
      <p className="font-bold text-secondary">$ 2,999</p>
    </div>
    <Counter isSmall />
  </div>
);

export default CartItem;
