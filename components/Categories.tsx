import type { t_Category } from '../typings';

import CategoryCard from './CategoryCard';

interface Props {
  categoriesData: t_Category[];
}

const Categories = ({ categoriesData }: Props) => (
  <div className="max-w-xs mx-auto my-32 md:my-40 md:max-w-3xl lg:max-w-6xl">
    <ul className="flex flex-col-reverse items-center gap-20 md:flex-row-reverse md:gap-3 md:justify-between">
      {categoriesData.map(category => (
        <li className="w-80 md:w-56 lg:w-[22rem]" key={category._id}>
          <CategoryCard categoryData={category} />
        </li>
      ))}
    </ul>
  </div>
);

export default Categories;
