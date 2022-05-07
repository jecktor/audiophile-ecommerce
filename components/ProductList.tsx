import ProductCard from './ProductCard';
import type { t_Product } from '../typings/api';

interface Props {
  productsData: t_Product[];
}

const ProductList = ({ productsData }: Props) => (
  <div className="flex flex-col gap-10 mx-auto max-w-xs md:max-w-3xl lg:gap-12 lg:max-w-6xl">
    {productsData.map((product, idx) => (
      <div key={idx}>
        {idx % 2 === 0 ? (
          <ProductCard
            key={product._id}
            slug={product.slug.current}
            image={product.image}
            title={product.name}
            description={product.description}
            price={product.price}
            isNew={product.isNew}
            reversed
          />
        ) : (
          <ProductCard
            key={product._id}
            slug={product.slug.current}
            image={product.image}
            title={product.name}
            description={product.description}
            isNew={product.isNew}
            price={product.price}
          />
        )}
      </div>
    ))}
  </div>
);

export default ProductList;
