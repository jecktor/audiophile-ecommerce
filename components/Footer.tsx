import Image from 'next/image';
import Link from 'next/link';

import imageBestGear from '../public/shared/image-best-gear.jpg';

const Footer = () => (
  <footer>
    <div className="my-20 mx-auto max-w-xs flex flex-col gap-8 justify-center items-center md:flex-row-reverse md:h-96 md:max-w-3xl lg:my-40 lg:gap-10 lg:h-[38rem] lg:max-w-6xl">
      <div className="relative rounded-lg overflow-hidden w-full h-80 md:h-full">
        <Image
          src={imageBestGear}
          alt=""
          aria-hidden="true"
          layout="fill"
          placeholder="blur"
        />
      </div>
      <div className="text-center w-full lg:text-left">
        <h3 className="text-3xl uppercase font-bold tracking-wide lg:text-5xl">
          Bringing you the <span className="text-primary">best</span> audio gear
        </h3>
        <p className="mt-8 opacity-50 break-words leading-7 md:mt-4 lg:mt-1 lg:max-w-lg">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
    <div className="bg-[#191919] text-white">
      <div className="relative flex flex-col text-center px-4 md:p-0 md:text-left md:max-w-3xl lg:max-w-6xl mx-auto before:absolute before:w-28 before:h-1 before:left-1/2 before:-translate-x-1/2 before:bg-primary md:before:left-0 md:before:translate-x-0">
        <div className="mt-10 flex flex-col lg:flex-row lg:justify-between">
          <Link href="/">
            <a>
              <Image
                src="/shared/logo.svg"
                width={143}
                height={25}
                alt="Audiophile"
              />
            </a>
          </Link>
          <nav className="mt-5 lg:m-0">
            <ul className="mb-7 mt-0 flex flex-col gap-y-4 uppercase tracking-widest font-bold text-sm text-white md:flex-row md:gap-x-6">
              <li>
                <Link href="/">
                  <a className="hover:text-primary">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/category/headphones">
                  <a className="hover:text-primary">Headphones</a>
                </Link>
              </li>
              <li>
                <Link href="/category/speakers">
                  <a className="hover:text-primary">Speakers</a>
                </Link>
              </li>
              <li>
                <Link href="/category/earphones">
                  <a className="hover:text-primary">Earphones</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mb-10 md:m-0">
          <p className="opacity-50 break-words leading-7 max-w-md mx-auto md:max-w-none md:mx-0 lg:max-w-2xl">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we&apos;re open 7 days a week.
          </p>
          <div className="md:flex justify-between md:my-8">
            <p className="opacity-50 my-5 md:m-0">
              Copyright 2022. All Rights Reserved
            </p>
            <div className="flex justify-center gap-5">
              <Image
                className="cursor-pointer hover:filter-orange"
                src="/shared/icon-facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
              <Image
                className="cursor-pointer hover:filter-orange"
                src="/shared/icon-twitter.svg"
                alt="Facebook"
                width={24}
                height={20}
              />
              <Image
                className="cursor-pointer hover:filter-orange"
                src="/shared/icon-instagram.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
