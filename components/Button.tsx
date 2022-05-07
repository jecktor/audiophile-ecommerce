import Link from 'next/link';
import { MouseEventHandler } from 'react';

interface Props {
  content: string;
  color: 'main' | 'black' | 'transparent';
  isLink?: boolean;
  isLarge?: boolean;
  url?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  content,
  color,
  isLink = false,
  isLarge = false,
  url = '/',
  type = 'button',
  onClick,
}: Props) => (
  <>
    {isLink ? (
      <Link href={url}>
        <a
          className={`${isLarge ? 'w-full' : 'w-44'} ${
            color == 'main'
              ? 'hover:!bg-[#FBAF85]'
              : color == 'black'
              ? 'hover:!bg-[#4C4C4C]'
              : 'hover:!bg-black hover:!text-white'
          } block h-14 px-8 py-4 text-center uppercase font-bold text-sm tracking-widest whitespace-nowrap transition-colors z-0`}
          style={{
            backgroundColor: color == 'main' ? '#D87D4A' : color,
            color: color == 'transparent' ? 'black' : 'white',
            border: color == 'transparent' ? '1px solid black' : 'none',
          }}
        >
          {content}
        </a>
      </Link>
    ) : (
      <button
        onClick={onClick}
        type={type}
        className={`${
          isLarge ? 'w-full' : 'w-44'
        } block h-14 px-8 py-4 text-center uppercase font-bold text-sm tracking-widest hover:!bg-[#FBAF85] whitespace-nowrap transition-colors z-0`}
        style={{
          backgroundColor: color == 'main' ? '#D87D4A' : color,
          color: color == 'transparent' ? 'black' : 'white',
          border: color == 'transparent' ? '1px solid black' : 'none',
        }}
      >
        {content}
      </button>
    )}
  </>
);

export default Button;
