import Image from 'next/image';

interface Props {
  isSmall?: boolean;
}

const Counter = ({ isSmall }: Props) => (
  <div
    className={`${
      isSmall ? 'w-28 h-10' : 'w-40 h-14'
    } bg-[#F1f1f1] rounded-sm flex items-center justify-around`}
  >
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
    <button type="button" className="hover:filter-orange" aria-label="Add item">
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
