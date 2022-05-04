import { client } from '../../lib/client';
import type { t_Category, t_Product } from '../../typings';
import type { GetStaticProps } from 'next';

import { ProdcutList } from '../../components';

interface Props {
  category: t_Category;
  products: t_Product[];
}

const CategoryPage = ({ category, products }: Props) => (
  <>
    <div className="bg-[#191919] h-80 mb-20 pt-24 grid place-items-center lg:mb-40">
      <h1 className="text-white uppercase text-5xl font-bold tracking-wider">
        {category.name}
      </h1>
    </div>
    <ProdcutList productsData={products} />
  </>
);

export const getStaticPaths = async () => {
  const query = `
  *[_type == "category"] {
    slug {
      current
    }
  }
  `;
  const categories: t_Category[] = await client.fetch(query);

  const paths = categories.map(category => ({
    params: {
      slug: category.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const categoryQuery = `
  *[_type == "category" && slug.current == $slug][0] {
    name
  }
  `;
  const category: t_Category = await client.fetch(categoryQuery, {
    slug: params?.slug,
  });

  if (!category) return { notFound: true };

  const productsQuery = `
  *[_type == "product" && category->slug.current == $slug] {
    _id,
    slug,
    name,
    description,
    image,
    isNew,
    price
  }
  `;
  const products: t_Product[] = await client.fetch(productsQuery, {
    slug: params?.slug,
  });

  return {
    props: { category, products },
  };
};

export default CategoryPage;
