import Image from 'next/image';
import { MouseEventHandler } from 'react';

interface Props {
  isSmall?: boolean;
  displayNumber: number;
  onIncrease: MouseEventHandler<HTMLButtonElement>;
  onDecrease: MouseEventHandler<HTMLButtonElement>;
}

const Counter = ({ isSmall, displayNumber, onIncrease, onDecrease }: Props) => (
  <div
    className={`${
      isSmall ? 'w-28 h-10' : 'w-40 h-14'
    } bg-[#F1f1f1] rounded-sm flex items-center justify-around`}
  >
    <button
      type="button"
      className="hover:filter-orange"
      aria-label="Decrease quantity"
      onClick={onDecrease}
    >
      <Image
        src="/shared/icon-minus.svg"
        alt=""
        aria-hidden="true"
        width={12}
        height={4}
      />
    </button>
    <strong className="font-bold text-lg">{displayNumber}</strong>
    <button
      type="button"
      className="hover:filter-orange"
      aria-label="Increase quantity"
      onClick={onIncrease}
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
);

export default Counter;
