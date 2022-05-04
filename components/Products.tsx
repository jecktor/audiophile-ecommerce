import ProductCard from './ProductCard';
import type { t_Product } from '../typings';

interface Props {
  productsData: t_Product[];
}

const Products = ({ productsData }: Props) => (
  <div className="flex flex-col gap-10 mx-auto max-w-xs md:max-w-3xl lg:gap-12 lg:max-w-6xl">
    {productsData.map((product, idx) => (
      <>
        {idx % 2 === 0 ? (
          <ProductCard
            key={product._id}
            slug={product.slug.current}
            image={product.image}
            title={product.name}
            description={product.description}
            price={product.price}
            reversed
          />
        ) : (
          <ProductCard
            key={product._id}
            slug={product.slug.current}
            image={product.image}
            title={product.name}
            description={product.description}
            price={product.price}
          />
        )}
      </>
    ))}
  </div>
);

export default Products;