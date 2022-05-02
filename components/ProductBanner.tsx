import Image from 'next/image';
import { urlFor } from '../lib/client';
import type { t_Banner } from '../typings';

import Button from './Button';

interface Props {
  bannerData: t_Banner;
}

const ProductBanner = ({ bannerData }: Props) => {
  const {
    title,
    url,
    text,
    bgColor,
    textColor,
    button,
    isSmall,
    isImageBackground,
    image,
  } = bannerData;

  return (
    <div
      className={`${
        isSmall
          ? 'h-[22rem] md:h-[20rem] md:items-start lg:items-center lg:justify-start'
          : 'h-[38rem] md:h-[45rem] lg:h-[33rem] lg:gap-36'
      } ${
        isImageBackground
          ? 'lg:justify-start'
          : 'bg-no-repeat bg-center md:bg-bottom lg:bg-left'
      } relative min-w-full flex flex-col gap-8 justify-center items-center overflow-hidden max-w-xs mx-auto rounded-lg lg:flex-row`}
      style={{
        backgroundColor: bgColor,
        backgroundImage: isImageBackground
          ? 'none'
          : 'url(/shared/pattern-circles.svg)',
      }}
    >
      {isImageBackground ? (
        <Image
          className="absolute object-cover object-right pointer-events-none"
          src={urlFor(image).url()}
          alt=""
          aria-hidden="true"
          layout="fill"
        />
      ) : (
        <div className="relative w-52 h-60 lg:w-[25rem] lg:h-[30rem] lg:top-10">
          <Image
            src={urlFor(image).width(200).height(250).url()}
            alt=""
            aria-hidden="true"
            layout="fill"
          />
        </div>
      )}
      <div
        style={{ color: textColor }}
        className={`${
          isSmall
            ? 'md:pl-16 lg:pl-24'
            : 'md:max-w-sm items-center lg:items-start'
        } ${
          isImageBackground
            ? 'items-start p-4 md:bg-transparent md:p-0'
            : 'items-center'
        } z-0 flex flex-col ${
          !isSmall && isImageBackground
            ? 'text-center md:text-left lg:ml-24'
            : ''
        }
        `}
      >
        <strong
          className={`${
            isSmall
              ? 'max-w-[11rem] md:max-w-none'
              : 'md:text-6xl md:text-center lg:text-left'
          } block mb-6 uppercase font-bold tracking-wider text-4xl`}
        >
          {title}
        </strong>
        {!isSmall && <p className="text-center mb-10 lg:text-left">{text}</p>}
        <Button isLink color={button} content="See product" url={url} />
      </div>
    </div>
  );
};

export default ProductBanner;
