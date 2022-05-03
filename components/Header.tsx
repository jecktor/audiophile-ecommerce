import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';

import Cart from './Cart';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  const handleToggle = (
    set: Dispatch<SetStateAction<boolean>>,
    to: boolean
  ) => {
    setMenuOpen(false);
    setCartOpen(false);

    set(to);
  };

  return (
    <header className="bg-black flex justify-between items-center fixed w-full h-24 px-4 z-[1] lg:border-b lg:absolute lg:border-secondary lg:p-0 lg:w-[72rem] lg:left-1/2 lg:-ml-[36rem] lg:bg-transparent">
      <button
        type="button"
        onClick={() => handleToggle(setMenuOpen, !menuOpen)}
        className="hover:filter-orange lg:hidden"
        aria-label="menu"
      >
        <Image
          src="/shared/icon-hamburger.svg"
          width={16}
          height={15}
          aria-hidden="true"
          alt=""
        />
      </button>
      <Link href="/">
        <a className="md:mr-auto md:ml-12 lg:m-0">
          <Image
            src="/shared/logo.svg"
            width={143}
            height={25}
            alt="Audiophile"
          />
        </a>
      </Link>
      <nav
        className="absolute top-full left-0 bg-black origin-top w-full transition-transform lg:static lg:bg-transparent lg:w-auto lg:!scale-y-100"
        style={{ transform: menuOpen ? 'scaleY(1)' : 'scaleY(0)' }}
      >
        <ul className="mx-4 mb-7 mt-0 flex flex-col gap-y-4 uppercase tracking-widest font-bold text-sm text-white lg:flex-row lg:m-0 lg:gap-x-8">
          <li>
            <Link href="/">
              <a className="hover:text-primary">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/headphones">
              <a className="hover:text-primary">Headphones</a>
            </Link>
          </li>
          <li>
            <Link href="/speakers">
              <a className="hover:text-primary">Speakers</a>
            </Link>
          </li>
          <li>
            <Link href="/earphones">
              <a className="hover:text-primary">Earphones</a>
            </Link>
          </li>
        </ul>
      </nav>
      <button
        type="button"
        onClick={() => handleToggle(setCartOpen, !cartOpen)}
        className="relative"
        aria-label="cart"
      >
        <Image
          className="hover:filter-orange"
          src="/shared/icon-cart.svg"
          width={23}
          height={20}
          alt="logo"
        />
        <span className="absolute -top-2 -right-3 min-w-[1.25rem] w-fit h-5 bg-primary text-white text-sm rounded-full flex items-center justify-center pointer-events-none">
          1
        </span>
      </button>
      {cartOpen && <Cart />}
    </header>
  );
};

export default Header;
