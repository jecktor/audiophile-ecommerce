import Image from 'next/image';
import { urlFor } from '../lib/client';

import { Button } from '.';

interface Props {
  slug: string;
  image: string;
  title: string;
  description: string;
  price: number;
  isNew: boolean;
  reversed?: boolean;
}

const ProductCard = ({
  slug,
  image,
  title,
  description,
  price,
  isNew,
  reversed,
}: Props) => (
  <div
    className={`${
      reversed ? 'md:flex-row' : 'md:flex-row-reverse'
    } flex flex-col gap-6 justify-center items-center md:h-[22rem] md:gap-16 lg:h-[34rem]`}
  >
    <div className="bg-[#F1F1F1] flex items-center justify-center rounded-lg overflow-hidden w-full h-80 md:h-full">
      <Image
        className="object-contain"
        src={urlFor(image).url()}
        alt=""
        aria-hidden="true"
        width={500}
        height={500}
      />
    </div>
    <div className="text-center w-full flex flex-col items-center">
      {isNew && (
        <span className="mb-4 uppercase tracking-[0.6rem] text-primary text-sm md:mb-2 lg:text-lg lg:mb-4">
          New product
        </span>
      )}
      <strong className="block text-3xl uppercase font-bold tracking-wide lg:text-5xl">
        {title}
      </strong>
      <p className="mt-4 text-black/50 break-words leading-7 md:mt-2 lg:mt-4">
        {description}
      </p>
      <strong className="block my-8 md:my-2 lg:my-8">
        $ {price.toLocaleString()}
      </strong>
      <Button
        isLink
        color="main"
        content="See product"
        url={`/product/${slug}`}
      />
    </div>
  </div>
);

export default ProductCard;
