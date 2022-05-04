export interface t_Category {
  _id: string;
  name: string;
  image: string;
  slug: {
    current: string;
  };
}

export interface t_Product {
  _id: string;
  name: string;
  image: string;
  slug: {
    current: string;
  };
  category: Category;
  isNew: boolean;
  price: number;
  description: string;
  features: string;
  includes: [
    {
      _key: string;
      item: string;
      quantity: number;
    }
  ];
  gallery: string[];
  related: t_Product[];
}

export interface t_Banner {
  _id: string;
  title: string;
  url: string;
  promotion: string;
  text: string;
  bgColor: string;
  textColor: string;
  button: 'main' | 'black' | 'transparent';
  isSmall: boolean;
  isImageBackground: boolean;
  image: string;
}
