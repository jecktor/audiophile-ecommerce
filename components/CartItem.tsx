import Image from 'next/image';

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
    <div className="bg-[#F1f1f1] w-28 h-10 rounded-sm flex items-center justify-around">
      <button
        type="button"
        className="hover:filter-orange"
        aria-label="Remove item"
      >
        <Image
          src="/shared/icon-minus.svg"
          alt=""
          aria-hidden="true"
          width={12}
          height={4}
        />
      </button>
      <strong className="font-bold text-lg">1</strong>
      <button
        type="button"
        className="hover:filter-orange"
        aria-label="Add item"
      >
        <Image
          src="/shared/icon-plus.svg"
          alt=""
          aria-hidden="true"
          width={12}
          height={12}
        />
      </button>
    </div>
  </div>
);

export default CartItem;
