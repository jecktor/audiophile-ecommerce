import Head from 'next/head';
import { client } from '../lib/client';
import type { t_Banner, t_Category } from '../typings';

import {
  Header,
  HeroBanner,
  Categories,
  ProductBanner,
  Footer,
} from '../components';
interface Props {
  heroBanner: t_Banner;
  banners: t_Banner[];
  categories: t_Category[];
}

const Home = ({ heroBanner, banners, categories }: Props) => (
  <>
    <Head>
      <title>Home | Audiophile</title>
      <meta
        name="description"
        content="Welcome to Audiophile, E-Commerce app made with Next.js"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main>
      <HeroBanner bannerData={heroBanner} />
      <Categories categoriesData={categories} />
      <div className="flex flex-col-reverse gap-16 max-w-xs md:max-w-3xl lg:max-w-6xl mx-auto">
        {banners.map((banner: t_Banner) => (
          <ProductBanner key={banner._id} bannerData={banner} />
        ))}
      </div>
    </main>
    <Footer />
  </>
);

export const getServerSideProps = async () => {
  const heroBannerQuery = `
  *[_type == "banner" && isHeroBanner == true][0] {
    title,
    url,
    promotion,
    text,
    bgColor,
    textColor,
    button,
    isImageBackground,
    image
  }
  `;
  const heroBanner: t_Banner = await client.fetch(heroBannerQuery);

  const bannerQuery = `
  *[_type == "banner" && (isHeroBanner == false || isHeroBanner == null)] {
    _id,
    title,
    url,
    text,
    bgColor,
    textColor,
    button,
    isSmall,
    isImageBackground,
    image
  }
  `;
  const banners: t_Banner[] = await client.fetch(bannerQuery);

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
    props: { heroBanner, banners, categories },
  };
};

export default Home;
