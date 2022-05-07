import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '../lib/client';

interface Props {
  slug: string;
  image: string;
  name: string;
}

const CategoryCard = ({ slug, image, name }: Props) => (
  <Link href={`/category/${slug}`}>
    <a className="block w-0 hover:text-primary">
      <div className="relative w-fit">
        <div className="absolute -top-14 left-20 md:left-8 lg:left-20 lg:-top-8">
          <Image
            src={urlFor(image).width(170).height(170).url()}
            alt=""
            aria-hidden="true"
            width={170}
            height={170}
          />
        </div>
        <div className="bg-[#F1F1F1] flex flex-col items-center justify-end w-80 h-40 rounded-lg uppercase font-bold tracking-widest md:w-56 lg:w-[22rem] lg:h-52 lg:text-lg">
          <strong className="block">{name}</strong>
          <div className="mt-2 mb-6">
            <span className="text-[#797979] mr-3">Shop</span>
            <Image
              src="/shared/icon-arrow-right.svg"
              alt=""
              aria-hidden="true"
              width={8}
              height={12}
            />
          </div>
        </div>
      </div>
    </a>
  </Link>
);

export default CategoryCard;
