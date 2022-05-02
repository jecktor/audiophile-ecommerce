import Image from 'next/image';
import { urlFor } from '../lib/client';
import type { t_Banner } from '../typings';

import Button from './Button';

interface Props {
  bannerData: t_Banner;
}

const HeroBanner = ({ bannerData }: Props) => {
  const {
    title,
    url,
    promotion,
    text,
    bgColor,
    textColor,
    button,
    isImageBackground,
    image,
  } = bannerData;

  return (
    <div className="relative" style={{ backgroundColor: bgColor }}>
      {isImageBackground && (
        <Image
          className="absolute object-cover pointer-events-none lg:object-contain"
          src={urlFor(image).url()}
          alt=""
          aria-hidden="true"
          layout="fill"
        />
      )}
      <div
        className={`${
          isImageBackground
            ? 'lg:justify-end'
            : 'bg-no-repeat bg-bottom lg:bg-right lg:justify-between'
        } h-[50rem] pt-24 flex flex-col gap-8 justify-center items-center overflow-hidden max-w-md mx-auto rounded-lg md:max-w-3xl lg:flex-row-reverse lg:max-w-6xl`}
        style={{
          backgroundImage: isImageBackground
            ? 'none'
            : 'url(/shared/pattern-circles.svg)',
        }}
      >
        {!isImageBackground && (
          <div className="relative w-52 h-60 lg:w-[25rem] lg:h-[30rem] lg:mr-32">
            <Image
              src={urlFor(image).width(200).height(250).url()}
              alt=""
              aria-hidden="true"
              layout="fill"
            />
          </div>
        )}
        <div className="mb-8 lg:m-0">
          <div
            style={{ color: textColor }}
            className="max-w-xs mx-auto h-full flex flex-col items-center justify-center text-center lg:text-left lg:items-start lg:max-w-6xl"
          >
            <span className="uppercase tracking-[0.6rem] opacity-50 text-sm">
              {promotion}
            </span>
            <h1 className="max-w-lg uppercase font-bold text-6xl my-6 z-0">
              {title}
            </h1>
            {text && (
              <p className="max-w-sm opacity-50 text-base mb-6">{text}</p>
            )}
            <Button isLink color={button} content="See product" url={url} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
