import { client } from '../../lib/client';
import type { GetStaticProps } from 'next';
import type { t_Product } from '../../typings';

interface Props {
  product: t_Product;
}

const ProductDetails = ({ product }: Props) => {
  return <div>ProductDetails</div>;
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
  const query = `
  *[_type == "product" && slug.current == $slug] {
    name,
    image,
    isNew,
    price,
    description,
    features,
    includes,
    gallery,
    related
  }
  `;
  const product: t_Product = await client.fetch(query, {
    slug: params?.slug,
  });

  return {
    props: { product },
  };
};

export default ProductDetails;
