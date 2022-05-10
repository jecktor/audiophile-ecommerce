import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import { client, urlFor } from '../../lib/client';
import { useStateContext } from '../../context/StateContext';
import { ActionKind } from '../../context/reducers';
import type { GetStaticProps } from 'next';
import type { t_Product, t_Category } from '../../typings/api';

import { Counter, Button, CategoryList } from '../../components';

interface Props {
  product: t_Product;
  categories: t_Category[];
}

const ProductDetails = ({ product, categories }: Props) => {
  const router = useRouter();
  const {
    state: { qty },
    dispatch,
  } = useStateContext();

  const {
    _id,
    name,
    image,
    isNew,
    price,
    description,
    features,
    includes,
    gallery,
    related,
  } = product;

  const handleAddToCart = () => {
    dispatch({
      type: ActionKind.AddToCart,
      payload: {
        _id: _id,
        name: name,
        image: image,
        price: price,
        quantity: qty,
      },
    });
    toast.success(`${qty > 1 ? qty : ''} ${name} added to the cart.`);
  };

  return (
    <>
      <Head>
        <title>{product.name} | Audiophile</title>
      </Head>
      <div className="bg-[#191919] h-24"></div>
      <div className="mx-auto max-w-xs md:max-w-3xl lg:max-w-6xl">
        <button
          type="button"
          className="my-10 text-black/50 tracking-wide hover:opacity-100 hover:text-primary"
          onClick={() => router.back()}
        >
          Go Back
        </button>
        <div className="flex flex-col gap-6 justify-center items-center md:flex-row md:h-[22rem] md:gap-16 lg:h-[34rem]">
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
          <div className="w-full flex flex-col items-start">
            {isNew && (
              <span className="mb-4 uppercase tracking-[0.6rem] text-primary text-sm md:mb-2 lg:text-lg lg:mb-4">
                New product
              </span>
            )}
            <h1 className="text-3xl uppercase font-bold tracking-wide lg:text-5xl">
              {name}
            </h1>
            <p className="mt-4 text-black/50 font-semibold break-words leading-7 md:mt-2 lg:mt-4">
              {description}
            </p>
            <strong className="block my-8 text-lg md:my-2 lg:my-8">
              $ {price.toLocaleString()}
            </strong>
            <div className="flex flex-wrap gap-5 md:flex-nowrap">
              <Counter
                displayNumber={qty}
                onDecrease={() => dispatch({ type: ActionKind.DecreaseQty })}
                onIncrease={() => dispatch({ type: ActionKind.IncreaseQty })}
              />
              <Button
                onClick={handleAddToCart}
                type="button"
                color="main"
                content="Add to cart"
              />
            </div>
          </div>
        </div>
        <section className="my-20 flex flex-col gap-8 md:flex-row">
          <div className="md:max-w-sm lg:max-w-xl">
            <h2 className="uppercase text-3xl font-bold tracking-wide lg:text-4xl">
              Features
            </h2>
            {features.split('\\n').map(
              (paragraph, idx) =>
                paragraph && (
                  <p key={idx} className="font-semibold text-black/50 mt-4">
                    {paragraph}
                  </p>
                )
            )}
          </div>
          <div>
            <h2 className="uppercase text-3xl font-bold tracking-wide lg:text-4xl">
              In the box
            </h2>
            <ul>
              {includes.map(item => (
                <li key={item._key} className="mt-4 font-semibold">
                  <span className="text-primary mr-4">{item.quantity}x</span>
                  <p className="inline text-black/50">{item.item}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="mb-20 w-full flex flex-col gap-8 md:grid md:grid-rows-2 md:grid-cols-5 md:grid-template-gallery md:h-[25rem] lg:h-[40rem]">
          {gallery.map((image, idx) => (
            <div
              key={idx}
              style={{ gridArea: `i${idx + 1}` }}
              className="relative w-full h-48 rounded-lg overflow-hidden md:h-full"
            >
              <Image
                className="object-cover object-right"
                src={urlFor(image).url()}
                alt=""
                aria-hidden="true"
                layout="fill"
              />
            </div>
          ))}
        </section>
        <section className="text-center">
          <h3 className="mb-12 uppercase text-3xl font-bold tracking-wide lg:text-4xl">
            You may also like
          </h3>
          <div className="flex flex-col items-center justify-center gap-16 md:gap-8 md:flex-row lg:gap-4">
            {related.map(product => (
              <div
                key={product._id}
                className="w-80 h-96 flex flex-col items-center justify-between"
              >
                <div className="p-4 bg-[#F1F1F1] rounded-lg">
                  <Image
                    className="object-contain"
                    src={urlFor(product.image).url()}
                    alt=""
                    aria-hidden="true"
                    width={170}
                    height={170}
                  />
                </div>
                <strong className="block uppercase text-2xl font-bold tracking-wide lg:text-3xl">
                  {product.name}
                </strong>
                <Button
                  isLink
                  color="main"
                  content="See product"
                  url={`/product/${product.slug.current}`}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
      <CategoryList categoriesData={categories} />
    </>
  );
};

export const getStaticPaths = async () => {
  const query = `
  *[_type == "product"] {
    slug {
      current
    }
  }
  `;
  const products: t_Product[] = await client.fetch(query);

  const paths = products.map(product => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productQuery = `
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    image,
    isNew,
    price,
    description,
    features,
    includes,
    gallery,
    related[] -> {
      _id,
      name,
      image,
      slug
    }
  }
  `;
  const product: t_Product = await client.fetch(productQuery, {
    slug: params?.slug,
  });

  const categoryQuery = `
  *[_type == "category"] {
    _id,
    name,
    slug,
    image
  }
  `;
  const categories: t_Category[] = await client.fetch(categoryQuery);

  return {
    props: { product, categories },
  };
};

export default ProductDetails;
